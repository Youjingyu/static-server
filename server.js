var http = require('http');
var fs = require('fs');
var express = require('express');

var app = express();
app.use("/", express.static(__dirname + '/static'));

// http server
http.createServer(app).listen('8090', function() {
    console.log('http server at http://localhost:8090');
});