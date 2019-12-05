var http = require('http');

console.log("server is already start");

const a = 0;

http.createServer(function (req, res) {
    a ++;
    res.writeHead(300, { 'Content-Type': 'text/html' });
    res.end('Hello World! ' + a);
}).listen(8083);

console.log("server started");