var http = require('http');
var port = 3000;
var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Welcome to sandbox');
});

server.listen(port, function () {
  console.log('Example app listening on port '+port+'!');
});
