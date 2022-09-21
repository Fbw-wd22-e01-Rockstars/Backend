const http = require("http");

const server = http.createServer(function (req, res) {
    res.writeHead(200, {"Content-type":"text/plain"});
    res.end("Backend!");
})

server.listen(8000, function(){
    console.log("Server is running on port 1000");
})