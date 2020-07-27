const DiepSocket = require('../');
DiepSocket.findServer('','', (link) => {
    console.log('link', link)
    const socket = new DiepSocket(link);
    socket.on('open', () => console.log('open'));
    socket.on('error', (err) => console.log(err));
    socket.on('message', (data) => console.log('message'))
    socket.on('close', () => console.log('closed'));
    socket.on('accept', () => console.log('accept'))
});