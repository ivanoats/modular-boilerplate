'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var staticDir = __dirname;
staticDir += process.env.NODE_ENV === 'production' ? '/dist' : '/build';
app.use(express.static(staticDir));

var server = app.listen(port, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Express static server serving from %s and listening at http://%s:%s', staticDir, host, port);

});
