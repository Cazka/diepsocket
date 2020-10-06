const DiepSocket = require('../');
const { Reader } = require('../src/protocol/lib/coder');

const bot = new DiepSocket('diep.io/#26764363');
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
bot.on('data', (data) => console.log(data))
bot.on('close', (code, reason) => {
    console.log(code, reason);
});
bot.on('error', (err) => {
    console.log(err);
});
