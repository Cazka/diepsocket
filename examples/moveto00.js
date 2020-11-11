//const DiepSocket = require('diepsocket');
const DiepSocket = require('../');

const bot = new DiepSocket('diep.io/#26A6E6430008896C104DF5');
// always use the accept event for your bot. Don't use the open event. See documentation for open event.
bot.on('accept', () => {
    console.log('accept');
    // spawn with the name DiepSocket
    bot.spawn('DiepSocket');
    // add an EventListener to the dead event
    bot.on('dead', () => {
        console.log('bot died');
        bot.spawn('DiepSocket');
    });

    // setInterval to perform an action every 30 ms
    // you can increase the timeinterval, but you will get laggy movement.
    // you should not decrease it as the real game client also sends this packet every 30-35 ms
    setInterval(() => {
        // send a movement packet that will move to the middle of the map
        bot.moveTo({ x: 0, y: 0 });
    }, 30);
});
// eventlistener for the close event
bot.on('close', (code, reason) => {
    console.log('closed', code, reason);
});
// eventlistener for the error event
bot.on('error', (err) => {
    console.log('err', err);
});
