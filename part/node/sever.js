var http = require("http");
http.createServer(function(request, response){
    response.writeHead(200,{'Content-type':'text/plain'});
    response.end('hello 123');
}).listen(8887);
console.log('Server running at http://127.0.0.1:8887/')