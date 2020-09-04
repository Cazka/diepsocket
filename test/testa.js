const DiepSocket = require('../');
const { Reader } = require('../src/protocol/lib/coder');

const bot = new DiepSocket('diep.io/#2646E69700DBE27333');
bot.on('accept', () => {
    bot.spawn('test');
    setInterval(() => {
        bot.moveTo({ x: 0, y: 0 });
    }, 100);
    bot.on('dead', () => {
        console.log('dead');
    });
});
bot.on('close', (code, reason) => {
    console.log(code, reason);
});
bot.on('error', (err) => {
    console.log(err);
});

/**
 * checks whether the entity id gets deleted or not.
 * @param {Parser} parser the parser
 * @param {Array} id the entity id
 * @returns {Boolean} if entity id gets deleted or not
 */
function isDeleted(parser, id) {
    parser.at = 0;
    //packet header
    parser.vu();
    // update id
    parser.vu();
    // loop through deletions
    for (var i = 0, n = parser.vu(); i < n; i++) {
        const deleted = [].concat(parser.vu()).concat(parser.vu());

        //compare
        if (id.length !== deleted.length) continue;
        let isEqual = true;
        for (var j = 0; j < id.length; j++) {
            if (id[j] !== deleted[j]) {
                isEqual = false;
                break;
            }
        }
        if (isEqual) return true;
    }
    return false;
}
