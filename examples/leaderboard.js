const DiepSocket = require('../');

async function main() {
    const link = await DiepSocket.findServerSync('4teams', 'amsterdam');

    const bot = new DiepSocket(link);

    bot.on('accept', () => {
        console.log('link:', bot.link);
        console.log(bot.leaderboard);
        bot.close();
    });
}
main();
