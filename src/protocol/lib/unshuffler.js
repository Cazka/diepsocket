const PTR_DATA = 1000000;
const PTR_MAGIC_NUMBER_CLIENTBOUND = 1100000;
const PTR_MAGIC_NUMBER_SERVERBOUND = 1200000;
const PTR_BUILD_HASH = 4448;

const GLOBAL$0 = 1300000;
const MAGIC_NUMBER_CLIENTBOUND = 1938629610;
const MAGIC_NUMBER_SERVERBOUND = -1287889786;

class Clientbound {
    constructor() {
        const buffer = new ArrayBuffer(67108864);
        this.HEAP8 = new Int8Array(buffer);
        this.HEAP32 = new Int32Array(buffer);
        this.HEAPU8 = new Uint8Array(buffer);
        this.global$0 = 0;
        this.i64toi32_i32$HIGH_BITS = 0;
        this.__wasm_intrinsics_temp_i64 = 0;
        this.__wasm_intrinsics_temp_i64$hi = 0;

        this.HEAP32[((PTR_MAGIC_NUMBER_CLIENTBOUND + 12) | 0) >> 2] = MAGIC_NUMBER_CLIENTBOUND;
        this.HEAP8.set(new TextEncoder().encode('0c63725cbf091f3eb33c5c86738d23eaf83e5c15'), PTR_BUILD_HASH);
    }

    unshuffle(data) {
        data = new Uint8Array(data);
        this.global$0 = GLOBAL$0;

        this.HEAPU8.set(data, PTR_DATA);
        this._unshuffle(PTR_DATA, data.length, PTR_MAGIC_NUMBER_CLIENTBOUND);
        return this.HEAPU8.slice(PTR_DATA, PTR_DATA + data.length);
    }

