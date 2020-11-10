const DiepSocket = require('../');

function join() {
    const bot = new DiepSocket('diep.io/#26A6375600E3F266F2');
    bot.on('open', () => console.log('open'));
    bot.on('accept', () => {
        console.log('accept');
        bot.spawn('akzaC');
        setInterval(() => {
            bot.move();
        }, 1000);
        /*setInterval(() => {
            bot.moveTo({ x: 0, y: 0 });
        }, 20);

        bot.on('dead', () => {
            bot.spawn();
        });*/
    });
    bot.on('close', (code, reason) => {
        console.log('closed', code, reason);
    });
    bot.on('error', (err) => {
        console.log('err', err);
    });
}
join();