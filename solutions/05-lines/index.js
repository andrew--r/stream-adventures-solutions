const through = require('through2');
const split = require('split');

const isEven = (n) => n % 2 === 0;
let currentLine = 0;

process.stdin
	.pipe(split())
	.pipe(through(function (buffer, encoding, next) {
		const line = buffer.toString();

		currentLine++;
		this.push(isEven(currentLine) ? line.toUpperCase() : line.toLowerCase());
		this.push('\n');
		next();
	}))
	.pipe(process.stdout);