    _unshuffle($8_1, $5_1, $3_1) {
        $8_1 = $8_1 | 0;
        $5_1 = $5_1 | 0;
        $3_1 = $3_1 | 0;
        var i64toi32_i32$0 = 0,
            $4_1 = 0,
            $2_1 = 0,
            $7_1 = 0,
            $328_1 = 0,
            $12_1 = 0,
            $12$hi = 0,
            $332_1 = 0,
            $332$hi = 0,
            i64toi32_i32$2 = 0,
            i64toi32_i32$3 = 0,
            i64toi32_i32$4 = 0,
            i64toi32_i32$5 = 0,
            i64toi32_i32$1 = 0,
            $13_1 = 0,
            $13$hi = 0,
            $339_1 = 0,
            $339$hi = 0,
            $340_1 = 0,
            $340$hi = 0,
            $341$hi = 0,
            $14_1 = 0,
            $14$hi = 0,
            $1_1 = 0,
            $432_1 = 0,
            $435$hi = 0,
            $436$hi = 0,
            $438$hi = 0,
            $0_1 = 0;
        $1_1 = this.global$0 | 0;
        this.global$0 = $1_1;
        label$42: {
            if (!$5_1) {
                break label$42;
            }
            $4_1 = this.HEAPU8[$8_1 >> 0] | 0;
            if (($4_1 | 0) == (1 | 0)) {
                break label$42;
            }
            $0_1 = this.$40(17 | 0) | 0;
            $2_1 = this.$40(13 | 0) | 0;
            $7_1 = this.$40(4 | 0) | 0;
            $328_1 = $3_1;
            i64toi32_i32$0 = 0;
            i64toi32_i32$1 = 0;
            i64toi32_i32$1 = this.__wasm_i64_mul($2_1 | 0, i64toi32_i32$0 | 0, 7 | 0, i64toi32_i32$1 | 0) | 0;
            i64toi32_i32$0 = this.i64toi32_i32$HIGH_BITS;
            $12_1 = i64toi32_i32$1;
            $12$hi = i64toi32_i32$0;
            $332_1 = i64toi32_i32$1;
            $332$hi = i64toi32_i32$0;
            i64toi32_i32$0 = 0;
            i64toi32_i32$1 = 0;
            i64toi32_i32$1 = this.__wasm_i64_mul($0_1 | 0, i64toi32_i32$0 | 0, 387 | 0, i64toi32_i32$1 | 0) | 0;
            i64toi32_i32$0 = this.i64toi32_i32$HIGH_BITS;
            i64toi32_i32$2 = i64toi32_i32$1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$3 = 48271;
            i64toi32_i32$4 = (i64toi32_i32$2 + i64toi32_i32$3) | 0;
            i64toi32_i32$5 = (i64toi32_i32$0 + i64toi32_i32$1) | 0;
            if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$5 = (i64toi32_i32$5 + 1) | 0;
            }
            $13_1 = i64toi32_i32$4;
            $13$hi = i64toi32_i32$5;
            i64toi32_i32$0 = $3_1;
            i64toi32_i32$5 = this.HEAP32[(($3_1 + 12) | 0) >> 2] | 0;
            i64toi32_i32$2 = 0;
            $339_1 = i64toi32_i32$5;
            $339$hi = i64toi32_i32$2;
            i64toi32_i32$2 = $13$hi;
            i64toi32_i32$5 = $339$hi;
            i64toi32_i32$5 = this.__wasm_i64_mul(i64toi32_i32$4 | 0, i64toi32_i32$2 | 0, $339_1 | 0, i64toi32_i32$5 | 0) | 0;
            i64toi32_i32$2 = this.i64toi32_i32$HIGH_BITS;
            $340_1 = i64toi32_i32$5;
            $340$hi = i64toi32_i32$2;
            i64toi32_i32$2 = $332$hi;
            i64toi32_i32$0 = $332_1;
            i64toi32_i32$5 = $340$hi;
            i64toi32_i32$3 = $340_1;
            i64toi32_i32$1 = (i64toi32_i32$0 + i64toi32_i32$3) | 0;
            i64toi32_i32$4 = (i64toi32_i32$2 + i64toi32_i32$5) | 0;
            if (i64toi32_i32$1 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$4 = (i64toi32_i32$4 + 1) | 0;
            }
            $341$hi = i64toi32_i32$4;
            i64toi32_i32$4 = 0;
            $14_1 = ((((((this.$40(5 | 0) | 0) << 16) | 0 | (($7_1 << 24) | 0) | 0 | (((this.$40(6 | 0) | 0) << 8) | 0) | 0 | (this.$40(7 | 0) | 0) | 0) >>> 0) % (382739 >>> 0) | 0) ^ 2147483647) | 0;
            $14$hi = i64toi32_i32$4;
            i64toi32_i32$4 = $341$hi;
            i64toi32_i32$0 = $14$hi;
            i64toi32_i32$0 = this.__wasm_i64_urem(i64toi32_i32$1 | 0, i64toi32_i32$4 | 0, $14_1 | 0, i64toi32_i32$0 | 0) | 0;
            i64toi32_i32$4 = this.i64toi32_i32$HIGH_BITS;
            $0_1 = i64toi32_i32$0;
            this.HEAP32[(($328_1 + 12) | 0) >> 2] = $0_1;
            label$43: {
                if (((this.HEAPU8[179604 >> 0] | 0) & 1) | 0) {
                    break label$43;
                }
                if (!(this.$5(179604 | 0) | 0)) {
                    break label$43;
                }
                label$44: {
                    if (((this.HEAPU8[179472 >> 0] | 0) & 1) | 0) {
                        break label$44;
                    }
                    if (!(this.$5(179472 | 0) | 0)) {
                        break label$44;
                    }
                    $2_1 = 0;
                    $7_1 = this.$40(0 | 0) | 0;
                    this.HEAP32[(($1_1 + 144) | 0) >> 2] = ((this.$40(1 | 0) | 0) << 16) | 0 | (($7_1 << 24) | 0) | 0 | (((this.$40(2 | 0) | 0) << 8) | 0) | 0 | (this.$40(3 | 0) | 0) | 0;
                    label$45: while (1) {
                        this.HEAP8[(($2_1 + 179476) | 0) >> 0] = $2_1;
                        $2_1 = ($2_1 + 1) | 0;
                        if (($2_1 | 0) != (128 | 0)) {
                            continue label$45;
                        }
                        break label$45;
                    }
                    $2_1 = this.HEAPU8[179477 >> 0] | 0;
                    this.HEAP8[179477 >> 0] = this.HEAPU8[179476 >> 0] | 0;
                    this.HEAP8[179476 >> 0] = $2_1;
                    this.HEAP32[(($1_1 + 188) | 0) >> 2] = 179477;
                    this.HEAP32[(($1_1 + 184) | 0) >> 2] = 179604;
                    this.$470(($1_1 + 188) | 0 | 0, ($1_1 + 184) | 0 | 0, ($1_1 + 144) | 0 | 0);
                    $2_1 = this.HEAPU8[179476 >> 0] | 0;
                    this.HEAP8[179476 >> 0] = this.HEAPU8[179477 >> 0] | 0;
                    this.HEAP8[179477 >> 0] = $2_1;
                    this.$4(179472 | 0);
                }
                $2_1 = 0;
                label$46: while (1) {
                    this.HEAP8[(((this.HEAPU8[(($2_1 + 179476) | 0) >> 0] | 0) + 179608) | 0) >> 0] = $2_1;
                    $2_1 = ($2_1 + 1) | 0;
                    if (($2_1 | 0) != (128 | 0)) {
                        continue label$46;
                    }
                    break label$46;
                }
                this.$4(179604 | 0);
            }
            $2_1 = ($0_1 & 15) | 0;
            $0_1 = 0;
            label$47: while (1) {
                $7_1 = ($0_1 | 0) == ($2_1 | 0);
                $4_1 = this.HEAPU8[(((($4_1 & 255) | 0) + 179608) | 0) >> 0] | 0;
                $0_1 = ($0_1 + 1) | 0;
                if (!$7_1) {
                    continue label$47;
                }
                break label$47;
            }
            this.HEAP8[$8_1 >> 0] = $4_1;
            $2_1 = ((((this.$40(19 | 0) | 0) >>> 0) % (10 >>> 0) | 0) + 17) | 0;
            $4_1 = this.HEAP32[(($3_1 + 12) | 0) >> 2] | 0;
            $0_1 = 0;
            label$48: while (1) {
                $432_1 = ((($1_1 + 144) | 0) + $0_1) | 0;
                i64toi32_i32$4 = $13$hi;
                i64toi32_i32$4 = 0;
                $435$hi = i64toi32_i32$4;
                i64toi32_i32$4 = $13$hi;
                i64toi32_i32$0 = $435$hi;
                i64toi32_i32$0 = this.__wasm_i64_mul($13_1 | 0, i64toi32_i32$4 | 0, $4_1 | 0, i64toi32_i32$0 | 0) | 0;
                i64toi32_i32$4 = this.i64toi32_i32$HIGH_BITS;
                $436$hi = i64toi32_i32$4;
                i64toi32_i32$4 = $12$hi;
                i64toi32_i32$4 = $436$hi;
                i64toi32_i32$2 = i64toi32_i32$0;
                i64toi32_i32$0 = $12$hi;
                i64toi32_i32$3 = $12_1;
                i64toi32_i32$5 = (i64toi32_i32$2 + i64toi32_i32$3) | 0;
                i64toi32_i32$1 = (i64toi32_i32$4 + i64toi32_i32$0) | 0;
                if (i64toi32_i32$5 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$1 = (i64toi32_i32$1 + 1) | 0;
                }
                $438$hi = i64toi32_i32$1;
                i64toi32_i32$1 = $14$hi;
                i64toi32_i32$1 = $438$hi;
                i64toi32_i32$2 = $14$hi;
                i64toi32_i32$2 = this.__wasm_i64_urem(i64toi32_i32$5 | 0, i64toi32_i32$1 | 0, $14_1 | 0, i64toi32_i32$2 | 0) | 0;
                i64toi32_i32$1 = this.i64toi32_i32$HIGH_BITS;
                this.HEAP8[$432_1 >> 0] = i64toi32_i32$2;
                $4_1 = i64toi32_i32$2;
                $0_1 = ($0_1 + 1) | 0;
                if (($0_1 | 0) != ($2_1 | 0)) {
                    continue label$48;
                }
                break label$48;
            }
            this.HEAP32[(($3_1 + 12) | 0) >> 2] = $4_1;
            $0_1 = 1;
            if ($5_1 >>> 0 <= 1 >>> 0) {
                break label$42;
            }
            label$49: while (1) {
                $4_1 = ($0_1 + $8_1) | 0;
                this.HEAP8[$4_1 >> 0] = ((this.HEAPU8[$4_1 >> 0] | 0) ^ (this.HEAPU8[(((($1_1 + 144) | 0) + (($0_1 >>> 0) % ($2_1 >>> 0) | 0)) | 0) >> 0] | 0)) | 0;
                $0_1 = ($0_1 + 1) | 0;
                if (($0_1 | 0) != ($5_1 | 0)) {
                    continue label$49;
                }
                break label$49;
            }
        }
    }    

    $40($0_1) {
        $0_1 = $0_1 | 0;
        var $2_1 = 0,
            $3_1 = 0,
            $1_1 = 0;
        $2_1 = ($0_1 << 1) | 0;
        $3_1 = $2_1 | 1 | 0;
        $0_1 = 0;
        label$1: {
            label$2: {
                switch (((this.HEAP8[(($2_1 + 4448) | 0) >> 0] | 0) + -49) | 0 | 0) {
                    case 0:
                        $0_1 = 16;
                        break label$1;
                    case 1:
                        $0_1 = 32;
                        break label$1;
                    case 2:
                        $0_1 = 48;
                        break label$1;
                    case 3:
                        $0_1 = 64;
                        break label$1;
                    case 4:
                        $0_1 = 80;
                        break label$1;
                    case 5:
                        $0_1 = 96;
                        break label$1;
                    case 6:
                        $0_1 = 112;
                        break label$1;
                    case 7:
                        $0_1 = 128;
                        break label$1;
                    case 8:
                        $0_1 = 144;
                        break label$1;
                    case 48:
                        $0_1 = 160;
                        break label$1;
                    case 49:
                        $0_1 = 176;
                        break label$1;
                    case 50:
                        $0_1 = 192;
                        break label$1;
                    case 51:
                        $0_1 = 208;
                        break label$1;
                    case 52:
                        $0_1 = 224;
                        break label$1;
                    case 16:
                        $0_1 = 160;
                        break label$1;
                    case 17:
                        $0_1 = 176;
                        break label$1;
                    case 18:
                        $0_1 = 192;
                        break label$1;
                    case 19:
                        $0_1 = 208;
                        break label$1;
                    case 20:
                        $0_1 = 224;
                        break label$1;
                    case 21:
                    case 53:
                        break label$2;
                    default:
                        break label$1;
                }
            }
            $0_1 = 240;
        }
        label$22: {
            switch (((this.HEAP8[(($3_1 + 4448) | 0) >> 0] | 0) + -49) | 0 | 0) {
                case 0:
                    return $0_1 | 1 | 0 | 0;
                case 1:
                    return $0_1 | 2 | 0 | 0;
                case 2:
                    return $0_1 | 3 | 0 | 0;
                case 3:
                    return $0_1 | 4 | 0 | 0;
                case 4:
                    return $0_1 | 5 | 0 | 0;
                case 5:
                    return $0_1 | 6 | 0 | 0;
                case 6:
                    return $0_1 | 7 | 0 | 0;
                case 7:
                    return $0_1 | 8 | 0 | 0;
                case 8:
                    return $0_1 | 9 | 0 | 0;
                case 48:
                    return $0_1 | 10 | 0 | 0;
                case 49:
                    return $0_1 | 11 | 0 | 0;
                case 50:
                    return $0_1 | 12 | 0 | 0;
                case 51:
                    return $0_1 | 13 | 0 | 0;
                case 52:
                    return $0_1 | 14 | 0 | 0;
                case 16:
                    return $0_1 | 10 | 0 | 0;
                case 17:
                    return $0_1 | 11 | 0 | 0;
                case 18:
                    return $0_1 | 12 | 0 | 0;
                case 19:
                    return $0_1 | 13 | 0 | 0;
                case 20:
                    return $0_1 | 14 | 0 | 0;
                case 21:
                case 53:
                    $1_1 = 15;
                    break;
                default:
                    break label$22;
            }
        }
        return $0_1 | $1_1 | 0 | 0;
    }

    $5($0_1) {
        $0_1 = $0_1 | 0;
        var $1_1 = 0;
        $1_1 = (this.global$0 - 16) | 0;
        this.global$0 = $1_1;
        label$1: {
            this.HEAP32[(($1_1 + 12) | 0) >> 2] = 0;
            this.HEAP32[(($1_1 + 4) | 0) >> 2] = $0_1;
            this.HEAP32[$1_1 >> 2] = $0_1;
            this.HEAP32[(($1_1 + 8) | 0) >> 2] = ($0_1 + 1) | 0;
        }
        $0_1 = this.$1038($1_1 | 0) | 0;
        this.global$0 = ($1_1 + 16) | 0;
        return $0_1 | 0;
    }
    $1038($0_1) {
        $0_1 = $0_1 | 0;
        var $2_1 = 0,
            $1_1 = 0,
            $26_1 = 0,
            $28_1 = 0;
        $2_1 = (this.global$0 - 16) | 0;
        this.global$0 = $2_1;
        this.HEAP32[(($2_1 + 8) | 0) >> 2] = this.HEAP32[(($0_1 + 4) | 0) >> 2] | 0;
        if (!(this.HEAPU8[(this.HEAP32[(($2_1 + 8) | 0) >> 2] | 0) >> 0] | 0)) {
            label$3: {
                label$4: {
                    $0_1 = this.HEAP32[(($0_1 + 8) | 0) >> 2] | 0;
                    $1_1 = this.HEAPU8[$0_1 >> 0] | 0;
                    if (($1_1 | 0) != (1 | 0)) {
                        if (($1_1 & 2) | 0) {
                            break label$4;
                        }
                        this.HEAP8[$0_1 >> 0] = 2;
                        $26_1 = 1;
                    } else {
                        $26_1 = 0;
                    }
                    $28_1 = $26_1;
                    break label$3;
                }
                throw new Error('abort');
            }
            $1_1 = $28_1;
        }
        this.global$0 = ($2_1 + 16) | 0;
        return $1_1 | 0;
    }

    $470($0_1, $1_1, $2_1) {
        $0_1 = $0_1 | 0;
        $1_1 = $1_1 | 0;
        $2_1 = $2_1 | 0;
        var i64toi32_i32$0 = 0,
            i64toi32_i32$1 = 0,
            i64toi32_i32$5 = 0,
            i64toi32_i32$2 = 0,
            i64toi32_i32$4 = 0,
            $3_1 = 0,
            i64toi32_i32$3 = 0,
            $5_1 = 0,
            $6_1 = 0,
            $4_1 = 0,
            $7$hi = 0,
            $8$hi = 0,
            $9$hi = 0,
            $7_1 = 0,
            $8_1 = 0,
            $9_1 = 0,
            $42_1 = 0,
            $45_1 = 0,
            $45$hi = 0,
            $46$hi = 0,
            $48$hi = 0;
        label$1: {
            $3_1 = this.HEAP32[$0_1 >> 2] | 0;
            $1_1 = ((this.HEAP32[$1_1 >> 2] | 0) + (($3_1 ^ -1) | 0)) | 0;
            if (!$1_1) {
                break label$1;
            }
            $4_1 = this.$40(17 | 0) | 0;
            $5_1 = this.$40(13 | 0) | 0;
            $6_1 = this.$40(4 | 0) | 0;
            i64toi32_i32$0 = 0;
            $7_1 = ((((((this.$40(5 | 0) | 0) << 16) | 0 | (($6_1 << 24) | 0) | 0 | (((this.$40(6 | 0) | 0) << 8) | 0) | 0 | (this.$40(7 | 0) | 0) | 0) >>> 0) % (382739 >>> 0) | 0) ^ 2147483647) | 0;
            $7$hi = i64toi32_i32$0;
            i64toi32_i32$0 = 0;
            i64toi32_i32$1 = 0;
            i64toi32_i32$1 = this.__wasm_i64_mul($5_1 | 0, i64toi32_i32$0 | 0, 7 | 0, i64toi32_i32$1 | 0) | 0;
            i64toi32_i32$0 = this.i64toi32_i32$HIGH_BITS;
            $8_1 = i64toi32_i32$1;
            $8$hi = i64toi32_i32$0;
            i64toi32_i32$0 = 0;
            i64toi32_i32$1 = 0;
            i64toi32_i32$1 = this.__wasm_i64_mul($4_1 | 0, i64toi32_i32$0 | 0, 387 | 0, i64toi32_i32$1 | 0) | 0;
            i64toi32_i32$0 = this.i64toi32_i32$HIGH_BITS;
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
            label$2: while (1) {
                $42_1 = $2_1;
                i64toi32_i32$5 = $9$hi;
                i64toi32_i32$0 = $2_1;
                i64toi32_i32$5 = this.HEAP32[i64toi32_i32$0 >> 2] | 0;
                i64toi32_i32$2 = 0;
                $45_1 = i64toi32_i32$5;
                $45$hi = i64toi32_i32$2;
                i64toi32_i32$2 = $9$hi;
                i64toi32_i32$5 = $45$hi;
                i64toi32_i32$5 = this.__wasm_i64_mul($9_1 | 0, i64toi32_i32$2 | 0, $45_1 | 0, i64toi32_i32$5 | 0) | 0;
                i64toi32_i32$2 = this.i64toi32_i32$HIGH_BITS;
                $46$hi = i64toi32_i32$2;
                i64toi32_i32$2 = $8$hi;
                i64toi32_i32$2 = $46$hi;
                i64toi32_i32$0 = i64toi32_i32$5;
                i64toi32_i32$5 = $8$hi;
                i64toi32_i32$3 = $8_1;
                i64toi32_i32$1 = (i64toi32_i32$0 + i64toi32_i32$3) | 0;
                i64toi32_i32$4 = (i64toi32_i32$2 + i64toi32_i32$5) | 0;
                if (i64toi32_i32$1 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$4 = (i64toi32_i32$4 + 1) | 0;
                }
                $48$hi = i64toi32_i32$4;
                i64toi32_i32$4 = $7$hi;
                i64toi32_i32$4 = $48$hi;
                i64toi32_i32$0 = $7$hi;
                i64toi32_i32$0 = this.__wasm_i64_urem(i64toi32_i32$1 | 0, i64toi32_i32$4 | 0, $7_1 | 0, i64toi32_i32$0 | 0) | 0;
                i64toi32_i32$4 = this.i64toi32_i32$HIGH_BITS;
                $4_1 = i64toi32_i32$0;
                this.HEAP32[$42_1 >> 2] = i64toi32_i32$0;
                $5_1 = ($1_1 + $3_1) | 0;
                $6_1 = this.HEAPU8[$5_1 >> 0] | 0;
                $3_1 = ($3_1 + ((i64toi32_i32$0 >>> 0) % ((($1_1 + 1) | 0) >>> 0) | 0)) | 0;
                this.HEAP8[$5_1 >> 0] = this.HEAPU8[$3_1 >> 0] | 0;
                this.HEAP8[$3_1 >> 0] = $6_1;
                $1_1 = ($1_1 + -1) | 0;
                if (!$1_1) {
                    break label$1;
                }
                $3_1 = this.HEAP32[$0_1 >> 2] | 0;
                continue label$2;
            }
        }
    }

    $4($0_1) {
        $0_1 = $0_1 | 0;
        var $1_1 = 0;
        $1_1 = (this.global$0 - 16) | 0;
        this.global$0 = $1_1;
        label$1: {
            this.HEAP32[(($1_1 + 12) | 0) >> 2] = 0;
            this.HEAP32[(($1_1 + 4) | 0) >> 2] = $0_1;
            this.HEAP32[$1_1 >> 2] = $0_1;
            this.HEAP32[(($1_1 + 8) | 0) >> 2] = ($0_1 + 1) | 0;
        }
        this.$1037($1_1 | 0);
        this.global$0 = ($1_1 + 16) | 0;
    }
    $1037($0_1) {
        $0_1 = $0_1 | 0;
        var $1_1 = 0;
        $1_1 = (this.global$0 - 16) | 0;
        this.global$0 = $1_1;
        this.HEAP32[(($1_1 + 8) | 0) >> 2] = this.HEAP32[(($0_1 + 4) | 0) >> 2] | 0;
        this.HEAP8[(this.HEAP32[(($1_1 + 8) | 0) >> 2] | 0) >> 0] = 1;
        this.HEAP8[(this.HEAP32[(($0_1 + 8) | 0) >> 2] | 0) >> 0] = 1;
        this.global$0 = ($1_1 + 16) | 0;
    }

    __wasm_i64_mul(var$0, var$0$hi, var$1, var$1$hi) {
        var$0 = var$0 | 0;
        var$0$hi = var$0$hi | 0;
        var$1 = var$1 | 0;
        var$1$hi = var$1$hi | 0;
        var i64toi32_i32$0 = 0,
            i64toi32_i32$1 = 0;
        i64toi32_i32$0 = var$0$hi;
        i64toi32_i32$0 = var$1$hi;
        i64toi32_i32$0 = var$0$hi;
        i64toi32_i32$1 = var$1$hi;
        i64toi32_i32$1 = this._ZN17compiler_builtins3int3mul3Mul3mul17h070e9a1c69faec5bE(var$0 | 0, i64toi32_i32$0 | 0, var$1 | 0, i64toi32_i32$1 | 0) | 0;
        i64toi32_i32$0 = this.i64toi32_i32$HIGH_BITS;
        this.i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
        return i64toi32_i32$1 | 0;
    }
    _ZN17compiler_builtins3int3mul3Mul3mul17h070e9a1c69faec5bE(var$0, var$0$hi, var$1, var$1$hi) {
        var$0 = var$0 | 0;
        var$0$hi = var$0$hi | 0;
        var$1 = var$1 | 0;
        var$1$hi = var$1$hi | 0;
        var i64toi32_i32$4 = 0,
            i64toi32_i32$0 = 0,
            i64toi32_i32$1 = 0,
            var$2 = 0,
            i64toi32_i32$2 = 0,
            i64toi32_i32$3 = 0,
            var$3 = 0,
            var$4 = 0,
            var$5 = 0,
            $21_1 = 0,
            $22_1 = 0,
            var$6 = 0,
            $24_1 = 0,
            $17_1 = 0,
            $18_1 = 0,
            $23_1 = 0,
            $29_1 = 0,
            $45_1 = 0,
            $56$hi = 0,
            $62$hi = 0;
        i64toi32_i32$0 = var$1$hi;
        var$2 = var$1;
        var$4 = (var$2 >>> 16) | 0;
        i64toi32_i32$0 = var$0$hi;
        var$3 = var$0;
        var$5 = (var$3 >>> 16) | 0;
        $17_1 = Math.imul(var$4, var$5);
        $18_1 = var$2;
        i64toi32_i32$2 = var$3;
        i64toi32_i32$1 = 0;
        i64toi32_i32$3 = 32;
        i64toi32_i32$4 = (i64toi32_i32$3 & 31) | 0;
        if (32 >>> 0 <= ((i64toi32_i32$3 & 63) | 0) >>> 0) {
            i64toi32_i32$1 = 0;
            $21_1 = (i64toi32_i32$0 >>> i64toi32_i32$4) | 0;
        } else {
            i64toi32_i32$1 = (i64toi32_i32$0 >>> i64toi32_i32$4) | 0;
            $21_1 = (((((((1 << i64toi32_i32$4) | 0) - 1) | 0) & i64toi32_i32$0) | 0) << ((32 - i64toi32_i32$4) | 0)) | 0 | ((i64toi32_i32$2 >>> i64toi32_i32$4) | 0) | 0;
        }
        $23_1 = ($17_1 + Math.imul($18_1, $21_1)) | 0;
        i64toi32_i32$1 = var$1$hi;
        i64toi32_i32$0 = var$1;
        i64toi32_i32$2 = 0;
        i64toi32_i32$3 = 32;
        i64toi32_i32$4 = (i64toi32_i32$3 & 31) | 0;
        if (32 >>> 0 <= ((i64toi32_i32$3 & 63) | 0) >>> 0) {
            i64toi32_i32$2 = 0;
            $22_1 = (i64toi32_i32$1 >>> i64toi32_i32$4) | 0;
        } else {
            i64toi32_i32$2 = (i64toi32_i32$1 >>> i64toi32_i32$4) | 0;
            $22_1 = (((((((1 << i64toi32_i32$4) | 0) - 1) | 0) & i64toi32_i32$1) | 0) << ((32 - i64toi32_i32$4) | 0)) | 0 | ((i64toi32_i32$0 >>> i64toi32_i32$4) | 0) | 0;
        }
        $29_1 = ($23_1 + Math.imul($22_1, var$3)) | 0;
        var$2 = (var$2 & 65535) | 0;
        var$3 = (var$3 & 65535) | 0;
        var$6 = Math.imul(var$2, var$3);
        var$2 = (((var$6 >>> 16) | 0) + Math.imul(var$2, var$5)) | 0;
        $45_1 = ($29_1 + ((var$2 >>> 16) | 0)) | 0;
        var$2 = (((var$2 & 65535) | 0) + Math.imul(var$4, var$3)) | 0;
        i64toi32_i32$2 = 0;
        i64toi32_i32$1 = ($45_1 + ((var$2 >>> 16) | 0)) | 0;
        i64toi32_i32$0 = 0;
        i64toi32_i32$3 = 32;
        i64toi32_i32$4 = (i64toi32_i32$3 & 31) | 0;
        if (32 >>> 0 <= ((i64toi32_i32$3 & 63) | 0) >>> 0) {
            i64toi32_i32$0 = (i64toi32_i32$1 << i64toi32_i32$4) | 0;
            $24_1 = 0;
        } else {
            i64toi32_i32$0 = (((((1 << i64toi32_i32$4) | 0) - 1) | 0) & ((i64toi32_i32$1 >>> ((32 - i64toi32_i32$4) | 0)) | 0)) | 0 | ((i64toi32_i32$2 << i64toi32_i32$4) | 0) | 0;
            $24_1 = (i64toi32_i32$1 << i64toi32_i32$4) | 0;
        }
        $56$hi = i64toi32_i32$0;
        i64toi32_i32$0 = 0;
        $62$hi = i64toi32_i32$0;
        i64toi32_i32$0 = $56$hi;
        i64toi32_i32$2 = $24_1;
        i64toi32_i32$1 = $62$hi;
        i64toi32_i32$3 = (var$2 << 16) | 0 | ((var$6 & 65535) | 0) | 0;
        i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
        i64toi32_i32$2 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
        this.i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
        return i64toi32_i32$2 | 0;
    }

    __wasm_i64_urem(var$0, var$0$hi, var$1, var$1$hi) {
        var$0 = var$0 | 0;
        var$0$hi = var$0$hi | 0;
        var$1 = var$1 | 0;
        var$1$hi = var$1$hi | 0;
        var i64toi32_i32$0 = 0,
            i64toi32_i32$1 = 0;
        i64toi32_i32$0 = var$0$hi;
        i64toi32_i32$0 = var$1$hi;
        i64toi32_i32$0 = var$0$hi;
        i64toi32_i32$1 = var$1$hi;
        i64toi32_i32$1 = this._ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E(var$0 | 0, i64toi32_i32$0 | 0, var$1 | 0, i64toi32_i32$1 | 0) | 0;
        i64toi32_i32$0 = this.i64toi32_i32$HIGH_BITS;
        i64toi32_i32$0 = this.__wasm_intrinsics_temp_i64$hi;
        i64toi32_i32$1 = this.__wasm_intrinsics_temp_i64;
        this.i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
        return i64toi32_i32$1 | 0;
    }
    _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E(var$0, var$0$hi, var$1, var$1$hi) {
        var$0 = var$0 | 0;
        var$0$hi = var$0$hi | 0;
        var$1 = var$1 | 0;
        var$1$hi = var$1$hi | 0;
        var i64toi32_i32$2 = 0,
            i64toi32_i32$3 = 0,
            i64toi32_i32$4 = 0,
            i64toi32_i32$1 = 0,
            i64toi32_i32$0 = 0,
            i64toi32_i32$5 = 0,
            var$2 = 0,
            var$3 = 0,
            var$4 = 0,
            var$5 = 0,
            var$5$hi = 0,
            var$6 = 0,
            var$6$hi = 0,
            i64toi32_i32$6 = 0,
            $37_1 = 0,
            $38_1 = 0,
            $39_1 = 0,
            $40_1 = 0,
            $41_1 = 0,
            $42_1 = 0,
            $43_1 = 0,
            $44_1 = 0,
            var$8$hi = 0,
            $45_1 = 0,
            $46_1 = 0,
            $47_1 = 0,
            $48_1 = 0,
            var$7$hi = 0,
            $49_1 = 0,
            $63$hi = 0,
            $65_1 = 0,
            $65$hi = 0,
            $120$hi = 0,
            $129$hi = 0,
            $134$hi = 0,
            var$8 = 0,
            $140_1 = 0,
            $140$hi = 0,
            $142$hi = 0,
            $144_1 = 0,
            $144$hi = 0,
            $151_1 = 0,
            $151$hi = 0,
            $154$hi = 0,
            var$7 = 0,
            $165$hi = 0;
        label$1: {
            label$2: {
                label$3: {
                    label$4: {
                        label$5: {
                            label$6: {
                                label$7: {
                                    label$8: {
                                        label$9: {
                                            label$10: {
                                                label$11: {
                                                    i64toi32_i32$0 = var$0$hi;
                                                    i64toi32_i32$2 = var$0;
                                                    i64toi32_i32$1 = 0;
                                                    i64toi32_i32$3 = 32;
                                                    i64toi32_i32$4 = (i64toi32_i32$3 & 31) | 0;
                                                    if (32 >>> 0 <= ((i64toi32_i32$3 & 63) | 0) >>> 0) {
                                                        i64toi32_i32$1 = 0;
                                                        $37_1 = (i64toi32_i32$0 >>> i64toi32_i32$4) | 0;
                                                    } else {
                                                        i64toi32_i32$1 = (i64toi32_i32$0 >>> i64toi32_i32$4) | 0;
                                                        $37_1 = (((((((1 << i64toi32_i32$4) | 0) - 1) | 0) & i64toi32_i32$0) | 0) << ((32 - i64toi32_i32$4) | 0)) | 0 | ((i64toi32_i32$2 >>> i64toi32_i32$4) | 0) | 0;
                                                    }
                                                    var$2 = $37_1;
                                                    if (var$2) {
                                                        block: {
                                                            i64toi32_i32$1 = var$1$hi;
                                                            var$3 = var$1;
                                                            if (!var$3) {
                                                                break label$11;
                                                            }
                                                            i64toi32_i32$1 = var$1$hi;
                                                            i64toi32_i32$0 = var$1;
                                                            i64toi32_i32$2 = 0;
                                                            i64toi32_i32$3 = 32;
                                                            i64toi32_i32$4 = (i64toi32_i32$3 & 31) | 0;
                                                            if (32 >>> 0 <= ((i64toi32_i32$3 & 63) | 0) >>> 0) {
                                                                i64toi32_i32$2 = 0;
                                                                $38_1 = (i64toi32_i32$1 >>> i64toi32_i32$4) | 0;
                                                            } else {
                                                                i64toi32_i32$2 = (i64toi32_i32$1 >>> i64toi32_i32$4) | 0;
                                                                $38_1 = (((((((1 << i64toi32_i32$4) | 0) - 1) | 0) & i64toi32_i32$1) | 0) << ((32 - i64toi32_i32$4) | 0)) | 0 | ((i64toi32_i32$0 >>> i64toi32_i32$4) | 0) | 0;
                                                            }
                                                            var$4 = $38_1;
                                                            if (!var$4) {
                                                                break label$9;
                                                            }
                                                            var$2 = (Math.clz32(var$4) - Math.clz32(var$2)) | 0;
                                                            if (var$2 >>> 0 <= 31 >>> 0) {
                                                                break label$8;
                                                            }
                                                            break label$2;
                                                        }
                                                    }
                                                    i64toi32_i32$2 = var$1$hi;
                                                    i64toi32_i32$1 = var$1;
                                                    i64toi32_i32$0 = 1;
                                                    i64toi32_i32$3 = 0;
                                                    if ((i64toi32_i32$2 >>> 0 > i64toi32_i32$0 >>> 0) | ((((i64toi32_i32$2 | 0) == (i64toi32_i32$0 | 0)) & (i64toi32_i32$1 >>> 0 >= i64toi32_i32$3 >>> 0)) | 0) | 0) {
                                                        break label$2;
                                                    }
                                                    i64toi32_i32$1 = var$0$hi;
                                                    var$2 = var$0;
                                                    i64toi32_i32$1 = var$1$hi;
                                                    var$3 = var$1;
                                                    var$2 = ((var$2 >>> 0) / (var$3 >>> 0)) | 0;
                                                    i64toi32_i32$1 = 0;
                                                    this.__wasm_intrinsics_temp_i64 = (var$0 - Math.imul(var$2, var$3)) | 0;
                                                    this.__wasm_intrinsics_temp_i64$hi = i64toi32_i32$1;
                                                    i64toi32_i32$1 = 0;
                                                    i64toi32_i32$2 = var$2;
                                                    this.i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
                                                    return i64toi32_i32$2 | 0;
                                                }
                                                i64toi32_i32$2 = var$1$hi;
                                                i64toi32_i32$3 = var$1;
                                                i64toi32_i32$1 = 0;
                                                i64toi32_i32$0 = 32;
                                                i64toi32_i32$4 = (i64toi32_i32$0 & 31) | 0;
                                                if (32 >>> 0 <= ((i64toi32_i32$0 & 63) | 0) >>> 0) {
                                                    i64toi32_i32$1 = 0;
                                                    $39_1 = (i64toi32_i32$2 >>> i64toi32_i32$4) | 0;
                                                } else {
                                                    i64toi32_i32$1 = (i64toi32_i32$2 >>> i64toi32_i32$4) | 0;
                                                    $39_1 = (((((((1 << i64toi32_i32$4) | 0) - 1) | 0) & i64toi32_i32$2) | 0) << ((32 - i64toi32_i32$4) | 0)) | 0 | ((i64toi32_i32$3 >>> i64toi32_i32$4) | 0) | 0;
                                                }
                                                var$3 = $39_1;
                                                i64toi32_i32$1 = var$0$hi;
                                                if (!var$0) {
                                                    break label$7;
                                                }
                                                if (!var$3) {
                                                    break label$6;
                                                }
                                                var$4 = (var$3 + -1) | 0;
                                                if ((var$4 & var$3) | 0) {
                                                    break label$6;
                                                }
                                                i64toi32_i32$1 = 0;
                                                i64toi32_i32$2 = (var$4 & var$2) | 0;
                                                i64toi32_i32$3 = 0;
                                                i64toi32_i32$0 = 32;
                                                i64toi32_i32$4 = (i64toi32_i32$0 & 31) | 0;
                                                if (32 >>> 0 <= ((i64toi32_i32$0 & 63) | 0) >>> 0) {
                                                    i64toi32_i32$3 = (i64toi32_i32$2 << i64toi32_i32$4) | 0;
                                                    $40_1 = 0;
                                                } else {
                                                    i64toi32_i32$3 = (((((1 << i64toi32_i32$4) | 0) - 1) | 0) & ((i64toi32_i32$2 >>> ((32 - i64toi32_i32$4) | 0)) | 0)) | 0 | ((i64toi32_i32$1 << i64toi32_i32$4) | 0) | 0;
                                                    $40_1 = (i64toi32_i32$2 << i64toi32_i32$4) | 0;
                                                }
                                                $63$hi = i64toi32_i32$3;
                                                i64toi32_i32$3 = var$0$hi;
                                                i64toi32_i32$1 = var$0;
                                                i64toi32_i32$2 = 0;
                                                i64toi32_i32$0 = -1;
                                                i64toi32_i32$2 = (i64toi32_i32$3 & i64toi32_i32$2) | 0;
                                                $65_1 = (i64toi32_i32$1 & i64toi32_i32$0) | 0;
                                                $65$hi = i64toi32_i32$2;
                                                i64toi32_i32$2 = $63$hi;
                                                i64toi32_i32$3 = $40_1;
                                                i64toi32_i32$1 = $65$hi;
                                                i64toi32_i32$0 = $65_1;
                                                i64toi32_i32$1 = i64toi32_i32$2 | i64toi32_i32$1 | 0;
                                                this.__wasm_intrinsics_temp_i64 = i64toi32_i32$3 | i64toi32_i32$0 | 0;
                                                this.__wasm_intrinsics_temp_i64$hi = i64toi32_i32$1;
                                                i64toi32_i32$1 = 0;
                                                i64toi32_i32$3 = (var$2 >>> (((this.__wasm_ctz_i32(var$3 | 0) | 0) & 31) | 0)) | 0;
                                                this.i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
                                                return i64toi32_i32$3 | 0;
                                            }
                                        }
                                        var$4 = (var$3 + -1) | 0;
                                        if (!((var$4 & var$3) | 0)) {
                                            break label$5;
                                        }
                                        var$2 = (((Math.clz32(var$3) + 33) | 0) - Math.clz32(var$2)) | 0;
                                        var$3 = (0 - var$2) | 0;
                                        break label$3;
                                    }
                                    var$3 = (63 - var$2) | 0;
                                    var$2 = (var$2 + 1) | 0;
                                    break label$3;
                                }
                                var$4 = ((var$2 >>> 0) / (var$3 >>> 0)) | 0;
                                i64toi32_i32$3 = 0;
                                i64toi32_i32$2 = (var$2 - Math.imul(var$4, var$3)) | 0;
                                i64toi32_i32$1 = 0;
                                i64toi32_i32$0 = 32;
                                i64toi32_i32$4 = (i64toi32_i32$0 & 31) | 0;
                                if (32 >>> 0 <= ((i64toi32_i32$0 & 63) | 0) >>> 0) {
                                    i64toi32_i32$1 = (i64toi32_i32$2 << i64toi32_i32$4) | 0;
                                    $41_1 = 0;
                                } else {
                                    i64toi32_i32$1 = (((((1 << i64toi32_i32$4) | 0) - 1) | 0) & ((i64toi32_i32$2 >>> ((32 - i64toi32_i32$4) | 0)) | 0)) | 0 | ((i64toi32_i32$3 << i64toi32_i32$4) | 0) | 0;
                                    $41_1 = (i64toi32_i32$2 << i64toi32_i32$4) | 0;
                                }
                                this.__wasm_intrinsics_temp_i64 = $41_1;
                                this.__wasm_intrinsics_temp_i64$hi = i64toi32_i32$1;
                                i64toi32_i32$1 = 0;
                                i64toi32_i32$2 = var$4;
                                this.i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
                                return i64toi32_i32$2 | 0;
                            }
                            var$2 = (Math.clz32(var$3) - Math.clz32(var$2)) | 0;
                            if (var$2 >>> 0 < 31 >>> 0) {
                                break label$4;
                            }
                            break label$2;
                        }
                        i64toi32_i32$2 = var$0$hi;
                        i64toi32_i32$2 = 0;
                        this.__wasm_intrinsics_temp_i64 = (var$4 & var$0) | 0;
                        this.__wasm_intrinsics_temp_i64$hi = i64toi32_i32$2;
                        if ((var$3 | 0) == (1 | 0)) {
                            break label$1;
                        }
                        i64toi32_i32$2 = var$0$hi;
                        i64toi32_i32$2 = 0;
                        $120$hi = i64toi32_i32$2;
                        i64toi32_i32$2 = var$0$hi;
                        i64toi32_i32$3 = var$0;
                        i64toi32_i32$1 = $120$hi;
                        i64toi32_i32$0 = this.__wasm_ctz_i32(var$3 | 0) | 0;
                        i64toi32_i32$4 = (i64toi32_i32$0 & 31) | 0;
                        if (32 >>> 0 <= ((i64toi32_i32$0 & 63) | 0) >>> 0) {
                            i64toi32_i32$1 = 0;
                            $42_1 = (i64toi32_i32$2 >>> i64toi32_i32$4) | 0;
                        } else {
                            i64toi32_i32$1 = (i64toi32_i32$2 >>> i64toi32_i32$4) | 0;
                            $42_1 = (((((((1 << i64toi32_i32$4) | 0) - 1) | 0) & i64toi32_i32$2) | 0) << ((32 - i64toi32_i32$4) | 0)) | 0 | ((i64toi32_i32$3 >>> i64toi32_i32$4) | 0) | 0;
                        }
                        i64toi32_i32$3 = $42_1;
                        this.i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
                        return i64toi32_i32$3 | 0;
                    }
                    var$3 = (63 - var$2) | 0;
                    var$2 = (var$2 + 1) | 0;
                }
                i64toi32_i32$3 = var$0$hi;
                i64toi32_i32$3 = 0;
                $129$hi = i64toi32_i32$3;
                i64toi32_i32$3 = var$0$hi;
                i64toi32_i32$2 = var$0;
                i64toi32_i32$1 = $129$hi;
                i64toi32_i32$0 = (var$2 & 63) | 0;
                i64toi32_i32$4 = (i64toi32_i32$0 & 31) | 0;
                if (32 >>> 0 <= ((i64toi32_i32$0 & 63) | 0) >>> 0) {
                    i64toi32_i32$1 = 0;
                    $43_1 = (i64toi32_i32$3 >>> i64toi32_i32$4) | 0;
                } else {
                    i64toi32_i32$1 = (i64toi32_i32$3 >>> i64toi32_i32$4) | 0;
                    $43_1 = (((((((1 << i64toi32_i32$4) | 0) - 1) | 0) & i64toi32_i32$3) | 0) << ((32 - i64toi32_i32$4) | 0)) | 0 | ((i64toi32_i32$2 >>> i64toi32_i32$4) | 0) | 0;
                }
                var$5 = $43_1;
                var$5$hi = i64toi32_i32$1;
                i64toi32_i32$1 = var$0$hi;
                i64toi32_i32$1 = 0;
                $134$hi = i64toi32_i32$1;
                i64toi32_i32$1 = var$0$hi;
                i64toi32_i32$3 = var$0;
                i64toi32_i32$2 = $134$hi;
                i64toi32_i32$0 = (var$3 & 63) | 0;
                i64toi32_i32$4 = (i64toi32_i32$0 & 31) | 0;
                if (32 >>> 0 <= ((i64toi32_i32$0 & 63) | 0) >>> 0) {
                    i64toi32_i32$2 = (i64toi32_i32$3 << i64toi32_i32$4) | 0;
                    $44_1 = 0;
                } else {
                    i64toi32_i32$2 = (((((1 << i64toi32_i32$4) | 0) - 1) | 0) & ((i64toi32_i32$3 >>> ((32 - i64toi32_i32$4) | 0)) | 0)) | 0 | ((i64toi32_i32$1 << i64toi32_i32$4) | 0) | 0;
                    $44_1 = (i64toi32_i32$3 << i64toi32_i32$4) | 0;
                }
                var$0 = $44_1;
                var$0$hi = i64toi32_i32$2;
                label$13: {
                    if (var$2) {
                        block3: {
                            i64toi32_i32$2 = var$1$hi;
                            i64toi32_i32$1 = var$1;
                            i64toi32_i32$3 = -1;
                            i64toi32_i32$0 = -1;
                            i64toi32_i32$4 = (i64toi32_i32$1 + i64toi32_i32$0) | 0;
                            i64toi32_i32$5 = (i64toi32_i32$2 + i64toi32_i32$3) | 0;
                            if (i64toi32_i32$4 >>> 0 < i64toi32_i32$0 >>> 0) {
                                i64toi32_i32$5 = (i64toi32_i32$5 + 1) | 0;
                            }
                            var$8 = i64toi32_i32$4;
                            var$8$hi = i64toi32_i32$5;
                            label$15: while (1) {
                                i64toi32_i32$5 = var$5$hi;
                                i64toi32_i32$2 = var$5;
                                i64toi32_i32$1 = 0;
                                i64toi32_i32$0 = 1;
                                i64toi32_i32$3 = (i64toi32_i32$0 & 31) | 0;
                                if (32 >>> 0 <= ((i64toi32_i32$0 & 63) | 0) >>> 0) {
                                    i64toi32_i32$1 = (i64toi32_i32$2 << i64toi32_i32$3) | 0;
                                    $45_1 = 0;
                                } else {
                                    i64toi32_i32$1 = (((((1 << i64toi32_i32$3) | 0) - 1) | 0) & ((i64toi32_i32$2 >>> ((32 - i64toi32_i32$3) | 0)) | 0)) | 0 | ((i64toi32_i32$5 << i64toi32_i32$3) | 0) | 0;
                                    $45_1 = (i64toi32_i32$2 << i64toi32_i32$3) | 0;
                                }
                                $140_1 = $45_1;
                                $140$hi = i64toi32_i32$1;
                                i64toi32_i32$1 = var$0$hi;
                                i64toi32_i32$5 = var$0;
                                i64toi32_i32$2 = 0;
                                i64toi32_i32$0 = 63;
                                i64toi32_i32$3 = (i64toi32_i32$0 & 31) | 0;
                                if (32 >>> 0 <= ((i64toi32_i32$0 & 63) | 0) >>> 0) {
                                    i64toi32_i32$2 = 0;
                                    $46_1 = (i64toi32_i32$1 >>> i64toi32_i32$3) | 0;
                                } else {
                                    i64toi32_i32$2 = (i64toi32_i32$1 >>> i64toi32_i32$3) | 0;
                                    $46_1 = (((((((1 << i64toi32_i32$3) | 0) - 1) | 0) & i64toi32_i32$1) | 0) << ((32 - i64toi32_i32$3) | 0)) | 0 | ((i64toi32_i32$5 >>> i64toi32_i32$3) | 0) | 0;
                                }
                                $142$hi = i64toi32_i32$2;
                                i64toi32_i32$2 = $140$hi;
                                i64toi32_i32$1 = $140_1;
                                i64toi32_i32$5 = $142$hi;
                                i64toi32_i32$0 = $46_1;
                                i64toi32_i32$5 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
                                var$5 = i64toi32_i32$1 | i64toi32_i32$0 | 0;
                                var$5$hi = i64toi32_i32$5;
                                $144_1 = var$5;
                                $144$hi = i64toi32_i32$5;
                                i64toi32_i32$5 = var$8$hi;
                                i64toi32_i32$5 = var$5$hi;
                                i64toi32_i32$5 = var$8$hi;
                                i64toi32_i32$2 = var$8;
                                i64toi32_i32$1 = var$5$hi;
                                i64toi32_i32$0 = var$5;
                                i64toi32_i32$3 = (i64toi32_i32$2 - i64toi32_i32$0) | 0;
                                i64toi32_i32$6 = i64toi32_i32$2 >>> 0 < i64toi32_i32$0 >>> 0;
                                i64toi32_i32$4 = (i64toi32_i32$6 + i64toi32_i32$1) | 0;
                                i64toi32_i32$4 = (i64toi32_i32$5 - i64toi32_i32$4) | 0;
                                i64toi32_i32$5 = i64toi32_i32$3;
                                i64toi32_i32$2 = 0;
                                i64toi32_i32$0 = 63;
                                i64toi32_i32$1 = (i64toi32_i32$0 & 31) | 0;
                                if (32 >>> 0 <= ((i64toi32_i32$0 & 63) | 0) >>> 0) {
                                    i64toi32_i32$2 = (i64toi32_i32$4 >> 31) | 0;
                                    $47_1 = (i64toi32_i32$4 >> i64toi32_i32$1) | 0;
                                } else {
                                    i64toi32_i32$2 = (i64toi32_i32$4 >> i64toi32_i32$1) | 0;
                                    $47_1 = (((((((1 << i64toi32_i32$1) | 0) - 1) | 0) & i64toi32_i32$4) | 0) << ((32 - i64toi32_i32$1) | 0)) | 0 | ((i64toi32_i32$5 >>> i64toi32_i32$1) | 0) | 0;
                                }
                                var$6 = $47_1;
                                var$6$hi = i64toi32_i32$2;
                                i64toi32_i32$2 = var$1$hi;
                                i64toi32_i32$2 = var$6$hi;
                                i64toi32_i32$4 = var$6;
                                i64toi32_i32$5 = var$1$hi;
                                i64toi32_i32$0 = var$1;
                                i64toi32_i32$5 = (i64toi32_i32$2 & i64toi32_i32$5) | 0;
                                $151_1 = (i64toi32_i32$4 & i64toi32_i32$0) | 0;
                                $151$hi = i64toi32_i32$5;
                                i64toi32_i32$5 = $144$hi;
                                i64toi32_i32$2 = $144_1;
                                i64toi32_i32$4 = $151$hi;
                                i64toi32_i32$0 = $151_1;
                                i64toi32_i32$1 = (i64toi32_i32$2 - i64toi32_i32$0) | 0;
                                i64toi32_i32$6 = i64toi32_i32$2 >>> 0 < i64toi32_i32$0 >>> 0;
                                i64toi32_i32$3 = (i64toi32_i32$6 + i64toi32_i32$4) | 0;
                                i64toi32_i32$3 = (i64toi32_i32$5 - i64toi32_i32$3) | 0;
                                var$5 = i64toi32_i32$1;
                                var$5$hi = i64toi32_i32$3;
                                i64toi32_i32$3 = var$0$hi;
                                i64toi32_i32$5 = var$0;
                                i64toi32_i32$2 = 0;
                                i64toi32_i32$0 = 1;
                                i64toi32_i32$4 = (i64toi32_i32$0 & 31) | 0;
                                if (32 >>> 0 <= ((i64toi32_i32$0 & 63) | 0) >>> 0) {
                                    i64toi32_i32$2 = (i64toi32_i32$5 << i64toi32_i32$4) | 0;
                                    $48_1 = 0;
                                } else {
                                    i64toi32_i32$2 = (((((1 << i64toi32_i32$4) | 0) - 1) | 0) & ((i64toi32_i32$5 >>> ((32 - i64toi32_i32$4) | 0)) | 0)) | 0 | ((i64toi32_i32$3 << i64toi32_i32$4) | 0) | 0;
                                    $48_1 = (i64toi32_i32$5 << i64toi32_i32$4) | 0;
                                }
                                $154$hi = i64toi32_i32$2;
                                i64toi32_i32$2 = var$7$hi;
                                i64toi32_i32$2 = $154$hi;
                                i64toi32_i32$3 = $48_1;
                                i64toi32_i32$5 = var$7$hi;
                                i64toi32_i32$0 = var$7;
                                i64toi32_i32$5 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
                                var$0 = i64toi32_i32$3 | i64toi32_i32$0 | 0;
                                var$0$hi = i64toi32_i32$5;
                                i64toi32_i32$5 = var$6$hi;
                                i64toi32_i32$2 = var$6;
                                i64toi32_i32$3 = 0;
                                i64toi32_i32$0 = 1;
                                i64toi32_i32$3 = (i64toi32_i32$5 & i64toi32_i32$3) | 0;
                                var$6 = (i64toi32_i32$2 & i64toi32_i32$0) | 0;
                                var$6$hi = i64toi32_i32$3;
                                var$7 = var$6;
                                var$7$hi = i64toi32_i32$3;
                                var$2 = (var$2 + -1) | 0;
                                if (var$2) {
                                    continue label$15;
                                }
                                break label$15;
                            }
                            break label$13;
                        }
                    }
                }
                i64toi32_i32$3 = var$5$hi;
                this.__wasm_intrinsics_temp_i64 = var$5;
                this.__wasm_intrinsics_temp_i64$hi = i64toi32_i32$3;
                i64toi32_i32$3 = var$0$hi;
                i64toi32_i32$5 = var$0;
                i64toi32_i32$2 = 0;
                i64toi32_i32$0 = 1;
                i64toi32_i32$4 = (i64toi32_i32$0 & 31) | 0;
                if (32 >>> 0 <= ((i64toi32_i32$0 & 63) | 0) >>> 0) {
                    i64toi32_i32$2 = (i64toi32_i32$5 << i64toi32_i32$4) | 0;
                    $49_1 = 0;
                } else {
                    i64toi32_i32$2 = (((((1 << i64toi32_i32$4) | 0) - 1) | 0) & ((i64toi32_i32$5 >>> ((32 - i64toi32_i32$4) | 0)) | 0)) | 0 | ((i64toi32_i32$3 << i64toi32_i32$4) | 0) | 0;
                    $49_1 = (i64toi32_i32$5 << i64toi32_i32$4) | 0;
                }
                $165$hi = i64toi32_i32$2;
                i64toi32_i32$2 = var$6$hi;
                i64toi32_i32$2 = $165$hi;
                i64toi32_i32$3 = $49_1;
                i64toi32_i32$5 = var$6$hi;
                i64toi32_i32$0 = var$6;
                i64toi32_i32$5 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
                i64toi32_i32$3 = i64toi32_i32$3 | i64toi32_i32$0 | 0;
                this.i64toi32_i32$HIGH_BITS = i64toi32_i32$5;
                return i64toi32_i32$3 | 0;
            }
            i64toi32_i32$3 = var$0$hi;
            this.__wasm_intrinsics_temp_i64 = var$0;
            this.__wasm_intrinsics_temp_i64$hi = i64toi32_i32$3;
            i64toi32_i32$3 = 0;
            var$0 = 0;
            var$0$hi = i64toi32_i32$3;
        }
        i64toi32_i32$3 = var$0$hi;
        i64toi32_i32$5 = var$0;
        this.i64toi32_i32$HIGH_BITS = i64toi32_i32$3;
        return i64toi32_i32$5 | 0;
    }
    __wasm_ctz_i32(var$0) {
        var$0 = var$0 | 0;
        if (var$0) {
            return (31 - Math.clz32((((var$0 + -1) | 0) ^ var$0) | 0)) | 0 | 0;
        }
        return 32 | 0;
    }
}
class Serverbound {
    constructor() {
        const buffer = new ArrayBuffer(67108864);
        this.HEAP8 = new Int8Array(buffer);
        this.HEAP32 = new Int32Array(buffer);
        this.HEAPU8 = new Uint8Array(buffer);
        this.global$0 = 0;
        this.i64toi32_i32$HIGH_BITS = 0;
        this.__wasm_intrinsics_temp_i64 = 0;
        this.__wasm_intrinsics_temp_i64$hi = 0;

        this.HEAP32[((PTR_MAGIC_NUMBER_SERVERBOUND + 12) | 0) >> 2] = MAGIC_NUMBER_SERVERBOUND;
        this.HEAP8.set(new TextEncoder().encode('0c63725cbf091f3eb33c5c86738d23eaf83e5c15'), PTR_BUILD_HASH);
    }

