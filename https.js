const https = require('https')
const fs = require('fs')
const express = require('express')

const options = {
  key: fs.readFileSync('./certificate/private.pem'),
  cert: fs.readFileSync('./certificate/ca.cer')
}
const port = 8090
module.exports = function (staticPath) {
  const app = express()
  app.use('/', express.static(staticPath))

  // https server
  https.createServer(options, app).listen(port, function () {
    console.log('\x1b[32m', 'start https server at https://localhost:' + port, '\x1b[0m')
  })
}
