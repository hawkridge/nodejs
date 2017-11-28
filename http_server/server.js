const http = require('http'),
    server = http.createServer(function (req, res) {
        console.log(req.url);
        res.writeHead(200, {
            'Content-Type': 'text/plain',
            'test-header': 4000
        });
        res.write('Hello HTTP');
        res.end();
    });

server.listen(8000);
console.log('Connected on port: 8000');


