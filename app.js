var http = require('http');
var https = require('https');
var fs = require('fs');
var spdy = require('spdy');
var express = require('express');

const options = {
  key: fs.readFileSync(__dirname + '/certificate/214257203460802.key'),
  cert: fs.readFileSync(__dirname + '/certificate/214257203460802.pem')
}
var port = 8090;

var app = express();
app.use("/", express.static(__dirname + '/static'));

// http server
http.createServer(app).listen(port, function() {
    console.log('http server at http://localhost:' + port);
});

// https server
// https.createServer(options, app).listen(port, function() {
//   console.log('https server at https://localhost:' + port);
// });

// https http2 server
// spdy.createServer(options, app)
//   .listen(port, (error) => {
//     if (error) {
//       console.error(error)
//       return process.exit(1)
//     } else {
//       console.log('Listening on port: ' + port + '.');
//     }
//   })