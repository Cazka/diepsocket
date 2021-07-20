const DiepSocket = require('../');

async function main() {
    const link = await DiepSocket.findServerSync('sandbox', 'amsterdam');
    console.log('connecting to', link);
    const bot = new DiepSocket(link);
    bot.on('open', () => {
        console.log('open');
    });
    bot.on('accept', () => {
        console.log('accepted', bot.link);
        bot.spawn('DiepSocket');
    });
    bot.on('message', (data) => {});
    bot.on('close', (code, reason) => {
        console.log('close', code, reason);
    });
    bot.on('error', (err) => {
        console.log('error', err);
    });
}

main();
