const concat = require('concat-stream');

process.stdin.pipe(concat((content) => {
	console.log(content.toString().split('').reverse().join(''));
}));
