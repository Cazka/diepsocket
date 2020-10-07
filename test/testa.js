const DiepSocket = require('../');
const { Reader } = require('../src/protocol/lib/coder');

const bot = new DiepSocket('diep.io/#267633E600F835F299');
bot.on('open', () => console.log('open'));
bot.on('accept', () => {
    console.log('accept');
    bot.spawn('yes')
});
bot.on('close', (code, reason) => {
    console.log(code, reason);
});
bot.on('error', (err) => {
    console.log(err);
});
