'use strict';

const EventEmitter = require('events');
const WebSocket = require('ws');
const HttpsProxyAgent = require('https-proxy-agent');
const https = require('https');
const url = require('url');
const { Worker } = require('worker_threads');

const { Parser, Builder } = require('diep-protocol');

let BUILD = '6f59094d60f98fafc14371671d3ff31ef4d75d9e';

const GAMEMODE = ['dom', 'ffa', 'tag', 'maze', 'teams', '4teams', 'sandbox', 'survival'];
const REGION = ['la', 'miami', 'sydney', 'amsterdam', 'singapore'];
const INPUT = {
    leftMouse: 0b000000000001,
    upKey: 0b000000000010,
    leftKey: 0b000000000100,
    downKey: 0b000000001000,
    rightKey: 0b000000010000,
    godMode: 0b000000100000,
    suicide: 0b000001000000,
    rightMouse: 0b000010000000,
    instantUpg: 0b000100000000,
    gamepad: 0b001000000000,
    switchclass: 0b010000000000,
    constantOfTrue: 0b100000000000,
};
const DIRECTION = {
    N: INPUT.upKey,
    W: INPUT.leftKey,
    S: INPUT.downKey,
    E: INPUT.rightKey,
    NE: INPUT.upKey | INPUT.rightKey,
    SE: INPUT.downKey | INPUT.rightKey,
    SW: INPUT.downKey | INPUT.leftKey,
    NW: INPUT.upKey | INPUT.leftKey,
};

/**
 * Class connect to a diep.io server.
 *
 * @extends EventEmitter
 */
class DiepSocket extends EventEmitter {
    /**
     * Creates a new `DiepSocket`.
     *
     * @param {String} link The link from the server to which to connect
     * @param {Object} options Connection options
     * @param {Number} options.timeout How long the connection is allowed to take to
     * establish before the connection times out. Default 30,000 ms
     * @param {String} options.proxy The proxy that will be used. ip:port format
     * @param {String} options.ipv6 The ipv6 address which will be used
     * @param {boolean} options.forceTeam When set to true will only join same team otherwise throw an error
     */
    constructor(link, options) {
        super();

        this._options = {
            timeout: 30000,
            ...options,
        };
        this._connectTimeout;

        const { id, party } = this.constructor.linkParse(link);
        this._id = id;
        this._party = party;
        this._initialLink = this.link;
        this._socket;
        this._gamemode;

        this._entityId;
        this._tankX;
        this._tankY;

        this._connect();
    }

    /**
     * Returns the gamemode.
     *
     */
    get gamemode() {
        return this._gamemode;
    }

    /**
     * Returns the party link.
     *
     */
    get link() {
        return this.constructor.getLink(this._id, this._party);
    }

    /**
     * Returns the last tank position updates.
     *
     */
    get position() {
        return {
            x: this._tankX,
            y: this._tankY,
        };
    }

    /**
     * Creates a WebSocket connection to the diep.io server.
     *
     * @private
     */
    _connect() {
        clearTimeout(this._connectTimeout);

        const options = {
            origin: 'https://diep.io',
            rejectUnauthorized: false,
        };
        if (this._options.proxy) {
            const agent = new HttpsProxyAgent(url.parse(`http://${this._options.proxy}`));
            options.agent = agent;
        }
        if (this._options.ipv6) {
            options.family = 6;
            options.localAddress = this._options.ipv6;
        }

        this._socket = new WebSocket(`wss://${this._id}.s.m28n.net/`, options);
        this._socket.on('open', () => this._onopen());
        this._socket.on('message', (data) => this._onmessage(data));
        this._socket.on('close', (code, reason) => this._onclose(code, reason));
        this._socket.on('error', (err) => this._onerror(err));

        this._connectTimeout = setTimeout(() => {
            this._emitTimeout(new Error('Timeout: Connection took too long to establish'));
        }, this._options.timeout);
    }

    /**
     * The listener of the `WebSocket` `'open'` event.
     *
     * @private
     */
    _onopen() {
        clearTimeout(this._connectTimeout);

        this.send('heartbeat');
        this.send('initial', { build: BUILD, party: this._party });
        this.lastPing = Date.now();

        super.emit('open');
    }

