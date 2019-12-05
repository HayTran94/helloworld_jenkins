var http = require('http');

console.log("server is already start");

http.createServer(function (req, res) {
    res.writeHead(300, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8083);

console.log("server started");