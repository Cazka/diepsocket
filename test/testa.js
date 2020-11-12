const DiepSocket = require('../');

function join() {
    const bot = new DiepSocket('diep.io/#26A657B60045E069FE');
    bot.on('open', () => console.log('open'));
    bot.on('accept', () => {
        console.log('accept');
        bot.spawn('DiepSocket');
        setInterval(() => {
            bot.moveTo({ x: 11150, y: 11150});
            
        }, 100);

        bot.on('dead', () => {
            bot.spawn();
        });
        bot.on('latency', (ping) => console.log(ping))
    });
    bot.on('close', (code, reason) => {
        console.log('closed', code, reason);
    });
    bot.on('error', (err) => {
        console.log('err', err);
    });
    //bot.on('message', (data) => console.log(data));
}
join();
//join();