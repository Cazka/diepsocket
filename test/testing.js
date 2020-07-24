const DiepSocket = require('./diepsocket')
const socket = new DiepSocket('diep.io/#261697370003304583');

socket.on('open', () => console.log('open'));
socket.on('accept', () => console.log('accepted'))
socket.on('error', (err) => console.log(err));
socket.on('close', () => console.log('closed'));
socket.on('message', (data) => console.log(data));