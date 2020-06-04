'use strict';

const EventEmitter = require('events');
const HttpsProxyAgent = require('https-proxy-agent');
const WebSocket = require('ws');
const url = require('url');

const BUILD = 'eab7be559e0cf41175ea24fada87ee8eebbbcf2a';

/**
 * Class: This is DiepSocket, it is used to connect to a diep.io server.
 *
 * new DiepSocket(link[, proxy][,options])
 *  - link {String] The party link from the server.
 *  - proxy {String} The http proxy that will be used.
 *  - options {Object}
 * 	    - timeout: How long the connection is allowed to take to establish.
 *                  Default 30 seconds.
 *
 * Event: 'open'
 * Emitted when the connection is established.
 *
 * Event: 'accept'
 * Emitted when the server accepted us as a client.
 * I suggest to use this event instead of 'open'.
 *
 * Event: 'message'
 *  - data {Buffer} The Buffer sent from the server.
 * Emitted when a message is received from the server.
 *
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
     * @param {String} proxy The proxy that will be used. ip:port format
     * @param {Object} options Connection options
     * @param {Number} options.timeout How long the connection is allowed to take to
     * establish. Default 30,000 ms
     */
    constructor(link, proxy, options) {
        super();

        this._accepted = false;
        this._options = {
            timeout: 30000,
            ...options,
        };
        this._connectTimeout = null;
        this._acceptTimeout = null;

        this._socket = null;

        const { id, party } = this.constructor.linkParse(link);
        this._connect(id, party, proxy);
    }

    /**
     * Creates a WebSocket connection to the diep.io server.
     *
     * @param {String} id The server id from the diep.io server
     * @param {String} party The party code from the arena
     * @param {String} proxy The proxy that will be used
     * @private
     */
    _connect(id, party, proxy) {
        const socketOptions = {
            origin: 'https://diep.io',
            rejectUnauthorized: false,
        };
        if (proxy) {
            const agent = new HttpsProxyAgent(url.parse(`http://${proxy}`));
            socketOptions.agent = agent;
        }

        this._socket = new WebSocket(`wss://${id}.s.m28n.net/`, socketOptions);
        this._socket.on('open', () => this._onOpen(party));
        this._socket.on('message', (data) => this._onMessage(data));
        this._socket.on('close', (code, reason) => this._onClose(code, reason));
        this._socket.on('error', (error) => this._onError(error));

        this._connectTimeout = setTimeout(() => {
            if (this._socket.readyState === this._socket.CONNECTING) {
                this._emitTimeout(
                    new Error('Timeout: Connection took too long to establish')
                );
            }
        }, this._options.timeout);
    }

    /**
     * The listener of the `WebSocket` `'open'` event.
     *
     * @param {String} party The party code from the arena
     * @private
     */
    _onOpen(party) {
        this.send(0x05);
        this.send(0x00, BUILD, 0x00, 0x00, party, 0x00, 0x00);

        this._acceptTimeout = setTimeout(() => {
            if (!this._accepted) {
                this._emitTimeout(
                    new Error(
                        "Timeout: Socket openend, but didn't receive 07 paket"
                    )
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
            case 1:
                throw new Error(
                    'Outdated Client: Check if BUILD is up-to-date'
                );
            case 5:
                this.send(5);
                break;
            case 7:
                this._accepted = true;
                super.emit('accept');
                break;
            case 9:
                this._socketOnError(
                    new Error('Link is invalid or the server is getting botted')
                );
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
                ? r.split('').map((r) => r.charCodeAt(0))
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
        if (this._socket && this._socket.readyState === 1)
            this._socket.send(data);
    }

    /**
     * Get the party link from the server id and the party code.
     *
     * @param {String} wsURL The server id or wsURL
     * @param {String} party The party code
     * @public
     */
    static getLink(wsURL, party = '') {
        const match = wsURL.match(
            /(?<=wss:\/\/).[0-9a-z]{3}(?=.s.m28n.net\/)|^[0-9a-z]{4}$/
        );
        if (!match) throw new Error('Invalid wsURL: wrong format:', wsURL);
        let serverid = match[0];
        const link = 'https://diep.io/#';
        serverid = serverid
            .split('')
            .map((char) =>
                char.charCodeAt(0).toString(16).split('').reverse().join('')
            )
            .join('');
        return link + (serverid + '00' + party).toUpperCase();
    }

    /**
     * Get the server id and party code from a party link
     *
     * @param {String} link
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
        return { id, party: data.join('') };
    }
}
module.exports = DiepSocket;
