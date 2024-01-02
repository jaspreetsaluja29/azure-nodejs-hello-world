const http = require('http');

const server = http.createServer((request,response) => {
    response.writehead(200,{"content-Type": "text/plain"});
    response.end("Hello World");
});

const port = process.env.port || 1337;
server.listen(port);

console.log("server running at http://localhost:%d", port);
