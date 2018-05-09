const fs = require('fs')
const spdy = require('spdy')
const express = require('express')

const options = {
  key: fs.readFileSync('./certificate/214257203460802.key'),
  cert: fs.readFileSync('./certificate/214257203460802.pem')
}
const port = 8090

const app = express()
app.use('/', express.static(''))

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
