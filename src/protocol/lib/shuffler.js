class Shuffler {
    constructor() {
        const buffer = new ArrayBuffer(67108864);
        this.HEAP8 = new Int8Array(buffer);
        this.HEAP16 = new Int16Array(buffer);
        this.HEAP32 = new Int32Array(buffer);
        this.HEAPU8 = new Uint8Array(buffer);
        this.HEAPU16 = new Uint16Array(buffer);
        this.HEAPU32 = new Uint32Array(buffer);
        this.HEAPF32 = new Float32Array(buffer);
        this.HEAPF64 = new Float64Array(buffer);
        this.Math_imul = Math.imul;
        this.Math_fround = Math.fround;
        this.Math_abs = Math.abs;
        this.Math_clz32 = Math.clz32;
        this.Math_min = Math.min;
        this.Math_max = Math.max;
        this.Math_floor = Math.floor;
        this.Math_ceil = Math.ceil;
        this.Math_sqrt = Math.sqrt;
        this.abort = () => process.exit();
        this.nan = NaN;
        this.infinity = Infinity;
        this.fimport$0;
        this.fimport$1;
        this.fimport$2;
        this.fimport$3;
        this.fimport$4;
        this.fimport$5;
        this.fimport$6;
        this.fimport$7;
        this.fimport$8;
        this.fimport$9;
        this.fimport$10;
        this.fimport$11;
        this.fimport$12;
        this.fimport$13;
        this.fimport$14;
        this.fimport$15;
        this.fimport$16;
        this.fimport$17;
        this.global$0 = 5426448;
        this.__wasm_intrinsics_temp_i64 = 0;
        this.__wasm_intrinsics_temp_i64$hi = 0;
        this.i64toi32_i32$HIGH_BITS = 0;
    }

    shuffle(data) {
        data = new Uint8Array(data);
        switch (data[0]) {
            case 0:
                break;
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            case 6:
                break;
            case 7:
                break;
            case 8:
                break;
            case 9:
                break;
            case 10:
                break;
            default:
                throw new Error('Unrecognized Packet');
        }
    }

    $99($0_1, $1_1, $2_1) {
        $0_1 = $0_1 | 0;
        $1_1 = $1_1 | 0;
        $2_1 = $2_1 | 0;
        var i64toi32_i32$0 = 0,
            i64toi32_i32$4 = 0,
            i64toi32_i32$1 = 0,
            $3_1 = 0,
            i64toi32_i32$2 = 0,
            $4_1 = 0,
            i64toi32_i32$5 = 0,
            $5_1 = 0,
            $6_1 = 0,
            i64toi32_i32$3 = 0,
            $7_1 = 0,
            $9$hi = 0,
            $10$hi = 0,
            $8$hi = 0,
            $10_1 = 0,
            $24_1 = 0,
            $8_1 = 0,
            $28_1 = 0,
            $28$hi = 0,
            $9_1 = 0,
            $35_1 = 0,
            $35$hi = 0,
            $36_1 = 0,
            $36$hi = 0,
            $37$hi = 0,
            $98_1 = 0,
            $101$hi = 0,
            $102$hi = 0,
            $104$hi = 0;
        //global$0 is used to indicate the function call stack kinda.
        $5_1 = (global$0 - 48) | 0;
        global$0 = $5_1;
        label$1: {
            //if packet length 0, break;
            if (!$1_1) {
                break label$1;
            }
            //read first byte from packet
            $6_1 = HEAPU8[$0_1 >> 0] | 0;
            //if that byte is 0 break and dont shuffle.
            if (!$6_1) {
                break label$1;
            }
            //transformation of the numbers. $40 is deterministic.
            $3_1 = $40(17 | 0) | 0;
            $4_1 = $40(13 | 0) | 0;
            $7_1 = $40(4 | 0) | 0;
            //doing some math
            $24_1 = $2_1;
            i64toi32_i32$0 = 0;
            i64toi32_i32$1 = 0;
            i64toi32_i32$1 = __wasm_i64_mul($4_1 | 0, i64toi32_i32$0 | 0, 7 | 0, i64toi32_i32$1 | 0) | 0;
            i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
            $8_1 = i64toi32_i32$1;
            $8$hi = i64toi32_i32$0;
            $28_1 = i64toi32_i32$1;
            $28$hi = i64toi32_i32$0;
            i64toi32_i32$0 = 0;
            i64toi32_i32$1 = 0;
            i64toi32_i32$1 = __wasm_i64_mul($3_1 | 0, i64toi32_i32$0 | 0, 387 | 0, i64toi32_i32$1 | 0) | 0;
            i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$2 = i64toi32_i32$1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$3 = 48271;
            i64toi32_i32$4 = (i64toi32_i32$2 + i64toi32_i32$3) | 0;
            i64toi32_i32$5 = (i64toi32_i32$0 + i64toi32_i32$1) | 0;
            if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$5 = (i64toi32_i32$5 + 1) | 0;
            }
            $9_1 = i64toi32_i32$4;
            $9$hi = i64toi32_i32$5;
            i64toi32_i32$0 = $2_1;
            //HEAP32[$2_1 >> 2]. magic number?
            i64toi32_i32$5 = HEAP32[i64toi32_i32$0 >> 2] | 0;
            i64toi32_i32$2 = 0;
            //store the magic number? in $35_1
            $35_1 = i64toi32_i32$5;
            $35$hi = i64toi32_i32$2;
            i64toi32_i32$2 = $9$hi;
            i64toi32_i32$5 = $35$hi;
            i64toi32_i32$5 = __wasm_i64_mul(i64toi32_i32$4 | 0, i64toi32_i32$2 | 0, $35_1 | 0, i64toi32_i32$5 | 0) | 0;
            i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
            $36_1 = i64toi32_i32$5;
            $36$hi = i64toi32_i32$2;
            i64toi32_i32$2 = $28$hi;
            i64toi32_i32$0 = $28_1;
            i64toi32_i32$5 = $36$hi;
            i64toi32_i32$3 = $36_1;
            i64toi32_i32$1 = (i64toi32_i32$0 + i64toi32_i32$3) | 0;
            i64toi32_i32$4 = (i64toi32_i32$2 + i64toi32_i32$5) | 0;
            if (i64toi32_i32$1 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$4 = (i64toi32_i32$4 + 1) | 0;
            }
            $37$hi = i64toi32_i32$4;
            $4_1 = (($40(5 | 0) | 0) << 16) | 0 | (($7_1 << 24) | 0) | 0 | ((($40(6 | 0) | 0) << 8) | 0) | 0 | ($40(7 | 0) | 0) | 0;
            i64toi32_i32$4 = 0;
            $10_1 = ((($4_1 >>> 0) % (382739 >>> 0) | 0) ^ 2147483647) | 0;
            $10$hi = i64toi32_i32$4;
            i64toi32_i32$4 = $37$hi;
            i64toi32_i32$0 = $10$hi;
            i64toi32_i32$0 = __wasm_i64_urem(i64toi32_i32$1 | 0, i64toi32_i32$4 | 0, $10_1 | 0, i64toi32_i32$0 | 0) | 0;
            i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
            $7_1 = i64toi32_i32$0;
            // store the new magic number?
            HEAP32[$24_1 >> 2] = i64toi32_i32$0;
            $3_1 = 0;
            label$2: {
                // break here in my example with spawn packet
                if (((HEAPU8[105096 >> 0] | 0) & 1) | 0) {
                    break label$2;
                }
                if (!($5(105096 | 0) | 0)) {
                    break label$2;
                }
                HEAP32[$5_1 >> 2] = $4_1;
                $4_1 = 0;
                label$3: while (1) {
                    HEAP8[(($4_1 + 104968) | 0) >> 0] = $4_1;
                    $4_1 = ($4_1 + 1) | 0;
                    if (($4_1 | 0) != (128 | 0)) {
                        continue label$3;
                    }
                    break label$3;
                }
                HEAP32[(($5_1 + 44) | 0) >> 2] = 104969;
                HEAP32[(($5_1 + 40) | 0) >> 2] = 105096;
                $470(($5_1 + 44) | 0 | 0, ($5_1 + 40) | 0 | 0, $5_1 | 0);
                $4(105096 | 0);
            }
            // Jump table begins
            $4_1 = ($7_1 & 15) | 0;
            label$4: while (1) {
                $7_1 = ($3_1 | 0) == ($4_1 | 0);
                $6_1 = HEAPU8[(((($6_1 & 255) | 0) + 104968) | 0) >> 0] | 0;
                $3_1 = ($3_1 + 1) | 0;
                if (!$7_1) {
                    continue label$4;
                }
                break label$4;
            }
            //replace real header id with shuffled id.
            HEAP8[$0_1 >> 0] = $6_1;
            $4_1 = (((($40(19 | 0) | 0) >>> 0) % (10 >>> 0) | 0) + 17) | 0;
            //get the magic number or something? previously set here HEAP32[$24_1 >> 2] = i64toi32_i32$0;
            $6_1 = HEAP32[$2_1 >> 2] | 0;
            $3_1 = 0;
            // for loop $3_1 < $4_1
            label$5: while (1) {
                //$5_1 is the current function call stack?
                $98_1 = ($3_1 + $5_1) | 0;
                i64toi32_i32$4 = $9$hi;
                i64toi32_i32$4 = 0;
                $101$hi = i64toi32_i32$4;
                i64toi32_i32$4 = $9$hi;
                i64toi32_i32$0 = $101$hi;
                i64toi32_i32$0 = __wasm_i64_mul($9_1 | 0, i64toi32_i32$4 | 0, $6_1 | 0, i64toi32_i32$0 | 0) | 0;
                i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
                $102$hi = i64toi32_i32$4;
                i64toi32_i32$4 = $8$hi;
                i64toi32_i32$4 = $102$hi;
                i64toi32_i32$2 = i64toi32_i32$0;
                i64toi32_i32$0 = $8$hi;
                i64toi32_i32$3 = $8_1;
                i64toi32_i32$5 = (i64toi32_i32$2 + i64toi32_i32$3) | 0;
                i64toi32_i32$1 = (i64toi32_i32$4 + i64toi32_i32$0) | 0;
                if (i64toi32_i32$5 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$1 = (i64toi32_i32$1 + 1) | 0;
                }
                $104$hi = i64toi32_i32$1;
                i64toi32_i32$1 = $10$hi;
                i64toi32_i32$1 = $104$hi;
                i64toi32_i32$2 = $10$hi;
                i64toi32_i32$2 = __wasm_i64_urem(i64toi32_i32$5 | 0, i64toi32_i32$1 | 0, $10_1 | 0, i64toi32_i32$2 | 0) | 0;
                i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
                //idk what that is setting
                HEAP8[$98_1 >> 0] = i64toi32_i32$2;
                $6_1 = i64toi32_i32$2;
                $3_1 = ($3_1 + 1) | 0;
                if (($3_1 | 0) != ($4_1 | 0)) {
                    continue label$5;
                }
                break label$5;
            }
            //set new magic number?
            HEAP32[$2_1 >> 2] = $6_1;
            $3_1 = 1;
            //if length is only one byte we break.
            if ($1_1 >>> 0 <= 1 >>> 0) {
                break label$1;
            }
            //for loop $3_1 < packet length
            label$6: while (1) {
                //points to the current byte in the packet.
                $2_1 = ($0_1 + $3_1) | 0;
                //this is how the other bytes are getting shuffled.
                //$2_1 pointer to the byte.
                //$5_1 pointer to a magic number that gets set in the label$5 for loop
                HEAP8[$2_1 >> 0] = ((HEAPU8[$2_1 >> 0] | 0) ^ (HEAPU8[(($5_1 + (($3_1 >>> 0) % ($4_1 >>> 0) | 0)) | 0) >> 0] | 0)) | 0;
                $3_1 = ($3_1 + 1) | 0;
                if (($3_1 | 0) != ($1_1 | 0)) {
                    continue label$6;
                }
                break label$6;
            }
        }
        //change function call stack, since we are exiting the function
        global$0 = ($5_1 + 48) | 0;
    }
}

module.exports = Shuffler;
