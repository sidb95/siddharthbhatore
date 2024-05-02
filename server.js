var http = require('http');
var fs = require('fs');

var hostname = 'localhost';
var port = 8080;

const server = http.createServer(function (req, res) {
    fs.readFile('./files/datafile1.json', 'utf-8', function (err, data) {
        if (err) throw err;
        res.writeHead(200, {'Content-Type' : 'text/html', "access-control-allow-origin": null});
        res.write(data);
        return res.end();
    });
});

server.listen(process.env.PORT || port, function() {
    console.log(`server running at http://${process.env.PORT || port}`);
});
