// Example 1-9. HTTP request in Node.js

var http = require('http');

/*
http.get('https://www.google.com', function (res) {
	console.log('got a response');
});
*/

http.get('https://api.myjson.com/bins/skw8e', function (res) {
	console.log('got a response');
});
