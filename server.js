var http = require('http');
var fs = require('fs');

var send404 = function(response){
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write('Error: Page not found');
    response.end();
};

var onRequest = function (request, response) {

    if (request.method === 'GET' && request.url == '/') {
        response.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('./index.html').pipe(response);
    } else {
        send404(response);
    }
};

http.createServer(onRequest).listen(8080);
console.log('listening to port 8080...');