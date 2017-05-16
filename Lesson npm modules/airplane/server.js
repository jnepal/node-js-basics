var http = require('http');
var express = require('express');

var app = express();
app.get('/', function(req, res){
	res.end("Hello This is first Node Application");
});

var server = http.createServer(app);
server.listen(3000,'localhost');