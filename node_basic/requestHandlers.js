var querystring = require("querystring");

function start(response, postData) {
  console.log("Request handler 'start' was called.");

  var body = '<html>' +
    '<head>' +
    '<meta http-equiv="Content-Type" content="text/html; ' +
    'charset=UTF-8" />' +
    '</head>' +
    '<body>' +
    '<form action="/upload" method="post">' +
    '<textarea name="text" rows="20" cols="60"></textarea>' +
    '<input type="submit" value="Submit text" />' +
    '</form>' +
    '</body>' +
    '</html>';

  response.writeHead(200, {"Content-Type": "text/html"});
  //response.write(body);
  response.end(body);
  //response.end();
}

function upload(response, postData) {
  console.log("Request handler 'upload' was called.");
  console.log("postdata is " + postData);
  console.log("querystring parsed postdata is " + querystring.parse(postData));
  console.log("jsoned thingo " + JSON.stringify(querystring.parse(postData)));
  var content = querystring.parse(postData).text;
  console.log("querystring parsed postdata .text is " + querystring.parse(postData).text);
  response.writeHead(200, {"Content-Type": "text/plain"});
  //response.write("In upload, and you sent through " + querystring.parse(postData).text);
  response.end("In upload, and you sent through " + content);
  //response.end();
}

exports.start = start;
exports.upload = upload;
