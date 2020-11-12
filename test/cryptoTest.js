const DiepSocket = require('../');
const Shuffler = DiepSocket.Shuffler;
const Unshuffler = DiepSocket.Unshuffler;

async function main(){
    const shuffler = new Shuffler();
    const shuffler2 = new Shuffler();
    const unshuffler = new Unshuffler();
    await shuffler.reset();
    await shuffler2.reset();
    await unshuffler.reset();
    
    //Serverbound shuffler
    let start = Date.now();
    shuffler.serverbound([10]);
    console.log(shuffler2.serverbound([10]));
    const shuffledPowRequest = [21,108,67,92,18,130,44,46,31,89,228,157,221,122,23,47,202,66,111];
    console.log(unshuffler.clientbound(shuffledPowRequest));
    console.log('time:', Date.now()-start);

    //console.log(shuffler.serverbound([10,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,0]));
}
main();