    unshuffle(data) {
        data = new Uint8Array(data);
        this.global$0 = GLOBAL$0;

        this.HEAPU8.set(data, PTR_DATA);
        this._unshuffle(PTR_DATA, data.length, PTR_MAGIC_NUMBER_SERVERBOUND);
        return this.HEAPU8.slice(PTR_DATA, PTR_DATA + data.length);
    }
    
    _unshuffle($8_1, $5_1, $3_1) {
        $8_1 = $8_1 | 0;
        $5_1 = $5_1 | 0;
        $3_1 = $3_1 | 0;
        var i64toi32_i32$0 = 0,
            $4_1 = 0,
            $2_1 = 0,
            $7_1 = 0,
            $328_1 = 0,
            $12_1 = 0,
            $12$hi = 0,
            $332_1 = 0,
            $332$hi = 0,
            i64toi32_i32$2 = 0,
            i64toi32_i32$3 = 0,
            i64toi32_i32$4 = 0,
            i64toi32_i32$5 = 0,
            i64toi32_i32$1 = 0,
            $13_1 = 0,
            $13$hi = 0,
            $339_1 = 0,
            $339$hi = 0,
            $340_1 = 0,
            $340$hi = 0,
            $341$hi = 0,
            $14_1 = 0,
            $14$hi = 0,
            $1_1 = 0,
            $432_1 = 0,
            $435$hi = 0,
            $436$hi = 0,
            $438$hi = 0,
            $0_1 = 0;
        $1_1 = (this.global$0) | 0;
        this.global$0 = $1_1;
        label$42: {
            if (!$5_1) {
                break label$42;
            }
            $4_1 = this.HEAPU8[$8_1 >> 0] | 0;
            if (($4_1 | 0) == (0 | 0)) {
                break label$42;
            }
            $0_1 = this.$40(17 | 0) | 0;
            $2_1 = this.$40(13 | 0) | 0;
            $7_1 = this.$40(4 | 0) | 0;
            $328_1 = $3_1;
            i64toi32_i32$0 = 0;
            i64toi32_i32$1 = 0;
            i64toi32_i32$1 = this.__wasm_i64_mul($2_1 | 0, i64toi32_i32$0 | 0, 7 | 0, i64toi32_i32$1 | 0) | 0;
            i64toi32_i32$0 = this.i64toi32_i32$HIGH_BITS;
            $12_1 = i64toi32_i32$1;
            $12$hi = i64toi32_i32$0;
            $332_1 = i64toi32_i32$1;
            $332$hi = i64toi32_i32$0;
            i64toi32_i32$0 = 0;
            i64toi32_i32$1 = 0;
            i64toi32_i32$1 = this.__wasm_i64_mul($0_1 | 0, i64toi32_i32$0 | 0, 387 | 0, i64toi32_i32$1 | 0) | 0;
            i64toi32_i32$0 = this.i64toi32_i32$HIGH_BITS;
            i64toi32_i32$2 = i64toi32_i32$1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$3 = 48271;
            i64toi32_i32$4 = (i64toi32_i32$2 + i64toi32_i32$3) | 0;
            i64toi32_i32$5 = (i64toi32_i32$0 + i64toi32_i32$1) | 0;
            if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$5 = (i64toi32_i32$5 + 1) | 0;
            }
            $13_1 = i64toi32_i32$4;
            $13$hi = i64toi32_i32$5;
            i64toi32_i32$0 = $3_1;
            i64toi32_i32$5 = this.HEAP32[(($3_1 + 12) | 0) >> 2] | 0;
            i64toi32_i32$2 = 0;
            $339_1 = i64toi32_i32$5;
            $339$hi = i64toi32_i32$2;
            i64toi32_i32$2 = $13$hi;
            i64toi32_i32$5 = $339$hi;
            i64toi32_i32$5 = this.__wasm_i64_mul(i64toi32_i32$4 | 0, i64toi32_i32$2 | 0, $339_1 | 0, i64toi32_i32$5 | 0) | 0;
            i64toi32_i32$2 = this.i64toi32_i32$HIGH_BITS;
            $340_1 = i64toi32_i32$5;
            $340$hi = i64toi32_i32$2;
            i64toi32_i32$2 = $332$hi;
            i64toi32_i32$0 = $332_1;
            i64toi32_i32$5 = $340$hi;
            i64toi32_i32$3 = $340_1;
            i64toi32_i32$1 = (i64toi32_i32$0 + i64toi32_i32$3) | 0;
            i64toi32_i32$4 = (i64toi32_i32$2 + i64toi32_i32$5) | 0;
            if (i64toi32_i32$1 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$4 = (i64toi32_i32$4 + 1) | 0;
            }
            $341$hi = i64toi32_i32$4;
            i64toi32_i32$4 = 0;
            $14_1 = ((((((this.$40(5 | 0) | 0) << 16) | 0 | (($7_1 << 24) | 0) | 0 | (((this.$40(6 | 0) | 0) << 8) | 0) | 0 | (this.$40(7 | 0) | 0) | 0) >>> 0) % (382739 >>> 0) | 0) ^ 2147483647) | 0;
            $14$hi = i64toi32_i32$4;
            i64toi32_i32$4 = $341$hi;
            i64toi32_i32$0 = $14$hi;
            i64toi32_i32$0 = this.__wasm_i64_urem(i64toi32_i32$1 | 0, i64toi32_i32$4 | 0, $14_1 | 0, i64toi32_i32$0 | 0) | 0;
            i64toi32_i32$4 = this.i64toi32_i32$HIGH_BITS;
            $0_1 = i64toi32_i32$0;
            this.HEAP32[(($328_1 + 12) | 0) >> 2] = $0_1;
            label$43: {
                if (((this.HEAPU8[179604 >> 0] | 0) & 1) | 0) {
                    break label$43;
                }
                if (!(this.$5(179604 | 0) | 0)) {
                    break label$43;
                }
                label$44: {
                    if (((this.HEAPU8[179472 >> 0] | 0) & 1) | 0) {
                        break label$44;
                    }
                    if (!(this.$5(179472 | 0) | 0)) {
                        break label$44;
                    }
                    $2_1 = 0;
                    $7_1 = this.$40(4 | 0) | 0;
                    this.HEAP32[(($1_1 + 144) | 0) >> 2] = ((this.$40(5 | 0) | 0) << 16) | 0 | (($7_1 << 24) | 0) | 0 | (((this.$40(6 | 0) | 0) << 8) | 0) | 0 | (this.$40(7 | 0) | 0) | 0;
                    label$45: while (1) {
                        this.HEAP8[(($2_1 + 179476) | 0) >> 0] = $2_1;
                        $2_1 = ($2_1 + 1) | 0;
                        if (($2_1 | 0) != (128 | 0)) {
                            continue label$45;
                        }
                        break label$45;
                    }
                    this.HEAP32[(($1_1 + 188) | 0) >> 2] = 179477;
                    this.HEAP32[(($1_1 + 184) | 0) >> 2] = 179604;
                    this.$470(($1_1 + 188) | 0 | 0, ($1_1 + 184) | 0 | 0, ($1_1 + 144) | 0 | 0);
                    this.$4(179472 | 0);
                }
                $2_1 = 0;
                label$46: while (1) {
                    this.HEAP8[(((this.HEAPU8[(($2_1 + 179476) | 0) >> 0] | 0) + 179608) | 0) >> 0] = $2_1;
                    $2_1 = ($2_1 + 1) | 0;
                    if (($2_1 | 0) != (128 | 0)) {
                        continue label$46;
                    }
                    break label$46;
                }
                this.$4(179604 | 0);
            }
            $2_1 = ($0_1 & 15) | 0;
            $0_1 = 0;
            label$47: while (1) {
                $7_1 = ($0_1 | 0) == ($2_1 | 0);
                $4_1 = this.HEAPU8[(((($4_1 & 255) | 0) + 179608) | 0) >> 0] | 0;
                $0_1 = ($0_1 + 1) | 0;
                if (!$7_1) {
                    continue label$47;
                }
                break label$47;
            }
            this.HEAP8[$8_1 >> 0] = $4_1;
            $2_1 = ((((this.$40(19 | 0) | 0) >>> 0) % (10 >>> 0) | 0) + 17) | 0;
            $4_1 = this.HEAP32[(($3_1 + 12) | 0) >> 2] | 0;
            $0_1 = 0;
            label$48: while (1) {
                $432_1 = ((($1_1 + 144) | 0) + $0_1) | 0;
                i64toi32_i32$4 = $13$hi;
                i64toi32_i32$4 = 0;
                $435$hi = i64toi32_i32$4;
                i64toi32_i32$4 = $13$hi;
                i64toi32_i32$0 = $435$hi;
                i64toi32_i32$0 = this.__wasm_i64_mul($13_1 | 0, i64toi32_i32$4 | 0, $4_1 | 0, i64toi32_i32$0 | 0) | 0;
                i64toi32_i32$4 = this.i64toi32_i32$HIGH_BITS;
                $436$hi = i64toi32_i32$4;
                i64toi32_i32$4 = $12$hi;
                i64toi32_i32$4 = $436$hi;
                i64toi32_i32$2 = i64toi32_i32$0;
                i64toi32_i32$0 = $12$hi;
                i64toi32_i32$3 = $12_1;
                i64toi32_i32$5 = (i64toi32_i32$2 + i64toi32_i32$3) | 0;
                i64toi32_i32$1 = (i64toi32_i32$4 + i64toi32_i32$0) | 0;
                if (i64toi32_i32$5 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$1 = (i64toi32_i32$1 + 1) | 0;
                }
                $438$hi = i64toi32_i32$1;
                i64toi32_i32$1 = $14$hi;
                i64toi32_i32$1 = $438$hi;
                i64toi32_i32$2 = $14$hi;
                i64toi32_i32$2 = this.__wasm_i64_urem(i64toi32_i32$5 | 0, i64toi32_i32$1 | 0, $14_1 | 0, i64toi32_i32$2 | 0) | 0;
                i64toi32_i32$1 = this.i64toi32_i32$HIGH_BITS;
                this.HEAP8[$432_1 >> 0] = i64toi32_i32$2;
                $4_1 = i64toi32_i32$2;
                $0_1 = ($0_1 + 1) | 0;
                if (($0_1 | 0) != ($2_1 | 0)) {
                    continue label$48;
                }
                break label$48;
            }
            this.HEAP32[(($3_1 + 12) | 0) >> 2] = $4_1;
            $0_1 = 1;
            if ($5_1 >>> 0 <= 1 >>> 0) {
                break label$42;
            }
            label$49: while (1) {
                $4_1 = ($0_1 + $8_1) | 0;
                this.HEAP8[$4_1 >> 0] = ((this.HEAPU8[$4_1 >> 0] | 0) ^ (this.HEAPU8[(((($1_1 + 144) | 0) + (($0_1 >>> 0) % ($2_1 >>> 0) | 0)) | 0) >> 0] | 0)) | 0;
                $0_1 = ($0_1 + 1) | 0;
                if (($0_1 | 0) != ($5_1 | 0)) {
                    continue label$49;
                }
                break label$49;
            }
        }
    }

    $40($0_1) {
        $0_1 = $0_1 | 0;
        var $2_1 = 0,
            $3_1 = 0,
            $1_1 = 0;
        $2_1 = ($0_1 << 1) | 0;
        $3_1 = $2_1 | 1 | 0;
        $0_1 = 0;
        label$1: {
            label$2: {
                switch (((this.HEAP8[(($2_1 + 4448) | 0) >> 0] | 0) + -49) | 0 | 0) {
                    case 0:
                        $0_1 = 16;
                        break label$1;
                    case 1:
                        $0_1 = 32;
                        break label$1;
                    case 2:
                        $0_1 = 48;
                        break label$1;
                    case 3:
                        $0_1 = 64;
                        break label$1;
                    case 4:
                        $0_1 = 80;
                        break label$1;
                    case 5:
                        $0_1 = 96;
                        break label$1;
                    case 6:
                        $0_1 = 112;
                        break label$1;
                    case 7:
                        $0_1 = 128;
                        break label$1;
                    case 8:
                        $0_1 = 144;
                        break label$1;
                    case 48:
                        $0_1 = 160;
                        break label$1;
                    case 49:
                        $0_1 = 176;
                        break label$1;
                    case 50:
                        $0_1 = 192;
                        break label$1;
                    case 51:
                        $0_1 = 208;
                        break label$1;
                    case 52:
                        $0_1 = 224;
                        break label$1;
                    case 16:
                        $0_1 = 160;
                        break label$1;
                    case 17:
                        $0_1 = 176;
                        break label$1;
                    case 18:
                        $0_1 = 192;
                        break label$1;
                    case 19:
                        $0_1 = 208;
                        break label$1;
                    case 20:
                        $0_1 = 224;
                        break label$1;
                    case 21:
                    case 53:
                        break label$2;
                    default:
                        break label$1;
                }
            }
            $0_1 = 240;
        }
        label$22: {
            switch (((this.HEAP8[(($3_1 + 4448) | 0) >> 0] | 0) + -49) | 0 | 0) {
                case 0:
                    return $0_1 | 1 | 0 | 0;
                case 1:
                    return $0_1 | 2 | 0 | 0;
                case 2:
                    return $0_1 | 3 | 0 | 0;
                case 3:
                    return $0_1 | 4 | 0 | 0;
                case 4:
                    return $0_1 | 5 | 0 | 0;
                case 5:
                    return $0_1 | 6 | 0 | 0;
                case 6:
                    return $0_1 | 7 | 0 | 0;
                case 7:
                    return $0_1 | 8 | 0 | 0;
                case 8:
                    return $0_1 | 9 | 0 | 0;
                case 48:
                    return $0_1 | 10 | 0 | 0;
                case 49:
                    return $0_1 | 11 | 0 | 0;
                case 50:
                    return $0_1 | 12 | 0 | 0;
                case 51:
                    return $0_1 | 13 | 0 | 0;
                case 52:
                    return $0_1 | 14 | 0 | 0;
                case 16:
                    return $0_1 | 10 | 0 | 0;
                case 17:
                    return $0_1 | 11 | 0 | 0;
                case 18:
                    return $0_1 | 12 | 0 | 0;
                case 19:
                    return $0_1 | 13 | 0 | 0;
                case 20:
                    return $0_1 | 14 | 0 | 0;
                case 21:
                case 53:
                    $1_1 = 15;
                    break;
                default:
                    break label$22;
            }
        }
        return $0_1 | $1_1 | 0 | 0;
    }

    $5($0_1) {
        $0_1 = $0_1 | 0;
        var $1_1 = 0;
        $1_1 = (this.global$0 - 16) | 0;
        this.global$0 = $1_1;
        label$1: {
            this.HEAP32[(($1_1 + 12) | 0) >> 2] = 0;
            this.HEAP32[(($1_1 + 4) | 0) >> 2] = $0_1;
            this.HEAP32[$1_1 >> 2] = $0_1;
            this.HEAP32[(($1_1 + 8) | 0) >> 2] = ($0_1 + 1) | 0;
        }
        $0_1 = this.$1038($1_1 | 0) | 0;
        this.global$0 = ($1_1 + 16) | 0;
        return $0_1 | 0;
    }
    $1038($0_1) {
        $0_1 = $0_1 | 0;
        var $2_1 = 0,
            $1_1 = 0,
            $26_1 = 0,
            $28_1 = 0;
        $2_1 = (this.global$0 - 16) | 0;
        this.global$0 = $2_1;
        this.HEAP32[(($2_1 + 8) | 0) >> 2] = this.HEAP32[(($0_1 + 4) | 0) >> 2] | 0;
        if (!(this.HEAPU8[(this.HEAP32[(($2_1 + 8) | 0) >> 2] | 0) >> 0] | 0)) {
            label$3: {
                label$4: {
                    $0_1 = this.HEAP32[(($0_1 + 8) | 0) >> 2] | 0;
                    $1_1 = this.HEAPU8[$0_1 >> 0] | 0;
                    if (($1_1 | 0) != (1 | 0)) {
                        if (($1_1 & 2) | 0) {
                            break label$4;
                        }
                        this.HEAP8[$0_1 >> 0] = 2;
                        $26_1 = 1;
                    } else {
                        $26_1 = 0;
                    }
                    $28_1 = $26_1;
                    break label$3;
                }
                throw new Error('abort');
            }
            $1_1 = $28_1;
        }
        this.global$0 = ($2_1 + 16) | 0;
        return $1_1 | 0;
    }

    $470($0_1, $1_1, $2_1) {
        $0_1 = $0_1 | 0;
        $1_1 = $1_1 | 0;
        $2_1 = $2_1 | 0;
        var i64toi32_i32$0 = 0,
            i64toi32_i32$1 = 0,
            i64toi32_i32$5 = 0,
            i64toi32_i32$2 = 0,
            i64toi32_i32$4 = 0,
            $3_1 = 0,
            i64toi32_i32$3 = 0,
            $5_1 = 0,
            $6_1 = 0,
            $4_1 = 0,
            $7$hi = 0,
            $8$hi = 0,
            $9$hi = 0,
            $7_1 = 0,
            $8_1 = 0,
            $9_1 = 0,
            $42_1 = 0,
            $45_1 = 0,
            $45$hi = 0,
            $46$hi = 0,
            $48$hi = 0;
        label$1: {
            $3_1 = this.HEAP32[$0_1 >> 2] | 0;
            $1_1 = ((this.HEAP32[$1_1 >> 2] | 0) + (($3_1 ^ -1) | 0)) | 0;
            if (!$1_1) {
                break label$1;
            }
            $4_1 = this.$40(17 | 0) | 0;
            $5_1 = this.$40(13 | 0) | 0;
            $6_1 = this.$40(4 | 0) | 0;
            i64toi32_i32$0 = 0;
            $7_1 = ((((((this.$40(5 | 0) | 0) << 16) | 0 | (($6_1 << 24) | 0) | 0 | (((this.$40(6 | 0) | 0) << 8) | 0) | 0 | (this.$40(7 | 0) | 0) | 0) >>> 0) % (382739 >>> 0) | 0) ^ 2147483647) | 0;
            $7$hi = i64toi32_i32$0;
            i64toi32_i32$0 = 0;
            i64toi32_i32$1 = 0;
            i64toi32_i32$1 = this.__wasm_i64_mul($5_1 | 0, i64toi32_i32$0 | 0, 7 | 0, i64toi32_i32$1 | 0) | 0;
            i64toi32_i32$0 = this.i64toi32_i32$HIGH_BITS;
            $8_1 = i64toi32_i32$1;
            $8$hi = i64toi32_i32$0;
            i64toi32_i32$0 = 0;
            i64toi32_i32$1 = 0;
            i64toi32_i32$1 = this.__wasm_i64_mul($4_1 | 0, i64toi32_i32$0 | 0, 387 | 0, i64toi32_i32$1 | 0) | 0;
            i64toi32_i32$0 = this.i64toi32_i32$HIGH_BITS;
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
            label$2: while (1) {
                $42_1 = $2_1;
                i64toi32_i32$5 = $9$hi;
                i64toi32_i32$0 = $2_1;
                i64toi32_i32$5 = this.HEAP32[i64toi32_i32$0 >> 2] | 0;
                i64toi32_i32$2 = 0;
                $45_1 = i64toi32_i32$5;
                $45$hi = i64toi32_i32$2;
                i64toi32_i32$2 = $9$hi;
                i64toi32_i32$5 = $45$hi;
                i64toi32_i32$5 = this.__wasm_i64_mul($9_1 | 0, i64toi32_i32$2 | 0, $45_1 | 0, i64toi32_i32$5 | 0) | 0;
                i64toi32_i32$2 = this.i64toi32_i32$HIGH_BITS;
                $46$hi = i64toi32_i32$2;
                i64toi32_i32$2 = $8$hi;
                i64toi32_i32$2 = $46$hi;
                i64toi32_i32$0 = i64toi32_i32$5;
                i64toi32_i32$5 = $8$hi;
                i64toi32_i32$3 = $8_1;
                i64toi32_i32$1 = (i64toi32_i32$0 + i64toi32_i32$3) | 0;
                i64toi32_i32$4 = (i64toi32_i32$2 + i64toi32_i32$5) | 0;
                if (i64toi32_i32$1 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$4 = (i64toi32_i32$4 + 1) | 0;
                }
                $48$hi = i64toi32_i32$4;
                i64toi32_i32$4 = $7$hi;
                i64toi32_i32$4 = $48$hi;
                i64toi32_i32$0 = $7$hi;
                i64toi32_i32$0 = this.__wasm_i64_urem(i64toi32_i32$1 | 0, i64toi32_i32$4 | 0, $7_1 | 0, i64toi32_i32$0 | 0) | 0;
                i64toi32_i32$4 = this.i64toi32_i32$HIGH_BITS;
                $4_1 = i64toi32_i32$0;
                this.HEAP32[$42_1 >> 2] = i64toi32_i32$0;
                $5_1 = ($1_1 + $3_1) | 0;
                $6_1 = this.HEAPU8[$5_1 >> 0] | 0;
                $3_1 = ($3_1 + ((i64toi32_i32$0 >>> 0) % ((($1_1 + 1) | 0) >>> 0) | 0)) | 0;
                this.HEAP8[$5_1 >> 0] = this.HEAPU8[$3_1 >> 0] | 0;
                this.HEAP8[$3_1 >> 0] = $6_1;
                $1_1 = ($1_1 + -1) | 0;
                if (!$1_1) {
                    break label$1;
                }
                $3_1 = this.HEAP32[$0_1 >> 2] | 0;
                continue label$2;
            }
        }
    }

    $4($0_1) {
        $0_1 = $0_1 | 0;
        var $1_1 = 0;
        $1_1 = (this.global$0 - 16) | 0;
        this.global$0 = $1_1;
        label$1: {
            this.HEAP32[(($1_1 + 12) | 0) >> 2] = 0;
            this.HEAP32[(($1_1 + 4) | 0) >> 2] = $0_1;
            this.HEAP32[$1_1 >> 2] = $0_1;
            this.HEAP32[(($1_1 + 8) | 0) >> 2] = ($0_1 + 1) | 0;
        }
        this.$1037($1_1 | 0);
        this.global$0 = ($1_1 + 16) | 0;
    }
    $1037($0_1) {
        $0_1 = $0_1 | 0;
        var $1_1 = 0;
        $1_1 = (this.global$0 - 16) | 0;
        this.global$0 = $1_1;
        this.HEAP32[(($1_1 + 8) | 0) >> 2] = this.HEAP32[(($0_1 + 4) | 0) >> 2] | 0;
        this.HEAP8[(this.HEAP32[(($1_1 + 8) | 0) >> 2] | 0) >> 0] = 1;
        this.HEAP8[(this.HEAP32[(($0_1 + 8) | 0) >> 2] | 0) >> 0] = 1;
        this.global$0 = ($1_1 + 16) | 0;
    }

    __wasm_i64_mul(var$0, var$0$hi, var$1, var$1$hi) {
        var$0 = var$0 | 0;
        var$0$hi = var$0$hi | 0;
        var$1 = var$1 | 0;
        var$1$hi = var$1$hi | 0;
        var i64toi32_i32$0 = 0,
            i64toi32_i32$1 = 0;
        i64toi32_i32$0 = var$0$hi;
        i64toi32_i32$0 = var$1$hi;
        i64toi32_i32$0 = var$0$hi;
        i64toi32_i32$1 = var$1$hi;
        i64toi32_i32$1 = this._ZN17compiler_builtins3int3mul3Mul3mul17h070e9a1c69faec5bE(var$0 | 0, i64toi32_i32$0 | 0, var$1 | 0, i64toi32_i32$1 | 0) | 0;
        i64toi32_i32$0 = this.i64toi32_i32$HIGH_BITS;
        this.i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
        return i64toi32_i32$1 | 0;
    }
    _ZN17compiler_builtins3int3mul3Mul3mul17h070e9a1c69faec5bE(var$0, var$0$hi, var$1, var$1$hi) {
        var$0 = var$0 | 0;
        var$0$hi = var$0$hi | 0;
        var$1 = var$1 | 0;
        var$1$hi = var$1$hi | 0;
        var i64toi32_i32$4 = 0,
            i64toi32_i32$0 = 0,
            i64toi32_i32$1 = 0,
            var$2 = 0,
            i64toi32_i32$2 = 0,
            i64toi32_i32$3 = 0,
            var$3 = 0,
            var$4 = 0,
            var$5 = 0,
            $21_1 = 0,
            $22_1 = 0,
            var$6 = 0,
            $24_1 = 0,
            $17_1 = 0,
            $18_1 = 0,
            $23_1 = 0,
            $29_1 = 0,
            $45_1 = 0,
            $56$hi = 0,
            $62$hi = 0;
        i64toi32_i32$0 = var$1$hi;
        var$2 = var$1;
        var$4 = (var$2 >>> 16) | 0;
        i64toi32_i32$0 = var$0$hi;
        var$3 = var$0;
        var$5 = (var$3 >>> 16) | 0;
        $17_1 = Math.imul(var$4, var$5);
        $18_1 = var$2;
        i64toi32_i32$2 = var$3;
        i64toi32_i32$1 = 0;
        i64toi32_i32$3 = 32;
        i64toi32_i32$4 = (i64toi32_i32$3 & 31) | 0;
        if (32 >>> 0 <= ((i64toi32_i32$3 & 63) | 0) >>> 0) {
            i64toi32_i32$1 = 0;
            $21_1 = (i64toi32_i32$0 >>> i64toi32_i32$4) | 0;
        } else {
            i64toi32_i32$1 = (i64toi32_i32$0 >>> i64toi32_i32$4) | 0;
            $21_1 = (((((((1 << i64toi32_i32$4) | 0) - 1) | 0) & i64toi32_i32$0) | 0) << ((32 - i64toi32_i32$4) | 0)) | 0 | ((i64toi32_i32$2 >>> i64toi32_i32$4) | 0) | 0;
        }
        $23_1 = ($17_1 + Math.imul($18_1, $21_1)) | 0;
        i64toi32_i32$1 = var$1$hi;
        i64toi32_i32$0 = var$1;
        i64toi32_i32$2 = 0;
        i64toi32_i32$3 = 32;
        i64toi32_i32$4 = (i64toi32_i32$3 & 31) | 0;
        if (32 >>> 0 <= ((i64toi32_i32$3 & 63) | 0) >>> 0) {
            i64toi32_i32$2 = 0;
            $22_1 = (i64toi32_i32$1 >>> i64toi32_i32$4) | 0;
        } else {
            i64toi32_i32$2 = (i64toi32_i32$1 >>> i64toi32_i32$4) | 0;
            $22_1 = (((((((1 << i64toi32_i32$4) | 0) - 1) | 0) & i64toi32_i32$1) | 0) << ((32 - i64toi32_i32$4) | 0)) | 0 | ((i64toi32_i32$0 >>> i64toi32_i32$4) | 0) | 0;
        }
        $29_1 = ($23_1 + Math.imul($22_1, var$3)) | 0;
        var$2 = (var$2 & 65535) | 0;
        var$3 = (var$3 & 65535) | 0;
        var$6 = Math.imul(var$2, var$3);
        var$2 = (((var$6 >>> 16) | 0) + Math.imul(var$2, var$5)) | 0;
        $45_1 = ($29_1 + ((var$2 >>> 16) | 0)) | 0;
        var$2 = (((var$2 & 65535) | 0) + Math.imul(var$4, var$3)) | 0;
        i64toi32_i32$2 = 0;
        i64toi32_i32$1 = ($45_1 + ((var$2 >>> 16) | 0)) | 0;
        i64toi32_i32$0 = 0;
        i64toi32_i32$3 = 32;
        i64toi32_i32$4 = (i64toi32_i32$3 & 31) | 0;
        if (32 >>> 0 <= ((i64toi32_i32$3 & 63) | 0) >>> 0) {
            i64toi32_i32$0 = (i64toi32_i32$1 << i64toi32_i32$4) | 0;
            $24_1 = 0;
        } else {
            i64toi32_i32$0 = (((((1 << i64toi32_i32$4) | 0) - 1) | 0) & ((i64toi32_i32$1 >>> ((32 - i64toi32_i32$4) | 0)) | 0)) | 0 | ((i64toi32_i32$2 << i64toi32_i32$4) | 0) | 0;
            $24_1 = (i64toi32_i32$1 << i64toi32_i32$4) | 0;
        }
        $56$hi = i64toi32_i32$0;
        i64toi32_i32$0 = 0;
        $62$hi = i64toi32_i32$0;
        i64toi32_i32$0 = $56$hi;
        i64toi32_i32$2 = $24_1;
        i64toi32_i32$1 = $62$hi;
        i64toi32_i32$3 = (var$2 << 16) | 0 | ((var$6 & 65535) | 0) | 0;
        i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
        i64toi32_i32$2 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
        this.i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
        return i64toi32_i32$2 | 0;
    }

    __wasm_i64_urem(var$0, var$0$hi, var$1, var$1$hi) {
        var$0 = var$0 | 0;
        var$0$hi = var$0$hi | 0;
        var$1 = var$1 | 0;
        var$1$hi = var$1$hi | 0;
        var i64toi32_i32$0 = 0,
            i64toi32_i32$1 = 0;
        i64toi32_i32$0 = var$0$hi;
        i64toi32_i32$0 = var$1$hi;
        i64toi32_i32$0 = var$0$hi;
        i64toi32_i32$1 = var$1$hi;
        i64toi32_i32$1 = this._ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E(var$0 | 0, i64toi32_i32$0 | 0, var$1 | 0, i64toi32_i32$1 | 0) | 0;
        i64toi32_i32$0 = this.i64toi32_i32$HIGH_BITS;
        i64toi32_i32$0 = this.__wasm_intrinsics_temp_i64$hi;
        i64toi32_i32$1 = this.__wasm_intrinsics_temp_i64;
        this.i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
        return i64toi32_i32$1 | 0;
    }
    _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E(var$0, var$0$hi, var$1, var$1$hi) {
        var$0 = var$0 | 0;
        var$0$hi = var$0$hi | 0;
        var$1 = var$1 | 0;
        var$1$hi = var$1$hi | 0;
        var i64toi32_i32$2 = 0,
            i64toi32_i32$3 = 0,
            i64toi32_i32$4 = 0,
            i64toi32_i32$1 = 0,
            i64toi32_i32$0 = 0,
            i64toi32_i32$5 = 0,
            var$2 = 0,
            var$3 = 0,
            var$4 = 0,
            var$5 = 0,
            var$5$hi = 0,
            var$6 = 0,
            var$6$hi = 0,
            i64toi32_i32$6 = 0,
            $37_1 = 0,
            $38_1 = 0,
            $39_1 = 0,
            $40_1 = 0,
            $41_1 = 0,
            $42_1 = 0,
            $43_1 = 0,
            $44_1 = 0,
            var$8$hi = 0,
            $45_1 = 0,
            $46_1 = 0,
            $47_1 = 0,
            $48_1 = 0,
            var$7$hi = 0,
            $49_1 = 0,
            $63$hi = 0,
            $65_1 = 0,
            $65$hi = 0,
            $120$hi = 0,
            $129$hi = 0,
            $134$hi = 0,
            var$8 = 0,
            $140_1 = 0,
            $140$hi = 0,
            $142$hi = 0,
            $144_1 = 0,
            $144$hi = 0,
            $151_1 = 0,
            $151$hi = 0,
            $154$hi = 0,
            var$7 = 0,
            $165$hi = 0;
        label$1: {
            label$2: {
                label$3: {
                    label$4: {
                        label$5: {
                            label$6: {
                                label$7: {
                                    label$8: {
                                        label$9: {
                                            label$10: {
                                                label$11: {
                                                    i64toi32_i32$0 = var$0$hi;
                                                    i64toi32_i32$2 = var$0;
                                                    i64toi32_i32$1 = 0;
                                                    i64toi32_i32$3 = 32;
                                                    i64toi32_i32$4 = (i64toi32_i32$3 & 31) | 0;
                                                    if (32 >>> 0 <= ((i64toi32_i32$3 & 63) | 0) >>> 0) {
                                                        i64toi32_i32$1 = 0;
                                                        $37_1 = (i64toi32_i32$0 >>> i64toi32_i32$4) | 0;
                                                    } else {
                                                        i64toi32_i32$1 = (i64toi32_i32$0 >>> i64toi32_i32$4) | 0;
                                                        $37_1 = (((((((1 << i64toi32_i32$4) | 0) - 1) | 0) & i64toi32_i32$0) | 0) << ((32 - i64toi32_i32$4) | 0)) | 0 | ((i64toi32_i32$2 >>> i64toi32_i32$4) | 0) | 0;
                                                    }
                                                    var$2 = $37_1;
                                                    if (var$2) {
                                                        block: {
                                                            i64toi32_i32$1 = var$1$hi;
                                                            var$3 = var$1;
                                                            if (!var$3) {
                                                                break label$11;
                                                            }
                                                            i64toi32_i32$1 = var$1$hi;
                                                            i64toi32_i32$0 = var$1;
                                                            i64toi32_i32$2 = 0;
                                                            i64toi32_i32$3 = 32;
                                                            i64toi32_i32$4 = (i64toi32_i32$3 & 31) | 0;
                                                            if (32 >>> 0 <= ((i64toi32_i32$3 & 63) | 0) >>> 0) {
                                                                i64toi32_i32$2 = 0;
                                                                $38_1 = (i64toi32_i32$1 >>> i64toi32_i32$4) | 0;
                                                            } else {
                                                                i64toi32_i32$2 = (i64toi32_i32$1 >>> i64toi32_i32$4) | 0;
                                                                $38_1 = (((((((1 << i64toi32_i32$4) | 0) - 1) | 0) & i64toi32_i32$1) | 0) << ((32 - i64toi32_i32$4) | 0)) | 0 | ((i64toi32_i32$0 >>> i64toi32_i32$4) | 0) | 0;
                                                            }
                                                            var$4 = $38_1;
                                                            if (!var$4) {
                                                                break label$9;
                                                            }
                                                            var$2 = (Math.clz32(var$4) - Math.clz32(var$2)) | 0;
                                                            if (var$2 >>> 0 <= 31 >>> 0) {
                                                                break label$8;
                                                            }
                                                            break label$2;
                                                        }
                                                    }
                                                    i64toi32_i32$2 = var$1$hi;
                                                    i64toi32_i32$1 = var$1;
                                                    i64toi32_i32$0 = 1;
                                                    i64toi32_i32$3 = 0;
                                                    if ((i64toi32_i32$2 >>> 0 > i64toi32_i32$0 >>> 0) | ((((i64toi32_i32$2 | 0) == (i64toi32_i32$0 | 0)) & (i64toi32_i32$1 >>> 0 >= i64toi32_i32$3 >>> 0)) | 0) | 0) {
                                                        break label$2;
                                                    }
                                                    i64toi32_i32$1 = var$0$hi;
                                                    var$2 = var$0;
                                                    i64toi32_i32$1 = var$1$hi;
                                                    var$3 = var$1;
                                                    var$2 = ((var$2 >>> 0) / (var$3 >>> 0)) | 0;
                                                    i64toi32_i32$1 = 0;
                                                    this.__wasm_intrinsics_temp_i64 = (var$0 - Math.imul(var$2, var$3)) | 0;
                                                    this.__wasm_intrinsics_temp_i64$hi = i64toi32_i32$1;
                                                    i64toi32_i32$1 = 0;
                                                    i64toi32_i32$2 = var$2;
                                                    this.i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
                                                    return i64toi32_i32$2 | 0;
                                                }
                                                i64toi32_i32$2 = var$1$hi;
                                                i64toi32_i32$3 = var$1;
                                                i64toi32_i32$1 = 0;
                                                i64toi32_i32$0 = 32;
                                                i64toi32_i32$4 = (i64toi32_i32$0 & 31) | 0;
                                                if (32 >>> 0 <= ((i64toi32_i32$0 & 63) | 0) >>> 0) {
                                                    i64toi32_i32$1 = 0;
                                                    $39_1 = (i64toi32_i32$2 >>> i64toi32_i32$4) | 0;
                                                } else {
                                                    i64toi32_i32$1 = (i64toi32_i32$2 >>> i64toi32_i32$4) | 0;
                                                    $39_1 = (((((((1 << i64toi32_i32$4) | 0) - 1) | 0) & i64toi32_i32$2) | 0) << ((32 - i64toi32_i32$4) | 0)) | 0 | ((i64toi32_i32$3 >>> i64toi32_i32$4) | 0) | 0;
                                                }
                                                var$3 = $39_1;
                                                i64toi32_i32$1 = var$0$hi;
                                                if (!var$0) {
                                                    break label$7;
                                                }
                                                if (!var$3) {
                                                    break label$6;
                                                }
                                                var$4 = (var$3 + -1) | 0;
                                                if ((var$4 & var$3) | 0) {
                                                    break label$6;
                                                }
                                                i64toi32_i32$1 = 0;
                                                i64toi32_i32$2 = (var$4 & var$2) | 0;
                                                i64toi32_i32$3 = 0;
                                                i64toi32_i32$0 = 32;
                                                i64toi32_i32$4 = (i64toi32_i32$0 & 31) | 0;
                                                if (32 >>> 0 <= ((i64toi32_i32$0 & 63) | 0) >>> 0) {
                                                    i64toi32_i32$3 = (i64toi32_i32$2 << i64toi32_i32$4) | 0;
                                                    $40_1 = 0;
                                                } else {
                                                    i64toi32_i32$3 = (((((1 << i64toi32_i32$4) | 0) - 1) | 0) & ((i64toi32_i32$2 >>> ((32 - i64toi32_i32$4) | 0)) | 0)) | 0 | ((i64toi32_i32$1 << i64toi32_i32$4) | 0) | 0;
                                                    $40_1 = (i64toi32_i32$2 << i64toi32_i32$4) | 0;
                                                }
                                                $63$hi = i64toi32_i32$3;
                                                i64toi32_i32$3 = var$0$hi;
                                                i64toi32_i32$1 = var$0;
                                                i64toi32_i32$2 = 0;
                                                i64toi32_i32$0 = -1;
                                                i64toi32_i32$2 = (i64toi32_i32$3 & i64toi32_i32$2) | 0;
                                                $65_1 = (i64toi32_i32$1 & i64toi32_i32$0) | 0;
                                                $65$hi = i64toi32_i32$2;
                                                i64toi32_i32$2 = $63$hi;
                                                i64toi32_i32$3 = $40_1;
                                                i64toi32_i32$1 = $65$hi;
                                                i64toi32_i32$0 = $65_1;
                                                i64toi32_i32$1 = i64toi32_i32$2 | i64toi32_i32$1 | 0;
                                                this.__wasm_intrinsics_temp_i64 = i64toi32_i32$3 | i64toi32_i32$0 | 0;
                                                this.__wasm_intrinsics_temp_i64$hi = i64toi32_i32$1;
                                                i64toi32_i32$1 = 0;
                                                i64toi32_i32$3 = (var$2 >>> (((this.__wasm_ctz_i32(var$3 | 0) | 0) & 31) | 0)) | 0;
                                                this.i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
                                                return i64toi32_i32$3 | 0;
                                            }
                                        }
                                        var$4 = (var$3 + -1) | 0;
                                        if (!((var$4 & var$3) | 0)) {
                                            break label$5;
                                        }
                                        var$2 = (((Math.clz32(var$3) + 33) | 0) - Math.clz32(var$2)) | 0;
                                        var$3 = (0 - var$2) | 0;
                                        break label$3;
                                    }
                                    var$3 = (63 - var$2) | 0;
                                    var$2 = (var$2 + 1) | 0;
                                    break label$3;
                                }
                                var$4 = ((var$2 >>> 0) / (var$3 >>> 0)) | 0;
                                i64toi32_i32$3 = 0;
                                i64toi32_i32$2 = (var$2 - Math.imul(var$4, var$3)) | 0;
                                i64toi32_i32$1 = 0;
                                i64toi32_i32$0 = 32;
                                i64toi32_i32$4 = (i64toi32_i32$0 & 31) | 0;
                                if (32 >>> 0 <= ((i64toi32_i32$0 & 63) | 0) >>> 0) {
                                    i64toi32_i32$1 = (i64toi32_i32$2 << i64toi32_i32$4) | 0;
                                    $41_1 = 0;
                                } else {
                                    i64toi32_i32$1 = (((((1 << i64toi32_i32$4) | 0) - 1) | 0) & ((i64toi32_i32$2 >>> ((32 - i64toi32_i32$4) | 0)) | 0)) | 0 | ((i64toi32_i32$3 << i64toi32_i32$4) | 0) | 0;
                                    $41_1 = (i64toi32_i32$2 << i64toi32_i32$4) | 0;
                                }
                                this.__wasm_intrinsics_temp_i64 = $41_1;
                                this.__wasm_intrinsics_temp_i64$hi = i64toi32_i32$1;
                                i64toi32_i32$1 = 0;
                                i64toi32_i32$2 = var$4;
                                this.i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
                                return i64toi32_i32$2 | 0;
                            }
                            var$2 = (Math.clz32(var$3) - Math.clz32(var$2)) | 0;
                            if (var$2 >>> 0 < 31 >>> 0) {
                                break label$4;
                            }
                            break label$2;
                        }
                        i64toi32_i32$2 = var$0$hi;
                        i64toi32_i32$2 = 0;
                        this.__wasm_intrinsics_temp_i64 = (var$4 & var$0) | 0;
                        this.__wasm_intrinsics_temp_i64$hi = i64toi32_i32$2;
                        if ((var$3 | 0) == (1 | 0)) {
                            break label$1;
                        }
                        i64toi32_i32$2 = var$0$hi;
                        i64toi32_i32$2 = 0;
                        $120$hi = i64toi32_i32$2;
                        i64toi32_i32$2 = var$0$hi;
                        i64toi32_i32$3 = var$0;
                        i64toi32_i32$1 = $120$hi;
                        i64toi32_i32$0 = this.__wasm_ctz_i32(var$3 | 0) | 0;
                        i64toi32_i32$4 = (i64toi32_i32$0 & 31) | 0;
                        if (32 >>> 0 <= ((i64toi32_i32$0 & 63) | 0) >>> 0) {
                            i64toi32_i32$1 = 0;
                            $42_1 = (i64toi32_i32$2 >>> i64toi32_i32$4) | 0;
                        } else {
                            i64toi32_i32$1 = (i64toi32_i32$2 >>> i64toi32_i32$4) | 0;
                            $42_1 = (((((((1 << i64toi32_i32$4) | 0) - 1) | 0) & i64toi32_i32$2) | 0) << ((32 - i64toi32_i32$4) | 0)) | 0 | ((i64toi32_i32$3 >>> i64toi32_i32$4) | 0) | 0;
                        }
                        i64toi32_i32$3 = $42_1;
                        this.i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
                        return i64toi32_i32$3 | 0;
                    }
                    var$3 = (63 - var$2) | 0;
                    var$2 = (var$2 + 1) | 0;
                }
                i64toi32_i32$3 = var$0$hi;
                i64toi32_i32$3 = 0;
                $129$hi = i64toi32_i32$3;
                i64toi32_i32$3 = var$0$hi;
                i64toi32_i32$2 = var$0;
                i64toi32_i32$1 = $129$hi;
                i64toi32_i32$0 = (var$2 & 63) | 0;
                i64toi32_i32$4 = (i64toi32_i32$0 & 31) | 0;
                if (32 >>> 0 <= ((i64toi32_i32$0 & 63) | 0) >>> 0) {
                    i64toi32_i32$1 = 0;
                    $43_1 = (i64toi32_i32$3 >>> i64toi32_i32$4) | 0;
                } else {
                    i64toi32_i32$1 = (i64toi32_i32$3 >>> i64toi32_i32$4) | 0;
                    $43_1 = (((((((1 << i64toi32_i32$4) | 0) - 1) | 0) & i64toi32_i32$3) | 0) << ((32 - i64toi32_i32$4) | 0)) | 0 | ((i64toi32_i32$2 >>> i64toi32_i32$4) | 0) | 0;
                }
                var$5 = $43_1;
                var$5$hi = i64toi32_i32$1;
                i64toi32_i32$1 = var$0$hi;
                i64toi32_i32$1 = 0;
                $134$hi = i64toi32_i32$1;
                i64toi32_i32$1 = var$0$hi;
                i64toi32_i32$3 = var$0;
                i64toi32_i32$2 = $134$hi;
                i64toi32_i32$0 = (var$3 & 63) | 0;
                i64toi32_i32$4 = (i64toi32_i32$0 & 31) | 0;
                if (32 >>> 0 <= ((i64toi32_i32$0 & 63) | 0) >>> 0) {
                    i64toi32_i32$2 = (i64toi32_i32$3 << i64toi32_i32$4) | 0;
                    $44_1 = 0;
                } else {
                    i64toi32_i32$2 = (((((1 << i64toi32_i32$4) | 0) - 1) | 0) & ((i64toi32_i32$3 >>> ((32 - i64toi32_i32$4) | 0)) | 0)) | 0 | ((i64toi32_i32$1 << i64toi32_i32$4) | 0) | 0;
                    $44_1 = (i64toi32_i32$3 << i64toi32_i32$4) | 0;
                }
                var$0 = $44_1;
                var$0$hi = i64toi32_i32$2;
                label$13: {
                    if (var$2) {
                        block3: {
                            i64toi32_i32$2 = var$1$hi;
                            i64toi32_i32$1 = var$1;
                            i64toi32_i32$3 = -1;
                            i64toi32_i32$0 = -1;
                            i64toi32_i32$4 = (i64toi32_i32$1 + i64toi32_i32$0) | 0;
                            i64toi32_i32$5 = (i64toi32_i32$2 + i64toi32_i32$3) | 0;
                            if (i64toi32_i32$4 >>> 0 < i64toi32_i32$0 >>> 0) {
                                i64toi32_i32$5 = (i64toi32_i32$5 + 1) | 0;
                            }
                            var$8 = i64toi32_i32$4;
                            var$8$hi = i64toi32_i32$5;
                            label$15: while (1) {
                                i64toi32_i32$5 = var$5$hi;
                                i64toi32_i32$2 = var$5;
                                i64toi32_i32$1 = 0;
                                i64toi32_i32$0 = 1;
                                i64toi32_i32$3 = (i64toi32_i32$0 & 31) | 0;
                                if (32 >>> 0 <= ((i64toi32_i32$0 & 63) | 0) >>> 0) {
                                    i64toi32_i32$1 = (i64toi32_i32$2 << i64toi32_i32$3) | 0;
                                    $45_1 = 0;
                                } else {
                                    i64toi32_i32$1 = (((((1 << i64toi32_i32$3) | 0) - 1) | 0) & ((i64toi32_i32$2 >>> ((32 - i64toi32_i32$3) | 0)) | 0)) | 0 | ((i64toi32_i32$5 << i64toi32_i32$3) | 0) | 0;
                                    $45_1 = (i64toi32_i32$2 << i64toi32_i32$3) | 0;
                                }
                                $140_1 = $45_1;
                                $140$hi = i64toi32_i32$1;
                                i64toi32_i32$1 = var$0$hi;
                                i64toi32_i32$5 = var$0;
                                i64toi32_i32$2 = 0;
                                i64toi32_i32$0 = 63;
                                i64toi32_i32$3 = (i64toi32_i32$0 & 31) | 0;
                                if (32 >>> 0 <= ((i64toi32_i32$0 & 63) | 0) >>> 0) {
                                    i64toi32_i32$2 = 0;
                                    $46_1 = (i64toi32_i32$1 >>> i64toi32_i32$3) | 0;
                                } else {
                                    i64toi32_i32$2 = (i64toi32_i32$1 >>> i64toi32_i32$3) | 0;
                                    $46_1 = (((((((1 << i64toi32_i32$3) | 0) - 1) | 0) & i64toi32_i32$1) | 0) << ((32 - i64toi32_i32$3) | 0)) | 0 | ((i64toi32_i32$5 >>> i64toi32_i32$3) | 0) | 0;
                                }
                                $142$hi = i64toi32_i32$2;
                                i64toi32_i32$2 = $140$hi;
                                i64toi32_i32$1 = $140_1;
                                i64toi32_i32$5 = $142$hi;
                                i64toi32_i32$0 = $46_1;
                                i64toi32_i32$5 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
                                var$5 = i64toi32_i32$1 | i64toi32_i32$0 | 0;
                                var$5$hi = i64toi32_i32$5;
                                $144_1 = var$5;
                                $144$hi = i64toi32_i32$5;
                                i64toi32_i32$5 = var$8$hi;
                                i64toi32_i32$5 = var$5$hi;
                                i64toi32_i32$5 = var$8$hi;
                                i64toi32_i32$2 = var$8;
                                i64toi32_i32$1 = var$5$hi;
                                i64toi32_i32$0 = var$5;
                                i64toi32_i32$3 = (i64toi32_i32$2 - i64toi32_i32$0) | 0;
                                i64toi32_i32$6 = i64toi32_i32$2 >>> 0 < i64toi32_i32$0 >>> 0;
                                i64toi32_i32$4 = (i64toi32_i32$6 + i64toi32_i32$1) | 0;
                                i64toi32_i32$4 = (i64toi32_i32$5 - i64toi32_i32$4) | 0;
                                i64toi32_i32$5 = i64toi32_i32$3;
                                i64toi32_i32$2 = 0;
                                i64toi32_i32$0 = 63;
                                i64toi32_i32$1 = (i64toi32_i32$0 & 31) | 0;
                                if (32 >>> 0 <= ((i64toi32_i32$0 & 63) | 0) >>> 0) {
                                    i64toi32_i32$2 = (i64toi32_i32$4 >> 31) | 0;
                                    $47_1 = (i64toi32_i32$4 >> i64toi32_i32$1) | 0;
                                } else {
                                    i64toi32_i32$2 = (i64toi32_i32$4 >> i64toi32_i32$1) | 0;
                                    $47_1 = (((((((1 << i64toi32_i32$1) | 0) - 1) | 0) & i64toi32_i32$4) | 0) << ((32 - i64toi32_i32$1) | 0)) | 0 | ((i64toi32_i32$5 >>> i64toi32_i32$1) | 0) | 0;
                                }
                                var$6 = $47_1;
                                var$6$hi = i64toi32_i32$2;
                                i64toi32_i32$2 = var$1$hi;
                                i64toi32_i32$2 = var$6$hi;
                                i64toi32_i32$4 = var$6;
                                i64toi32_i32$5 = var$1$hi;
                                i64toi32_i32$0 = var$1;
                                i64toi32_i32$5 = (i64toi32_i32$2 & i64toi32_i32$5) | 0;
                                $151_1 = (i64toi32_i32$4 & i64toi32_i32$0) | 0;
                                $151$hi = i64toi32_i32$5;
                                i64toi32_i32$5 = $144$hi;
                                i64toi32_i32$2 = $144_1;
                                i64toi32_i32$4 = $151$hi;
                                i64toi32_i32$0 = $151_1;
                                i64toi32_i32$1 = (i64toi32_i32$2 - i64toi32_i32$0) | 0;
                                i64toi32_i32$6 = i64toi32_i32$2 >>> 0 < i64toi32_i32$0 >>> 0;
                                i64toi32_i32$3 = (i64toi32_i32$6 + i64toi32_i32$4) | 0;
                                i64toi32_i32$3 = (i64toi32_i32$5 - i64toi32_i32$3) | 0;
                                var$5 = i64toi32_i32$1;
                                var$5$hi = i64toi32_i32$3;
                                i64toi32_i32$3 = var$0$hi;
                                i64toi32_i32$5 = var$0;
                                i64toi32_i32$2 = 0;
                                i64toi32_i32$0 = 1;
                                i64toi32_i32$4 = (i64toi32_i32$0 & 31) | 0;
                                if (32 >>> 0 <= ((i64toi32_i32$0 & 63) | 0) >>> 0) {
                                    i64toi32_i32$2 = (i64toi32_i32$5 << i64toi32_i32$4) | 0;
                                    $48_1 = 0;
                                } else {
                                    i64toi32_i32$2 = (((((1 << i64toi32_i32$4) | 0) - 1) | 0) & ((i64toi32_i32$5 >>> ((32 - i64toi32_i32$4) | 0)) | 0)) | 0 | ((i64toi32_i32$3 << i64toi32_i32$4) | 0) | 0;
                                    $48_1 = (i64toi32_i32$5 << i64toi32_i32$4) | 0;
                                }
                                $154$hi = i64toi32_i32$2;
                                i64toi32_i32$2 = var$7$hi;
                                i64toi32_i32$2 = $154$hi;
                                i64toi32_i32$3 = $48_1;
                                i64toi32_i32$5 = var$7$hi;
                                i64toi32_i32$0 = var$7;
                                i64toi32_i32$5 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
                                var$0 = i64toi32_i32$3 | i64toi32_i32$0 | 0;
                                var$0$hi = i64toi32_i32$5;
                                i64toi32_i32$5 = var$6$hi;
                                i64toi32_i32$2 = var$6;
                                i64toi32_i32$3 = 0;
                                i64toi32_i32$0 = 1;
                                i64toi32_i32$3 = (i64toi32_i32$5 & i64toi32_i32$3) | 0;
                                var$6 = (i64toi32_i32$2 & i64toi32_i32$0) | 0;
                                var$6$hi = i64toi32_i32$3;
                                var$7 = var$6;
                                var$7$hi = i64toi32_i32$3;
                                var$2 = (var$2 + -1) | 0;
                                if (var$2) {
                                    continue label$15;
                                }
                                break label$15;
                            }
                            break label$13;
                        }
                    }
                }
                i64toi32_i32$3 = var$5$hi;
                this.__wasm_intrinsics_temp_i64 = var$5;
                this.__wasm_intrinsics_temp_i64$hi = i64toi32_i32$3;
                i64toi32_i32$3 = var$0$hi;
                i64toi32_i32$5 = var$0;
                i64toi32_i32$2 = 0;
                i64toi32_i32$0 = 1;
                i64toi32_i32$4 = (i64toi32_i32$0 & 31) | 0;
                if (32 >>> 0 <= ((i64toi32_i32$0 & 63) | 0) >>> 0) {
                    i64toi32_i32$2 = (i64toi32_i32$5 << i64toi32_i32$4) | 0;
                    $49_1 = 0;
                } else {
                    i64toi32_i32$2 = (((((1 << i64toi32_i32$4) | 0) - 1) | 0) & ((i64toi32_i32$5 >>> ((32 - i64toi32_i32$4) | 0)) | 0)) | 0 | ((i64toi32_i32$3 << i64toi32_i32$4) | 0) | 0;
                    $49_1 = (i64toi32_i32$5 << i64toi32_i32$4) | 0;
                }
                $165$hi = i64toi32_i32$2;
                i64toi32_i32$2 = var$6$hi;
                i64toi32_i32$2 = $165$hi;
                i64toi32_i32$3 = $49_1;
                i64toi32_i32$5 = var$6$hi;
                i64toi32_i32$0 = var$6;
                i64toi32_i32$5 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
                i64toi32_i32$3 = i64toi32_i32$3 | i64toi32_i32$0 | 0;
                this.i64toi32_i32$HIGH_BITS = i64toi32_i32$5;
                return i64toi32_i32$3 | 0;
            }
            i64toi32_i32$3 = var$0$hi;
            this.__wasm_intrinsics_temp_i64 = var$0;
            this.__wasm_intrinsics_temp_i64$hi = i64toi32_i32$3;
            i64toi32_i32$3 = 0;
            var$0 = 0;
            var$0$hi = i64toi32_i32$3;
        }
        i64toi32_i32$3 = var$0$hi;
        i64toi32_i32$5 = var$0;
        this.i64toi32_i32$HIGH_BITS = i64toi32_i32$3;
        return i64toi32_i32$5 | 0;
    }
    __wasm_ctz_i32(var$0) {
        var$0 = var$0 | 0;
        if (var$0) {
            return (31 - Math.clz32((((var$0 + -1) | 0) ^ var$0) | 0)) | 0 | 0;
        }
        return 32 | 0;
    }
}
class Unshuffler {
    constructor(){
        this._clientbound = new Clientbound();
        this._serverbound = new Serverbound();
    }

    clientbound(data){
        return this._clientbound.unshuffle(data);
    }

    serverbound(data){
        return this._serverbound.unshuffle(data);
    }
}

module.exports = Unshuffler;
