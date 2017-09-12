var http = require('http');
var https = require('https');
var fs = require('fs');
var express = require('express');
var httpsOptions = {
    key: fs.readFileSync('./214257203460802.key'),
    cert: fs.readFileSync('./214257203460802.pem')
}
var app = express();
app.use("/", express.static(__dirname + '/'));

// 创建服务端
http.createServer(app).listen('8090', function() {
    console.log('启动http服务器完成');
});
https.createServer(httpsOptions, app).listen('443', function() {
    console.log('启动https服务器完成');
});