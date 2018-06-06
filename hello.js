const express = require('express')
const app = express()
const vamshi = require('./vamshi.json');

app.get('/', (req, res) => res.send(vamshi))

app.listen(3000
, () => console.log('Example app listening on port 3000!'))
