var express = require('express');
var fs = require('fs');

var mbuff = fs.readFileSync('index.html');

var app = express.createServer(express.logger());
app.get('/', function(request, response) {
app.use(express.static(__dirname + '/img'));
  response.send(mbuff.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
