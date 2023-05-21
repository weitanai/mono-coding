const express = require('express');
const WebSocket = require('ws');
const http = require('http');

const app = express();
app.use(express.static('public'));
app.get('/', function (req, res) {
  res.send('index.html');
});
app.get('/public/image', function (req, res) {
  res.sendFile( __dirname + "/" + req.url );
  console.log("Request for " + __dirname + "/" + req.url ,   " received.");
})

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws, req) {
  ws.on('message', function incoming(message) {
    ws.send('received: ' + message + '(From Server)');
  });

  ws.send('Hello Client');
});

server.listen(14009, function listening() {
  console.log('Listening on %d', server.address().port);
});