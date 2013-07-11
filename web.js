var express = require('express');
var app = express.createServer(express.logger());
var fs = require('fs');

var mbuff = fs.readFileSync('index.html');

app.get('/', function(request, response) {
  response.send(mbuff.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
