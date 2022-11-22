const webSocketServer = require('websocket').server;
const http = require('http');
const webSocketServerPort = 9876;

// Start the http server and the websocket server
const server = http.createServer();
server.listen(webSocketServerPort);

server.on('connection', (stream) => {
    console.log('someone connected!');
    // console.log(stream)
});
server.on('message', (message) => {
    console.log('websoket message', message)
});

const wsServer = new webSocketServer({
    httpServer: server
});