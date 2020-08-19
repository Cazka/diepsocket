const DiepSocket = require('../');

const bot = new DiepSocket('diep.io/#26366323006CDEC980DD55');
bot.on('accept', () => {
    bot.spawn('test');
    setInterval(() => {
        console.log(bot.position);
    },100);
});
bot.on('close', (code, reason) => {
    console.log(code, reason);
});
bot.on('error', (err) => {
    console.log(err);
});
