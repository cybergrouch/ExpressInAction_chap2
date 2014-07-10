var http = require("http");

var app = http.createServer(function(request, response) {
    var statusCode = 200;
    var responseData = "Hello, Dracula!";
    
    response.writeHead(statusCode, {
        "Content-Type": "text/plain",
        "X-Another-Fun-Header": "this is a lot of fun"
    });
    
   response.end(responseData);
});

app.listen(1337, "localhost");
console.log("Server running at http://localhost:1337");