    /**
     * The listener of the `WebSocket` `'message'` event.
     *
     * @param {Buffer} data The message from the server
     * @private
     */
    _onmessage(data) {
        let packet;
        try {
            packet = new Parser(data).clientbound();
        } catch (error) {
            //console.log(error);
            return;
        }

        switch (packet.type) {
            case 'update':
                // The update packet is the most important, but hardest packet to parse.
                // My parser can only parse the x and y coordinates of the tank,
                // since thats the most valuable information for us.

                // I either need to implement the parser in this switch case here or in update.js. not sure yet.
                // I think there are two possible ways. Look for many 0e bytes like Hue suggests or use Shadams method
                // by finding the entity Id in the creations.
                break;
            case 'outdated':
                console.warn('DiepSocket: outdated client. Further use is not recommended.');
                BUILD = packet.content.build;
                this._resetListeners();
                this.close();
                this._connect();
                break;
            case 'message':
                super.emit('message', packet.content);
                break;
            case 'server_info':
                this._gamemode = packet.content.gamemode;
                break;
            case 'heartbeat':
                let now = Date.now();
                super.emit('latency', now - this.lastPing);
                this.send('heartbeat');
                this.lastPing = now;
                break;
            case 'party':
                this._party = packet.content.party;
                break;
            case 'accept':
                setTimeout(() => {
                    if (!this._options.forceTeam || this._initialLink === this.link)
                        super.emit('accept');
                    else this._onerror(new Error('The team you tried to join is full'));
                }, 100);
                break;
            case 'achievements':
                super.emit('achievements', packet.content);
                break;
            case 'invalid_link':
                this._onerror(new Error(`Link is invalid: ${this._initialLink}`));
                break;
            case 'pow_request':
                if (super.emit('pow_request', packet.content)) return;
                if (!this._pow_worker) {
                    this._pow_worker = new Worker(__dirname + '/pow_worker.js');
                    this._pow_worker.on('message', (result) => this.send('pow_result', { result }));
                }
                this._pow_worker.postMessage(packet.content);
                break;
            case 'player_count':
                super.emit('player_count', packet.content.playercount);
                break;
            default:
                console.log(`No event handler for ${packet.type}`);
                break;
        }
        super.emit('data', data);
    }

    /**
     * The listener of the `WebSocket` `'close'` event.
     *
     * @param {Number} code The status code
     * @param {String} reason The reason for closing
     * @private
     */
    _onclose(code, reason) {
        if (this.pow_worker) this.pow_worker.terminate();
        clearTimeout(this._connectTimeout);
        super.emit('close', code, reason);
    }

    /**
     * The listener of the `WebSocket` `'error'` event.
     *
     * @param {Error} error The emitted error
     * @private
     */
    _onerror(error) {
        clearTimeout(this._connectTimeout);
        this._resetListeners();
        this.close();
        this._onclose();
        if (!super.emit('error', error)) throw error;
    }

    /**
     * Emit the `'timeout'` event.
     *
     * @param {Error} error The emitted error
     * @private
     */
    _emitTimeout(error) {
        this._resetListeners();
        if (!super.emit('timeout', error)) this._onerror(error);
    }

    /**
     * Resets all Listeners on the socket.
     *
     * @private
     */
    _resetListeners() {
        this._socket.removeAllListeners('open');
        this._socket.removeAllListeners('message');
        this._socket.removeAllListeners('close');
        this._socket.removeAllListeners('error');

        this._socket.on('error', () => {});
        this._socket.on('open', () => this.close());
    }

    /**
     * Close the connection
     *
     * @param {Number} code Status code explaining why the connection is closing
     * @param {String} reason A string explaining why the connection is closing
     * @public
     */
    close(code, reason) {
        try {
            this._socket.close(code, reason);
        } catch (e) {
            this._socket.terminate();
        }
    }

    /**
     * Built serverbound packet from content and send it.
     *
     * @param {String} type The packet type
     * @param {Object} content the content
     */
    send(type, content) {
        const data = new Builder({ type, content }).serverbound();
        this.sendBinary(data);
    }

