'use strict';

const PTR_BUILD_HASH = 7664;
const PTR_DATA = 1000000;
const PTR_SEED = 1100000;
const GLOBAL$0 = 1300000;

const BUILD_HASH = '761c7a18305159ceb5d7f7368b33c796c8d1ba94';
const SEED_CLIENTBOUND = -1959540842;
const SEED_SERVERBOUND = -1244137674;
const JUMP_TABLE_SHUFFLER_CLIENTBOUND = [73,1,24,16,11,101,10,2,14,45,69,30,92,63,42,56,18,28,70,22,43,17,36,60,62,77,68,58,99,100,34,20,3,54,23,75,40,55,125,29,98,26,44,48,82,46,86,52,15,88,64,74,103,39,67,118,102,66,35,72,78,107,116,12,80,94,27,71,33,114,61,53,21,115,57,32,119,122,0,90,121,47,127,8,104,91,126,76,96,110,112,25,41,123,93,95,31,124,13,87,89,4,81,111,79,84,108,7,120,9,85,97,83,49,5,105,59,38,65,19,113,106,117,6,109,50,37,51];
const JUMP_TABLE_UNSHUFFLER_CLIENTBOUND = [78,1,7,32,101,114,123,107,83,109,6,4,63,98,8,48,3,21,16,119,31,72,19,34,2,91,41,66,17,39,11,96,75,68,30,58,22,126,117,53,36,92,14,20,42,9,45,81,43,113,125,127,47,71,33,37,15,74,27,116,23,70,24,13,50,118,57,54,26,10,18,67,59,0,51,35,87,25,60,104,64,102,44,112,105,110,46,99,49,100,79,85,12,94,65,95,88,111,40,28,29,5,56,52,84,115,121,61,106,124,89,103,90,120,69,73,62,122,55,76,108,80,77,93,97,38,86,82];
const JUMP_TABLE_SHUFFLER_SERVERBOUND = [0,14,8,55,27,65,38,6,26,41,112,59,61,24,5,28,32,30,71,54,66,125,70,18,99,20,79,39,115,16,86,49,36,87,21,48,40,116,97,113,104,77,44,82,60,91,80,34,72,29,25,42,122,12,62,69,23,50,75,102,127,64,121,101,74,117,119,46,3,2,92,118,93,58,94,9,84,13,33,81,106,7,98,100,96,88,73,4,63,107,120,10,19,76,89,37,108,126,1,56,11,57,95,109,103,31,110,85,47,52,105,53,111,45,124,83,35,22,17,68,15,78,51,123,43,114,67,90];
const JUMP_TABLE_UNSHUFFLER_SERVERBOUND = [0,98,69,68,87,14,7,81,2,75,91,100,53,77,1,120,29,118,23,92,25,34,117,56,13,50,8,4,15,49,17,105,16,78,47,116,32,95,6,27,36,9,51,124,42,113,67,108,35,31,57,122,109,111,19,3,99,101,73,11,44,12,54,88,61,5,20,126,119,55,22,18,48,86,64,58,93,41,121,26,46,79,43,115,76,107,30,33,85,94,127,45,70,72,74,102,84,38,82,24,83,63,59,104,40,110,80,89,96,103,106,112,10,39,125,28,37,65,71,66,90,62,52,123,114,21,97,60];

const buffer = new ArrayBuffer(67108864);
const HEAP8 = new Int8Array(buffer);
const HEAP32 = new Int32Array(buffer);
const HEAPU8 = new Uint8Array(buffer);

let global$0 = 0;
let i64toi32_i32$HIGH_BITS = 0;
let __wasm_intrinsics_temp_i64 = 0;
let __wasm_intrinsics_temp_i64$hi = 0;

HEAP8.set(new TextEncoder().encode(BUILD_HASH), PTR_BUILD_HASH);

