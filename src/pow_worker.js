const { parentPort } = require('worker_threads');
const crypto = require('crypto');

parentPort.on('message', ({ prefix, difficulty }) => {
    parentPort.postMessage(solve(prefix, difficulty));
});

function solve(prefix, difficulty) {
    for (var i = 0; ; ++i) {
        const r = i.toString().padStart(16, 0);
        if (solvesDifficulty(sha1(prefix + r + prefix), difficulty)) return r;
    }
}
function solvesDifficulty(str, difficulty) {
    for (var i = 0; i < ~~(difficulty / 4); ++i) {
        if (str[i] != '0') return false;
    }
    for (var i = 4 * ~~(difficulty / 4); i < difficulty; ++i) {
        if (!(nibbleToNumber[str[~~(i / 4)]] & (1 << (i & 3)))) return false;
    }
    return true;
}
const nibbleToNumber = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
};
function sha1(str) {
    return crypto.createHash('sha1').update(str).digest('hex');
}
