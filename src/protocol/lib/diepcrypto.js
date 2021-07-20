'use strict';
const fs = require('fs');
const { shuffle, unshuffle, replaceBufferViews, checkMagicByte } = require(__dirname + '/../../../lib/shuffler_unshuffler.js');
class DiepCrypto {
    constructor() {
        this.buffer = new ArrayBuffer(67108864);
        this.views = {
            buf: this.buffer,
            i8: new Int8Array(this.buffer),
            i16: new Int16Array(this.buffer),
            i32: new Int32Array(this.buffer),
            u8: new Uint8Array(this.buffer),
            u16: new Uint16Array(this.buffer),
            u32: new Uint32Array(this.buffer),
            f32: new Float32Array(this.buffer),
            f64: new Float64Array(this.buffer),
        };
        this._copyBuffer = new Uint8Array(67108864);
    }
    unshuffle(data) {
        this._copyBuffer.set(this.views.u8);
        replaceBufferViews(this.views);
        return unshuffle(data);
    }
    shuffle(data) {
        replaceBufferViews(this.views);
        return shuffle(data);
    }
    checkMagicByte(data, ptr) {
        checkMagicByte(data, ptr);
    }
    reset() {
        const res = fs.readFileSync(__dirname + '/../../../lib/initial_buffer.mem');
        this.views.u8.set(new Uint8Array(res), 0);
    }

    revert() {
        this.views.u8.set(this._copyBuffer);
    }

}

module.exports = DiepCrypto;
