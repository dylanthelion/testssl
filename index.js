var express = require('express');
var app = express();
var https = require('https');
var fs = require('fs');

var options = {
   key  : fs.readFileSync('server.key'),
   cert : fs.readFileSync('server.crt')
};

app.get('/', function (req, res) {
   res.send('Hello World!');
});

https.createServer(options, app).listen(8085, function () {
   console.log('Started!');
});

/*var server = app.listen(8085, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Site is running at http://%s:%s", host, port)

})*/