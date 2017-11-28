const net = require('net');

const server = net.createServer(function (socket) {
    console.log(`Connected: ${socket.remoteAddress} on ${socket.remotePort} port`);

    socket.on('data', function (data) {
        console.log('1', data);
        socket.write(String(data).toUpperCase());
    });
    socket.on('close', function () {
        console.log('Connection close');
    });
});

server.listen(8000);
console.log('Connected on port: 8000');
