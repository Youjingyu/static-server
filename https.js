const https = require('https')
const fs = require('fs')
const express = require('express')
const staticPath = require('./utils/getStaticPath')()

const options = {
  key: fs.readFileSync('./certificate/private.pem'),
  cert: fs.readFileSync('./certificate/ca.cer')
}
const port = 8090

const app = express()
app.use('/', express.static(staticPath))

// https server
https.createServer(options, app).listen(port, function () {
  console.log('https server at https://localhost:' + port)
})
