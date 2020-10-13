'use strict';

const PTR_DATA = 1000000;
const PTR_SEED = 1100000;
const GLOBAL$0 = 1200000;

const SEED_CLIENTBOUND = -499772712;
const SEED_SERVERBOUND = -1908243100;
const JUMP_TABLE_UNSHUFFLER_CLIENTBOUND = [31, 1, 62, 124, 7, 2, 84, 107, 32, 120, 86, 26, 27, 28, 11, 111, 70, 82, 100, 127, 116, 90, 0, 4, 106, 46, 85, 102, 44, 68, 63, 56, 47, 69, 16, 10, 38, 29, 76, 112, 24, 74, 94, 22, 35, 93, 23, 79, 108, 42, 98, 114, 12, 6, 34, 41, 67, 49, 33, 118, 13, 19, 25, 77, 18, 104, 21, 5, 15, 123, 97, 52, 51, 66, 50, 75, 30, 40, 92, 80, 121, 54, 14, 3, 117, 20, 55, 83, 53, 103, 119, 37, 78, 126, 57, 71, 105, 91, 110, 36, 95, 109, 61, 87, 113, 60, 125, 43, 64, 101, 8, 89, 81, 59, 45, 88, 115, 58, 48, 72, 73, 17, 39, 96, 99, 65, 122, 9];
const JUMP_TABLE_SHUFFLER_SERVERBOUND = [0, 33, 87, 24, 51, 74, 77, 89, 10, 8, 22, 9, 52, 94, 43, 125, 54, 38, 70, 85, 95, 4, 86, 40, 34, 111, 60, 118, 13, 44, 15, 62, 90, 36, 46, 76, 115, 112, 122, 65, 56, 66, 108, 42, 25, 72, 71, 26, 102, 113, 120, 18, 78, 73, 17, 123, 81, 50, 41, 48, 75, 121, 68, 6, 82, 91, 63, 27, 55, 100, 61, 92, 53, 20, 117, 19, 23, 12, 84, 64, 1, 80, 5, 32, 104, 93, 106, 96, 124, 2, 29, 58, 7, 127, 39, 35, 109, 21, 119, 107, 59, 98, 79, 97, 45, 14, 126, 114, 101, 83, 11, 88, 116, 28, 37, 103, 105, 110, 3, 57, 67, 30, 69, 49, 31, 99, 47, 16];
const JUMP_TABLE_SHUFFLER_CLIENTBOUND = invertJumpTable(JUMP_TABLE_UNSHUFFLER_CLIENTBOUND);
const JUMP_TABLE_UNSHUFFLER_SERVERBOUND = invertJumpTable(JUMP_TABLE_SHUFFLER_SERVERBOUND);

const buffer = new ArrayBuffer(17108864);
const HEAP8 = new Int8Array(buffer);
const HEAP32 = new Int32Array(buffer);
const HEAPU8 = new Uint8Array(buffer);

let global$0 = 0;
let i64toi32_i32$HIGH_BITS = 0;
let __wasm_intrinsics_temp_i64 = 0;
let __wasm_intrinsics_temp_i64$hi = 0;

