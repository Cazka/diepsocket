const DiepSocket = require('../');

async function main(){
    const link = await DiepSocket.findServerSync('sandbox', 'amsterdam');
    const bot = new DiepSocket(link);
    bot.on('accept', () => {
        console.log(bot.link);
    })
}
main();