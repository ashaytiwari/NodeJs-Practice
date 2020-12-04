var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
    console.log('Request made by ' + req.url);
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, { 'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if(req.url === '/contact'){
        res.writeHead(200, { 'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }
    else if(req.url === '/api'){
        var data = [
            {Books: 'Bhagwad Geeta', Author: 'Srial Prabhupad', Cost: 100},
            {Books: 'Krishna', Author: 'Srial Prabhupad', Cost: 200},
            {Books: 'Srimad Bhagwatam', Author: 'Srial Prabhupad', Cost: 1000},
        ];
        res.writeHead(200, {'Content-Type' : 'application/json'});
        res.end(JSON.stringify(data));
    }
    else{
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});

server.listen(3001, '127.0.0.1');
console.log('Your server is runing on 3001');