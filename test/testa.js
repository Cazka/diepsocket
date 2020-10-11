const DiepSocket = require('../');
const { Reader } = require('../src/protocol/lib/coder');

const bot = new DiepSocket('diep.io/#267656570093291138EC');
bot.on('open', () => console.log('open'));
bot.on('accept', () => {
    console.log('accept');
    bot.spawn('yes');

    setInterval(() => {
        bot.moveTo({ x: 0, y: 0 });
    }, 20);

    bot.on('dead', () => {
        bot.spawn();
    });
});
bot.on('close', (code, reason) => {
    console.log(code, reason);
});
bot.on('error', (err) => {
    console.log(err);
});
