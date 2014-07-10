var http = require("http");

var fs = require("fs");

http.createServer(function(req, res) {
    var indexPath = __dirname + "/index.html";
    
    if(req.url === "/") {
        fs.readFile(indexPath, function(err, data) {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/html" });
                res.end("<html><body>Error 500</body></html>");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<html><body>Error 404</body></html>");
    }
}).listen(1337, "localhost");
console.log("Server running at http://localhost:1337");


