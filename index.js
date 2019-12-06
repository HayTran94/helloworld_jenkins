var http = require('http');

console.log("server is already start");

let a = 0;

http.createServer(function (req, res) {
    a++;
    res.writeHead(300, { 'Content-Type': 'text/html' });
    res.end('Hello World! ' + a);
    console.log("a=", a);
}).listen(8083);

console.log("server started");