    /**
     * Send a data message to the server.
     *
     * @param {Buffer} data the message to send
     * @public
     */
    sendBinary(data) {
        if (this._socket && this._socket.readyState === 1) this._socket.send(data);
    }

    /**
     * Spawn with the given name.
     * @param {String} name The name
     * @public
     */
    spawn(name = '') {
        this.send('spawn', { name });
    }

    /**
     * Send a movement packet. Note: use DiepSocket.INPUT to build the flags.
     * @param {Integer} flags The flags
     * @param {Float} mouseX The mouse X position
     * @param {Float} mouseY The mouse Y position
     * @param {Float} movementX The movement X 0 - 1 where 1 is the maximum speed
     * @param {Float} movementY The movement Y 0 - 1 where 1 is the maximum speed
     * @public
     */
    move(flags = INPUT.constantOfTrue, mouseX = 0, mouseY = 0, movementX = 0, movementY = 0) {
        this.send('input', { flags, mouseX, mouseY, movementX, movementY });
    }

    /**
     * Get the party link from the server id and the party code.
     *
     * @param {String} wsURL The server id or wsURL
     * @param {String} party The party code
     * @throws Will throw error if wsURL does not match regex.
     * @public
     */
    static getLink(wsURL = '', party = '') {
        const match = wsURL.match(/(?<=wss:\/\/).[0-9a-z]{3}(?=.s.m28n.net\/)|^[0-9a-z]{4}$/);
        if (!match) throw new Error('Invalid wsURL: wrong format:', wsURL);
        let serverid = match[0];
        serverid = serverid
            .split('')
            .map((char) => char.charCodeAt(0).toString(16).split('').reverse().join(''))
            .join('');
        return 'https://diep.io/#' + (serverid + (party ? `00${party}` : '')).toUpperCase();
    }

    /**
     * Get the server id and party code from a party link
     *
     * @param {String} link The party link
     * @throws Will throw error if link does not match regex.
     * @public
     */
    static linkParse(link = '') {
        // from cx
        let match = link.match(/diep\.io\/#(([0-9A-F]{2})+)/);
        if (!match) throw new Error('Invalid Link: wrong format');
        let data = match[1].split('');
        let id = '';
        while (true) {
            let lower = data.shift();
            let upper = data.shift();
            let byte = parseInt(lower, 16) + parseInt(upper, 16) * 16;
            if (!byte) break;
            id += String.fromCharCode(byte);
        }
        return { id, party: data.join('').toLowerCase() };
    }

    /**
     * Get a random party link from the specified gamemode and region
     *
     * @param {String} gamemode The gamemode
     * @param {String} region The region
     * @param {Function} cb The callback function
     * @public
     */
    static findServer(gamemode, region, cb) {
        if (!GAMEMODE.includes(gamemode)) {
            gamemode = GAMEMODE[Math.floor(Math.random() * GAMEMODE.length)];
        }
        if (!REGION.includes(region)) {
            region = REGION[Math.floor(Math.random() * REGION.length)];
        }
        https
            .get(`https://api.n.m28.io/endpoint/diepio-${gamemode}/findEach/`, (res) => {
                let data = '';

                res.on('data', (chunk) => {
                    data += chunk;
                });

                res.on('end', () => {
                    try {
                        data = JSON.parse(data);
                    } catch (error) {
                        cb();
                        return;
                    }
                    const id = data?.servers?.[`vultr-${region}`]?.id;
                    const link = id ? this.getLink(id) : id;
                    cb(link);
                });
            })
            .on('error', (e) => {
                cb();
            });
    }
    /**
     * Get a random party link from the specified gamemode and region
     *
     * @param {String} gamemode The gamemode
     * @param {String} region The region
     * @public
     */
    static findServerSync(gamemode, region) {
        return new Promise((resolve) => {
            this.findServer(gamemode, region, resolve);
        });
    }
}
DiepSocket.Parser = Parser;
DiepSocket.Builder = Builder;

DiepSocket.GAMEMODE = GAMEMODE;
DiepSocket.REGION = REGION;
DiepSocket.INPUT = INPUT;
DiepSocket.DIRECTION = DIRECTION;

module.exports = DiepSocket;
