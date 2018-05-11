const https = require('https')
const express = require('express')
const util = require('./utils')

const options = util.getCerOption()
const port = 8091
module.exports = function (staticPath) {
  const app = express()
  app.use('/', express.static(staticPath))

  // https server
  https.createServer(options, app).listen(port, function () {
    console.log('\x1b[32m', 'start https server at https://localhost:' + port, '\x1b[0m')
  })
}
