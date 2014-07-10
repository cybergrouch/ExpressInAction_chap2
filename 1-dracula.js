var http = require("http");

var app = http.createServer(function(request, response) {
   response.writeHead(200, {
       "Content-Type": "text/plain"
   });
   response.end("Hello, Dracula!");
});

app.listen(1337, "localhost");
console.log("Server running at http://localhost:1337");


