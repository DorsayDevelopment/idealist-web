var express = require('express');
var http = require('http');
var config = require('./config/config');
var app = express();

app.use(express.static(__dirname + config.buildDir));

var port = config.port;
http.createServer(app).listen(port, function() {
  console.log("server listening on port " + port);
});