const spdy = require('spdy')
const express = require('express')
const util = require('./utils')

const options = util.getCerOption()
const port = 8091
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
