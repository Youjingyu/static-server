const http = require('http')
const express = require('express')

const port = 8090

const app = express()
app.use('/', express.static(''))

// http server
http.createServer(app).listen(port, function () {
  console.log('http server at http://localhost:' + port)
})
