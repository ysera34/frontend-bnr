var http = require('http');
var fs = require('fs');
// var path = require('path');
var extract = require('./path');

var handleError = function(err, res) {
  res.writeHead(404);
  res.end();
};

var server = http.createServer(function(req, res) {
  console.log('Responding to a request.');
  // var url = req.url;
  //
  // var fileName = 'index.html';
  // if (url.length > 1) {
  //   fileName = url.substring(1);
  // }
  // console.log(fileName);
  // var filePath = path.resolve(__dirname, 'app', fileName);
  var filePath = extract(req.url);

  // res.end('<h1>Hello, World</h1>');
  fs.readFile(/* 'app/index.html' */ filePath, function(err, data) {
    if (err) {
      handleError(err, res);
      return;
    } else {
      res.end(data);
    }
  });
});
server.listen(3000);
