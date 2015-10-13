function route(handle, pathname) {
  console.log("This function will route the request for " + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname]();
  } else {
    console.log("No handler for " + pathname + ", so 404 i guess");
  }
}

exports.route = route;