function $26($0_1) {
    $0_1 = $0_1 | 0;
    var $2_1 = 0,
        $3_1 = 0,
        $1_1 = 0;
    $2_1 = ($0_1 << 1) | 0;
    $3_1 = (($2_1 | 1 | 0) >>> 0) % (40 >>> 0) | 0;
    $0_1 = 0;
    label$1: {
        label$2: {
            switch (((HEAP8[(((($2_1 >>> 0) % (40 >>> 0) | 0) + 7664) | 0) >> 0] | 0) + -49) | 0 | 0) {
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
        switch (((HEAP8[(($3_1 + 7664) | 0) >> 0] | 0) + -49) | 0 | 0) {
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

function $5($0_1) {
    $0_1 = $0_1 | 0;
    var $1_1 = 0;
    $1_1 = (global$0 - 16) | 0;
    global$0 = $1_1;
    label$1: {
        HEAP32[(($1_1 + 12) | 0) >> 2] = 0;
        HEAP32[(($1_1 + 4) | 0) >> 2] = $0_1;
        HEAP32[$1_1 >> 2] = $0_1;
        HEAP32[(($1_1 + 8) | 0) >> 2] = ($0_1 + 1) | 0;
    }
    $0_1 = $1038($1_1 | 0) | 0;
    global$0 = ($1_1 + 16) | 0;
    return $0_1 | 0;
}
function $1038($0_1) {
    $0_1 = $0_1 | 0;
    var $2_1 = 0,
        $1_1 = 0,
        $26_1 = 0,
        $28_1 = 0;
    $2_1 = (global$0 - 16) | 0;
    global$0 = $2_1;
    HEAP32[(($2_1 + 8) | 0) >> 2] = HEAP32[(($0_1 + 4) | 0) >> 2] | 0;
    if (!(HEAPU8[(HEAP32[(($2_1 + 8) | 0) >> 2] | 0) >> 0] | 0)) {
        label$3: {
            label$4: {
                $0_1 = HEAP32[(($0_1 + 8) | 0) >> 2] | 0;
                $1_1 = HEAPU8[$0_1 >> 0] | 0;
                if (($1_1 | 0) != (1 | 0)) {
                    if (($1_1 & 2) | 0) {
                        break label$4;
                    }
                    HEAP8[$0_1 >> 0] = 2;
                    $26_1 = 1;
                } else {
                    $26_1 = 0;
                }
                $28_1 = $26_1;
                break label$3;
            }
            throw new Error();
        }
        $1_1 = $28_1;
    }
    global$0 = ($2_1 + 16) | 0;
    return $1_1 | 0;
}

function $4($0_1) {
    $0_1 = $0_1 | 0;
    var $1_1 = 0;
    $1_1 = (global$0 - 16) | 0;
    global$0 = $1_1;
    label$1: {
        HEAP32[(($1_1 + 12) | 0) >> 2] = 0;
        HEAP32[(($1_1 + 4) | 0) >> 2] = $0_1;
        HEAP32[$1_1 >> 2] = $0_1;
        HEAP32[(($1_1 + 8) | 0) >> 2] = ($0_1 + 1) | 0;
    }
    $1037($1_1 | 0);
    global$0 = ($1_1 + 16) | 0;
}
function $1037($0_1) {
    $0_1 = $0_1 | 0;
    var $1_1 = 0;
    $1_1 = (global$0 - 16) | 0;
    global$0 = $1_1;
    HEAP32[(($1_1 + 8) | 0) >> 2] = HEAP32[(($0_1 + 4) | 0) >> 2] | 0;
    HEAP8[(HEAP32[(($1_1 + 8) | 0) >> 2] | 0) >> 0] = 1;
    HEAP8[(HEAP32[(($0_1 + 8) | 0) >> 2] | 0) >> 0] = 1;
    global$0 = ($1_1 + 16) | 0;
}

function __wasm_i64_mul(var$0, var$0$hi, var$1, var$1$hi) {
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
    i64toi32_i32$1 = _ZN17compiler_builtins3int3mul3Mul3mul17h070e9a1c69faec5bE(var$0 | 0, i64toi32_i32$0 | 0, var$1 | 0, i64toi32_i32$1 | 0) | 0;
    i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
    i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
    return i64toi32_i32$1 | 0;
}
function _ZN17compiler_builtins3int3mul3Mul3mul17h070e9a1c69faec5bE(var$0, var$0$hi, var$1, var$1$hi) {
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
    i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
    return i64toi32_i32$2 | 0;
}

function __wasm_i64_urem(var$0, var$0$hi, var$1, var$1$hi) {
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
    i64toi32_i32$1 = _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E(var$0 | 0, i64toi32_i32$0 | 0, var$1 | 0, i64toi32_i32$1 | 0) | 0;
    i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
    i64toi32_i32$0 = __wasm_intrinsics_temp_i64$hi;
    i64toi32_i32$1 = __wasm_intrinsics_temp_i64;
    i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
    return i64toi32_i32$1 | 0;
}
function _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E(var$0, var$0$hi, var$1, var$1$hi) {
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
                                                __wasm_intrinsics_temp_i64 = (var$0 - Math.imul(var$2, var$3)) | 0;
                                                __wasm_intrinsics_temp_i64$hi = i64toi32_i32$1;
                                                i64toi32_i32$1 = 0;
                                                i64toi32_i32$2 = var$2;
                                                i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
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
                                            __wasm_intrinsics_temp_i64 = i64toi32_i32$3 | i64toi32_i32$0 | 0;
                                            __wasm_intrinsics_temp_i64$hi = i64toi32_i32$1;
                                            i64toi32_i32$1 = 0;
                                            i64toi32_i32$3 = (var$2 >>> (((__wasm_ctz_i32(var$3 | 0) | 0) & 31) | 0)) | 0;
                                            i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
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
                            __wasm_intrinsics_temp_i64 = $41_1;
                            __wasm_intrinsics_temp_i64$hi = i64toi32_i32$1;
                            i64toi32_i32$1 = 0;
                            i64toi32_i32$2 = var$4;
                            i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
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
                    __wasm_intrinsics_temp_i64 = (var$4 & var$0) | 0;
                    __wasm_intrinsics_temp_i64$hi = i64toi32_i32$2;
                    if ((var$3 | 0) == (1 | 0)) {
                        break label$1;
                    }
                    i64toi32_i32$2 = var$0$hi;
                    i64toi32_i32$2 = 0;
                    $120$hi = i64toi32_i32$2;
                    i64toi32_i32$2 = var$0$hi;
                    i64toi32_i32$3 = var$0;
                    i64toi32_i32$1 = $120$hi;
                    i64toi32_i32$0 = __wasm_ctz_i32(var$3 | 0) | 0;
                    i64toi32_i32$4 = (i64toi32_i32$0 & 31) | 0;
                    if (32 >>> 0 <= ((i64toi32_i32$0 & 63) | 0) >>> 0) {
                        i64toi32_i32$1 = 0;
                        $42_1 = (i64toi32_i32$2 >>> i64toi32_i32$4) | 0;
                    } else {
                        i64toi32_i32$1 = (i64toi32_i32$2 >>> i64toi32_i32$4) | 0;
                        $42_1 = (((((((1 << i64toi32_i32$4) | 0) - 1) | 0) & i64toi32_i32$2) | 0) << ((32 - i64toi32_i32$4) | 0)) | 0 | ((i64toi32_i32$3 >>> i64toi32_i32$4) | 0) | 0;
                    }
                    i64toi32_i32$3 = $42_1;
                    i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
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
            __wasm_intrinsics_temp_i64 = var$5;
            __wasm_intrinsics_temp_i64$hi = i64toi32_i32$3;
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
            i64toi32_i32$HIGH_BITS = i64toi32_i32$5;
            return i64toi32_i32$3 | 0;
        }
        i64toi32_i32$3 = var$0$hi;
        __wasm_intrinsics_temp_i64 = var$0;
        __wasm_intrinsics_temp_i64$hi = i64toi32_i32$3;
        i64toi32_i32$3 = 0;
        var$0 = 0;
        var$0$hi = i64toi32_i32$3;
    }
    i64toi32_i32$3 = var$0$hi;
    i64toi32_i32$5 = var$0;
    i64toi32_i32$HIGH_BITS = i64toi32_i32$3;
    return i64toi32_i32$5 | 0;
}
function __wasm_ctz_i32(var$0) {
    var$0 = var$0 | 0;
    if (var$0) {
        return (31 - Math.clz32((((var$0 + -1) | 0) ^ var$0) | 0)) | 0 | 0;
    }
    return 32 | 0;
}

class Shuffler {
    constructor() {
        this.seed_clientbound = SEED_CLIENTBOUND;
        this.seed_serverbound = SEED_SERVERBOUND;
    }

    clientbound(data) {
        global$0 = GLOBAL$0;
        HEAP32[PTR_SEED >> 2] = this.seed_clientbound;

        HEAPU8.set(data, PTR_DATA);

        this._clientbound(PTR_DATA, data.length, PTR_SEED);

        this.seed_clientbound = HEAP32[PTR_SEED >> 2];

        return HEAPU8.slice(PTR_DATA, PTR_DATA + data.length);
    }
    serverbound(data) {
        global$0 = GLOBAL$0;
        HEAP32[PTR_SEED >> 2] = this.seed_serverbound;

        HEAPU8.set(data, PTR_DATA);

        this._serverbound(PTR_DATA, data.length, PTR_SEED);

        this.seed_serverbound = HEAP32[PTR_SEED >> 2];

        return HEAPU8.slice(PTR_DATA, PTR_DATA + data.length);
    }

    _clientbound($0_1, $1_1, $2_1) {
        $0_1 = $0_1 | 0;
        $1_1 = $1_1 | 0;
        $2_1 = $2_1 | 0;
        var i64toi32_i32$4 = 0,
            i64toi32_i32$2 = 0,
            i64toi32_i32$0 = 0,
            i64toi32_i32$5 = 0,
            i64toi32_i32$1 = 0,
            i64toi32_i32$3 = 0,
            $3_1 = 0,
            $4_1 = 0,
            $5_1 = 0,
            $6_1 = 0,
            $10$hi = 0,
            $11$hi = 0,
            $12$hi = 0,
            $10_1 = 0,
            $11_1 = 0,
            $7_1 = 0,
            $8_1 = 0,
            $12_1 = 0,
            $9_1 = 0,
            $13$hi = 0,
            $48_1 = 0,
            $49_1 = 0,
            $50_1 = 0,
            $13_1 = 0,
            $26_1 = 0,
            $33_1 = 0,
            $33$hi = 0,
            $34_1 = 0,
            $34$hi = 0,
            $38_1 = 0,
            $38$hi = 0,
            $39$hi = 0,
            $52$hi = 0,
            $72_1 = 0,
            $72$hi = 0,
            $75$hi = 0,
            $76_1 = 0,
            $76$hi = 0,
            $80$hi = 0,
            $81$hi = 0,
            $104_1 = 0,
            $106$hi = 0,
            $51_1 = 0,
            $108$hi = 0,
            $110$hi = 0,
            $171_1 = 0,
            $174$hi = 0,
            $175$hi = 0,
            $177$hi = 0;
        $8_1 = (global$0 - 32) | 0;
        global$0 = $8_1;
        label$1: {
            if (!$1_1) {
                break label$1;
            }
            $5_1 = HEAPU8[$0_1 >> 0] | 0;
            if (!$5_1) {
                break label$1;
            }
            $4_1 = $26(1 | 0) | 0;
            $3_1 = $26(14 | 0) | 0;
            $7_1 = $26(88 | 0) | 0;
            $26_1 = $2_1;
            i64toi32_i32$0 = 0;
            i64toi32_i32$1 = 0;
            i64toi32_i32$1 = __wasm_i64_mul($4_1 | 0, i64toi32_i32$0 | 0, 387 | 0, i64toi32_i32$1 | 0) | 0;
            i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$2 = i64toi32_i32$1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$3 = 48271;
            i64toi32_i32$4 = (i64toi32_i32$2 + i64toi32_i32$3) | 0;
            i64toi32_i32$5 = (i64toi32_i32$0 + i64toi32_i32$1) | 0;
            if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$5 = (i64toi32_i32$5 + 1) | 0;
            }
            $12_1 = i64toi32_i32$4;
            $12$hi = i64toi32_i32$5;
            i64toi32_i32$0 = $2_1;
            //access seed
            i64toi32_i32$5 = HEAP32[i64toi32_i32$0 >> 2] | 0;
            i64toi32_i32$2 = 0;
            $33_1 = i64toi32_i32$5;
            $33$hi = i64toi32_i32$2;
            i64toi32_i32$2 = $12$hi;
            i64toi32_i32$5 = $33$hi;
            i64toi32_i32$5 = __wasm_i64_mul(i64toi32_i32$4 | 0, i64toi32_i32$2 | 0, $33_1 | 0, i64toi32_i32$5 | 0) | 0;
            i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
            $34_1 = i64toi32_i32$5;
            $34$hi = i64toi32_i32$2;
            i64toi32_i32$2 = 0;
            $10_1 = $3_1;
            $10$hi = i64toi32_i32$2;
            i64toi32_i32$5 = 0;
            i64toi32_i32$5 = __wasm_i64_mul($3_1 | 0, i64toi32_i32$2 | 0, 7 | 0, i64toi32_i32$5 | 0) | 0;
            i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
            $38_1 = i64toi32_i32$5;
            $38$hi = i64toi32_i32$2;
            i64toi32_i32$2 = $34$hi;
            i64toi32_i32$0 = $34_1;
            i64toi32_i32$5 = $38$hi;
            i64toi32_i32$3 = $38_1;
            i64toi32_i32$1 = (i64toi32_i32$0 + i64toi32_i32$3) | 0;
            i64toi32_i32$4 = (i64toi32_i32$2 + i64toi32_i32$5) | 0;
            if (i64toi32_i32$1 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$4 = (i64toi32_i32$4 + 1) | 0;
            }
            $39$hi = i64toi32_i32$4;
            i64toi32_i32$4 = 0;
            $52$hi = i64toi32_i32$4;
            i64toi32_i32$4 = $39$hi;
            i64toi32_i32$0 = $52$hi;
            i64toi32_i32$0 = __wasm_i64_urem(i64toi32_i32$1 | 0, i64toi32_i32$4 | 0, (((((($26(89 | 0) | 0) << 16) | 0 | (($7_1 << 24) | 0) | 0 | ((($26(90 | 0) | 0) << 8) | 0) | 0 | ($26(91 | 0) | 0) | 0) >>> 0) % (382739 >>> 0) | 0) ^ 2147483647) | 0 | 0, i64toi32_i32$0 | 0) | 0;
            i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
            $7_1 = i64toi32_i32$0;
            HEAP32[$26_1 >> 2] = i64toi32_i32$0;
            $4_1 = 0;
            //jump_table part
            $3_1 = ($7_1 & 15) | 0;
            label$6: while (1) {
                $7_1 = ($3_1 | 0) == ($4_1 | 0);
                $5_1 = JUMP_TABLE_SHUFFLER_CLIENTBOUND[((($5_1 & 255) | 0) | 0) >> 0] | 0;
                $4_1 = ($4_1 + 1) | 0;
                if (!$7_1) {
                    continue label$6;
                }
                break label$6;
            }
            HEAP8[$0_1 >> 0] = $5_1;
            $4_1 = $26(19 | 0) | 0;
            $5_1 = $26(17 | 0) | 0;
            $6_1 = $26(13 | 0) | 0;
            $3_1 = $26(4 | 0) | 0;
            i64toi32_i32$1 = 0;
            $10_1 = (((((($26(5 | 0) | 0) << 16) | 0 | (($3_1 << 24) | 0) | 0 | ((($26(6 | 0) | 0) << 8) | 0) | 0 | ($26(7 | 0) | 0) | 0) >>> 0) % (382739 >>> 0) | 0) ^ 2147483647) | 0;
            $10$hi = i64toi32_i32$1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$4 = 0;
            i64toi32_i32$4 = __wasm_i64_mul($6_1 | 0, i64toi32_i32$1 | 0, 7 | 0, i64toi32_i32$4 | 0) | 0;
            i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
            $12_1 = i64toi32_i32$4;
            $12$hi = i64toi32_i32$1;
            $3_1 = ((($4_1 >>> 0) % (10 >>> 0) | 0) + 17) | 0;
            i64toi32_i32$1 = 0;
            i64toi32_i32$4 = 0;
            i64toi32_i32$4 = __wasm_i64_mul($5_1 | 0, i64toi32_i32$1 | 0, 387 | 0, i64toi32_i32$4 | 0) | 0;
            i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$0 = i64toi32_i32$4;
            i64toi32_i32$4 = 0;
            i64toi32_i32$3 = 48271;
            i64toi32_i32$2 = (i64toi32_i32$0 + i64toi32_i32$3) | 0;
            i64toi32_i32$5 = (i64toi32_i32$1 + i64toi32_i32$4) | 0;
            if (i64toi32_i32$2 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$5 = (i64toi32_i32$5 + 1) | 0;
            }
            $11_1 = i64toi32_i32$2;
            $11$hi = i64toi32_i32$5;
            $5_1 = HEAP32[$2_1 >> 2] | 0;
            $4_1 = 0;
            label$7: while (1) {
                $171_1 = ($4_1 + $8_1) | 0;
                i64toi32_i32$5 = $11$hi;
                i64toi32_i32$5 = 0;
                $174$hi = i64toi32_i32$5;
                i64toi32_i32$5 = $11$hi;
                i64toi32_i32$0 = $174$hi;
                i64toi32_i32$0 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$5 | 0, $5_1 | 0, i64toi32_i32$0 | 0) | 0;
                i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
                $175$hi = i64toi32_i32$5;
                i64toi32_i32$5 = $12$hi;
                i64toi32_i32$5 = $175$hi;
                i64toi32_i32$1 = i64toi32_i32$0;
                i64toi32_i32$0 = $12$hi;
                i64toi32_i32$3 = $12_1;
                i64toi32_i32$4 = (i64toi32_i32$1 + i64toi32_i32$3) | 0;
                i64toi32_i32$2 = (i64toi32_i32$5 + i64toi32_i32$0) | 0;
                if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$2 = (i64toi32_i32$2 + 1) | 0;
                }
                $177$hi = i64toi32_i32$2;
                i64toi32_i32$2 = $10$hi;
                i64toi32_i32$2 = $177$hi;
                i64toi32_i32$1 = $10$hi;
                i64toi32_i32$1 = __wasm_i64_urem(i64toi32_i32$4 | 0, i64toi32_i32$2 | 0, $10_1 | 0, i64toi32_i32$1 | 0) | 0;
                i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
                $13_1 = i64toi32_i32$1;
                $13$hi = i64toi32_i32$2;
                HEAP8[$171_1 >> 0] = i64toi32_i32$1;
                $5_1 = i64toi32_i32$1;
                $4_1 = ($4_1 + 1) | 0;
                if (($4_1 | 0) != ($3_1 | 0)) {
                    continue label$7;
                }
                break label$7;
            }
            HEAP32[$2_1 >> 2] = $5_1;
            $4_1 = 1;
            if ($1_1 >>> 0 <= 1 >>> 0) {
                break label$1;
            }
            label$8: while (1) {
                $2_1 = ($0_1 + $4_1) | 0;
                HEAP8[$2_1 >> 0] = ((HEAPU8[$2_1 >> 0] | 0) ^ (HEAPU8[(($8_1 + (($4_1 >>> 0) % ($3_1 >>> 0) | 0)) | 0) >> 0] | 0)) | 0;
                $4_1 = ($4_1 + 1) | 0;
                if (($4_1 | 0) != ($1_1 | 0)) {
                    continue label$8;
                }
                break label$8;
            }
        }
        global$0 = ($8_1 + 32) | 0;
    }

    _serverbound($0_1, $1_1, $2_1) {
        $0_1 = $0_1 | 0;
        $1_1 = $1_1 | 0;
        $2_1 = $2_1 | 0;
        var i64toi32_i32$4 = 0,
            i64toi32_i32$2 = 0,
            i64toi32_i32$0 = 0,
            i64toi32_i32$5 = 0,
            i64toi32_i32$1 = 0,
            i64toi32_i32$3 = 0,
            $3_1 = 0,
            $4_1 = 0,
            $5_1 = 0,
            $6_1 = 0,
            $10$hi = 0,
            $11$hi = 0,
            $12$hi = 0,
            $10_1 = 0,
            $11_1 = 0,
            $7_1 = 0,
            $8_1 = 0,
            $12_1 = 0,
            $9_1 = 0,
            $13$hi = 0,
            $48_1 = 0,
            $49_1 = 0,
            $50_1 = 0,
            $13_1 = 0,
            $26_1 = 0,
            $33_1 = 0,
            $33$hi = 0,
            $34_1 = 0,
            $34$hi = 0,
            $38_1 = 0,
            $38$hi = 0,
            $39$hi = 0,
            $52$hi = 0,
            $72_1 = 0,
            $72$hi = 0,
            $75$hi = 0,
            $76_1 = 0,
            $76$hi = 0,
            $80$hi = 0,
            $81$hi = 0,
            $104_1 = 0,
            $106$hi = 0,
            $51_1 = 0,
            $108$hi = 0,
            $110$hi = 0,
            $171_1 = 0,
            $174$hi = 0,
            $175$hi = 0,
            $177$hi = 0;
        $8_1 = (global$0 - 32) | 0;
        global$0 = $8_1;
        label$1: {
            if (!$1_1) {
                break label$1;
            }
            $5_1 = HEAPU8[$0_1 >> 0] | 0;
            if (!$5_1) {
                break label$1;
            }
            $4_1 = $26(3 | 0) | 0;
            $3_1 = $26(7 | 0) | 0;
            $7_1 = $26(76 | 0) | 0;
            $26_1 = $2_1;
            i64toi32_i32$0 = 0;
            i64toi32_i32$1 = 0;
            i64toi32_i32$1 = __wasm_i64_mul($4_1 | 0, i64toi32_i32$0 | 0, 387 | 0, i64toi32_i32$1 | 0) | 0;
            i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$2 = i64toi32_i32$1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$3 = 48271;
            i64toi32_i32$4 = (i64toi32_i32$2 + i64toi32_i32$3) | 0;
            i64toi32_i32$5 = (i64toi32_i32$0 + i64toi32_i32$1) | 0;
            if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$5 = (i64toi32_i32$5 + 1) | 0;
            }
            $12_1 = i64toi32_i32$4;
            $12$hi = i64toi32_i32$5;
            i64toi32_i32$0 = $2_1;
            //access seed
            i64toi32_i32$5 = HEAP32[i64toi32_i32$0 >> 2] | 0;
            i64toi32_i32$2 = 0;
            $33_1 = i64toi32_i32$5;
            $33$hi = i64toi32_i32$2;
            i64toi32_i32$2 = $12$hi;
            i64toi32_i32$5 = $33$hi;
            i64toi32_i32$5 = __wasm_i64_mul(i64toi32_i32$4 | 0, i64toi32_i32$2 | 0, $33_1 | 0, i64toi32_i32$5 | 0) | 0;
            i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
            $34_1 = i64toi32_i32$5;
            $34$hi = i64toi32_i32$2;
            i64toi32_i32$2 = 0;
            $10_1 = $3_1;
            $10$hi = i64toi32_i32$2;
            i64toi32_i32$5 = 0;
            i64toi32_i32$5 = __wasm_i64_mul($3_1 | 0, i64toi32_i32$2 | 0, 7 | 0, i64toi32_i32$5 | 0) | 0;
            i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
            $38_1 = i64toi32_i32$5;
            $38$hi = i64toi32_i32$2;
            i64toi32_i32$2 = $34$hi;
            i64toi32_i32$0 = $34_1;
            i64toi32_i32$5 = $38$hi;
            i64toi32_i32$3 = $38_1;
            i64toi32_i32$1 = (i64toi32_i32$0 + i64toi32_i32$3) | 0;
            i64toi32_i32$4 = (i64toi32_i32$2 + i64toi32_i32$5) | 0;
            if (i64toi32_i32$1 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$4 = (i64toi32_i32$4 + 1) | 0;
            }
            $39$hi = i64toi32_i32$4;
            i64toi32_i32$4 = 0;
            $52$hi = i64toi32_i32$4;
            i64toi32_i32$4 = $39$hi;
            i64toi32_i32$0 = $52$hi;
            i64toi32_i32$0 = __wasm_i64_urem(i64toi32_i32$1 | 0, i64toi32_i32$4 | 0, (((((($26(77 | 0) | 0) << 16) | 0 | (($7_1 << 24) | 0) | 0 | ((($26(78 | 0) | 0) << 8) | 0) | 0 | ($26(79 | 0) | 0) | 0) >>> 0) % (382739 >>> 0) | 0) ^ 2147483647) | 0 | 0, i64toi32_i32$0 | 0) | 0;
            i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
            $7_1 = i64toi32_i32$0;
            HEAP32[$26_1 >> 2] = i64toi32_i32$0;
            $4_1 = 0;
            //jump_table part
            $3_1 = ($7_1 & 15) | 0;
            label$6: while (1) {
                $7_1 = ($3_1 | 0) == ($4_1 | 0);
                $5_1 = JUMP_TABLE_SHUFFLER_SERVERBOUND[((($5_1 & 255) | 0) | 0) >> 0] | 0;
                $4_1 = ($4_1 + 1) | 0;
                if (!$7_1) {
                    continue label$6;
                }
                break label$6;
            }
            HEAP8[$0_1 >> 0] = $5_1;
            $4_1 = $26(19 | 0) | 0;
            $5_1 = $26(12 | 0) | 0;
            $3_1 = $26(20 | 0) | 0;
            i64toi32_i32$1 = 0;
            $10_1 = (((((($26(21 | 0) | 0) << 16) | 0 | (($3_1 << 24) | 0) | 0 | ((($26(22 | 0) | 0) << 8) | 0) | 0 | ($26(23 | 0) | 0) | 0) >>> 0) % (382739 >>> 0) | 0) ^ 2147483647) | 0;
            $10$hi = i64toi32_i32$1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$4 = 0;
            i64toi32_i32$4 = __wasm_i64_mul($4_1 | 0, i64toi32_i32$1 | 0, 7 | 0, i64toi32_i32$4 | 0) | 0;
            i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
            $12_1 = i64toi32_i32$4;
            $12$hi = i64toi32_i32$1;
            $3_1 = ((($4_1 >>> 0) % (10 >>> 0) | 0) + 17) | 0;
            i64toi32_i32$1 = 0;
            i64toi32_i32$4 = 0;
            i64toi32_i32$4 = __wasm_i64_mul($5_1 | 0, i64toi32_i32$1 | 0, 387 | 0, i64toi32_i32$4 | 0) | 0;
            i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$0 = i64toi32_i32$4;
            i64toi32_i32$4 = 0;
            i64toi32_i32$3 = 48271;
            i64toi32_i32$2 = (i64toi32_i32$0 + i64toi32_i32$3) | 0;
            i64toi32_i32$5 = (i64toi32_i32$1 + i64toi32_i32$4) | 0;
            if (i64toi32_i32$2 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$5 = (i64toi32_i32$5 + 1) | 0;
            }
            $11_1 = i64toi32_i32$2;
            $11$hi = i64toi32_i32$5;
            $5_1 = HEAP32[$2_1 >> 2] | 0;
            $4_1 = 0;
            label$7: while (1) {
                $171_1 = ($4_1 + $8_1) | 0;
                i64toi32_i32$5 = $11$hi;
                i64toi32_i32$5 = 0;
                $174$hi = i64toi32_i32$5;
                i64toi32_i32$5 = $11$hi;
                i64toi32_i32$0 = $174$hi;
                i64toi32_i32$0 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$5 | 0, $5_1 | 0, i64toi32_i32$0 | 0) | 0;
                i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
                $175$hi = i64toi32_i32$5;
                i64toi32_i32$5 = $12$hi;
                i64toi32_i32$5 = $175$hi;
                i64toi32_i32$1 = i64toi32_i32$0;
                i64toi32_i32$0 = $12$hi;
                i64toi32_i32$3 = $12_1;
                i64toi32_i32$4 = (i64toi32_i32$1 + i64toi32_i32$3) | 0;
                i64toi32_i32$2 = (i64toi32_i32$5 + i64toi32_i32$0) | 0;
                if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$2 = (i64toi32_i32$2 + 1) | 0;
                }
                $177$hi = i64toi32_i32$2;
                i64toi32_i32$2 = $10$hi;
                i64toi32_i32$2 = $177$hi;
                i64toi32_i32$1 = $10$hi;
                i64toi32_i32$1 = __wasm_i64_urem(i64toi32_i32$4 | 0, i64toi32_i32$2 | 0, $10_1 | 0, i64toi32_i32$1 | 0) | 0;
                i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
                $13_1 = i64toi32_i32$1;
                $13$hi = i64toi32_i32$2;
                HEAP8[$171_1 >> 0] = i64toi32_i32$1;
                $5_1 = i64toi32_i32$1;
                $4_1 = ($4_1 + 1) | 0;
                if (($4_1 | 0) != ($3_1 | 0)) {
                    continue label$7;
                }
                break label$7;
            }
            HEAP32[$2_1 >> 2] = $5_1;
            $4_1 = 1;
            if ($1_1 >>> 0 <= 1 >>> 0) {
                break label$1;
            }
            label$8: while (1) {
                $2_1 = ($0_1 + $4_1) | 0;
                HEAP8[$2_1 >> 0] = ((HEAPU8[$2_1 >> 0] | 0) ^ (HEAPU8[(($8_1 + (($4_1 >>> 0) % ($3_1 >>> 0) | 0)) | 0) >> 0] | 0)) | 0;
                $4_1 = ($4_1 + 1) | 0;
                if (($4_1 | 0) != ($1_1 | 0)) {
                    continue label$8;
                }
                break label$8;
            }
        }
        global$0 = ($8_1 + 32) | 0;
    }
}
class Unshuffler {
    constructor() {
        this.seed_clientbound = SEED_CLIENTBOUND;
        this.seed_serverbound = SEED_SERVERBOUND;
    }

