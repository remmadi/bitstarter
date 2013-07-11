var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var myBuff = new Buffer(200);


fs.readFileSync('index.html', function (err, data) {
  if (err) throw err;
  data.copy(myBuff);
});

app.get('/', function(request, response) {
  response.send('This is test');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
