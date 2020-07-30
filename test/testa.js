const DiepSocket = require('../');

const bot = new DiepSocket('https://diep.io/#2626866600E7C914D760');

bot.on('accept', () => {
    bot.spawn('shiraz');

    setInterval(() => {
        bot.move(2051);
    }, 100);
});