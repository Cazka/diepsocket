const { parentPort } = require('worker_threads');
const crypto = require('crypto');

parentPort.on('message', ({prefix, difficulty}) => {
    parentPort.postMessage(solve(prefix, difficulty));
});

function solve(prefix, difficulty) {
    for (; ; ) {
        const r = generateRandomString(16);
        const str = prefix + r + prefix;
        const sha1 = crypto.createHash('sha1').update(str).digest('hex');
        if (solvesDifficulty(sha1, difficulty))
            return r;
    }
}
function generateRandomString(len) {
    var str = '';
    var CHARS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (var i = 0; i < len; ++i) str += CHARS[~~(Math.random() * CHARS.length)];
    return str;
}
function solvesDifficulty(str, difficulty) {
    for (let i = 0; i < ~~(difficulty / 4); i++) {
        if (str[i] != '0') return false;
    }
    for (let i = 4 * ~~(difficulty / 4); i < difficulty; i++) {
        const nibble = str[~~(i / 4)];
        const num = nibbleToNumber(nibble);
        if (!(num & (1 << (i & 3)))) {
            return false;
        }
    }
    return true;
}
function nibbleToNumber(ch) {
    switch (ch.toLowerCase()) {
        case '0':
            return 0;
        case '1':
            return 1;
        case '2':
            return 2;
        case '3':
            return 3;
        case '4':
            return 4;
        case '5':
            return 5;
        case '6':
            return 6;
        case '7':
            return 7;
        case '8':
            return 8;
        case '9':
            return 9;
        case 'a':
            return 10;
        case 'b':
            return 11;
        case 'c':
            return 12;
        case 'd':
            return 13;
        case 'e':
            return 14;
        case 'f':
            return 15;
        default:
            return 0;
    }
}
