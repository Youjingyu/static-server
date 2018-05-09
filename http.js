const http = require('http')
const express = require('express')

const port = 8090
module.exports = function (staticPath) {
  const app = express()
  app.use('/', express.static(staticPath))

  // http server
  http.createServer(app).listen(port, function () {
    console.log('\x1b[32m', 'start http server at http://localhost:' + port, '\x1b[0m')
  })
}
