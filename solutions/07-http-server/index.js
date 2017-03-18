const http = require('http');
const through = require('through2');

function handleRequest(request, response) {
	if (request.method === 'POST') {
		request
			.pipe(through(requestBodyToUpperCase))
			.pipe(response);
	} else {
		res.end('');
	}
}

function requestBodyToUpperCase(buffer, _, next) {
	this.push(buffer.toString().toUpperCase());
	next();
}

const server = http.createServer(handleRequest);

server.listen(process.argv[2]);
