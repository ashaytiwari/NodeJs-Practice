var http = require('http');

var server = http.createServer((req, res) => {
    console.log('Request made by' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hare Krishna Hare Rama');
});

server.listen(3001, '127.0.0.1');
console.log('Your server is running on port 3001');