/*
 * This is from @cx88 with little modifications made by me.
 * https://github.com/cx88/diepssect/blob/master/diep-bot/coder.js
 */
'use strict';

const convo = new ArrayBuffer(4);
const u8 = new Uint8Array(convo);
const u16 = new Uint16Array(convo);
const u32 = new Uint32Array(convo);
const float = new Float32Array(convo);

let endianSwap = (val) =>
    ((val & 0xff) << 24) | ((val & 0xff00) << 8) | ((val >> 8) & 0xff00) | ((val >> 24) & 0xff);

class Reader {
    constructor(content) {
        this.at = 0;
        this.buffer = new Uint8Array(content);
    }
    u8() {
        const out = this.buffer[this.at++];
        this.assertNotOOB();
        return out;
    }
    u16() {
        u8.set(this.buffer.subarray(this.at, (this.at += 2)));
        this.assertNotOOB();
        return u16[0];
    }
    u32() {
        u8.set(this.buffer.subarray(this.at, (this.at += 4)));
        this.assertNotOOB();
        return u32[0];
    }
    float() {
        u8.set(this.buffer.subarray(this.at, (this.at += 4)));
        this.assertNotOOB();
        return float[0];
    }
    vu() {
        let out = 0;
        let at = 0;
        while (this.buffer[this.at] & 0x80) {
            out |= (this.buffer[this.at++] & 0x7f) << at;
            at += 7;
        }
        out |= this.buffer[this.at++] << at;
        this.assertNotOOB();
        return out;
    }
    vi() {
        let out = this.vu();
        const sign = out & 1;
        out >>= 1;
        if (sign) out = ~out;
        this.assertNotOOB();
        return out;
    }
    vf() {
        u32[0] = endianSwap(this.vi());
        this.assertNotOOB();
        return float[0];
    }
    string() {
        let out;
        const at = this.at;
        while (this.buffer[this.at]) this.at++;
        out = new TextDecoder().decode(this.buffer.subarray(at, this.at++));
        this.assertNotOOB();
        return out;
    }
    buf() {
        let out;
        const length = this.vu();
        out = this.buffer.slice(this.at, this.at + length);
        this.at += length;
        this.assertNotOOB();
        return out;
    }
    flush() {
        const slice = this.buffer.slice(this.at);
        this.at += slice.length;
        return slice;
    }
    isEOF() {
        return this.at === this.buffer.byteLength;
    }
    assertNotOOB() {
        if (this.at > this.buffer.byteLength) {
            throw new Error(`Error at ${this.at}: Out of Bounds.\n${this.hexdump()}`);
        }
    }

    /**
     * Reverse Variable Length.
     */
    rv() {
        this.at--;
        while (this.buffer[this.at - 1] & 0x80) this.at--;
    }
    hexdump() {
        const s = this.buffer.reduce((acc, x, i) => {
            x = x.toString(16).padStart(2, 0).toUpperCase();
            if (this.at === i) x = `>${x}`;
            if (i % 16 === 0) acc = `${acc}\n${x}`;
            else acc = `${acc} ${x}`;
            return acc;
        }, '');
        return s.trim();
    }
}
class Writer {
    constructor() {
        this.length = 0;
        this.buffer = new Uint8Array(8192);
    }
    u8(num) {
        this.buffer[this.length] = num;
        this.length += 1;
        return this;
    }
    u16(num) {
        u16[0] = num;
        this.buffer.set(u8, this.length);
        this.length += 2;
        return this;
    }
    u32(num) {
        u32[0] = num;
        this.buffer.set(u8, this.length);
        this.length += 4;
        return this;
    }
    float(num) {
        float[0] = num;
        this.buffer.set(u8, this.length);
        this.length += 4;
        return this;
    }
    vu(num) {
        do {
            let part = num;
            num >>>= 7;
            if (num) part |= 0x80;
            this.buffer[this.length++] = part;
        } while (num);
        return this;
    }
    vi(num) {
        const sign = (num & 0x80000000) >>> 31;
        if (sign) num = ~num;
        const part = (num << 1) | sign;
        this.vu(part);
        return this;
    }
    vf(num) {
        float[0] = num;
        this.vi(endianSwap(u32[0]));
        return this;
    }
    string(str) {
        const bytes = new TextEncoder().encode(str);
        this.buffer.set(bytes, this.length);
        this.length += bytes.length;
        this.buffer[this.length++] = 0;
        return this;
    }
    buf(buf) {
        const length = buf.byteLength;
        this.vu(length);
        this.buffer.set(buf, this.length);
        this.length += length;
        return this;
    }
    out() {
        return this.buffer.slice(0, this.length);
    }
    dump() {
        return Array.from(this.buffer.subarray(0, this.length))
            .map((r) => r.toString(16).padStart(2, 0))
            .join(' ');
    }
}

module.exports = { Reader, Writer };
