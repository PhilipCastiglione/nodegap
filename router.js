function route(handle, pathname, response, postData) {
  console.log("This function will route the request for " + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response, postData);
  } else {
    console.log("No handler for " + pathname);
    response.writeHead(404, {"Content-Type": "text/plain"});
    //response.write("Sorry brosef, no such path " + pathname + ". 404.");
    response.end("Sorry brosef, no such path " + pathname + ". 404.");
    //response.end();
  }
}

exports.route = route;