function invertJumpTable(table) {
    const new_table = [];
    for (let i = 0; i < 128; i++) {
        new_table[table[i]] = i;
    }
    return new_table;
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
        HEAP32[(PTR_SEED + 12) >> 2] = this.seed_clientbound;

        HEAPU8.set(data, PTR_DATA);

        this._clientbound(PTR_SEED, PTR_DATA, data.length);

        this.seed_clientbound = HEAP32[(PTR_SEED + 12) >> 2];

        return HEAPU8.slice(PTR_DATA, PTR_DATA + data.length);
    }
    serverbound(data) {
        global$0 = GLOBAL$0;
        HEAP32[(PTR_SEED + 8) >> 2] = this.seed_serverbound;

        HEAPU8.set(data, PTR_DATA);

        this._serverbound(PTR_SEED, PTR_DATA, data.length);

        this.seed_serverbound = HEAP32[(PTR_SEED + 8) >> 2];

        return HEAPU8.slice(PTR_DATA, PTR_DATA + data.length);
    }

    _clientbound($3_1, $8_1, $5_1) {
        var $0_1 = 0,
            $4_1 = 0,
            $319_1 = 0,
            i64toi32_i32$2 = 0,
            i64toi32_i32$0 = 0,
            i64toi32_i32$1 = 0,
            $66_1 = 0,
            i64toi32_i32$3 = 0,
            i64toi32_i32$4 = 0,
            i64toi32_i32$5 = 0,
            $1_1 = 0,
            $2_1 = 0,
            $6_1 = 0,
            $394_1 = 0,
            $67_1 = 0,
            $11_1 = 0,
            $11$hi = 0,
            $401_1 = 0,
            $407_1 = 0,
            $413_1 = 0,
            $419_1 = 0,
            $425_1 = 0,
            $431_1 = 0,
            $437_1 = 0,
            $443_1 = 0,
            $449_1 = 0,
            $455_1 = 0,
            $461_1 = 0,
            $467_1 = 0,
            $473_1 = 0,
            $479_1 = 0,
            $485_1 = 0,
            $491_1 = 0,
            $497_1 = 0,
            $503_1 = 0,
            $509_1 = 0,
            $515_1 = 0,
            $521_1 = 0,
            $527_1 = 0,
            $533_1 = 0,
            $539_1 = 0;
        $0_1 = global$0;
        label$42: {
            if (!$5_1) {
                break label$42;
            }
            $4_1 = HEAPU8[$8_1 >> 0] | 0;
            if (($4_1 | 0) == (1 | 0)) {
                break label$42;
            }
            $319_1 = $3_1;
            i64toi32_i32$2 = $3_1;
            i64toi32_i32$0 = HEAP32[((i64toi32_i32$2 + 12) | 0) >> 2] | 0;
            i64toi32_i32$1 = 0;
            $66_1 = i64toi32_i32$0;
            i64toi32_i32$0 = 0;
            i64toi32_i32$0 = __wasm_i64_mul($66_1 | 0, i64toi32_i32$1 | 0, 86971 | 0, i64toi32_i32$0 | 0) | 0;
            i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$2 = i64toi32_i32$0;
            i64toi32_i32$0 = 0;
            i64toi32_i32$3 = 497;
            i64toi32_i32$4 = (i64toi32_i32$2 + i64toi32_i32$3) | 0;
            i64toi32_i32$5 = (i64toi32_i32$1 + i64toi32_i32$0) | 0;
            if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$5 = (i64toi32_i32$5 + 1) | 0;
            }
            i64toi32_i32$2 = 0;
            i64toi32_i32$2 = __wasm_i64_urem(i64toi32_i32$4 | 0, i64toi32_i32$5 | 0, 2147193789 | 0, i64toi32_i32$2 | 0) | 0;
            i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
            $1_1 = i64toi32_i32$2;
            HEAP32[(($319_1 + 12) | 0) >> 2] = i64toi32_i32$2;
            $2_1 = ($1_1 & 15) | 0;
            $1_1 = 0;
            label$48: while (1) {
                $6_1 = ($1_1 | 0) == ($2_1 | 0);
                $4_1 = JUMP_TABLE_SHUFFLER_CLIENTBOUND[(($4_1 & 255) | 0 | 0) >> 0] | 0;
                $1_1 = ($1_1 + 1) | 0;
                if (!$6_1) {
                    continue label$48;
                }
                break label$48;
            }
            HEAP8[$8_1 >> 0] = $4_1;
            $394_1 = $0_1;
            i64toi32_i32$5 = $3_1;
            i64toi32_i32$4 = HEAP32[((i64toi32_i32$5 + 12) | 0) >> 2] | 0;
            i64toi32_i32$1 = 0;
            $67_1 = i64toi32_i32$4;
            i64toi32_i32$4 = 0;
            i64toi32_i32$4 = __wasm_i64_mul($67_1 | 0, i64toi32_i32$1 | 0, 77296 | 0, i64toi32_i32$4 | 0) | 0;
            i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$5 = i64toi32_i32$4;
            i64toi32_i32$4 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$2 = (i64toi32_i32$5 + i64toi32_i32$3) | 0;
            i64toi32_i32$0 = (i64toi32_i32$1 + i64toi32_i32$4) | 0;
            if (i64toi32_i32$2 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$0 = (i64toi32_i32$0 + 1) | 0;
            }
            i64toi32_i32$5 = 0;
            i64toi32_i32$5 = __wasm_i64_urem(i64toi32_i32$2 | 0, i64toi32_i32$0 | 0, 2147193789 | 0, i64toi32_i32$5 | 0) | 0;
            i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$5;
            $11$hi = i64toi32_i32$0;
            HEAP8[(($394_1 + 80) | 0) >> 0] = i64toi32_i32$5;
            $401_1 = $0_1;
            i64toi32_i32$5 = 0;
            i64toi32_i32$5 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$0 | 0, 77296 | 0, i64toi32_i32$5 | 0) | 0;
            i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$1 = i64toi32_i32$5;
            i64toi32_i32$5 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$4 = (i64toi32_i32$1 + i64toi32_i32$3) | 0;
            i64toi32_i32$2 = (i64toi32_i32$0 + i64toi32_i32$5) | 0;
            if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$2 = (i64toi32_i32$2 + 1) | 0;
            }
            i64toi32_i32$1 = 0;
            i64toi32_i32$1 = __wasm_i64_urem(i64toi32_i32$4 | 0, i64toi32_i32$2 | 0, 2147193789 | 0, i64toi32_i32$1 | 0) | 0;
            i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$1;
            $11$hi = i64toi32_i32$2;
            HEAP8[(($401_1 + 81) | 0) >> 0] = i64toi32_i32$1;
            $407_1 = $0_1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$1 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$2 | 0, 77296 | 0, i64toi32_i32$1 | 0) | 0;
            i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$0 = i64toi32_i32$1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$5 = (i64toi32_i32$0 + i64toi32_i32$3) | 0;
            i64toi32_i32$4 = (i64toi32_i32$2 + i64toi32_i32$1) | 0;
            if (i64toi32_i32$5 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$4 = (i64toi32_i32$4 + 1) | 0;
            }
            i64toi32_i32$0 = 0;
            i64toi32_i32$0 = __wasm_i64_urem(i64toi32_i32$5 | 0, i64toi32_i32$4 | 0, 2147193789 | 0, i64toi32_i32$0 | 0) | 0;
            i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$0;
            $11$hi = i64toi32_i32$4;
            HEAP8[(($407_1 + 82) | 0) >> 0] = i64toi32_i32$0;
            $413_1 = $0_1;
            i64toi32_i32$0 = 0;
            i64toi32_i32$0 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$4 | 0, 77296 | 0, i64toi32_i32$0 | 0) | 0;
            i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$2 = i64toi32_i32$0;
            i64toi32_i32$0 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$1 = (i64toi32_i32$2 + i64toi32_i32$3) | 0;
            i64toi32_i32$5 = (i64toi32_i32$4 + i64toi32_i32$0) | 0;
            if (i64toi32_i32$1 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$5 = (i64toi32_i32$5 + 1) | 0;
            }
            i64toi32_i32$2 = 0;
            i64toi32_i32$2 = __wasm_i64_urem(i64toi32_i32$1 | 0, i64toi32_i32$5 | 0, 2147193789 | 0, i64toi32_i32$2 | 0) | 0;
            i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$2;
            $11$hi = i64toi32_i32$5;
            HEAP8[(($413_1 + 83) | 0) >> 0] = i64toi32_i32$2;
            $419_1 = $0_1;
            i64toi32_i32$2 = 0;
            i64toi32_i32$2 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$5 | 0, 77296 | 0, i64toi32_i32$2 | 0) | 0;
            i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$4 = i64toi32_i32$2;
            i64toi32_i32$2 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$0 = (i64toi32_i32$4 + i64toi32_i32$3) | 0;
            i64toi32_i32$1 = (i64toi32_i32$5 + i64toi32_i32$2) | 0;
            if (i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$1 = (i64toi32_i32$1 + 1) | 0;
            }
            i64toi32_i32$4 = 0;
            i64toi32_i32$4 = __wasm_i64_urem(i64toi32_i32$0 | 0, i64toi32_i32$1 | 0, 2147193789 | 0, i64toi32_i32$4 | 0) | 0;
            i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$4;
            $11$hi = i64toi32_i32$1;
            HEAP8[(($419_1 + 84) | 0) >> 0] = i64toi32_i32$4;
            $425_1 = $0_1;
            i64toi32_i32$4 = 0;
            i64toi32_i32$4 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$1 | 0, 77296 | 0, i64toi32_i32$4 | 0) | 0;
            i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$5 = i64toi32_i32$4;
            i64toi32_i32$4 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$2 = (i64toi32_i32$5 + i64toi32_i32$3) | 0;
            i64toi32_i32$0 = (i64toi32_i32$1 + i64toi32_i32$4) | 0;
            if (i64toi32_i32$2 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$0 = (i64toi32_i32$0 + 1) | 0;
            }
            i64toi32_i32$5 = 0;
            i64toi32_i32$5 = __wasm_i64_urem(i64toi32_i32$2 | 0, i64toi32_i32$0 | 0, 2147193789 | 0, i64toi32_i32$5 | 0) | 0;
            i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$5;
            $11$hi = i64toi32_i32$0;
            HEAP8[(($425_1 + 85) | 0) >> 0] = i64toi32_i32$5;
            $431_1 = $0_1;
            i64toi32_i32$5 = 0;
            i64toi32_i32$5 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$0 | 0, 77296 | 0, i64toi32_i32$5 | 0) | 0;
            i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$1 = i64toi32_i32$5;
            i64toi32_i32$5 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$4 = (i64toi32_i32$1 + i64toi32_i32$3) | 0;
            i64toi32_i32$2 = (i64toi32_i32$0 + i64toi32_i32$5) | 0;
            if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$2 = (i64toi32_i32$2 + 1) | 0;
            }
            i64toi32_i32$1 = 0;
            i64toi32_i32$1 = __wasm_i64_urem(i64toi32_i32$4 | 0, i64toi32_i32$2 | 0, 2147193789 | 0, i64toi32_i32$1 | 0) | 0;
            i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$1;
            $11$hi = i64toi32_i32$2;
            HEAP8[(($431_1 + 86) | 0) >> 0] = i64toi32_i32$1;
            $437_1 = $0_1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$1 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$2 | 0, 77296 | 0, i64toi32_i32$1 | 0) | 0;
            i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$0 = i64toi32_i32$1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$5 = (i64toi32_i32$0 + i64toi32_i32$3) | 0;
            i64toi32_i32$4 = (i64toi32_i32$2 + i64toi32_i32$1) | 0;
            if (i64toi32_i32$5 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$4 = (i64toi32_i32$4 + 1) | 0;
            }
            i64toi32_i32$0 = 0;
            i64toi32_i32$0 = __wasm_i64_urem(i64toi32_i32$5 | 0, i64toi32_i32$4 | 0, 2147193789 | 0, i64toi32_i32$0 | 0) | 0;
            i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$0;
            $11$hi = i64toi32_i32$4;
            HEAP8[(($437_1 + 87) | 0) >> 0] = i64toi32_i32$0;
            $443_1 = $0_1;
            i64toi32_i32$0 = 0;
            i64toi32_i32$0 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$4 | 0, 77296 | 0, i64toi32_i32$0 | 0) | 0;
            i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$2 = i64toi32_i32$0;
            i64toi32_i32$0 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$1 = (i64toi32_i32$2 + i64toi32_i32$3) | 0;
            i64toi32_i32$5 = (i64toi32_i32$4 + i64toi32_i32$0) | 0;
            if (i64toi32_i32$1 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$5 = (i64toi32_i32$5 + 1) | 0;
            }
            i64toi32_i32$2 = 0;
            i64toi32_i32$2 = __wasm_i64_urem(i64toi32_i32$1 | 0, i64toi32_i32$5 | 0, 2147193789 | 0, i64toi32_i32$2 | 0) | 0;
            i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$2;
            $11$hi = i64toi32_i32$5;
            HEAP8[(($443_1 + 88) | 0) >> 0] = i64toi32_i32$2;
            $449_1 = $0_1;
            i64toi32_i32$2 = 0;
            i64toi32_i32$2 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$5 | 0, 77296 | 0, i64toi32_i32$2 | 0) | 0;
            i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$4 = i64toi32_i32$2;
            i64toi32_i32$2 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$0 = (i64toi32_i32$4 + i64toi32_i32$3) | 0;
            i64toi32_i32$1 = (i64toi32_i32$5 + i64toi32_i32$2) | 0;
            if (i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$1 = (i64toi32_i32$1 + 1) | 0;
            }
            i64toi32_i32$4 = 0;
            i64toi32_i32$4 = __wasm_i64_urem(i64toi32_i32$0 | 0, i64toi32_i32$1 | 0, 2147193789 | 0, i64toi32_i32$4 | 0) | 0;
            i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$4;
            $11$hi = i64toi32_i32$1;
            HEAP8[(($449_1 + 89) | 0) >> 0] = i64toi32_i32$4;
            $455_1 = $0_1;
            i64toi32_i32$4 = 0;
            i64toi32_i32$4 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$1 | 0, 77296 | 0, i64toi32_i32$4 | 0) | 0;
            i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$5 = i64toi32_i32$4;
            i64toi32_i32$4 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$2 = (i64toi32_i32$5 + i64toi32_i32$3) | 0;
            i64toi32_i32$0 = (i64toi32_i32$1 + i64toi32_i32$4) | 0;
            if (i64toi32_i32$2 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$0 = (i64toi32_i32$0 + 1) | 0;
            }
            i64toi32_i32$5 = 0;
            i64toi32_i32$5 = __wasm_i64_urem(i64toi32_i32$2 | 0, i64toi32_i32$0 | 0, 2147193789 | 0, i64toi32_i32$5 | 0) | 0;
            i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$5;
            $11$hi = i64toi32_i32$0;
            HEAP8[(($455_1 + 90) | 0) >> 0] = i64toi32_i32$5;
            $461_1 = $0_1;
            i64toi32_i32$5 = 0;
            i64toi32_i32$5 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$0 | 0, 77296 | 0, i64toi32_i32$5 | 0) | 0;
            i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$1 = i64toi32_i32$5;
            i64toi32_i32$5 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$4 = (i64toi32_i32$1 + i64toi32_i32$3) | 0;
            i64toi32_i32$2 = (i64toi32_i32$0 + i64toi32_i32$5) | 0;
            if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$2 = (i64toi32_i32$2 + 1) | 0;
            }
            i64toi32_i32$1 = 0;
            i64toi32_i32$1 = __wasm_i64_urem(i64toi32_i32$4 | 0, i64toi32_i32$2 | 0, 2147193789 | 0, i64toi32_i32$1 | 0) | 0;
            i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$1;
            $11$hi = i64toi32_i32$2;
            HEAP8[(($461_1 + 91) | 0) >> 0] = i64toi32_i32$1;
            $467_1 = $0_1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$1 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$2 | 0, 77296 | 0, i64toi32_i32$1 | 0) | 0;
            i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$0 = i64toi32_i32$1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$5 = (i64toi32_i32$0 + i64toi32_i32$3) | 0;
            i64toi32_i32$4 = (i64toi32_i32$2 + i64toi32_i32$1) | 0;
            if (i64toi32_i32$5 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$4 = (i64toi32_i32$4 + 1) | 0;
            }
            i64toi32_i32$0 = 0;
            i64toi32_i32$0 = __wasm_i64_urem(i64toi32_i32$5 | 0, i64toi32_i32$4 | 0, 2147193789 | 0, i64toi32_i32$0 | 0) | 0;
            i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$0;
            $11$hi = i64toi32_i32$4;
            HEAP8[(($467_1 + 92) | 0) >> 0] = i64toi32_i32$0;
            $473_1 = $0_1;
            i64toi32_i32$0 = 0;
            i64toi32_i32$0 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$4 | 0, 77296 | 0, i64toi32_i32$0 | 0) | 0;
            i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$2 = i64toi32_i32$0;
            i64toi32_i32$0 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$1 = (i64toi32_i32$2 + i64toi32_i32$3) | 0;
            i64toi32_i32$5 = (i64toi32_i32$4 + i64toi32_i32$0) | 0;
            if (i64toi32_i32$1 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$5 = (i64toi32_i32$5 + 1) | 0;
            }
            i64toi32_i32$2 = 0;
            i64toi32_i32$2 = __wasm_i64_urem(i64toi32_i32$1 | 0, i64toi32_i32$5 | 0, 2147193789 | 0, i64toi32_i32$2 | 0) | 0;
            i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$2;
            $11$hi = i64toi32_i32$5;
            HEAP8[(($473_1 + 93) | 0) >> 0] = i64toi32_i32$2;
            $479_1 = $0_1;
            i64toi32_i32$2 = 0;
            i64toi32_i32$2 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$5 | 0, 77296 | 0, i64toi32_i32$2 | 0) | 0;
            i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$4 = i64toi32_i32$2;
            i64toi32_i32$2 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$0 = (i64toi32_i32$4 + i64toi32_i32$3) | 0;
            i64toi32_i32$1 = (i64toi32_i32$5 + i64toi32_i32$2) | 0;
            if (i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$1 = (i64toi32_i32$1 + 1) | 0;
            }
            i64toi32_i32$4 = 0;
            i64toi32_i32$4 = __wasm_i64_urem(i64toi32_i32$0 | 0, i64toi32_i32$1 | 0, 2147193789 | 0, i64toi32_i32$4 | 0) | 0;
            i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$4;
            $11$hi = i64toi32_i32$1;
            HEAP8[(($479_1 + 94) | 0) >> 0] = i64toi32_i32$4;
            $485_1 = $0_1;
            i64toi32_i32$4 = 0;
            i64toi32_i32$4 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$1 | 0, 77296 | 0, i64toi32_i32$4 | 0) | 0;
            i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$5 = i64toi32_i32$4;
            i64toi32_i32$4 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$2 = (i64toi32_i32$5 + i64toi32_i32$3) | 0;
            i64toi32_i32$0 = (i64toi32_i32$1 + i64toi32_i32$4) | 0;
            if (i64toi32_i32$2 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$0 = (i64toi32_i32$0 + 1) | 0;
            }
            i64toi32_i32$5 = 0;
            i64toi32_i32$5 = __wasm_i64_urem(i64toi32_i32$2 | 0, i64toi32_i32$0 | 0, 2147193789 | 0, i64toi32_i32$5 | 0) | 0;
            i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$5;
            $11$hi = i64toi32_i32$0;
            HEAP8[(($485_1 + 95) | 0) >> 0] = i64toi32_i32$5;
            $491_1 = $0_1;
            i64toi32_i32$5 = 0;
            i64toi32_i32$5 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$0 | 0, 77296 | 0, i64toi32_i32$5 | 0) | 0;
            i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$1 = i64toi32_i32$5;
            i64toi32_i32$5 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$4 = (i64toi32_i32$1 + i64toi32_i32$3) | 0;
            i64toi32_i32$2 = (i64toi32_i32$0 + i64toi32_i32$5) | 0;
            if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$2 = (i64toi32_i32$2 + 1) | 0;
            }
            i64toi32_i32$1 = 0;
            i64toi32_i32$1 = __wasm_i64_urem(i64toi32_i32$4 | 0, i64toi32_i32$2 | 0, 2147193789 | 0, i64toi32_i32$1 | 0) | 0;
            i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$1;
            $11$hi = i64toi32_i32$2;
            HEAP8[(($491_1 + 96) | 0) >> 0] = i64toi32_i32$1;
            $497_1 = $0_1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$1 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$2 | 0, 77296 | 0, i64toi32_i32$1 | 0) | 0;
            i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$0 = i64toi32_i32$1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$5 = (i64toi32_i32$0 + i64toi32_i32$3) | 0;
            i64toi32_i32$4 = (i64toi32_i32$2 + i64toi32_i32$1) | 0;
            if (i64toi32_i32$5 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$4 = (i64toi32_i32$4 + 1) | 0;
            }
            i64toi32_i32$0 = 0;
            i64toi32_i32$0 = __wasm_i64_urem(i64toi32_i32$5 | 0, i64toi32_i32$4 | 0, 2147193789 | 0, i64toi32_i32$0 | 0) | 0;
            i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$0;
            $11$hi = i64toi32_i32$4;
            HEAP8[(($497_1 + 97) | 0) >> 0] = i64toi32_i32$0;
            $503_1 = $0_1;
            i64toi32_i32$0 = 0;
            i64toi32_i32$0 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$4 | 0, 77296 | 0, i64toi32_i32$0 | 0) | 0;
            i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$2 = i64toi32_i32$0;
            i64toi32_i32$0 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$1 = (i64toi32_i32$2 + i64toi32_i32$3) | 0;
            i64toi32_i32$5 = (i64toi32_i32$4 + i64toi32_i32$0) | 0;
            if (i64toi32_i32$1 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$5 = (i64toi32_i32$5 + 1) | 0;
            }
            i64toi32_i32$2 = 0;
            i64toi32_i32$2 = __wasm_i64_urem(i64toi32_i32$1 | 0, i64toi32_i32$5 | 0, 2147193789 | 0, i64toi32_i32$2 | 0) | 0;
            i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$2;
            $11$hi = i64toi32_i32$5;
            HEAP8[(($503_1 + 98) | 0) >> 0] = i64toi32_i32$2;
            $509_1 = $0_1;
            i64toi32_i32$2 = 0;
            i64toi32_i32$2 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$5 | 0, 77296 | 0, i64toi32_i32$2 | 0) | 0;
            i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$4 = i64toi32_i32$2;
            i64toi32_i32$2 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$0 = (i64toi32_i32$4 + i64toi32_i32$3) | 0;
            i64toi32_i32$1 = (i64toi32_i32$5 + i64toi32_i32$2) | 0;
            if (i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$1 = (i64toi32_i32$1 + 1) | 0;
            }
            i64toi32_i32$4 = 0;
            i64toi32_i32$4 = __wasm_i64_urem(i64toi32_i32$0 | 0, i64toi32_i32$1 | 0, 2147193789 | 0, i64toi32_i32$4 | 0) | 0;
            i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$4;
            $11$hi = i64toi32_i32$1;
            HEAP8[(($509_1 + 99) | 0) >> 0] = i64toi32_i32$4;
            $515_1 = $0_1;
            i64toi32_i32$4 = 0;
            i64toi32_i32$4 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$1 | 0, 77296 | 0, i64toi32_i32$4 | 0) | 0;
            i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$5 = i64toi32_i32$4;
            i64toi32_i32$4 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$2 = (i64toi32_i32$5 + i64toi32_i32$3) | 0;
            i64toi32_i32$0 = (i64toi32_i32$1 + i64toi32_i32$4) | 0;
            if (i64toi32_i32$2 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$0 = (i64toi32_i32$0 + 1) | 0;
            }
            i64toi32_i32$5 = 0;
            i64toi32_i32$5 = __wasm_i64_urem(i64toi32_i32$2 | 0, i64toi32_i32$0 | 0, 2147193789 | 0, i64toi32_i32$5 | 0) | 0;
            i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$5;
            $11$hi = i64toi32_i32$0;
            HEAP8[(($515_1 + 100) | 0) >> 0] = i64toi32_i32$5;
            $521_1 = $0_1;
            i64toi32_i32$5 = 0;
            i64toi32_i32$5 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$0 | 0, 77296 | 0, i64toi32_i32$5 | 0) | 0;
            i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$1 = i64toi32_i32$5;
            i64toi32_i32$5 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$4 = (i64toi32_i32$1 + i64toi32_i32$3) | 0;
            i64toi32_i32$2 = (i64toi32_i32$0 + i64toi32_i32$5) | 0;
            if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$2 = (i64toi32_i32$2 + 1) | 0;
            }
            i64toi32_i32$1 = 0;
            i64toi32_i32$1 = __wasm_i64_urem(i64toi32_i32$4 | 0, i64toi32_i32$2 | 0, 2147193789 | 0, i64toi32_i32$1 | 0) | 0;
            i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$1;
            $11$hi = i64toi32_i32$2;
            HEAP8[(($521_1 + 101) | 0) >> 0] = i64toi32_i32$1;
            $527_1 = $0_1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$1 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$2 | 0, 77296 | 0, i64toi32_i32$1 | 0) | 0;
            i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$0 = i64toi32_i32$1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$5 = (i64toi32_i32$0 + i64toi32_i32$3) | 0;
            i64toi32_i32$4 = (i64toi32_i32$2 + i64toi32_i32$1) | 0;
            if (i64toi32_i32$5 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$4 = (i64toi32_i32$4 + 1) | 0;
            }
            i64toi32_i32$0 = 0;
            i64toi32_i32$0 = __wasm_i64_urem(i64toi32_i32$5 | 0, i64toi32_i32$4 | 0, 2147193789 | 0, i64toi32_i32$0 | 0) | 0;
            i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$0;
            $11$hi = i64toi32_i32$4;
            HEAP8[(($527_1 + 102) | 0) >> 0] = i64toi32_i32$0;
            $533_1 = $0_1;
            i64toi32_i32$0 = 0;
            i64toi32_i32$0 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$4 | 0, 77296 | 0, i64toi32_i32$0 | 0) | 0;
            i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$2 = i64toi32_i32$0;
            i64toi32_i32$0 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$1 = (i64toi32_i32$2 + i64toi32_i32$3) | 0;
            i64toi32_i32$5 = (i64toi32_i32$4 + i64toi32_i32$0) | 0;
            if (i64toi32_i32$1 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$5 = (i64toi32_i32$5 + 1) | 0;
            }
            i64toi32_i32$2 = 0;
            i64toi32_i32$2 = __wasm_i64_urem(i64toi32_i32$1 | 0, i64toi32_i32$5 | 0, 2147193789 | 0, i64toi32_i32$2 | 0) | 0;
            i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$2;
            $11$hi = i64toi32_i32$5;
            HEAP8[(($533_1 + 103) | 0) >> 0] = i64toi32_i32$2;
            $539_1 = $0_1;
            i64toi32_i32$2 = 0;
            i64toi32_i32$2 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$5 | 0, 77296 | 0, i64toi32_i32$2 | 0) | 0;
            i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$4 = i64toi32_i32$2;
            i64toi32_i32$2 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$0 = (i64toi32_i32$4 + i64toi32_i32$3) | 0;
            i64toi32_i32$1 = (i64toi32_i32$5 + i64toi32_i32$2) | 0;
            if (i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$1 = (i64toi32_i32$1 + 1) | 0;
            }
            i64toi32_i32$4 = 0;
            i64toi32_i32$4 = __wasm_i64_urem(i64toi32_i32$0 | 0, i64toi32_i32$1 | 0, 2147193789 | 0, i64toi32_i32$4 | 0) | 0;
            i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$4;
            $11$hi = i64toi32_i32$1;
            HEAP8[(($539_1 + 104) | 0) >> 0] = i64toi32_i32$4;
            HEAP32[(($3_1 + 12) | 0) >> 2] = i64toi32_i32$4;
            $1_1 = 1;
            if ($5_1 >>> 0 <= 1 >>> 0) {
                break label$42;
            }
            label$49: while (1) {
                $4_1 = ($1_1 + $8_1) | 0;
                HEAP8[$4_1 >> 0] = ((HEAPU8[$4_1 >> 0] | 0) ^ (HEAPU8[(((($0_1 + 80) | 0) + (($1_1 >>> 0) % (25 >>> 0) | 0)) | 0) >> 0] | 0)) | 0;
                $1_1 = ($1_1 + 1) | 0;
                if (($1_1 | 0) != ($5_1 | 0)) {
                    continue label$49;
                }
                break label$49;
            }
        }
    }
    
    _serverbound($0_1, $1_1, $2_1) {
        $0_1 = $0_1 | 0;
        $1_1 = $1_1 | 0;
        $2_1 = $2_1 | 0;
        var i64toi32_i32$2 = 0,
            i64toi32_i32$5 = 0,
            i64toi32_i32$1 = 0,
            i64toi32_i32$4 = 0,
            i64toi32_i32$0 = 0,
            i64toi32_i32$3 = 0,
            $10_1 = 0,
            $3_1 = 0,
            $10$hi = 0,
            $4_1 = 0,
            $5_1 = 0,
            $8_1 = 0,
            $6_1 = 0,
            $7_1 = 0,
            $26_1 = 0,
            $45_1 = 0,
            $9_1 = 0,
            $50_1 = 0,
            $82_1 = 0,
            $46_1 = 0,
            $89_1 = 0,
            $95_1 = 0,
            $101_1 = 0,
            $107_1 = 0,
            $113_1 = 0,
            $119_1 = 0,
            $125_1 = 0,
            $131_1 = 0,
            $137_1 = 0,
            $143_1 = 0,
            $149_1 = 0,
            $155_1 = 0,
            $161_1 = 0,
            $167_1 = 0,
            $173_1 = 0,
            $179_1 = 0,
            $185_1 = 0,
            $191_1 = 0,
            $197_1 = 0,
            $203_1 = 0,
            $209_1 = 0,
            $215_1 = 0,
            $221_1 = 0,
            $227_1 = 0;
        $3_1 = (global$0 + -64) | 0;
        global$0 = $3_1;
        HEAP32[(($3_1 + 16) | 0) >> 2] = HEAP32[(($0_1 + 4) | 0) >> 2] | 0;
        if (true) {
            label$2: {
                if (!$2_1) {
                    break label$2;
                }
                $6_1 = HEAPU8[$1_1 >> 0] | 0;
                if (!$6_1) {
                    break label$2;
                }
                $26_1 = $0_1;
                i64toi32_i32$2 = $0_1;
                i64toi32_i32$0 = HEAP32[((i64toi32_i32$2 + 8) | 0) >> 2] | 0;
                i64toi32_i32$1 = 0;
                $45_1 = i64toi32_i32$0;
                i64toi32_i32$0 = 0;
                i64toi32_i32$0 = __wasm_i64_mul($45_1 | 0, i64toi32_i32$1 | 0, 105547 | 0, i64toi32_i32$0 | 0) | 0;
                i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$2 = i64toi32_i32$0;
                i64toi32_i32$0 = 0;
                i64toi32_i32$3 = 497;
                i64toi32_i32$4 = (i64toi32_i32$2 + i64toi32_i32$3) | 0;
                i64toi32_i32$5 = (i64toi32_i32$1 + i64toi32_i32$0) | 0;
                if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$5 = (i64toi32_i32$5 + 1) | 0;
                }
                i64toi32_i32$2 = 0;
                i64toi32_i32$2 = __wasm_i64_urem(i64toi32_i32$4 | 0, i64toi32_i32$5 | 0, 2147146248 | 0, i64toi32_i32$2 | 0) | 0;
                i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
                $7_1 = i64toi32_i32$2;
                HEAP32[(($26_1 + 8) | 0) >> 2] = i64toi32_i32$2;
                $4_1 = ($7_1 & 15) | 0;
                label$7: while (1) {
                    $7_1 = ($4_1 | 0) == ($5_1 | 0);
                    $6_1 = JUMP_TABLE_SHUFFLER_SERVERBOUND[($6_1 | 0) >> 0] | 0;
                    $5_1 = ($5_1 + 1) | 0;
                    if (!$7_1) {
                        continue label$7;
                    }
                    break label$7;
                }
                HEAP8[$1_1 >> 0] = $6_1;
                $82_1 = $3_1;
                i64toi32_i32$5 = $0_1;
                i64toi32_i32$4 = HEAP32[((i64toi32_i32$5 + 8) | 0) >> 2] | 0;
                i64toi32_i32$1 = 0;
                $46_1 = i64toi32_i32$4;
                i64toi32_i32$4 = 0;
                i64toi32_i32$4 = __wasm_i64_mul($46_1 | 0, i64toi32_i32$1 | 0, 112513 | 0, i64toi32_i32$4 | 0) | 0;
                i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$5 = i64toi32_i32$4;
                i64toi32_i32$4 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$2 = (i64toi32_i32$5 + i64toi32_i32$3) | 0;
                i64toi32_i32$0 = (i64toi32_i32$1 + i64toi32_i32$4) | 0;
                if (i64toi32_i32$2 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$0 = (i64toi32_i32$0 + 1) | 0;
                }
                i64toi32_i32$5 = 0;
                i64toi32_i32$5 = __wasm_i64_urem(i64toi32_i32$2 | 0, i64toi32_i32$0 | 0, 2147105601 | 0, i64toi32_i32$5 | 0) | 0;
                i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$5;
                $10$hi = i64toi32_i32$0;
                HEAP8[(($82_1 + 32) | 0) >> 0] = i64toi32_i32$5;
                $89_1 = $3_1;
                i64toi32_i32$5 = 0;
                i64toi32_i32$5 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$0 | 0, 112513 | 0, i64toi32_i32$5 | 0) | 0;
                i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$1 = i64toi32_i32$5;
                i64toi32_i32$5 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$4 = (i64toi32_i32$1 + i64toi32_i32$3) | 0;
                i64toi32_i32$2 = (i64toi32_i32$0 + i64toi32_i32$5) | 0;
                if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$2 = (i64toi32_i32$2 + 1) | 0;
                }
                i64toi32_i32$1 = 0;
                i64toi32_i32$1 = __wasm_i64_urem(i64toi32_i32$4 | 0, i64toi32_i32$2 | 0, 2147105601 | 0, i64toi32_i32$1 | 0) | 0;
                i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$1;
                $10$hi = i64toi32_i32$2;
                HEAP8[(($89_1 + 33) | 0) >> 0] = i64toi32_i32$1;
                $95_1 = $3_1;
                i64toi32_i32$1 = 0;
                i64toi32_i32$1 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$2 | 0, 112513 | 0, i64toi32_i32$1 | 0) | 0;
                i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$0 = i64toi32_i32$1;
                i64toi32_i32$1 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$5 = (i64toi32_i32$0 + i64toi32_i32$3) | 0;
                i64toi32_i32$4 = (i64toi32_i32$2 + i64toi32_i32$1) | 0;
                if (i64toi32_i32$5 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$4 = (i64toi32_i32$4 + 1) | 0;
                }
                i64toi32_i32$0 = 0;
                i64toi32_i32$0 = __wasm_i64_urem(i64toi32_i32$5 | 0, i64toi32_i32$4 | 0, 2147105601 | 0, i64toi32_i32$0 | 0) | 0;
                i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$0;
                $10$hi = i64toi32_i32$4;
                HEAP8[(($95_1 + 34) | 0) >> 0] = i64toi32_i32$0;
                $101_1 = $3_1;
                i64toi32_i32$0 = 0;
                i64toi32_i32$0 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$4 | 0, 112513 | 0, i64toi32_i32$0 | 0) | 0;
                i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$2 = i64toi32_i32$0;
                i64toi32_i32$0 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$1 = (i64toi32_i32$2 + i64toi32_i32$3) | 0;
                i64toi32_i32$5 = (i64toi32_i32$4 + i64toi32_i32$0) | 0;
                if (i64toi32_i32$1 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$5 = (i64toi32_i32$5 + 1) | 0;
                }
                i64toi32_i32$2 = 0;
                i64toi32_i32$2 = __wasm_i64_urem(i64toi32_i32$1 | 0, i64toi32_i32$5 | 0, 2147105601 | 0, i64toi32_i32$2 | 0) | 0;
                i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$2;
                $10$hi = i64toi32_i32$5;
                HEAP8[(($101_1 + 35) | 0) >> 0] = i64toi32_i32$2;
                $107_1 = $3_1;
                i64toi32_i32$2 = 0;
                i64toi32_i32$2 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$5 | 0, 112513 | 0, i64toi32_i32$2 | 0) | 0;
                i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$4 = i64toi32_i32$2;
                i64toi32_i32$2 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$0 = (i64toi32_i32$4 + i64toi32_i32$3) | 0;
                i64toi32_i32$1 = (i64toi32_i32$5 + i64toi32_i32$2) | 0;
                if (i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$1 = (i64toi32_i32$1 + 1) | 0;
                }
                i64toi32_i32$4 = 0;
                i64toi32_i32$4 = __wasm_i64_urem(i64toi32_i32$0 | 0, i64toi32_i32$1 | 0, 2147105601 | 0, i64toi32_i32$4 | 0) | 0;
                i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$4;
                $10$hi = i64toi32_i32$1;
                HEAP8[(($107_1 + 36) | 0) >> 0] = i64toi32_i32$4;
                $113_1 = $3_1;
                i64toi32_i32$4 = 0;
                i64toi32_i32$4 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$1 | 0, 112513 | 0, i64toi32_i32$4 | 0) | 0;
                i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$5 = i64toi32_i32$4;
                i64toi32_i32$4 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$2 = (i64toi32_i32$5 + i64toi32_i32$3) | 0;
                i64toi32_i32$0 = (i64toi32_i32$1 + i64toi32_i32$4) | 0;
                if (i64toi32_i32$2 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$0 = (i64toi32_i32$0 + 1) | 0;
                }
                i64toi32_i32$5 = 0;
                i64toi32_i32$5 = __wasm_i64_urem(i64toi32_i32$2 | 0, i64toi32_i32$0 | 0, 2147105601 | 0, i64toi32_i32$5 | 0) | 0;
                i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$5;
                $10$hi = i64toi32_i32$0;
                HEAP8[(($113_1 + 37) | 0) >> 0] = i64toi32_i32$5;
                $119_1 = $3_1;
                i64toi32_i32$5 = 0;
                i64toi32_i32$5 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$0 | 0, 112513 | 0, i64toi32_i32$5 | 0) | 0;
                i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$1 = i64toi32_i32$5;
                i64toi32_i32$5 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$4 = (i64toi32_i32$1 + i64toi32_i32$3) | 0;
                i64toi32_i32$2 = (i64toi32_i32$0 + i64toi32_i32$5) | 0;
                if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$2 = (i64toi32_i32$2 + 1) | 0;
                }
                i64toi32_i32$1 = 0;
                i64toi32_i32$1 = __wasm_i64_urem(i64toi32_i32$4 | 0, i64toi32_i32$2 | 0, 2147105601 | 0, i64toi32_i32$1 | 0) | 0;
                i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$1;
                $10$hi = i64toi32_i32$2;
                HEAP8[(($119_1 + 38) | 0) >> 0] = i64toi32_i32$1;
                $125_1 = $3_1;
                i64toi32_i32$1 = 0;
                i64toi32_i32$1 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$2 | 0, 112513 | 0, i64toi32_i32$1 | 0) | 0;
                i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$0 = i64toi32_i32$1;
                i64toi32_i32$1 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$5 = (i64toi32_i32$0 + i64toi32_i32$3) | 0;
                i64toi32_i32$4 = (i64toi32_i32$2 + i64toi32_i32$1) | 0;
                if (i64toi32_i32$5 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$4 = (i64toi32_i32$4 + 1) | 0;
                }
                i64toi32_i32$0 = 0;
                i64toi32_i32$0 = __wasm_i64_urem(i64toi32_i32$5 | 0, i64toi32_i32$4 | 0, 2147105601 | 0, i64toi32_i32$0 | 0) | 0;
                i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$0;
                $10$hi = i64toi32_i32$4;
                HEAP8[(($125_1 + 39) | 0) >> 0] = i64toi32_i32$0;
                $131_1 = $3_1;
                i64toi32_i32$0 = 0;
                i64toi32_i32$0 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$4 | 0, 112513 | 0, i64toi32_i32$0 | 0) | 0;
                i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$2 = i64toi32_i32$0;
                i64toi32_i32$0 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$1 = (i64toi32_i32$2 + i64toi32_i32$3) | 0;
                i64toi32_i32$5 = (i64toi32_i32$4 + i64toi32_i32$0) | 0;
                if (i64toi32_i32$1 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$5 = (i64toi32_i32$5 + 1) | 0;
                }
                i64toi32_i32$2 = 0;
                i64toi32_i32$2 = __wasm_i64_urem(i64toi32_i32$1 | 0, i64toi32_i32$5 | 0, 2147105601 | 0, i64toi32_i32$2 | 0) | 0;
                i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$2;
                $10$hi = i64toi32_i32$5;
                HEAP8[(($131_1 + 40) | 0) >> 0] = i64toi32_i32$2;
                $137_1 = $3_1;
                i64toi32_i32$2 = 0;
                i64toi32_i32$2 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$5 | 0, 112513 | 0, i64toi32_i32$2 | 0) | 0;
                i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$4 = i64toi32_i32$2;
                i64toi32_i32$2 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$0 = (i64toi32_i32$4 + i64toi32_i32$3) | 0;
                i64toi32_i32$1 = (i64toi32_i32$5 + i64toi32_i32$2) | 0;
                if (i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$1 = (i64toi32_i32$1 + 1) | 0;
                }
                i64toi32_i32$4 = 0;
                i64toi32_i32$4 = __wasm_i64_urem(i64toi32_i32$0 | 0, i64toi32_i32$1 | 0, 2147105601 | 0, i64toi32_i32$4 | 0) | 0;
                i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$4;
                $10$hi = i64toi32_i32$1;
                HEAP8[(($137_1 + 41) | 0) >> 0] = i64toi32_i32$4;
                $143_1 = $3_1;
                i64toi32_i32$4 = 0;
                i64toi32_i32$4 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$1 | 0, 112513 | 0, i64toi32_i32$4 | 0) | 0;
                i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$5 = i64toi32_i32$4;
                i64toi32_i32$4 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$2 = (i64toi32_i32$5 + i64toi32_i32$3) | 0;
                i64toi32_i32$0 = (i64toi32_i32$1 + i64toi32_i32$4) | 0;
                if (i64toi32_i32$2 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$0 = (i64toi32_i32$0 + 1) | 0;
                }
                i64toi32_i32$5 = 0;
                i64toi32_i32$5 = __wasm_i64_urem(i64toi32_i32$2 | 0, i64toi32_i32$0 | 0, 2147105601 | 0, i64toi32_i32$5 | 0) | 0;
                i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$5;
                $10$hi = i64toi32_i32$0;
                HEAP8[(($143_1 + 42) | 0) >> 0] = i64toi32_i32$5;
                $149_1 = $3_1;
                i64toi32_i32$5 = 0;
                i64toi32_i32$5 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$0 | 0, 112513 | 0, i64toi32_i32$5 | 0) | 0;
                i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$1 = i64toi32_i32$5;
                i64toi32_i32$5 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$4 = (i64toi32_i32$1 + i64toi32_i32$3) | 0;
                i64toi32_i32$2 = (i64toi32_i32$0 + i64toi32_i32$5) | 0;
                if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$2 = (i64toi32_i32$2 + 1) | 0;
                }
                i64toi32_i32$1 = 0;
                i64toi32_i32$1 = __wasm_i64_urem(i64toi32_i32$4 | 0, i64toi32_i32$2 | 0, 2147105601 | 0, i64toi32_i32$1 | 0) | 0;
                i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$1;
                $10$hi = i64toi32_i32$2;
                HEAP8[(($149_1 + 43) | 0) >> 0] = i64toi32_i32$1;
                $155_1 = $3_1;
                i64toi32_i32$1 = 0;
                i64toi32_i32$1 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$2 | 0, 112513 | 0, i64toi32_i32$1 | 0) | 0;
                i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$0 = i64toi32_i32$1;
                i64toi32_i32$1 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$5 = (i64toi32_i32$0 + i64toi32_i32$3) | 0;
                i64toi32_i32$4 = (i64toi32_i32$2 + i64toi32_i32$1) | 0;
                if (i64toi32_i32$5 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$4 = (i64toi32_i32$4 + 1) | 0;
                }
                i64toi32_i32$0 = 0;
                i64toi32_i32$0 = __wasm_i64_urem(i64toi32_i32$5 | 0, i64toi32_i32$4 | 0, 2147105601 | 0, i64toi32_i32$0 | 0) | 0;
                i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$0;
                $10$hi = i64toi32_i32$4;
                HEAP8[(($155_1 + 44) | 0) >> 0] = i64toi32_i32$0;
                $161_1 = $3_1;
                i64toi32_i32$0 = 0;
                i64toi32_i32$0 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$4 | 0, 112513 | 0, i64toi32_i32$0 | 0) | 0;
                i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$2 = i64toi32_i32$0;
                i64toi32_i32$0 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$1 = (i64toi32_i32$2 + i64toi32_i32$3) | 0;
                i64toi32_i32$5 = (i64toi32_i32$4 + i64toi32_i32$0) | 0;
                if (i64toi32_i32$1 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$5 = (i64toi32_i32$5 + 1) | 0;
                }
                i64toi32_i32$2 = 0;
                i64toi32_i32$2 = __wasm_i64_urem(i64toi32_i32$1 | 0, i64toi32_i32$5 | 0, 2147105601 | 0, i64toi32_i32$2 | 0) | 0;
                i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$2;
                $10$hi = i64toi32_i32$5;
                HEAP8[(($161_1 + 45) | 0) >> 0] = i64toi32_i32$2;
                $167_1 = $3_1;
                i64toi32_i32$2 = 0;
                i64toi32_i32$2 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$5 | 0, 112513 | 0, i64toi32_i32$2 | 0) | 0;
                i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$4 = i64toi32_i32$2;
                i64toi32_i32$2 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$0 = (i64toi32_i32$4 + i64toi32_i32$3) | 0;
                i64toi32_i32$1 = (i64toi32_i32$5 + i64toi32_i32$2) | 0;
                if (i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$1 = (i64toi32_i32$1 + 1) | 0;
                }
                i64toi32_i32$4 = 0;
                i64toi32_i32$4 = __wasm_i64_urem(i64toi32_i32$0 | 0, i64toi32_i32$1 | 0, 2147105601 | 0, i64toi32_i32$4 | 0) | 0;
                i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$4;
                $10$hi = i64toi32_i32$1;
                HEAP8[(($167_1 + 46) | 0) >> 0] = i64toi32_i32$4;
                $173_1 = $3_1;
                i64toi32_i32$4 = 0;
                i64toi32_i32$4 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$1 | 0, 112513 | 0, i64toi32_i32$4 | 0) | 0;
                i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$5 = i64toi32_i32$4;
                i64toi32_i32$4 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$2 = (i64toi32_i32$5 + i64toi32_i32$3) | 0;
                i64toi32_i32$0 = (i64toi32_i32$1 + i64toi32_i32$4) | 0;
                if (i64toi32_i32$2 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$0 = (i64toi32_i32$0 + 1) | 0;
                }
                i64toi32_i32$5 = 0;
                i64toi32_i32$5 = __wasm_i64_urem(i64toi32_i32$2 | 0, i64toi32_i32$0 | 0, 2147105601 | 0, i64toi32_i32$5 | 0) | 0;
                i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$5;
                $10$hi = i64toi32_i32$0;
                HEAP8[(($173_1 + 47) | 0) >> 0] = i64toi32_i32$5;
                $179_1 = $3_1;
                i64toi32_i32$5 = 0;
                i64toi32_i32$5 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$0 | 0, 112513 | 0, i64toi32_i32$5 | 0) | 0;
                i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$1 = i64toi32_i32$5;
                i64toi32_i32$5 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$4 = (i64toi32_i32$1 + i64toi32_i32$3) | 0;
                i64toi32_i32$2 = (i64toi32_i32$0 + i64toi32_i32$5) | 0;
                if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$2 = (i64toi32_i32$2 + 1) | 0;
                }
                i64toi32_i32$1 = 0;
                i64toi32_i32$1 = __wasm_i64_urem(i64toi32_i32$4 | 0, i64toi32_i32$2 | 0, 2147105601 | 0, i64toi32_i32$1 | 0) | 0;
                i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$1;
                $10$hi = i64toi32_i32$2;
                HEAP8[(($179_1 + 48) | 0) >> 0] = i64toi32_i32$1;
                $185_1 = $3_1;
                i64toi32_i32$1 = 0;
                i64toi32_i32$1 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$2 | 0, 112513 | 0, i64toi32_i32$1 | 0) | 0;
                i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$0 = i64toi32_i32$1;
                i64toi32_i32$1 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$5 = (i64toi32_i32$0 + i64toi32_i32$3) | 0;
                i64toi32_i32$4 = (i64toi32_i32$2 + i64toi32_i32$1) | 0;
                if (i64toi32_i32$5 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$4 = (i64toi32_i32$4 + 1) | 0;
                }
                i64toi32_i32$0 = 0;
                i64toi32_i32$0 = __wasm_i64_urem(i64toi32_i32$5 | 0, i64toi32_i32$4 | 0, 2147105601 | 0, i64toi32_i32$0 | 0) | 0;
                i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$0;
                $10$hi = i64toi32_i32$4;
                HEAP8[(($185_1 + 49) | 0) >> 0] = i64toi32_i32$0;
                $191_1 = $3_1;
                i64toi32_i32$0 = 0;
                i64toi32_i32$0 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$4 | 0, 112513 | 0, i64toi32_i32$0 | 0) | 0;
                i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$2 = i64toi32_i32$0;
                i64toi32_i32$0 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$1 = (i64toi32_i32$2 + i64toi32_i32$3) | 0;
                i64toi32_i32$5 = (i64toi32_i32$4 + i64toi32_i32$0) | 0;
                if (i64toi32_i32$1 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$5 = (i64toi32_i32$5 + 1) | 0;
                }
                i64toi32_i32$2 = 0;
                i64toi32_i32$2 = __wasm_i64_urem(i64toi32_i32$1 | 0, i64toi32_i32$5 | 0, 2147105601 | 0, i64toi32_i32$2 | 0) | 0;
                i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$2;
                $10$hi = i64toi32_i32$5;
                HEAP8[(($191_1 + 50) | 0) >> 0] = i64toi32_i32$2;
                $197_1 = $3_1;
                i64toi32_i32$2 = 0;
                i64toi32_i32$2 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$5 | 0, 112513 | 0, i64toi32_i32$2 | 0) | 0;
                i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$4 = i64toi32_i32$2;
                i64toi32_i32$2 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$0 = (i64toi32_i32$4 + i64toi32_i32$3) | 0;
                i64toi32_i32$1 = (i64toi32_i32$5 + i64toi32_i32$2) | 0;
                if (i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$1 = (i64toi32_i32$1 + 1) | 0;
                }
                i64toi32_i32$4 = 0;
                i64toi32_i32$4 = __wasm_i64_urem(i64toi32_i32$0 | 0, i64toi32_i32$1 | 0, 2147105601 | 0, i64toi32_i32$4 | 0) | 0;
                i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$4;
                $10$hi = i64toi32_i32$1;
                HEAP8[(($197_1 + 51) | 0) >> 0] = i64toi32_i32$4;
                $203_1 = $3_1;
                i64toi32_i32$4 = 0;
                i64toi32_i32$4 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$1 | 0, 112513 | 0, i64toi32_i32$4 | 0) | 0;
                i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$5 = i64toi32_i32$4;
                i64toi32_i32$4 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$2 = (i64toi32_i32$5 + i64toi32_i32$3) | 0;
                i64toi32_i32$0 = (i64toi32_i32$1 + i64toi32_i32$4) | 0;
                if (i64toi32_i32$2 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$0 = (i64toi32_i32$0 + 1) | 0;
                }
                i64toi32_i32$5 = 0;
                i64toi32_i32$5 = __wasm_i64_urem(i64toi32_i32$2 | 0, i64toi32_i32$0 | 0, 2147105601 | 0, i64toi32_i32$5 | 0) | 0;
                i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$5;
                $10$hi = i64toi32_i32$0;
                HEAP8[(($203_1 + 52) | 0) >> 0] = i64toi32_i32$5;
                $209_1 = $3_1;
                i64toi32_i32$5 = 0;
                i64toi32_i32$5 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$0 | 0, 112513 | 0, i64toi32_i32$5 | 0) | 0;
                i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$1 = i64toi32_i32$5;
                i64toi32_i32$5 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$4 = (i64toi32_i32$1 + i64toi32_i32$3) | 0;
                i64toi32_i32$2 = (i64toi32_i32$0 + i64toi32_i32$5) | 0;
                if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$2 = (i64toi32_i32$2 + 1) | 0;
                }
                i64toi32_i32$1 = 0;
                i64toi32_i32$1 = __wasm_i64_urem(i64toi32_i32$4 | 0, i64toi32_i32$2 | 0, 2147105601 | 0, i64toi32_i32$1 | 0) | 0;
                i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$1;
                $10$hi = i64toi32_i32$2;
                HEAP8[(($209_1 + 53) | 0) >> 0] = i64toi32_i32$1;
                $215_1 = $3_1;
                i64toi32_i32$1 = 0;
                i64toi32_i32$1 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$2 | 0, 112513 | 0, i64toi32_i32$1 | 0) | 0;
                i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$0 = i64toi32_i32$1;
                i64toi32_i32$1 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$5 = (i64toi32_i32$0 + i64toi32_i32$3) | 0;
                i64toi32_i32$4 = (i64toi32_i32$2 + i64toi32_i32$1) | 0;
                if (i64toi32_i32$5 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$4 = (i64toi32_i32$4 + 1) | 0;
                }
                i64toi32_i32$0 = 0;
                i64toi32_i32$0 = __wasm_i64_urem(i64toi32_i32$5 | 0, i64toi32_i32$4 | 0, 2147105601 | 0, i64toi32_i32$0 | 0) | 0;
                i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$0;
                $10$hi = i64toi32_i32$4;
                HEAP8[(($215_1 + 54) | 0) >> 0] = i64toi32_i32$0;
                $221_1 = $3_1;
                i64toi32_i32$0 = 0;
                i64toi32_i32$0 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$4 | 0, 112513 | 0, i64toi32_i32$0 | 0) | 0;
                i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$2 = i64toi32_i32$0;
                i64toi32_i32$0 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$1 = (i64toi32_i32$2 + i64toi32_i32$3) | 0;
                i64toi32_i32$5 = (i64toi32_i32$4 + i64toi32_i32$0) | 0;
                if (i64toi32_i32$1 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$5 = (i64toi32_i32$5 + 1) | 0;
                }
                i64toi32_i32$2 = 0;
                i64toi32_i32$2 = __wasm_i64_urem(i64toi32_i32$1 | 0, i64toi32_i32$5 | 0, 2147105601 | 0, i64toi32_i32$2 | 0) | 0;
                i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$2;
                $10$hi = i64toi32_i32$5;
                HEAP8[(($221_1 + 55) | 0) >> 0] = i64toi32_i32$2;
                $227_1 = $3_1;
                i64toi32_i32$2 = 0;
                i64toi32_i32$2 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$5 | 0, 112513 | 0, i64toi32_i32$2 | 0) | 0;
                i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$4 = i64toi32_i32$2;
                i64toi32_i32$2 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$0 = (i64toi32_i32$4 + i64toi32_i32$3) | 0;
                i64toi32_i32$1 = (i64toi32_i32$5 + i64toi32_i32$2) | 0;
                if (i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$1 = (i64toi32_i32$1 + 1) | 0;
                }
                i64toi32_i32$4 = 0;
                i64toi32_i32$4 = __wasm_i64_urem(i64toi32_i32$0 | 0, i64toi32_i32$1 | 0, 2147105601 | 0, i64toi32_i32$4 | 0) | 0;
                i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$4;
                $10$hi = i64toi32_i32$1;
                HEAP8[(($227_1 + 56) | 0) >> 0] = i64toi32_i32$4;
                HEAP32[(($0_1 + 8) | 0) >> 2] = i64toi32_i32$4;
                $5_1 = 1;
                if ($2_1 >>> 0 <= 1 >>> 0) {
                    break label$2;
                }
                label$8: while (1) {
                    $4_1 = ($1_1 + $5_1) | 0;
                    HEAP8[$4_1 >> 0] = ((HEAPU8[$4_1 >> 0] | 0) ^ (HEAPU8[(((($3_1 + 32) | 0) + (($5_1 >>> 0) % (25 >>> 0) | 0)) | 0) >> 0] | 0)) | 0;
                    $5_1 = ($5_1 + 1) | 0;
                    if (($5_1 | 0) != ($2_1 | 0)) {
                        continue label$8;
                    }
                    break label$8;
                }
            }
        }
        global$0 = ($3_1 - -64) | 0;
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

        this._clientbound(PTR_SEED, PTR_DATA, data.length);
        this.seed_clientbound = HEAP32[((PTR_SEED + 12) | 0) >> 2];
        return HEAPU8.slice(PTR_DATA, PTR_DATA + data.length);
    }
    serverbound(data) {
        global$0 = GLOBAL$0;
        HEAP32[((PTR_SEED + 8) | 0) >> 2] = this.seed_serverbound;

        HEAPU8.set(data, PTR_DATA);
        this._serverbound(PTR_SEED, PTR_DATA, data.length);

        this.seed_serverbound = HEAP32[((PTR_SEED + 8) | 0) >> 2];
        return HEAPU8.slice(PTR_DATA, PTR_DATA + data.length);
    }

    _serverbound($0_1, $1_1, $2_1) {
        $0_1 = $0_1 | 0;
        $1_1 = $1_1 | 0;
        $2_1 = $2_1 | 0;
        var i64toi32_i32$2 = 0,
            i64toi32_i32$5 = 0,
            i64toi32_i32$1 = 0,
            i64toi32_i32$4 = 0,
            i64toi32_i32$0 = 0,
            i64toi32_i32$3 = 0,
            $10_1 = 0,
            $3_1 = 0,
            $10$hi = 0,
            $4_1 = 0,
            $5_1 = 0,
            $8_1 = 0,
            $6_1 = 0,
            $7_1 = 0,
            $26_1 = 0,
            $45_1 = 0,
            $9_1 = 0,
            $50_1 = 0,
            $82_1 = 0,
            $46_1 = 0,
            $89_1 = 0,
            $95_1 = 0,
            $101_1 = 0,
            $107_1 = 0,
            $113_1 = 0,
            $119_1 = 0,
            $125_1 = 0,
            $131_1 = 0,
            $137_1 = 0,
            $143_1 = 0,
            $149_1 = 0,
            $155_1 = 0,
            $161_1 = 0,
            $167_1 = 0,
            $173_1 = 0,
            $179_1 = 0,
            $185_1 = 0,
            $191_1 = 0,
            $197_1 = 0,
            $203_1 = 0,
            $209_1 = 0,
            $215_1 = 0,
            $221_1 = 0,
            $227_1 = 0;
        $3_1 = (global$0 + -64) | 0;
        global$0 = $3_1;
        HEAP32[(($3_1 + 16) | 0) >> 2] = HEAP32[(($0_1 + 4) | 0) >> 2] | 0;
        if (true) {
            label$2: {
                if (!$2_1) {
                    break label$2;
                }
                $6_1 = HEAPU8[$1_1 >> 0] | 0;
                if (!$6_1) {
                    break label$2;
                }
                $26_1 = $0_1;
                i64toi32_i32$2 = $0_1;
                i64toi32_i32$0 = HEAP32[((i64toi32_i32$2 + 8) | 0) >> 2] | 0;
                i64toi32_i32$1 = 0;
                $45_1 = i64toi32_i32$0;
                i64toi32_i32$0 = 0;
                i64toi32_i32$0 = __wasm_i64_mul($45_1 | 0, i64toi32_i32$1 | 0, 105547 | 0, i64toi32_i32$0 | 0) | 0;
                i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$2 = i64toi32_i32$0;
                i64toi32_i32$0 = 0;
                i64toi32_i32$3 = 497;
                i64toi32_i32$4 = (i64toi32_i32$2 + i64toi32_i32$3) | 0;
                i64toi32_i32$5 = (i64toi32_i32$1 + i64toi32_i32$0) | 0;
                if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$5 = (i64toi32_i32$5 + 1) | 0;
                }
                i64toi32_i32$2 = 0;
                i64toi32_i32$2 = __wasm_i64_urem(i64toi32_i32$4 | 0, i64toi32_i32$5 | 0, 2147146248 | 0, i64toi32_i32$2 | 0) | 0;
                i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
                $7_1 = i64toi32_i32$2;
                HEAP32[(($26_1 + 8) | 0) >> 2] = i64toi32_i32$2;
                $4_1 = ($7_1 & 15) | 0;
                label$7: while (1) {
                    $7_1 = ($4_1 | 0) == ($5_1 | 0);
                    $6_1 = JUMP_TABLE_UNSHUFFLER_SERVERBOUND[($6_1 | 0) >> 0] | 0;
                    $5_1 = ($5_1 + 1) | 0;
                    if (!$7_1) {
                        continue label$7;
                    }
                    break label$7;
                }
                HEAP8[$1_1 >> 0] = $6_1;
                $82_1 = $3_1;
                i64toi32_i32$5 = $0_1;
                i64toi32_i32$4 = HEAP32[((i64toi32_i32$5 + 8) | 0) >> 2] | 0;
                i64toi32_i32$1 = 0;
                $46_1 = i64toi32_i32$4;
                i64toi32_i32$4 = 0;
                i64toi32_i32$4 = __wasm_i64_mul($46_1 | 0, i64toi32_i32$1 | 0, 112513 | 0, i64toi32_i32$4 | 0) | 0;
                i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$5 = i64toi32_i32$4;
                i64toi32_i32$4 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$2 = (i64toi32_i32$5 + i64toi32_i32$3) | 0;
                i64toi32_i32$0 = (i64toi32_i32$1 + i64toi32_i32$4) | 0;
                if (i64toi32_i32$2 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$0 = (i64toi32_i32$0 + 1) | 0;
                }
                i64toi32_i32$5 = 0;
                i64toi32_i32$5 = __wasm_i64_urem(i64toi32_i32$2 | 0, i64toi32_i32$0 | 0, 2147105601 | 0, i64toi32_i32$5 | 0) | 0;
                i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$5;
                $10$hi = i64toi32_i32$0;
                HEAP8[(($82_1 + 32) | 0) >> 0] = i64toi32_i32$5;
                $89_1 = $3_1;
                i64toi32_i32$5 = 0;
                i64toi32_i32$5 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$0 | 0, 112513 | 0, i64toi32_i32$5 | 0) | 0;
                i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$1 = i64toi32_i32$5;
                i64toi32_i32$5 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$4 = (i64toi32_i32$1 + i64toi32_i32$3) | 0;
                i64toi32_i32$2 = (i64toi32_i32$0 + i64toi32_i32$5) | 0;
                if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$2 = (i64toi32_i32$2 + 1) | 0;
                }
                i64toi32_i32$1 = 0;
                i64toi32_i32$1 = __wasm_i64_urem(i64toi32_i32$4 | 0, i64toi32_i32$2 | 0, 2147105601 | 0, i64toi32_i32$1 | 0) | 0;
                i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$1;
                $10$hi = i64toi32_i32$2;
                HEAP8[(($89_1 + 33) | 0) >> 0] = i64toi32_i32$1;
                $95_1 = $3_1;
                i64toi32_i32$1 = 0;
                i64toi32_i32$1 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$2 | 0, 112513 | 0, i64toi32_i32$1 | 0) | 0;
                i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$0 = i64toi32_i32$1;
                i64toi32_i32$1 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$5 = (i64toi32_i32$0 + i64toi32_i32$3) | 0;
                i64toi32_i32$4 = (i64toi32_i32$2 + i64toi32_i32$1) | 0;
                if (i64toi32_i32$5 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$4 = (i64toi32_i32$4 + 1) | 0;
                }
                i64toi32_i32$0 = 0;
                i64toi32_i32$0 = __wasm_i64_urem(i64toi32_i32$5 | 0, i64toi32_i32$4 | 0, 2147105601 | 0, i64toi32_i32$0 | 0) | 0;
                i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$0;
                $10$hi = i64toi32_i32$4;
                HEAP8[(($95_1 + 34) | 0) >> 0] = i64toi32_i32$0;
                $101_1 = $3_1;
                i64toi32_i32$0 = 0;
                i64toi32_i32$0 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$4 | 0, 112513 | 0, i64toi32_i32$0 | 0) | 0;
                i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$2 = i64toi32_i32$0;
                i64toi32_i32$0 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$1 = (i64toi32_i32$2 + i64toi32_i32$3) | 0;
                i64toi32_i32$5 = (i64toi32_i32$4 + i64toi32_i32$0) | 0;
                if (i64toi32_i32$1 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$5 = (i64toi32_i32$5 + 1) | 0;
                }
                i64toi32_i32$2 = 0;
                i64toi32_i32$2 = __wasm_i64_urem(i64toi32_i32$1 | 0, i64toi32_i32$5 | 0, 2147105601 | 0, i64toi32_i32$2 | 0) | 0;
                i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$2;
                $10$hi = i64toi32_i32$5;
                HEAP8[(($101_1 + 35) | 0) >> 0] = i64toi32_i32$2;
                $107_1 = $3_1;
                i64toi32_i32$2 = 0;
                i64toi32_i32$2 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$5 | 0, 112513 | 0, i64toi32_i32$2 | 0) | 0;
                i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$4 = i64toi32_i32$2;
                i64toi32_i32$2 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$0 = (i64toi32_i32$4 + i64toi32_i32$3) | 0;
                i64toi32_i32$1 = (i64toi32_i32$5 + i64toi32_i32$2) | 0;
                if (i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$1 = (i64toi32_i32$1 + 1) | 0;
                }
                i64toi32_i32$4 = 0;
                i64toi32_i32$4 = __wasm_i64_urem(i64toi32_i32$0 | 0, i64toi32_i32$1 | 0, 2147105601 | 0, i64toi32_i32$4 | 0) | 0;
                i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$4;
                $10$hi = i64toi32_i32$1;
                HEAP8[(($107_1 + 36) | 0) >> 0] = i64toi32_i32$4;
                $113_1 = $3_1;
                i64toi32_i32$4 = 0;
                i64toi32_i32$4 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$1 | 0, 112513 | 0, i64toi32_i32$4 | 0) | 0;
                i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$5 = i64toi32_i32$4;
                i64toi32_i32$4 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$2 = (i64toi32_i32$5 + i64toi32_i32$3) | 0;
                i64toi32_i32$0 = (i64toi32_i32$1 + i64toi32_i32$4) | 0;
                if (i64toi32_i32$2 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$0 = (i64toi32_i32$0 + 1) | 0;
                }
                i64toi32_i32$5 = 0;
                i64toi32_i32$5 = __wasm_i64_urem(i64toi32_i32$2 | 0, i64toi32_i32$0 | 0, 2147105601 | 0, i64toi32_i32$5 | 0) | 0;
                i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$5;
                $10$hi = i64toi32_i32$0;
                HEAP8[(($113_1 + 37) | 0) >> 0] = i64toi32_i32$5;
                $119_1 = $3_1;
                i64toi32_i32$5 = 0;
                i64toi32_i32$5 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$0 | 0, 112513 | 0, i64toi32_i32$5 | 0) | 0;
                i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$1 = i64toi32_i32$5;
                i64toi32_i32$5 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$4 = (i64toi32_i32$1 + i64toi32_i32$3) | 0;
                i64toi32_i32$2 = (i64toi32_i32$0 + i64toi32_i32$5) | 0;
                if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$2 = (i64toi32_i32$2 + 1) | 0;
                }
                i64toi32_i32$1 = 0;
                i64toi32_i32$1 = __wasm_i64_urem(i64toi32_i32$4 | 0, i64toi32_i32$2 | 0, 2147105601 | 0, i64toi32_i32$1 | 0) | 0;
                i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$1;
                $10$hi = i64toi32_i32$2;
                HEAP8[(($119_1 + 38) | 0) >> 0] = i64toi32_i32$1;
                $125_1 = $3_1;
                i64toi32_i32$1 = 0;
                i64toi32_i32$1 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$2 | 0, 112513 | 0, i64toi32_i32$1 | 0) | 0;
                i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$0 = i64toi32_i32$1;
                i64toi32_i32$1 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$5 = (i64toi32_i32$0 + i64toi32_i32$3) | 0;
                i64toi32_i32$4 = (i64toi32_i32$2 + i64toi32_i32$1) | 0;
                if (i64toi32_i32$5 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$4 = (i64toi32_i32$4 + 1) | 0;
                }
                i64toi32_i32$0 = 0;
                i64toi32_i32$0 = __wasm_i64_urem(i64toi32_i32$5 | 0, i64toi32_i32$4 | 0, 2147105601 | 0, i64toi32_i32$0 | 0) | 0;
                i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$0;
                $10$hi = i64toi32_i32$4;
                HEAP8[(($125_1 + 39) | 0) >> 0] = i64toi32_i32$0;
                $131_1 = $3_1;
                i64toi32_i32$0 = 0;
                i64toi32_i32$0 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$4 | 0, 112513 | 0, i64toi32_i32$0 | 0) | 0;
                i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$2 = i64toi32_i32$0;
                i64toi32_i32$0 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$1 = (i64toi32_i32$2 + i64toi32_i32$3) | 0;
                i64toi32_i32$5 = (i64toi32_i32$4 + i64toi32_i32$0) | 0;
                if (i64toi32_i32$1 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$5 = (i64toi32_i32$5 + 1) | 0;
                }
                i64toi32_i32$2 = 0;
                i64toi32_i32$2 = __wasm_i64_urem(i64toi32_i32$1 | 0, i64toi32_i32$5 | 0, 2147105601 | 0, i64toi32_i32$2 | 0) | 0;
                i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$2;
                $10$hi = i64toi32_i32$5;
                HEAP8[(($131_1 + 40) | 0) >> 0] = i64toi32_i32$2;
                $137_1 = $3_1;
                i64toi32_i32$2 = 0;
                i64toi32_i32$2 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$5 | 0, 112513 | 0, i64toi32_i32$2 | 0) | 0;
                i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$4 = i64toi32_i32$2;
                i64toi32_i32$2 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$0 = (i64toi32_i32$4 + i64toi32_i32$3) | 0;
                i64toi32_i32$1 = (i64toi32_i32$5 + i64toi32_i32$2) | 0;
                if (i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$1 = (i64toi32_i32$1 + 1) | 0;
                }
                i64toi32_i32$4 = 0;
                i64toi32_i32$4 = __wasm_i64_urem(i64toi32_i32$0 | 0, i64toi32_i32$1 | 0, 2147105601 | 0, i64toi32_i32$4 | 0) | 0;
                i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$4;
                $10$hi = i64toi32_i32$1;
                HEAP8[(($137_1 + 41) | 0) >> 0] = i64toi32_i32$4;
                $143_1 = $3_1;
                i64toi32_i32$4 = 0;
                i64toi32_i32$4 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$1 | 0, 112513 | 0, i64toi32_i32$4 | 0) | 0;
                i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$5 = i64toi32_i32$4;
                i64toi32_i32$4 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$2 = (i64toi32_i32$5 + i64toi32_i32$3) | 0;
                i64toi32_i32$0 = (i64toi32_i32$1 + i64toi32_i32$4) | 0;
                if (i64toi32_i32$2 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$0 = (i64toi32_i32$0 + 1) | 0;
                }
                i64toi32_i32$5 = 0;
                i64toi32_i32$5 = __wasm_i64_urem(i64toi32_i32$2 | 0, i64toi32_i32$0 | 0, 2147105601 | 0, i64toi32_i32$5 | 0) | 0;
                i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$5;
                $10$hi = i64toi32_i32$0;
                HEAP8[(($143_1 + 42) | 0) >> 0] = i64toi32_i32$5;
                $149_1 = $3_1;
                i64toi32_i32$5 = 0;
                i64toi32_i32$5 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$0 | 0, 112513 | 0, i64toi32_i32$5 | 0) | 0;
                i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$1 = i64toi32_i32$5;
                i64toi32_i32$5 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$4 = (i64toi32_i32$1 + i64toi32_i32$3) | 0;
                i64toi32_i32$2 = (i64toi32_i32$0 + i64toi32_i32$5) | 0;
                if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$2 = (i64toi32_i32$2 + 1) | 0;
                }
                i64toi32_i32$1 = 0;
                i64toi32_i32$1 = __wasm_i64_urem(i64toi32_i32$4 | 0, i64toi32_i32$2 | 0, 2147105601 | 0, i64toi32_i32$1 | 0) | 0;
                i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$1;
                $10$hi = i64toi32_i32$2;
                HEAP8[(($149_1 + 43) | 0) >> 0] = i64toi32_i32$1;
                $155_1 = $3_1;
                i64toi32_i32$1 = 0;
                i64toi32_i32$1 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$2 | 0, 112513 | 0, i64toi32_i32$1 | 0) | 0;
                i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$0 = i64toi32_i32$1;
                i64toi32_i32$1 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$5 = (i64toi32_i32$0 + i64toi32_i32$3) | 0;
                i64toi32_i32$4 = (i64toi32_i32$2 + i64toi32_i32$1) | 0;
                if (i64toi32_i32$5 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$4 = (i64toi32_i32$4 + 1) | 0;
                }
                i64toi32_i32$0 = 0;
                i64toi32_i32$0 = __wasm_i64_urem(i64toi32_i32$5 | 0, i64toi32_i32$4 | 0, 2147105601 | 0, i64toi32_i32$0 | 0) | 0;
                i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$0;
                $10$hi = i64toi32_i32$4;
                HEAP8[(($155_1 + 44) | 0) >> 0] = i64toi32_i32$0;
                $161_1 = $3_1;
                i64toi32_i32$0 = 0;
                i64toi32_i32$0 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$4 | 0, 112513 | 0, i64toi32_i32$0 | 0) | 0;
                i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$2 = i64toi32_i32$0;
                i64toi32_i32$0 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$1 = (i64toi32_i32$2 + i64toi32_i32$3) | 0;
                i64toi32_i32$5 = (i64toi32_i32$4 + i64toi32_i32$0) | 0;
                if (i64toi32_i32$1 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$5 = (i64toi32_i32$5 + 1) | 0;
                }
                i64toi32_i32$2 = 0;
                i64toi32_i32$2 = __wasm_i64_urem(i64toi32_i32$1 | 0, i64toi32_i32$5 | 0, 2147105601 | 0, i64toi32_i32$2 | 0) | 0;
                i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$2;
                $10$hi = i64toi32_i32$5;
                HEAP8[(($161_1 + 45) | 0) >> 0] = i64toi32_i32$2;
                $167_1 = $3_1;
                i64toi32_i32$2 = 0;
                i64toi32_i32$2 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$5 | 0, 112513 | 0, i64toi32_i32$2 | 0) | 0;
                i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$4 = i64toi32_i32$2;
                i64toi32_i32$2 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$0 = (i64toi32_i32$4 + i64toi32_i32$3) | 0;
                i64toi32_i32$1 = (i64toi32_i32$5 + i64toi32_i32$2) | 0;
                if (i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$1 = (i64toi32_i32$1 + 1) | 0;
                }
                i64toi32_i32$4 = 0;
                i64toi32_i32$4 = __wasm_i64_urem(i64toi32_i32$0 | 0, i64toi32_i32$1 | 0, 2147105601 | 0, i64toi32_i32$4 | 0) | 0;
                i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$4;
                $10$hi = i64toi32_i32$1;
                HEAP8[(($167_1 + 46) | 0) >> 0] = i64toi32_i32$4;
                $173_1 = $3_1;
                i64toi32_i32$4 = 0;
                i64toi32_i32$4 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$1 | 0, 112513 | 0, i64toi32_i32$4 | 0) | 0;
                i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$5 = i64toi32_i32$4;
                i64toi32_i32$4 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$2 = (i64toi32_i32$5 + i64toi32_i32$3) | 0;
                i64toi32_i32$0 = (i64toi32_i32$1 + i64toi32_i32$4) | 0;
                if (i64toi32_i32$2 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$0 = (i64toi32_i32$0 + 1) | 0;
                }
                i64toi32_i32$5 = 0;
                i64toi32_i32$5 = __wasm_i64_urem(i64toi32_i32$2 | 0, i64toi32_i32$0 | 0, 2147105601 | 0, i64toi32_i32$5 | 0) | 0;
                i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$5;
                $10$hi = i64toi32_i32$0;
                HEAP8[(($173_1 + 47) | 0) >> 0] = i64toi32_i32$5;
                $179_1 = $3_1;
                i64toi32_i32$5 = 0;
                i64toi32_i32$5 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$0 | 0, 112513 | 0, i64toi32_i32$5 | 0) | 0;
                i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$1 = i64toi32_i32$5;
                i64toi32_i32$5 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$4 = (i64toi32_i32$1 + i64toi32_i32$3) | 0;
                i64toi32_i32$2 = (i64toi32_i32$0 + i64toi32_i32$5) | 0;
                if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$2 = (i64toi32_i32$2 + 1) | 0;
                }
                i64toi32_i32$1 = 0;
                i64toi32_i32$1 = __wasm_i64_urem(i64toi32_i32$4 | 0, i64toi32_i32$2 | 0, 2147105601 | 0, i64toi32_i32$1 | 0) | 0;
                i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$1;
                $10$hi = i64toi32_i32$2;
                HEAP8[(($179_1 + 48) | 0) >> 0] = i64toi32_i32$1;
                $185_1 = $3_1;
                i64toi32_i32$1 = 0;
                i64toi32_i32$1 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$2 | 0, 112513 | 0, i64toi32_i32$1 | 0) | 0;
                i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$0 = i64toi32_i32$1;
                i64toi32_i32$1 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$5 = (i64toi32_i32$0 + i64toi32_i32$3) | 0;
                i64toi32_i32$4 = (i64toi32_i32$2 + i64toi32_i32$1) | 0;
                if (i64toi32_i32$5 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$4 = (i64toi32_i32$4 + 1) | 0;
                }
                i64toi32_i32$0 = 0;
                i64toi32_i32$0 = __wasm_i64_urem(i64toi32_i32$5 | 0, i64toi32_i32$4 | 0, 2147105601 | 0, i64toi32_i32$0 | 0) | 0;
                i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$0;
                $10$hi = i64toi32_i32$4;
                HEAP8[(($185_1 + 49) | 0) >> 0] = i64toi32_i32$0;
                $191_1 = $3_1;
                i64toi32_i32$0 = 0;
                i64toi32_i32$0 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$4 | 0, 112513 | 0, i64toi32_i32$0 | 0) | 0;
                i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$2 = i64toi32_i32$0;
                i64toi32_i32$0 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$1 = (i64toi32_i32$2 + i64toi32_i32$3) | 0;
                i64toi32_i32$5 = (i64toi32_i32$4 + i64toi32_i32$0) | 0;
                if (i64toi32_i32$1 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$5 = (i64toi32_i32$5 + 1) | 0;
                }
                i64toi32_i32$2 = 0;
                i64toi32_i32$2 = __wasm_i64_urem(i64toi32_i32$1 | 0, i64toi32_i32$5 | 0, 2147105601 | 0, i64toi32_i32$2 | 0) | 0;
                i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$2;
                $10$hi = i64toi32_i32$5;
                HEAP8[(($191_1 + 50) | 0) >> 0] = i64toi32_i32$2;
                $197_1 = $3_1;
                i64toi32_i32$2 = 0;
                i64toi32_i32$2 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$5 | 0, 112513 | 0, i64toi32_i32$2 | 0) | 0;
                i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$4 = i64toi32_i32$2;
                i64toi32_i32$2 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$0 = (i64toi32_i32$4 + i64toi32_i32$3) | 0;
                i64toi32_i32$1 = (i64toi32_i32$5 + i64toi32_i32$2) | 0;
                if (i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$1 = (i64toi32_i32$1 + 1) | 0;
                }
                i64toi32_i32$4 = 0;
                i64toi32_i32$4 = __wasm_i64_urem(i64toi32_i32$0 | 0, i64toi32_i32$1 | 0, 2147105601 | 0, i64toi32_i32$4 | 0) | 0;
                i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$4;
                $10$hi = i64toi32_i32$1;
                HEAP8[(($197_1 + 51) | 0) >> 0] = i64toi32_i32$4;
                $203_1 = $3_1;
                i64toi32_i32$4 = 0;
                i64toi32_i32$4 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$1 | 0, 112513 | 0, i64toi32_i32$4 | 0) | 0;
                i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$5 = i64toi32_i32$4;
                i64toi32_i32$4 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$2 = (i64toi32_i32$5 + i64toi32_i32$3) | 0;
                i64toi32_i32$0 = (i64toi32_i32$1 + i64toi32_i32$4) | 0;
                if (i64toi32_i32$2 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$0 = (i64toi32_i32$0 + 1) | 0;
                }
                i64toi32_i32$5 = 0;
                i64toi32_i32$5 = __wasm_i64_urem(i64toi32_i32$2 | 0, i64toi32_i32$0 | 0, 2147105601 | 0, i64toi32_i32$5 | 0) | 0;
                i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$5;
                $10$hi = i64toi32_i32$0;
                HEAP8[(($203_1 + 52) | 0) >> 0] = i64toi32_i32$5;
                $209_1 = $3_1;
                i64toi32_i32$5 = 0;
                i64toi32_i32$5 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$0 | 0, 112513 | 0, i64toi32_i32$5 | 0) | 0;
                i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$1 = i64toi32_i32$5;
                i64toi32_i32$5 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$4 = (i64toi32_i32$1 + i64toi32_i32$3) | 0;
                i64toi32_i32$2 = (i64toi32_i32$0 + i64toi32_i32$5) | 0;
                if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$2 = (i64toi32_i32$2 + 1) | 0;
                }
                i64toi32_i32$1 = 0;
                i64toi32_i32$1 = __wasm_i64_urem(i64toi32_i32$4 | 0, i64toi32_i32$2 | 0, 2147105601 | 0, i64toi32_i32$1 | 0) | 0;
                i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$1;
                $10$hi = i64toi32_i32$2;
                HEAP8[(($209_1 + 53) | 0) >> 0] = i64toi32_i32$1;
                $215_1 = $3_1;
                i64toi32_i32$1 = 0;
                i64toi32_i32$1 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$2 | 0, 112513 | 0, i64toi32_i32$1 | 0) | 0;
                i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$0 = i64toi32_i32$1;
                i64toi32_i32$1 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$5 = (i64toi32_i32$0 + i64toi32_i32$3) | 0;
                i64toi32_i32$4 = (i64toi32_i32$2 + i64toi32_i32$1) | 0;
                if (i64toi32_i32$5 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$4 = (i64toi32_i32$4 + 1) | 0;
                }
                i64toi32_i32$0 = 0;
                i64toi32_i32$0 = __wasm_i64_urem(i64toi32_i32$5 | 0, i64toi32_i32$4 | 0, 2147105601 | 0, i64toi32_i32$0 | 0) | 0;
                i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$0;
                $10$hi = i64toi32_i32$4;
                HEAP8[(($215_1 + 54) | 0) >> 0] = i64toi32_i32$0;
                $221_1 = $3_1;
                i64toi32_i32$0 = 0;
                i64toi32_i32$0 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$4 | 0, 112513 | 0, i64toi32_i32$0 | 0) | 0;
                i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$2 = i64toi32_i32$0;
                i64toi32_i32$0 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$1 = (i64toi32_i32$2 + i64toi32_i32$3) | 0;
                i64toi32_i32$5 = (i64toi32_i32$4 + i64toi32_i32$0) | 0;
                if (i64toi32_i32$1 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$5 = (i64toi32_i32$5 + 1) | 0;
                }
                i64toi32_i32$2 = 0;
                i64toi32_i32$2 = __wasm_i64_urem(i64toi32_i32$1 | 0, i64toi32_i32$5 | 0, 2147105601 | 0, i64toi32_i32$2 | 0) | 0;
                i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$2;
                $10$hi = i64toi32_i32$5;
                HEAP8[(($221_1 + 55) | 0) >> 0] = i64toi32_i32$2;
                $227_1 = $3_1;
                i64toi32_i32$2 = 0;
                i64toi32_i32$2 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$5 | 0, 112513 | 0, i64toi32_i32$2 | 0) | 0;
                i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
                i64toi32_i32$4 = i64toi32_i32$2;
                i64toi32_i32$2 = 0;
                i64toi32_i32$3 = 994;
                i64toi32_i32$0 = (i64toi32_i32$4 + i64toi32_i32$3) | 0;
                i64toi32_i32$1 = (i64toi32_i32$5 + i64toi32_i32$2) | 0;
                if (i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0) {
                    i64toi32_i32$1 = (i64toi32_i32$1 + 1) | 0;
                }
                i64toi32_i32$4 = 0;
                i64toi32_i32$4 = __wasm_i64_urem(i64toi32_i32$0 | 0, i64toi32_i32$1 | 0, 2147105601 | 0, i64toi32_i32$4 | 0) | 0;
                i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
                $10_1 = i64toi32_i32$4;
                $10$hi = i64toi32_i32$1;
                HEAP8[(($227_1 + 56) | 0) >> 0] = i64toi32_i32$4;
                HEAP32[(($0_1 + 8) | 0) >> 2] = i64toi32_i32$4;
                $5_1 = 1;
                if ($2_1 >>> 0 <= 1 >>> 0) {
                    break label$2;
                }
                label$8: while (1) {
                    $4_1 = ($1_1 + $5_1) | 0;
                    HEAP8[$4_1 >> 0] = ((HEAPU8[$4_1 >> 0] | 0) ^ (HEAPU8[(((($3_1 + 32) | 0) + (($5_1 >>> 0) % (25 >>> 0) | 0)) | 0) >> 0] | 0)) | 0;
                    $5_1 = ($5_1 + 1) | 0;
                    if (($5_1 | 0) != ($2_1 | 0)) {
                        continue label$8;
                    }
                    break label$8;
                }
            }
        }
        global$0 = ($3_1 - -64) | 0;
    }

    _clientbound($3_1, $8_1, $5_1) {
        var $0_1 = 0,
            $4_1 = 0,
            $319_1 = 0,
            i64toi32_i32$2 = 0,
            i64toi32_i32$0 = 0,
            i64toi32_i32$1 = 0,
            $66_1 = 0,
            i64toi32_i32$3 = 0,
            i64toi32_i32$4 = 0,
            i64toi32_i32$5 = 0,
            $1_1 = 0,
            $2_1 = 0,
            $6_1 = 0,
            $394_1 = 0,
            $67_1 = 0,
            $11_1 = 0,
            $11$hi = 0,
            $401_1 = 0,
            $407_1 = 0,
            $413_1 = 0,
            $419_1 = 0,
            $425_1 = 0,
            $431_1 = 0,
            $437_1 = 0,
            $443_1 = 0,
            $449_1 = 0,
            $455_1 = 0,
            $461_1 = 0,
            $467_1 = 0,
            $473_1 = 0,
            $479_1 = 0,
            $485_1 = 0,
            $491_1 = 0,
            $497_1 = 0,
            $503_1 = 0,
            $509_1 = 0,
            $515_1 = 0,
            $521_1 = 0,
            $527_1 = 0,
            $533_1 = 0,
            $539_1 = 0;
        $0_1 = global$0;
        label$42: {
            if (!$5_1) {
                break label$42;
            }
            $4_1 = HEAPU8[$8_1 >> 0] | 0;
            if (($4_1 | 0) == (1 | 0)) {
                break label$42;
            }
            $319_1 = $3_1;
            i64toi32_i32$2 = $3_1;
            i64toi32_i32$0 = HEAP32[((i64toi32_i32$2 + 12) | 0) >> 2] | 0;
            i64toi32_i32$1 = 0;
            $66_1 = i64toi32_i32$0;
            i64toi32_i32$0 = 0;
            i64toi32_i32$0 = __wasm_i64_mul($66_1 | 0, i64toi32_i32$1 | 0, 86971 | 0, i64toi32_i32$0 | 0) | 0;
            i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$2 = i64toi32_i32$0;
            i64toi32_i32$0 = 0;
            i64toi32_i32$3 = 497;
            i64toi32_i32$4 = (i64toi32_i32$2 + i64toi32_i32$3) | 0;
            i64toi32_i32$5 = (i64toi32_i32$1 + i64toi32_i32$0) | 0;
            if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$5 = (i64toi32_i32$5 + 1) | 0;
            }
            i64toi32_i32$2 = 0;
            i64toi32_i32$2 = __wasm_i64_urem(i64toi32_i32$4 | 0, i64toi32_i32$5 | 0, 2147193789 | 0, i64toi32_i32$2 | 0) | 0;
            i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
            $1_1 = i64toi32_i32$2;
            HEAP32[(($319_1 + 12) | 0) >> 2] = i64toi32_i32$2;
            $2_1 = ($1_1 & 15) | 0;
            $1_1 = 0;
            label$48: while (1) {
                $6_1 = ($1_1 | 0) == ($2_1 | 0);
                $4_1 = JUMP_TABLE_UNSHUFFLER_CLIENTBOUND[(($4_1 & 255) | 0 | 0) >> 0] | 0;
                $1_1 = ($1_1 + 1) | 0;
                if (!$6_1) {
                    continue label$48;
                }
                break label$48;
            }
            HEAP8[$8_1 >> 0] = $4_1;
            $394_1 = $0_1;
            i64toi32_i32$5 = $3_1;
            i64toi32_i32$4 = HEAP32[((i64toi32_i32$5 + 12) | 0) >> 2] | 0;
            i64toi32_i32$1 = 0;
            $67_1 = i64toi32_i32$4;
            i64toi32_i32$4 = 0;
            i64toi32_i32$4 = __wasm_i64_mul($67_1 | 0, i64toi32_i32$1 | 0, 77296 | 0, i64toi32_i32$4 | 0) | 0;
            i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$5 = i64toi32_i32$4;
            i64toi32_i32$4 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$2 = (i64toi32_i32$5 + i64toi32_i32$3) | 0;
            i64toi32_i32$0 = (i64toi32_i32$1 + i64toi32_i32$4) | 0;
            if (i64toi32_i32$2 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$0 = (i64toi32_i32$0 + 1) | 0;
            }
            i64toi32_i32$5 = 0;
            i64toi32_i32$5 = __wasm_i64_urem(i64toi32_i32$2 | 0, i64toi32_i32$0 | 0, 2147193789 | 0, i64toi32_i32$5 | 0) | 0;
            i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$5;
            $11$hi = i64toi32_i32$0;
            HEAP8[(($394_1 + 80) | 0) >> 0] = i64toi32_i32$5;
            $401_1 = $0_1;
            i64toi32_i32$5 = 0;
            i64toi32_i32$5 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$0 | 0, 77296 | 0, i64toi32_i32$5 | 0) | 0;
            i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$1 = i64toi32_i32$5;
            i64toi32_i32$5 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$4 = (i64toi32_i32$1 + i64toi32_i32$3) | 0;
            i64toi32_i32$2 = (i64toi32_i32$0 + i64toi32_i32$5) | 0;
            if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$2 = (i64toi32_i32$2 + 1) | 0;
            }
            i64toi32_i32$1 = 0;
            i64toi32_i32$1 = __wasm_i64_urem(i64toi32_i32$4 | 0, i64toi32_i32$2 | 0, 2147193789 | 0, i64toi32_i32$1 | 0) | 0;
            i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$1;
            $11$hi = i64toi32_i32$2;
            HEAP8[(($401_1 + 81) | 0) >> 0] = i64toi32_i32$1;
            $407_1 = $0_1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$1 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$2 | 0, 77296 | 0, i64toi32_i32$1 | 0) | 0;
            i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$0 = i64toi32_i32$1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$5 = (i64toi32_i32$0 + i64toi32_i32$3) | 0;
            i64toi32_i32$4 = (i64toi32_i32$2 + i64toi32_i32$1) | 0;
            if (i64toi32_i32$5 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$4 = (i64toi32_i32$4 + 1) | 0;
            }
            i64toi32_i32$0 = 0;
            i64toi32_i32$0 = __wasm_i64_urem(i64toi32_i32$5 | 0, i64toi32_i32$4 | 0, 2147193789 | 0, i64toi32_i32$0 | 0) | 0;
            i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$0;
            $11$hi = i64toi32_i32$4;
            HEAP8[(($407_1 + 82) | 0) >> 0] = i64toi32_i32$0;
            $413_1 = $0_1;
            i64toi32_i32$0 = 0;
            i64toi32_i32$0 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$4 | 0, 77296 | 0, i64toi32_i32$0 | 0) | 0;
            i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$2 = i64toi32_i32$0;
            i64toi32_i32$0 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$1 = (i64toi32_i32$2 + i64toi32_i32$3) | 0;
            i64toi32_i32$5 = (i64toi32_i32$4 + i64toi32_i32$0) | 0;
            if (i64toi32_i32$1 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$5 = (i64toi32_i32$5 + 1) | 0;
            }
            i64toi32_i32$2 = 0;
            i64toi32_i32$2 = __wasm_i64_urem(i64toi32_i32$1 | 0, i64toi32_i32$5 | 0, 2147193789 | 0, i64toi32_i32$2 | 0) | 0;
            i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$2;
            $11$hi = i64toi32_i32$5;
            HEAP8[(($413_1 + 83) | 0) >> 0] = i64toi32_i32$2;
            $419_1 = $0_1;
            i64toi32_i32$2 = 0;
            i64toi32_i32$2 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$5 | 0, 77296 | 0, i64toi32_i32$2 | 0) | 0;
            i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$4 = i64toi32_i32$2;
            i64toi32_i32$2 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$0 = (i64toi32_i32$4 + i64toi32_i32$3) | 0;
            i64toi32_i32$1 = (i64toi32_i32$5 + i64toi32_i32$2) | 0;
            if (i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$1 = (i64toi32_i32$1 + 1) | 0;
            }
            i64toi32_i32$4 = 0;
            i64toi32_i32$4 = __wasm_i64_urem(i64toi32_i32$0 | 0, i64toi32_i32$1 | 0, 2147193789 | 0, i64toi32_i32$4 | 0) | 0;
            i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$4;
            $11$hi = i64toi32_i32$1;
            HEAP8[(($419_1 + 84) | 0) >> 0] = i64toi32_i32$4;
            $425_1 = $0_1;
            i64toi32_i32$4 = 0;
            i64toi32_i32$4 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$1 | 0, 77296 | 0, i64toi32_i32$4 | 0) | 0;
            i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$5 = i64toi32_i32$4;
            i64toi32_i32$4 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$2 = (i64toi32_i32$5 + i64toi32_i32$3) | 0;
            i64toi32_i32$0 = (i64toi32_i32$1 + i64toi32_i32$4) | 0;
            if (i64toi32_i32$2 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$0 = (i64toi32_i32$0 + 1) | 0;
            }
            i64toi32_i32$5 = 0;
            i64toi32_i32$5 = __wasm_i64_urem(i64toi32_i32$2 | 0, i64toi32_i32$0 | 0, 2147193789 | 0, i64toi32_i32$5 | 0) | 0;
            i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$5;
            $11$hi = i64toi32_i32$0;
            HEAP8[(($425_1 + 85) | 0) >> 0] = i64toi32_i32$5;
            $431_1 = $0_1;
            i64toi32_i32$5 = 0;
            i64toi32_i32$5 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$0 | 0, 77296 | 0, i64toi32_i32$5 | 0) | 0;
            i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$1 = i64toi32_i32$5;
            i64toi32_i32$5 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$4 = (i64toi32_i32$1 + i64toi32_i32$3) | 0;
            i64toi32_i32$2 = (i64toi32_i32$0 + i64toi32_i32$5) | 0;
            if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$2 = (i64toi32_i32$2 + 1) | 0;
            }
            i64toi32_i32$1 = 0;
            i64toi32_i32$1 = __wasm_i64_urem(i64toi32_i32$4 | 0, i64toi32_i32$2 | 0, 2147193789 | 0, i64toi32_i32$1 | 0) | 0;
            i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$1;
            $11$hi = i64toi32_i32$2;
            HEAP8[(($431_1 + 86) | 0) >> 0] = i64toi32_i32$1;
            $437_1 = $0_1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$1 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$2 | 0, 77296 | 0, i64toi32_i32$1 | 0) | 0;
            i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$0 = i64toi32_i32$1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$5 = (i64toi32_i32$0 + i64toi32_i32$3) | 0;
            i64toi32_i32$4 = (i64toi32_i32$2 + i64toi32_i32$1) | 0;
            if (i64toi32_i32$5 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$4 = (i64toi32_i32$4 + 1) | 0;
            }
            i64toi32_i32$0 = 0;
            i64toi32_i32$0 = __wasm_i64_urem(i64toi32_i32$5 | 0, i64toi32_i32$4 | 0, 2147193789 | 0, i64toi32_i32$0 | 0) | 0;
            i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$0;
            $11$hi = i64toi32_i32$4;
            HEAP8[(($437_1 + 87) | 0) >> 0] = i64toi32_i32$0;
            $443_1 = $0_1;
            i64toi32_i32$0 = 0;
            i64toi32_i32$0 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$4 | 0, 77296 | 0, i64toi32_i32$0 | 0) | 0;
            i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$2 = i64toi32_i32$0;
            i64toi32_i32$0 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$1 = (i64toi32_i32$2 + i64toi32_i32$3) | 0;
            i64toi32_i32$5 = (i64toi32_i32$4 + i64toi32_i32$0) | 0;
            if (i64toi32_i32$1 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$5 = (i64toi32_i32$5 + 1) | 0;
            }
            i64toi32_i32$2 = 0;
            i64toi32_i32$2 = __wasm_i64_urem(i64toi32_i32$1 | 0, i64toi32_i32$5 | 0, 2147193789 | 0, i64toi32_i32$2 | 0) | 0;
            i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$2;
            $11$hi = i64toi32_i32$5;
            HEAP8[(($443_1 + 88) | 0) >> 0] = i64toi32_i32$2;
            $449_1 = $0_1;
            i64toi32_i32$2 = 0;
            i64toi32_i32$2 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$5 | 0, 77296 | 0, i64toi32_i32$2 | 0) | 0;
            i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$4 = i64toi32_i32$2;
            i64toi32_i32$2 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$0 = (i64toi32_i32$4 + i64toi32_i32$3) | 0;
            i64toi32_i32$1 = (i64toi32_i32$5 + i64toi32_i32$2) | 0;
            if (i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$1 = (i64toi32_i32$1 + 1) | 0;
            }
            i64toi32_i32$4 = 0;
            i64toi32_i32$4 = __wasm_i64_urem(i64toi32_i32$0 | 0, i64toi32_i32$1 | 0, 2147193789 | 0, i64toi32_i32$4 | 0) | 0;
            i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$4;
            $11$hi = i64toi32_i32$1;
            HEAP8[(($449_1 + 89) | 0) >> 0] = i64toi32_i32$4;
            $455_1 = $0_1;
            i64toi32_i32$4 = 0;
            i64toi32_i32$4 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$1 | 0, 77296 | 0, i64toi32_i32$4 | 0) | 0;
            i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$5 = i64toi32_i32$4;
            i64toi32_i32$4 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$2 = (i64toi32_i32$5 + i64toi32_i32$3) | 0;
            i64toi32_i32$0 = (i64toi32_i32$1 + i64toi32_i32$4) | 0;
            if (i64toi32_i32$2 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$0 = (i64toi32_i32$0 + 1) | 0;
            }
            i64toi32_i32$5 = 0;
            i64toi32_i32$5 = __wasm_i64_urem(i64toi32_i32$2 | 0, i64toi32_i32$0 | 0, 2147193789 | 0, i64toi32_i32$5 | 0) | 0;
            i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$5;
            $11$hi = i64toi32_i32$0;
            HEAP8[(($455_1 + 90) | 0) >> 0] = i64toi32_i32$5;
            $461_1 = $0_1;
            i64toi32_i32$5 = 0;
            i64toi32_i32$5 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$0 | 0, 77296 | 0, i64toi32_i32$5 | 0) | 0;
            i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$1 = i64toi32_i32$5;
            i64toi32_i32$5 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$4 = (i64toi32_i32$1 + i64toi32_i32$3) | 0;
            i64toi32_i32$2 = (i64toi32_i32$0 + i64toi32_i32$5) | 0;
            if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$2 = (i64toi32_i32$2 + 1) | 0;
            }
            i64toi32_i32$1 = 0;
            i64toi32_i32$1 = __wasm_i64_urem(i64toi32_i32$4 | 0, i64toi32_i32$2 | 0, 2147193789 | 0, i64toi32_i32$1 | 0) | 0;
            i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$1;
            $11$hi = i64toi32_i32$2;
            HEAP8[(($461_1 + 91) | 0) >> 0] = i64toi32_i32$1;
            $467_1 = $0_1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$1 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$2 | 0, 77296 | 0, i64toi32_i32$1 | 0) | 0;
            i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$0 = i64toi32_i32$1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$5 = (i64toi32_i32$0 + i64toi32_i32$3) | 0;
            i64toi32_i32$4 = (i64toi32_i32$2 + i64toi32_i32$1) | 0;
            if (i64toi32_i32$5 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$4 = (i64toi32_i32$4 + 1) | 0;
            }
            i64toi32_i32$0 = 0;
            i64toi32_i32$0 = __wasm_i64_urem(i64toi32_i32$5 | 0, i64toi32_i32$4 | 0, 2147193789 | 0, i64toi32_i32$0 | 0) | 0;
            i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$0;
            $11$hi = i64toi32_i32$4;
            HEAP8[(($467_1 + 92) | 0) >> 0] = i64toi32_i32$0;
            $473_1 = $0_1;
            i64toi32_i32$0 = 0;
            i64toi32_i32$0 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$4 | 0, 77296 | 0, i64toi32_i32$0 | 0) | 0;
            i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$2 = i64toi32_i32$0;
            i64toi32_i32$0 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$1 = (i64toi32_i32$2 + i64toi32_i32$3) | 0;
            i64toi32_i32$5 = (i64toi32_i32$4 + i64toi32_i32$0) | 0;
            if (i64toi32_i32$1 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$5 = (i64toi32_i32$5 + 1) | 0;
            }
            i64toi32_i32$2 = 0;
            i64toi32_i32$2 = __wasm_i64_urem(i64toi32_i32$1 | 0, i64toi32_i32$5 | 0, 2147193789 | 0, i64toi32_i32$2 | 0) | 0;
            i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$2;
            $11$hi = i64toi32_i32$5;
            HEAP8[(($473_1 + 93) | 0) >> 0] = i64toi32_i32$2;
            $479_1 = $0_1;
            i64toi32_i32$2 = 0;
            i64toi32_i32$2 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$5 | 0, 77296 | 0, i64toi32_i32$2 | 0) | 0;
            i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$4 = i64toi32_i32$2;
            i64toi32_i32$2 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$0 = (i64toi32_i32$4 + i64toi32_i32$3) | 0;
            i64toi32_i32$1 = (i64toi32_i32$5 + i64toi32_i32$2) | 0;
            if (i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$1 = (i64toi32_i32$1 + 1) | 0;
            }
            i64toi32_i32$4 = 0;
            i64toi32_i32$4 = __wasm_i64_urem(i64toi32_i32$0 | 0, i64toi32_i32$1 | 0, 2147193789 | 0, i64toi32_i32$4 | 0) | 0;
            i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$4;
            $11$hi = i64toi32_i32$1;
            HEAP8[(($479_1 + 94) | 0) >> 0] = i64toi32_i32$4;
            $485_1 = $0_1;
            i64toi32_i32$4 = 0;
            i64toi32_i32$4 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$1 | 0, 77296 | 0, i64toi32_i32$4 | 0) | 0;
            i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$5 = i64toi32_i32$4;
            i64toi32_i32$4 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$2 = (i64toi32_i32$5 + i64toi32_i32$3) | 0;
            i64toi32_i32$0 = (i64toi32_i32$1 + i64toi32_i32$4) | 0;
            if (i64toi32_i32$2 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$0 = (i64toi32_i32$0 + 1) | 0;
            }
            i64toi32_i32$5 = 0;
            i64toi32_i32$5 = __wasm_i64_urem(i64toi32_i32$2 | 0, i64toi32_i32$0 | 0, 2147193789 | 0, i64toi32_i32$5 | 0) | 0;
            i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$5;
            $11$hi = i64toi32_i32$0;
            HEAP8[(($485_1 + 95) | 0) >> 0] = i64toi32_i32$5;
            $491_1 = $0_1;
            i64toi32_i32$5 = 0;
            i64toi32_i32$5 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$0 | 0, 77296 | 0, i64toi32_i32$5 | 0) | 0;
            i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$1 = i64toi32_i32$5;
            i64toi32_i32$5 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$4 = (i64toi32_i32$1 + i64toi32_i32$3) | 0;
            i64toi32_i32$2 = (i64toi32_i32$0 + i64toi32_i32$5) | 0;
            if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$2 = (i64toi32_i32$2 + 1) | 0;
            }
            i64toi32_i32$1 = 0;
            i64toi32_i32$1 = __wasm_i64_urem(i64toi32_i32$4 | 0, i64toi32_i32$2 | 0, 2147193789 | 0, i64toi32_i32$1 | 0) | 0;
            i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$1;
            $11$hi = i64toi32_i32$2;
            HEAP8[(($491_1 + 96) | 0) >> 0] = i64toi32_i32$1;
            $497_1 = $0_1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$1 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$2 | 0, 77296 | 0, i64toi32_i32$1 | 0) | 0;
            i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$0 = i64toi32_i32$1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$5 = (i64toi32_i32$0 + i64toi32_i32$3) | 0;
            i64toi32_i32$4 = (i64toi32_i32$2 + i64toi32_i32$1) | 0;
            if (i64toi32_i32$5 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$4 = (i64toi32_i32$4 + 1) | 0;
            }
            i64toi32_i32$0 = 0;
            i64toi32_i32$0 = __wasm_i64_urem(i64toi32_i32$5 | 0, i64toi32_i32$4 | 0, 2147193789 | 0, i64toi32_i32$0 | 0) | 0;
            i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$0;
            $11$hi = i64toi32_i32$4;
            HEAP8[(($497_1 + 97) | 0) >> 0] = i64toi32_i32$0;
            $503_1 = $0_1;
            i64toi32_i32$0 = 0;
            i64toi32_i32$0 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$4 | 0, 77296 | 0, i64toi32_i32$0 | 0) | 0;
            i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$2 = i64toi32_i32$0;
            i64toi32_i32$0 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$1 = (i64toi32_i32$2 + i64toi32_i32$3) | 0;
            i64toi32_i32$5 = (i64toi32_i32$4 + i64toi32_i32$0) | 0;
            if (i64toi32_i32$1 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$5 = (i64toi32_i32$5 + 1) | 0;
            }
            i64toi32_i32$2 = 0;
            i64toi32_i32$2 = __wasm_i64_urem(i64toi32_i32$1 | 0, i64toi32_i32$5 | 0, 2147193789 | 0, i64toi32_i32$2 | 0) | 0;
            i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$2;
            $11$hi = i64toi32_i32$5;
            HEAP8[(($503_1 + 98) | 0) >> 0] = i64toi32_i32$2;
            $509_1 = $0_1;
            i64toi32_i32$2 = 0;
            i64toi32_i32$2 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$5 | 0, 77296 | 0, i64toi32_i32$2 | 0) | 0;
            i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$4 = i64toi32_i32$2;
            i64toi32_i32$2 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$0 = (i64toi32_i32$4 + i64toi32_i32$3) | 0;
            i64toi32_i32$1 = (i64toi32_i32$5 + i64toi32_i32$2) | 0;
            if (i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$1 = (i64toi32_i32$1 + 1) | 0;
            }
            i64toi32_i32$4 = 0;
            i64toi32_i32$4 = __wasm_i64_urem(i64toi32_i32$0 | 0, i64toi32_i32$1 | 0, 2147193789 | 0, i64toi32_i32$4 | 0) | 0;
            i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$4;
            $11$hi = i64toi32_i32$1;
            HEAP8[(($509_1 + 99) | 0) >> 0] = i64toi32_i32$4;
            $515_1 = $0_1;
            i64toi32_i32$4 = 0;
            i64toi32_i32$4 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$1 | 0, 77296 | 0, i64toi32_i32$4 | 0) | 0;
            i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$5 = i64toi32_i32$4;
            i64toi32_i32$4 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$2 = (i64toi32_i32$5 + i64toi32_i32$3) | 0;
            i64toi32_i32$0 = (i64toi32_i32$1 + i64toi32_i32$4) | 0;
            if (i64toi32_i32$2 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$0 = (i64toi32_i32$0 + 1) | 0;
            }
            i64toi32_i32$5 = 0;
            i64toi32_i32$5 = __wasm_i64_urem(i64toi32_i32$2 | 0, i64toi32_i32$0 | 0, 2147193789 | 0, i64toi32_i32$5 | 0) | 0;
            i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$5;
            $11$hi = i64toi32_i32$0;
            HEAP8[(($515_1 + 100) | 0) >> 0] = i64toi32_i32$5;
            $521_1 = $0_1;
            i64toi32_i32$5 = 0;
            i64toi32_i32$5 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$0 | 0, 77296 | 0, i64toi32_i32$5 | 0) | 0;
            i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$1 = i64toi32_i32$5;
            i64toi32_i32$5 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$4 = (i64toi32_i32$1 + i64toi32_i32$3) | 0;
            i64toi32_i32$2 = (i64toi32_i32$0 + i64toi32_i32$5) | 0;
            if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$2 = (i64toi32_i32$2 + 1) | 0;
            }
            i64toi32_i32$1 = 0;
            i64toi32_i32$1 = __wasm_i64_urem(i64toi32_i32$4 | 0, i64toi32_i32$2 | 0, 2147193789 | 0, i64toi32_i32$1 | 0) | 0;
            i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$1;
            $11$hi = i64toi32_i32$2;
            HEAP8[(($521_1 + 101) | 0) >> 0] = i64toi32_i32$1;
            $527_1 = $0_1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$1 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$2 | 0, 77296 | 0, i64toi32_i32$1 | 0) | 0;
            i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$0 = i64toi32_i32$1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$5 = (i64toi32_i32$0 + i64toi32_i32$3) | 0;
            i64toi32_i32$4 = (i64toi32_i32$2 + i64toi32_i32$1) | 0;
            if (i64toi32_i32$5 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$4 = (i64toi32_i32$4 + 1) | 0;
            }
            i64toi32_i32$0 = 0;
            i64toi32_i32$0 = __wasm_i64_urem(i64toi32_i32$5 | 0, i64toi32_i32$4 | 0, 2147193789 | 0, i64toi32_i32$0 | 0) | 0;
            i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$0;
            $11$hi = i64toi32_i32$4;
            HEAP8[(($527_1 + 102) | 0) >> 0] = i64toi32_i32$0;
            $533_1 = $0_1;
            i64toi32_i32$0 = 0;
            i64toi32_i32$0 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$4 | 0, 77296 | 0, i64toi32_i32$0 | 0) | 0;
            i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$2 = i64toi32_i32$0;
            i64toi32_i32$0 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$1 = (i64toi32_i32$2 + i64toi32_i32$3) | 0;
            i64toi32_i32$5 = (i64toi32_i32$4 + i64toi32_i32$0) | 0;
            if (i64toi32_i32$1 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$5 = (i64toi32_i32$5 + 1) | 0;
            }
            i64toi32_i32$2 = 0;
            i64toi32_i32$2 = __wasm_i64_urem(i64toi32_i32$1 | 0, i64toi32_i32$5 | 0, 2147193789 | 0, i64toi32_i32$2 | 0) | 0;
            i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$2;
            $11$hi = i64toi32_i32$5;
            HEAP8[(($533_1 + 103) | 0) >> 0] = i64toi32_i32$2;
            $539_1 = $0_1;
            i64toi32_i32$2 = 0;
            i64toi32_i32$2 = __wasm_i64_mul($11_1 | 0, i64toi32_i32$5 | 0, 77296 | 0, i64toi32_i32$2 | 0) | 0;
            i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
            i64toi32_i32$4 = i64toi32_i32$2;
            i64toi32_i32$2 = 0;
            i64toi32_i32$3 = 1162;
            i64toi32_i32$0 = (i64toi32_i32$4 + i64toi32_i32$3) | 0;
            i64toi32_i32$1 = (i64toi32_i32$5 + i64toi32_i32$2) | 0;
            if (i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0) {
                i64toi32_i32$1 = (i64toi32_i32$1 + 1) | 0;
            }
            i64toi32_i32$4 = 0;
            i64toi32_i32$4 = __wasm_i64_urem(i64toi32_i32$0 | 0, i64toi32_i32$1 | 0, 2147193789 | 0, i64toi32_i32$4 | 0) | 0;
            i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
            $11_1 = i64toi32_i32$4;
            $11$hi = i64toi32_i32$1;
            HEAP8[(($539_1 + 104) | 0) >> 0] = i64toi32_i32$4;
            HEAP32[(($3_1 + 12) | 0) >> 2] = i64toi32_i32$4;
            $1_1 = 1;
            if ($5_1 >>> 0 <= 1 >>> 0) {
                break label$42;
            }
            label$49: while (1) {
                $4_1 = ($1_1 + $8_1) | 0;
                HEAP8[$4_1 >> 0] = ((HEAPU8[$4_1 >> 0] | 0) ^ (HEAPU8[(((($0_1 + 80) | 0) + (($1_1 >>> 0) % (25 >>> 0) | 0)) | 0) >> 0] | 0)) | 0;
                $1_1 = ($1_1 + 1) | 0;
                if (($1_1 | 0) != ($5_1 | 0)) {
                    continue label$49;
                }
                break label$49;
            }
        }
    }
}

module.exports = { Shuffler, Unshuffler };
