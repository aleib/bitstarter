
var express = require('express');

var app = express.createServer(express.logger());
var fileIndex = fs.readFile('index.html');
var buffer = new Buffer(fs.readFile('index.html'),"utf-8");

app.get('/', function(request, response) {
  response.send(buffer.toString('utf-8')
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
