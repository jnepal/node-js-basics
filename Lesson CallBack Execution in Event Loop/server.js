var http = require('http');

var handleResponse = function(req, res){
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.end('Welcome to Node Essential Training');
};

var server = http.createServer(handleResponse);
server.listen(3000, 'localhost');