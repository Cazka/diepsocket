const DiepSocket = require('../');

function join() {
    const bot = new DiepSocket('diep.io/#267607160073071D8F');
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
}
join();