var http = require('http');
var url = require('url');

function start(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request received for: " + pathname);

    route(pathname);

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Hello World");
    response.end();
  }
  
  http.createServer(onRequest).listen(8888);
  console.log("Server has booted up with node problems.");
}

exports.start = start;
