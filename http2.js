const fs = require('fs')
const spdy = require('spdy')
const express = require('express')
const staticPath = require('./utils/getStaticPath')()

const options = {
  key: fs.readFileSync('./certificate/private.pem'),
  cert: fs.readFileSync('./certificate/ca.cer')
}
const port = 8090

const app = express()
app.use('/', express.static(staticPath))

// https http2 server
spdy.createServer(options, app)
  .listen(port, (error) => {
    if (error) {
      console.error(error)
      return process.exit(1)
    } else {
      console.log('http2 server at https://localhost:' + port)
    }
  })
