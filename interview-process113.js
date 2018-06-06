const request = require('request');
const express = require('express');
const app = express()
const vamshi = require('./vamshi.json');

console.log(vamshi);


request({

	url: 'https://interview-process.firebaseio.com/',
	json: true
}, (error, response, body) => {
	console.log(JSON.stringify(error, undefined, 2));
});

app.get('/', (req, res) => res.send(url))

app.listen(139.59.45.145, () => console.log('Example app listening on port 139.59.45.145!'))
