const https = require('https')
const fs = require('fs')
const express = require('express')

const options = {
  key: fs.readFileSync('./certificate/214257203460802.key'),
  cert: fs.readFileSync('./certificate/214257203460802.pem')
}
const port = 8090

const app = express()
app.use('/', express.static(''))

// https server
https.createServer(options, app).listen(port, function () {
  console.log('https server at https://localhost:' + port)
})
