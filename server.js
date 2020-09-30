
const express = require('express')
const app = express()
const port = 3001

const mosca = require('mosca')

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log('Ex'))