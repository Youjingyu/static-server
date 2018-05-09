const fs = require('fs')
const spdy = require('spdy')
const express = require('express')

const options = {
  key: fs.readFileSync('./certificate/private.pem'),
  cert: fs.readFileSync('./certificate/ca.cer')
}
const port = 8090
module.exports = function (staticPath) {
  const app = express()
  app.use('/', express.static(staticPath))

  // https http2 server
  spdy.createServer(options, app)
    .listen(port, (error) => {
      if (error) {
        console.error(error)
        return process.exit(1)
      } else {
        console.log('\x1b[32m', 'start http2 server at https://localhost:' + port, '\x1b[0m')
      }
    })
}
