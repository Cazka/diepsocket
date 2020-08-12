const DiepSocket = require('../');

const bot = new DiepSocket('https://diep.io/#2636635300566C28100F3A');
bot.on('open', () => {
    console.log('open');
});
bot.on('accept', () => {
    console.log('accept');
});
bot.on('close', (code, reason) => {
    console.log(code, reason);
});
bot.on('error', (err) => {
    console.log(err);
});
