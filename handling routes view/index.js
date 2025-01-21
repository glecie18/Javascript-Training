const http = require("http");
const routes = require("./routes");

http.createServer(function(request, response) {
    
    if(request.url == "/") {
        routes.root(request, response);
    } else if(request.url == "/contact") {
        routes.contact(request, response);
    } else if(request.url == "/about") {
        routes.about(request, response);
    } else {
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.end("Page not found\n");
    }

}).listen(8080, function() {
    console.log("Server is listening on port 8080...");
});
