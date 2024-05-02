var fs = require('fs');

var hostname = 'localhost';
const port = 8080;
let dataOne = {}
const server = http.createServer(function (req, res) {
    fs.readFile('./static/files/datafile1.json', 'utf-8', function (err, data) {
        if (err) throw err;
        res.writeHead(200, {'Content-Type' : 'html', "access-control-allow-origin": null});
        dataOne = data
        return res.end();
    });
});

server.listen(process.env.PORT || port, function() {
    console.log(`server running at http://${process.env.PORT || port}`);
});

