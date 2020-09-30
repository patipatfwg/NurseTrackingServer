
const express = require('express')
const app = express()
const port = 8888

const mosca = require('mosca')

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log('Ex'))