const DiepSocket = require('../');
const { Reader } = require('../src/protocol/lib/coder');

const bot = new DiepSocket('diep.io/#265687C600887C30E699');
bot.on('open', () => console.log('open'));
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
