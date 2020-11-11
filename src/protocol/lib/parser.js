'use strict';

const assert = require('assert').strict;

const { Reader } = require('./coder');
const { CLIENTBOUND, SERVERBOUND } = require('./data/data');

/**
 * Class: This is Parser, it is used to parse packets.
 *
 * new Parser(data)
 *  - data {Buffer|Array} The packet to parse
 *
 * parser.clientbound()
 * Parses the packet as a clientbound packet.
 *
 * parser.serverbound()
 * Parses the packet as a serverbound packet.
 */
class Parser extends Reader {
    /**
     * Creates a new `Parser`.
     *
     * @param {Buffer|Array} data The packet data
     */
    constructor(data) {
        super(data);

        if (!(data instanceof Buffer || data instanceof Array || data.buffer))
            throw new TypeError(
                `Expected Buffer or Array, got '${data ? data.constructor.name : data}'`
            );

        this.packet;
    }

    /**
     * Parses the packet as a clientbound packet.
     * @public
     */
    clientbound() {
        if (!this.packet) this.parse(CLIENTBOUND[this.vu()]);
        return this.packet;
    }

    /**
     * Parses the packet as a serverbound packet.
     * @public
     */
    serverbound() {
        if (!this.packet) this.parse(SERVERBOUND[this.vu()]);
        return this.packet;
    }

    /**
     * Parses the packet with the method in `dataSpecs`
     * @param dataSpecs {Object} contains the method `parse(Parser)`
     * @private
     */
    parse(dataSpecs) {
        if (!dataSpecs)
            throw new Error('packet id does not exist\n' + this.hexdump());
        let packet = {
            id: dataSpecs.id,
            type: dataSpecs.type,
            content: dataSpecs.parse(this),
        };
        assert(this.isEOF, `Did not reach the end of data: ${JSON.stringify(packet)}`);

        if (packet.type === 'compressed') {
            packet = new Parser(packet.content.buffer).clientbound();
        }

        this.packet = packet;
    }
}

module.exports = Parser;
