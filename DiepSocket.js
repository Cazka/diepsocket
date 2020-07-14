'use strict';

const EventEmitter = require('events');
const HttpsProxyAgent = require('https-proxy-agent');
const https = require('https');
const WebSocket = require('ws');
const url = require('url');
const { Reader, Writer } = require('./coder.js');

let BUILD = 'a5c9e13100793a51056188a9608451d6d3d0bc20';

const GAMEMODES = ['dom', 'ffa', 'tag', 'maze', 'teams', '4teams', 'sandbox', 'survival'];
const REGIONS = ['la', 'miami', 'sydney', 'amsterdam', 'singapore'];
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
    N: 0b000000000010,
    W: 0b000000000100,
    S: 0b000000001000,
    E: 0b000000010000,
    NE: 0b000000010010,
    SE: 0b000000011000,
    SW: 0b000000001100,
    NW: 0b000000000110,
};
/**
 * Class: This is DiepSocket, it is used to connect to a diep.io server.
 *
 * new DiepSocket(link[,options])
 *  - link {String] The party link from the server
 *  - options {Object}
 * 	    - timeout: How long the connection is allowed to take to establish before the connection times out. Default 30 seconds
 *      - proxy {String} The http proxy that will be used
 *      - ipv6 {String} The ipv6 that will be used
 *      - forceTeam {boolean} When set to true will only join same team otherwise throw an error
 *
 * Event: 'open'
 * Emitted when the connection is established.
 *
 * Event: 'accept'
 * Emitted when the server accepts us as a client.
 * I suggest to use this event instead of 'open'.
 *
 * Event: 'message'
 *  - data {Buffer} The Buffer sent from the server
 * Emitted when a message is received from the server.
 *
 * Event: 'broadcast'
 *  - message {String} The broadcast message.
 * Emitted when diep.io sends a broadcast packet. e.g. 'You have killed ...'
 * Event: 'close'
 *  - code {Number}
 *  - reason {String}
 * Emitted when the connection is closed. code is a numeric value indicating
 * the status code explaining why the connection has been closed. reason is a
 * human-readable string explaining why the connection has been closed.
 * You can use custom codes starting at 4000.
 *
 * Event: 'error'
 *  - error {Error}
 * Emitted when an error occurs.
 *
 * Event: 'timeout'
 *  - reason {Error}
 * Emitted when the connection takes too long to establish.
 * When there's no 'timeout' listener, 'error' will be emitted instead.
 *
 * socket.send(...args)
 * Send data to the server.
 *
 * socket.sendBinary(data)
 * Send binary data to the server.
 *
 * socket.spawn(name)
 *  - name {String} The name
 * Spawn with the given name.
 *
 * socket.move(flags, mouseX, mouseY, movX, movY)
 *  - flags {Integer} The flags
 *  - mouseX {Float} The mouse X position
 *  - mouseY {Float} The mouse Y position
 *  - movX {Float} The movement X
 *  - movY {Float} The movement Y
 * Send a movement packet.
 *
 * socket.close()
 * Close the connection.
 *
 * DiepSocket.getLink(ws[, party])
 *  - ws {String} This can be the wsURL or the server id.
 *  - party {String} The party code.
 *
 * DiepSocket.parseLink(link)
 *  - link {String} The server link.
 *  - {id, party}
 * Returns the id from the server and the party code.
 *
 * DiepSocket.findServer(gamemode, region, cb)
 *  - gamemode {String} The gamemode
 *  - region {String} The region
 *  - cb {Function} The callback function
 * Calls the callback function with the found party link.
 *
 * DiepSocket.findServerSync(gamemode, region)
 *  - gamemode {String} The gamemode
 *  - region {String} The region
 * Returns null if it couldn't find a link otherwise the link to the given options.
 */

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

        this._accepted = false;
        this._options = {
            timeout: 30000,
            ...options,
        };
        this._connectTimeout = null;
        this._acceptTimeout = null;

        const { id, party } = this.constructor.linkParse(link);
        this._id = id;
        this._party = party;
        this._initialLink = this.link;
        this._socket = null;
        this._gamemode = null;

        this._connect();
    }

    /**
     * returns the gamemode.
     */
    get gamemode() {
        return this._gamemode;
    }

    /**
     * returns the party link.
     *
     */
    get link() {
        return this.constructor.getLink(this._id, this._party);
    }

    /**
     * Creates a WebSocket connection to the diep.io server.
     *
     * @private
     */
    _connect() {
        clearTimeout(this._connectTimeout);
        const socketOptions = {
            origin: 'https://diep.io',
            rejectUnauthorized: false,
        };
        if (this._options.proxy) {
            const agent = new HttpsProxyAgent(url.parse(`http://${this._options.proxy}`));
            socketOptions.agent = agent;
        }
        if (this._options.ipv6) {
            socketOptions.family = 6;
            socketOptions.localAddress = this._options.ipv6;
        }

        this._socket = new WebSocket(`wss://${this._id}.s.m28n.net/`, socketOptions);
        this._socket.on('open', () => this._onOpen());
        this._socket.on('message', (data) => this._onMessage(data));
        this._socket.on('close', (code, reason) => this._onClose(code, reason));
        this._socket.on('error', (error) => this._onError(error));

        this._connectTimeout = setTimeout(() => {
            if (this._socket.readyState === this._socket.CONNECTING) {
                this._emitTimeout(new Error('Timeout: Connection took too long to establish'));
            }
        }, this._options.timeout);
    }

    /**
     * The listener of the `WebSocket` `'open'` event.
     *
     * @private
     */
    _onOpen() {
        this.send(0x05);
        this.send(0x00, BUILD, 0x00, 0x00, this._party, 0x00, 0x00);

        this._acceptTimeout = setTimeout(() => {
            if (!this._accepted) {
                this._emitTimeout(
                    new Error("Timeout: Socket openend, but didn't receive 07 packet")
                );
                this.close();
            }
        }, 10000);
        super.emit('open');
    }

    /**
     * The listener of the `WebSocket` `'message'` event.
     *
     * @param {Buffer} data The message from the server
     * @private
     */
    _onMessage(data) {
        switch (data[0]) {
            case 0x01: {
                //throw new Error('Outdated Client: Check if BUILD is up-to-date');
                console.warn('DiepSocket: outdated client. Further use is not recommended.');

                const reader = new Reader(data);
                reader.vu();
                BUILD = reader.string();

                this._connect(this._id, this._party);
                break;
            }
            case 0x03: {
                const reader = new Reader(data);
                reader.vu();
                const message = reader.string();
                super.emit('broadcast', message);
                break;
            }
            case 0x04:
                this._gamemode = new TextDecoder()
                    .decode(data.slice(1, data.length))
                    .split('\u0000')[0];
                break;
            case 0x05:
                this.send(5);
                break;
            case 0x06: {
                let party = '';
                for (let i = 1; i < data.byteLength; i++) {
                    let byte = data[i].toString(16).split('');
                    if (byte.length === 1) {
                        party += byte[0] + '0';
                    } else {
                        party += byte[1] + byte[0];
                    }
                }
                this._party = party;
                break;
            }
            case 0x07:
                this._accepted = true;
                setTimeout(() => {
                    if (!this._options.forceTeam || this._initialLink === this.link)
                        super.emit('accept');
                    else this._onError(new Error('The team you tried to join is full'));
                });
                break;
            case 0x09:
                this._onError(new Error('Link is invalid or the server is getting botted'));
                break;
            default:
                super.emit('message', data);
        }
    }

    /**
     * The listener of the `WebSocket` `'close'` event.
     *
     * @param {Number} code The status code
     * @param {String} reason The reason for closing
     * @private
     */
    _onClose(code, reason) {
        clearTimeout(this._connectTimeout);
        super.emit('close', code, reason);
    }

    /**
     * The listener of the `WebSocket` `'error'` event.
     *
     * @param {Error} error The emitted error
     * @private
     */
    _onError(error) {
        clearTimeout(this._connectTimeout);
        clearTimeout(this._acceptTimeout);
        this.close();
        this._resetListeners();
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
        if (!super.emit('timeout', error)) this._onError(error);
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
     * Send a data message to the server.
     *
     * @param  {...*} args The message to send
     * @public
     */
    send(...args) {
        // from cx
        let data = args.map((r) =>
            typeof r === 'number'
                ? [r]
                : typeof r === 'string'
                ? Array.from(new TextEncoder().encode(r))
                : r
        );
        let u8 = new Uint8Array([].concat(...data));

        this.sendBinary(u8);
    }

    /**
     * Send a data message to the server.
     *
     * @param {*} data the message to send
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
        this.sendBinary(new Writer().vu(2).string(name).out());
    }

    /**
     * Send a movement packet. Note: use DiepSocket.INPUT to build the flags.
     * @param {Integer} flags The flags
     * @param {Float} mouseX The mouse X position
     * @param {Float} mouseY The mouse Y position
     * @param {Float} movX The movement X 0 - 1 where 1 is the maximum speed
     * @param {Float} movY The movement Y 0 - 1 where 1 is the maximum speed
     * @public
     */
    move(flags = INPUT.constantOfTrue, mouseX = 0, mouseY = 0, movX = 0, movY = 0) {
        this.sendBinary(new Writer().vu(1).vu(flags).vf(mouseX).vf(mouseY).vf(movX).vf(movY).out());
    }

    /**
     * Get the party link from the server id and the party code.
     *
     * @param {String} wsURL The server id or wsURL
     * @param {String} party The party code
     * @throws Will throw error if wsURL does not match regex.
     * @public
     */
    static getLink(wsURL, party = '') {
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
    static linkParse(link) {
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
        if (!GAMEMODES.includes(gamemode) || !REGIONS.includes(region)) {
            cb(null);
            return;
        }
        https
            .get(`https://api.n.m28.io/endpoint/diepio-${gamemode}/findEach/`, (res) => {
                let data = '';

                res.on('data', (chunk) => {
                    data += chunk;
                });

                res.on('end', () => {
                    data = JSON.parse(data);
                    const server = data ? data.servers[`vultr-${region}`] : null;
                    const id = server ? server.id : null;
                    const link = id ? this.getLink(id) : null;
                    cb(link);
                });
            })
            .on('error', (e) => {
                cb(null);
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
module.exports = DiepSocket;
