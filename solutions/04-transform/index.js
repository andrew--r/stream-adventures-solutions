const through = require('through2');

function write(buffer, encoding, next) {
	this.push(buffer.toString().toUpperCase());
	next();
}

const streamToUpperCase = through(write);

process.stdin.pipe(streamToUpperCase).pipe(process.stdout);
