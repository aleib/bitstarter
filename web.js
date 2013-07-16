
var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());


function getString(){
		var buffer = fs.readFile("index.html");
		return buffer.toString("utf-8");
};

app.get('/', function(request, response) {
	var strng = getString();
  	response.send(strng);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
