var express = require("express");

var http = require("http");

var app = express();

app.set('port', 1337);

app.use(function(request, response, next) {
    console.log("In comes a " + request.method + " to " + request.url);
    next();
});

app.use(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("Hello, Dracula!"); 
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});