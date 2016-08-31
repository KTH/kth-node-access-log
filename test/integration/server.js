'use strict'

// this fires up an express server to see the access log in action

const express = require('express')
const accessLog = require('../../index')
const app = express()

app.use(accessLog({ useAccessLog: true }))

app.get('/', (req, res) => {
  res.type('html')
  res.send('<html><body><p><a href="/">home</a></p></body></html>')
})

app.listen(5000)

console.log('running on http://localhost:5000/')
