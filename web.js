
var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var buffr = fs.readFileSync('index.html','utf-8');
var strng = buffr.toString();

app.get('/', function(request, response) {
  	response.send(strng);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
