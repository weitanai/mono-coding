const net = require('net');
const server = net.createServer((socket) =>{
    console.log(socket);
    socket.on('connect', function(){
        console.log('connecting----');
    })
    // socket.send('hello world');
})
const socketPort = 14009;
server.listen(socketPort);