var http = require('http');
require('connect');
console.log('starting http server on port 8080');
var requestListener = function(req, res){
	console.log('Requesting: ' + req.url);
	console.log(req);
	res.writeHead(200);
	res.end("Hello World");
}

var server = connect().use(connect.logger('dev'))
			.use(connect.static('public'))
			.use(requestListener).listen(8080);