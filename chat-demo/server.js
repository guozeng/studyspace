var http = require('http'),
    server = http.createServer(function (req, res) {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        })
        res.write('hello world');
        res.end();
    });

server.listen(80);
console.log('server started');