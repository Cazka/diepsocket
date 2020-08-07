const DiepSocket = require('../');

DiepSocket.findServer('sandbox', 'amsterdam',(link)=> {
    console.log(link)
    const socket = new DiepSocket(link);
    socket.on('accept', () => {
        console.log('ready');
    });
});