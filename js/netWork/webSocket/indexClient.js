const socket = new webSocket('http://127.0.0.1:14008');

const stringData = 'string data for socket';

socket.send(stringData);