var generator = require('generate-password');

var password = generator.generate({
	length: 10,
	numbers: true
});

// 'type of password:uEyMTw32v9'
console.log(password);