var http = require('http');

http.createServer(function (request, response) {
	res.writeHead(200, {
	  "Content-Type": "application/json",
	  "Access-Control-Allow-Origin": "*",
	  "Access-Control-Allow-Methods": "GET, OPTIONS"
	});
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello World\n');


}).listen(1985);

console.log('Server running at http://127.0.0.1:1985/');