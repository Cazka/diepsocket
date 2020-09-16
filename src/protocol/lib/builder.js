'use strict';

const { Writer } = require('./coder');
const { CLIENTBOUND, SERVERBOUND } = require('./data/data');

/**
 * Class: This is Builder, it is used to build packets.
 *
 * new Builder(type, packet)
 *  - packet {Object} The packet to build
 *
 * builder.clientbound
 * builds the packet as a clientbound packet.
 *
 * builder.serverbound
 * builds the packet as a clientbound packet.
 */
class Builder extends Writer {
    /**
     * Creates a new `Builder`.
     *
     * @param {Object} packet The packet
     * @param {String} packet.type The type of the packet
     * @param {Object} packet.content The content of the packet
     */
    constructor(packet) {
        super();

        if (!packet instanceof Object)
            throw new TypeError(`Expected Object, got '${data ? data.constructor.name : data}'`);
        if (!packet.id && !packet.type)
            throw new TypeError(`Must specify either packet.id or packet.type`);
        this.data;
        this._packet = packet;
    }

    /**
     * Builds the data as a clientbound packet.
     * @public
     */
    clientbound() {
        if (!this.data) this.build(CLIENTBOUND);
        return this.data;
    }

    /**
     * Builds the data as a serverbound packet.
     * @public
     */
    serverbound() {
        if (!this.data) this.build(SERVERBOUND);
        return this.data;
    }

    /**
     * Builds the packet.
     * @param packets {Object} contains the packets with their dataSpecs.
     * @private
     */
    build(packets) {
        const dataSpecs = packets[this._packet.id] || packets.getFromType(this._packet.type);
        let data = dataSpecs.build(this);

        //TODO: compression for long packets.
        //if(data.byteLength > x){
        //    data = new Builder({ type: 'compressed', content: data}).clientbound();
        //}

        this.data = data;
    }
}

module.exports = Builder;
