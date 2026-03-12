const http = require("http");

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Welcome to the Node.js Tutorial!\n");
    res.end("Visited: HOME PAGE");
    res.end("Visited: ABOUT OS");
    res.end("Visited: PRO-FILE PAGE");
    res.end("File Content:");
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
    console.log("Visited: HOME PAGE");
    console.log("Visited: ABOUT OS");
    console.log("Visited: PRO-FILE PAGE");
    console.log("File Content:");

});