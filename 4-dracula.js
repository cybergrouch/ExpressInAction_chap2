var http = require("http");

var app = http.createServer(function(request, response) {
    setTimeout(function() {
        response.writeHead(200, {
            "Content-Type": "text/plain"
        });
        response.end("Hello, Dracula! Thanks for waiting.");        
    }, 2000);
});

app.listen(1337, "localhost");
console.log("Server running at http://localhost:1337");


