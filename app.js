var http = import('http');
var fs = import('fs');

port = 8080

fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    const server = http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    });
});

server.listen(process.env.PORT || port, function() {
    console.log(`server running at http://${process.env.PORT || port}`);
});