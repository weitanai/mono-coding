const http = require('http');

const proxy = http.createServer(function (req, res){
    console.log(req, res);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // setTimeout(function(){
    //     res.end('okay');
    // }, 2000);
    res.end('hello ajax, i am hell');
})

proxy.on('connect', (req)=>{
    console.log(req)
});
const port = '14008';
proxy.listen(port, '127.0.0.1', ()=>{
    console.log('server is running', port);
})