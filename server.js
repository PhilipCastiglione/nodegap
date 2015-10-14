var http = require('http');
var url = require('url');

function start(route, handle) {
  function onRequest(request, response) {
    var postData = "";
    var pathname = url.parse(request.url).pathname;
    console.log("Request received for: " + pathname);

    request.setEncoding("utf8");

    request.addListener("data", function(postChunk) {
      postData += postChunk;
      console.log("Received POST data chunk '" + postChunk + "'.");
    });
   
    request.addListener("end", function() {
      route(handle, pathname, response, postData);
    });

    route(handle, pathname, response, postData);
  }
  
  http.createServer(onRequest).listen(8888);
  console.log("Server has booted up with node problems.");
}

exports.start = start;