    clientbound(data) {
        global$0 = GLOBAL$0;
        HEAP32[((PTR_SEED + 12) | 0) >> 2] = this.seed_clientbound;

        HEAPU8.set(data, PTR_DATA);

        this._clientbound(PTR_DATA, data.length, PTR_SEED);
        this.seed_clientbound = HEAP32[((PTR_SEED + 12) | 0) >> 2];
        return HEAPU8.slice(PTR_DATA, PTR_DATA + data.length);
    }
    serverbound(data) {
        global$0 = GLOBAL$0;
        HEAP32[((PTR_SEED + 12) | 0) >> 2] = this.seed_serverbound;

        HEAPU8.set(data, PTR_DATA);
        this._serverbound(PTR_DATA, data.length, PTR_SEED);

        this.seed_serverbound = HEAP32[((PTR_SEED + 12) | 0) >> 2];
        return HEAPU8.slice(PTR_DATA, PTR_DATA + data.length);
    }
    _clientbound($8_1, $5_1, $3_1) {
        $8_1 = $8_1 | 0;
        $5_1 = $5_1 | 0;
        $3_1 = $3_1 | 0;
        var $2_1,
            $4_1 = 0,
            $0_1 = 0,
            $1_1 = 0,
            $6_1 = 0,
            $328_1 = 0,
            i64toi32_i32$2 = 0,
            i64toi32_i32$0 = 0,
            i64toi32_i32$1 = 0,
            $330_1 = 0,
            $330$hi = 0,
            $12_1 = 0,
            $12$hi = 0,
            i64toi32_i32$3 = 0,
            i64toi32_i32$4 = 0,
            i64toi32_i32$5 = 0,
            $335$hi = 0,
            $336$hi = 0,
            $336_1 = 0,
            $339_1 = 0,
            $339$hi = 0,
            $340$hi = 0,
            $353$hi = 0,
            $13_1 = 0,
            $13$hi = 0,
            $378_1 = 0,
            $378$hi = 0,
            $74_1 = 0,
            $380_1 = 0,
            $380$hi = 0,
            $75_1 = 0,
            $383$hi = 0,
            $384$hi = 0,
            $384_1 = 0,
            $76_1 = 0,
            $386$hi = 0,
            $387_1 = 0,
            $387$hi = 0,
            $14_1 = 0,
            $14$hi = 0,
            $15_1 = 0,
            $15$hi = 0,
            $11_1 = 0,
            $414_1 = 0,
            $416$hi = 0,
            $77_1 = 0,
            $418$hi = 0,
            $420$hi = 0,
            $495_1 = 0,
            $498$hi = 0,
            $499$hi = 0,
            $501$hi = 0;

        $2_1 = global$0;
        global$0 = $2_1;
        label$42: {
            if (!$5_1) {
                break label$42;
            }
            $4_1 = HEAPU8[$8_1 >> 0] | 0;
            if (($4_1 | 0) == (1 | 0)) {
                break label$42;
            }
            $0_1 = $26(1 | 0) | 0;
            $1_1 = $26(14 | 0) | 0;
            $6_1 = $26(88 | 0) | 0;
            $328_1 = $3_1;
            i64toi32_i32$2 = $3_1;
            i64toi32_i32$0 = HEAP32[((i64toi32_i32$2 + 12) | 0) >> 2] | 0;
            i64toi32_i32$1 = 0;
            $330_1 = i64toi32_i32$0;
            $330$hi = i64toi32_i32$1;
            i64toi32_i32$1 = 0;
            $12_1 = $0_1;
            $12$hi = i64toi32_i32$1;
            i64toi32_i32$0 = 0;
            i64toi32_i32$0 = __wasm_i64_mul($0_1 | 0, i64toi32_i32$1 | 0, 387 | 0, i64toi32_i32$0 | 0) | 0;
            i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$2 = i64toi32_i32$0;
            i64toi32_i32$0 = 0;
            i64toi32_i32$3 = 48271;
            i64toi32_i32$4 = (i64toi32_i32$2 + i64toi32_i32$3) | 0;
            i64toi32_i32$5 = (i64toi32_i32$1 + i64toi32_i32$0) | 0;
            if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$5 = (i64toi32_i32$5 + 1) | 0;
            }
            $335$hi = i64toi32_i32$5;
            i64toi32_i32$5 = $330$hi;
            i64toi32_i32$2 = $335$hi;
            i64toi32_i32$2 = __wasm_i64_mul($330_1 | 0, i64toi32_i32$5 | 0, i64toi32_i32$4 | 0, i64toi32_i32$2 | 0) | 0;
            i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
            $336_1 = i64toi32_i32$2;
            $336$hi = i64toi32_i32$5;
            i64toi32_i32$5 = 0;
            i64toi32_i32$2 = 0;
            i64toi32_i32$2 = __wasm_i64_mul($1_1 | 0, i64toi32_i32$5 | 0, 7 | 0, i64toi32_i32$2 | 0) | 0;
            i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
            $339_1 = i64toi32_i32$2;
            $339$hi = i64toi32_i32$5;
            i64toi32_i32$5 = $336$hi;
            i64toi32_i32$1 = $336_1;
            i64toi32_i32$2 = $339$hi;
            i64toi32_i32$3 = $339_1;
            i64toi32_i32$0 = (i64toi32_i32$1 + i64toi32_i32$3) | 0;
            i64toi32_i32$4 = (i64toi32_i32$5 + i64toi32_i32$2) | 0;
            if (i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$4 = (i64toi32_i32$4 + 1) | 0;
            }
            $340$hi = i64toi32_i32$4;
            i64toi32_i32$4 = 0;
            $353$hi = i64toi32_i32$4;
            i64toi32_i32$4 = $340$hi;
            i64toi32_i32$1 = $353$hi;
            i64toi32_i32$1 = __wasm_i64_urem(i64toi32_i32$0 | 0, i64toi32_i32$4 | 0, (((((($26(89 | 0) | 0) << 16) | 0 | (($6_1 << 24) | 0) | 0 | ((($26(90 | 0) | 0) << 8) | 0) | 0 | ($26(91 | 0) | 0) | 0) >>> 0) % (382739 >>> 0) | 0) ^ 2147483647) | 0 | 0, i64toi32_i32$1 | 0) | 0;
            i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
            $0_1 = i64toi32_i32$1;
            HEAP32[(($328_1 + 12) | 0) >> 2] = i64toi32_i32$1;
            //jump table
            $1_1 = ($0_1 & 15) | 0;
            $0_1 = 0;
            label$48: while (1) { 
                $6_1 = ($0_1 | 0) == ($1_1 | 0);
                $4_1 = JUMP_TABLE_UNSHUFFLER_CLIENTBOUND[((($4_1 & 255) | 0) | 0) >> 0] | 0;
                $0_1 = ($0_1 + 1) | 0;
                if (!$6_1) {
                    continue label$48;
                }
                break label$48;
            }
            HEAP8[$8_1 >> 0] = $4_1;
            $0_1 = $26(19 | 0) | 0;
            $4_1 = $26(17 | 0) | 0;
            $6_1 = $26(13 | 0) | 0;
            $1_1 = $26(4 | 0) | 0;
            i64toi32_i32$2 = 0;
            $12_1 = (((((($26(5 | 0) | 0) << 16) | 0 | (($1_1 << 24) | 0) | 0 | ((($26(6 | 0) | 0) << 8) | 0) | 0 | ($26(7 | 0) | 0) | 0) >>> 0) % (382739 >>> 0) | 0) ^ 2147483647) | 0;
            $12$hi = i64toi32_i32$2;
            $1_1 = ((($0_1 >>> 0) % (10 >>> 0) | 0) + 17) | 0;
            i64toi32_i32$2 = 0;
            i64toi32_i32$0 = 0;
            i64toi32_i32$0 = __wasm_i64_mul($6_1 | 0, i64toi32_i32$2 | 0, 7 | 0, i64toi32_i32$0 | 0) | 0;
            i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
            $13_1 = i64toi32_i32$0;
            $13$hi = i64toi32_i32$2;
            i64toi32_i32$2 = 0;
            i64toi32_i32$0 = 0;
            i64toi32_i32$0 = __wasm_i64_mul($4_1 | 0, i64toi32_i32$2 | 0, 387 | 0, i64toi32_i32$0 | 0) | 0;
            i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$5 = i64toi32_i32$0;
            i64toi32_i32$0 = 0;
            i64toi32_i32$3 = 48271;
            i64toi32_i32$4 = (i64toi32_i32$5 + i64toi32_i32$3) | 0;
            i64toi32_i32$1 = (i64toi32_i32$2 + i64toi32_i32$0) | 0;
            if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$1 = (i64toi32_i32$1 + 1) | 0;
            }
            $14_1 = i64toi32_i32$4;
            $14$hi = i64toi32_i32$1;
            $4_1 = HEAP32[(($3_1 + 12) | 0) >> 2] | 0;
            $0_1 = 0;
            label$49: while (1) {
                $495_1 = ((($2_1 + 144) | 0) + $0_1) | 0;
                i64toi32_i32$1 = $14$hi;
                i64toi32_i32$1 = 0;
                $498$hi = i64toi32_i32$1;
                i64toi32_i32$1 = $14$hi;
                i64toi32_i32$5 = $498$hi;
                i64toi32_i32$5 = __wasm_i64_mul($14_1 | 0, i64toi32_i32$1 | 0, $4_1 | 0, i64toi32_i32$5 | 0) | 0;
                i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
                $499$hi = i64toi32_i32$1;
                i64toi32_i32$1 = $13$hi;
                i64toi32_i32$1 = $499$hi;
                i64toi32_i32$2 = i64toi32_i32$5;
                i64toi32_i32$5 = $13$hi;
                i64toi32_i32$3 = $13_1;
                i64toi32_i32$0 = (i64toi32_i32$2 + i64toi32_i32$3) | 0;
                i64toi32_i32$4 = (i64toi32_i32$1 + i64toi32_i32$5) | 0;
                if (i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$4 = (i64toi32_i32$4 + 1) | 0;
                }
                $501$hi = i64toi32_i32$4;
                i64toi32_i32$4 = $12$hi;
                i64toi32_i32$4 = $501$hi;
                i64toi32_i32$2 = $12$hi;
                i64toi32_i32$2 = __wasm_i64_urem(i64toi32_i32$0 | 0, i64toi32_i32$4 | 0, $12_1 | 0, i64toi32_i32$2 | 0) | 0;
                i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
                $15_1 = i64toi32_i32$2;
                $15$hi = i64toi32_i32$4;
                HEAP8[$495_1 >> 0] = i64toi32_i32$2;
                $4_1 = i64toi32_i32$2;
                $0_1 = ($0_1 + 1) | 0;
                if (($0_1 | 0) != ($1_1 | 0)) {
                    continue label$49;
                }
                break label$49;
            }
            HEAP32[(($3_1 + 12) | 0) >> 2] = $4_1;
            $0_1 = 1;
            if ($5_1 >>> 0 <= 1 >>> 0) {
                break label$42;
            }
            label$50: while (1) {
                $4_1 = ($0_1 + $8_1) | 0;
                HEAP8[$4_1 >> 0] = ((HEAPU8[$4_1 >> 0] | 0) ^ (HEAPU8[(((($2_1 + 144) | 0) + (($0_1 >>> 0) % ($1_1 >>> 0) | 0)) | 0) >> 0] | 0)) | 0;
                $0_1 = ($0_1 + 1) | 0;
                if (($0_1 | 0) != ($5_1 | 0)) {
                    continue label$50;
                }
                break label$50;
            }
        }
    }
    _serverbound($8_1, $5_1, $3_1) {
        $8_1 = $8_1 | 0;
        $5_1 = $5_1 | 0;
        $3_1 = $3_1 | 0;
        var $2_1,
            $4_1 = 0,
            $0_1 = 0,
            $1_1 = 0,
            $6_1 = 0,
            $328_1 = 0,
            i64toi32_i32$2 = 0,
            i64toi32_i32$0 = 0,
            i64toi32_i32$1 = 0,
            $330_1 = 0,
            $330$hi = 0,
            $12_1 = 0,
            $12$hi = 0,
            i64toi32_i32$3 = 0,
            i64toi32_i32$4 = 0,
            i64toi32_i32$5 = 0,
            $335$hi = 0,
            $336$hi = 0,
            $336_1 = 0,
            $339_1 = 0,
            $339$hi = 0,
            $340$hi = 0,
            $353$hi = 0,
            $13_1 = 0,
            $13$hi = 0,
            $378_1 = 0,
            $378$hi = 0,
            $74_1 = 0,
            $380_1 = 0,
            $380$hi = 0,
            $75_1 = 0,
            $383$hi = 0,
            $384$hi = 0,
            $384_1 = 0,
            $76_1 = 0,
            $386$hi = 0,
            $387_1 = 0,
            $387$hi = 0,
            $14_1 = 0,
            $14$hi = 0,
            $15_1 = 0,
            $15$hi = 0,
            $11_1 = 0,
            $414_1 = 0,
            $416$hi = 0,
            $77_1 = 0,
            $418$hi = 0,
            $420$hi = 0,
            $495_1 = 0,
            $498$hi = 0,
            $499$hi = 0,
            $501$hi = 0;

        $2_1 = global$0;
        global$0 = $2_1;
        label$42: {
            if (!$5_1) {
                break label$42;
            }
            $4_1 = HEAPU8[$8_1 >> 0] | 0;
            if (($4_1 | 0) == (0 | 0)) {
                break label$42;
            }
            $0_1 = $26(3 | 0) | 0;
            $1_1 = $26(7 | 0) | 0;
            $6_1 = $26(76 | 0) | 0;
            $328_1 = $3_1;
            i64toi32_i32$2 = $3_1;
            i64toi32_i32$0 = HEAP32[((i64toi32_i32$2 + 12) | 0) >> 2] | 0;
            i64toi32_i32$1 = 0;
            $330_1 = i64toi32_i32$0;
            $330$hi = i64toi32_i32$1;
            i64toi32_i32$1 = 0;
            $12_1 = $0_1;
            $12$hi = i64toi32_i32$1;
            i64toi32_i32$0 = 0;
            i64toi32_i32$0 = __wasm_i64_mul($0_1 | 0, i64toi32_i32$1 | 0, 387 | 0, i64toi32_i32$0 | 0) | 0;
            i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$2 = i64toi32_i32$0;
            i64toi32_i32$0 = 0;
            i64toi32_i32$3 = 48271;
            i64toi32_i32$4 = (i64toi32_i32$2 + i64toi32_i32$3) | 0;
            i64toi32_i32$5 = (i64toi32_i32$1 + i64toi32_i32$0) | 0;
            if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$5 = (i64toi32_i32$5 + 1) | 0;
            }
            $335$hi = i64toi32_i32$5;
            i64toi32_i32$5 = $330$hi;
            i64toi32_i32$2 = $335$hi;
            i64toi32_i32$2 = __wasm_i64_mul($330_1 | 0, i64toi32_i32$5 | 0, i64toi32_i32$4 | 0, i64toi32_i32$2 | 0) | 0;
            i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
            $336_1 = i64toi32_i32$2;
            $336$hi = i64toi32_i32$5;
            i64toi32_i32$5 = 0;
            i64toi32_i32$2 = 0;
            i64toi32_i32$2 = __wasm_i64_mul($1_1 | 0, i64toi32_i32$5 | 0, 7 | 0, i64toi32_i32$2 | 0) | 0;
            i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
            $339_1 = i64toi32_i32$2;
            $339$hi = i64toi32_i32$5;
            i64toi32_i32$5 = $336$hi;
            i64toi32_i32$1 = $336_1;
            i64toi32_i32$2 = $339$hi;
            i64toi32_i32$3 = $339_1;
            i64toi32_i32$0 = (i64toi32_i32$1 + i64toi32_i32$3) | 0;
            i64toi32_i32$4 = (i64toi32_i32$5 + i64toi32_i32$2) | 0;
            if (i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$4 = (i64toi32_i32$4 + 1) | 0;
            }
            $340$hi = i64toi32_i32$4;
            i64toi32_i32$4 = 0;
            $353$hi = i64toi32_i32$4;
            i64toi32_i32$4 = $340$hi;
            i64toi32_i32$1 = $353$hi;
            i64toi32_i32$1 = __wasm_i64_urem(i64toi32_i32$0 | 0, i64toi32_i32$4 | 0, (((((($26(77 | 0) | 0) << 16) | 0 | (($6_1 << 24) | 0) | 0 | ((($26(78 | 0) | 0) << 8) | 0) | 0 | ($26(79 | 0) | 0) | 0) >>> 0) % (382739 >>> 0) | 0) ^ 2147483647) | 0 | 0, i64toi32_i32$1 | 0) | 0;
            i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
            $0_1 = i64toi32_i32$1;
            HEAP32[(($328_1 + 12) | 0) >> 2] = i64toi32_i32$1;
            //jump table
            $1_1 = ($0_1 & 15) | 0;
            $0_1 = 0;
            label$48: while (1) {
                $6_1 = ($0_1 | 0) == ($1_1 | 0);
                $4_1 = JUMP_TABLE_UNSHUFFLER_SERVERBOUND[((($4_1 & 255) | 0) | 0) >> 0] | 0;
                $0_1 = ($0_1 + 1) | 0;
                if (!$6_1) {
                    continue label$48;
                }
                break label$48;
            }
            HEAP8[$8_1 >> 0] = $4_1;
            $0_1 = $26(19 | 0) | 0;
            $4_1 = $26(12 | 0) | 0;
            $6_1 = $26(19 | 0) | 0;
            $1_1 = $26(20 | 0) | 0;
            i64toi32_i32$2 = 0;
            $12_1 = (((((($26(21 | 0) | 0) << 16) | 0 | (($1_1 << 24) | 0) | 0 | ((($26(22 | 0) | 0) << 8) | 0) | 0 | ($26(23 | 0) | 0) | 0) >>> 0) % (382739 >>> 0) | 0) ^ 2147483647) | 0;
            $12$hi = i64toi32_i32$2;
            $1_1 = ((($0_1 >>> 0) % (10 >>> 0) | 0) + 17) | 0;
            i64toi32_i32$2 = 0;
            i64toi32_i32$0 = 0;
            i64toi32_i32$0 = __wasm_i64_mul($6_1 | 0, i64toi32_i32$2 | 0, 7 | 0, i64toi32_i32$0 | 0) | 0;
            i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
            $13_1 = i64toi32_i32$0;
            $13$hi = i64toi32_i32$2;
            i64toi32_i32$2 = 0;
            i64toi32_i32$0 = 0;
            i64toi32_i32$0 = __wasm_i64_mul($4_1 | 0, i64toi32_i32$2 | 0, 387 | 0, i64toi32_i32$0 | 0) | 0;
            i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$5 = i64toi32_i32$0;
            i64toi32_i32$0 = 0;
            i64toi32_i32$3 = 48271;
            i64toi32_i32$4 = (i64toi32_i32$5 + i64toi32_i32$3) | 0;
            i64toi32_i32$1 = (i64toi32_i32$2 + i64toi32_i32$0) | 0;
            if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$1 = (i64toi32_i32$1 + 1) | 0;
            }
            $14_1 = i64toi32_i32$4;
            $14$hi = i64toi32_i32$1;
            $4_1 = HEAP32[(($3_1 + 12) | 0) >> 2] | 0;
            $0_1 = 0;
            label$49: while (1) {
                $495_1 = ((($2_1 + 144) | 0) + $0_1) | 0;
                i64toi32_i32$1 = $14$hi;
                i64toi32_i32$1 = 0;
                $498$hi = i64toi32_i32$1;
                i64toi32_i32$1 = $14$hi;
                i64toi32_i32$5 = $498$hi;
                i64toi32_i32$5 = __wasm_i64_mul($14_1 | 0, i64toi32_i32$1 | 0, $4_1 | 0, i64toi32_i32$5 | 0) | 0;
                i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
                $499$hi = i64toi32_i32$1;
                i64toi32_i32$1 = $13$hi;
                i64toi32_i32$1 = $499$hi;
                i64toi32_i32$2 = i64toi32_i32$5;
                i64toi32_i32$5 = $13$hi;
                i64toi32_i32$3 = $13_1;
                i64toi32_i32$0 = (i64toi32_i32$2 + i64toi32_i32$3) | 0;
                i64toi32_i32$4 = (i64toi32_i32$1 + i64toi32_i32$5) | 0;
                if (i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$4 = (i64toi32_i32$4 + 1) | 0;
                }
                $501$hi = i64toi32_i32$4;
                i64toi32_i32$4 = $12$hi;
                i64toi32_i32$4 = $501$hi;
                i64toi32_i32$2 = $12$hi;
                i64toi32_i32$2 = __wasm_i64_urem(i64toi32_i32$0 | 0, i64toi32_i32$4 | 0, $12_1 | 0, i64toi32_i32$2 | 0) | 0;
                i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
                $15_1 = i64toi32_i32$2;
                $15$hi = i64toi32_i32$4;
                HEAP8[$495_1 >> 0] = i64toi32_i32$2;
                $4_1 = i64toi32_i32$2;
                $0_1 = ($0_1 + 1) | 0;
                if (($0_1 | 0) != ($1_1 | 0)) {
                    continue label$49;
                }
                break label$49;
            }
            HEAP32[(($3_1 + 12) | 0) >> 2] = $4_1;
            $0_1 = 1;
            if ($5_1 >>> 0 <= 1 >>> 0) {
                break label$42;
            }
            label$50: while (1) {
                $4_1 = ($0_1 + $8_1) | 0;
                HEAP8[$4_1 >> 0] = ((HEAPU8[$4_1 >> 0] | 0) ^ (HEAPU8[(((($2_1 + 144) | 0) + (($0_1 >>> 0) % ($1_1 >>> 0) | 0)) | 0) >> 0] | 0)) | 0;
                $0_1 = ($0_1 + 1) | 0;
                if (($0_1 | 0) != ($5_1 | 0)) {
                    continue label$50;
                }
                break label$50;
            }
        }
    }
}

module.exports = { Shuffler, Unshuffler };
