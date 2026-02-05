const http = require('http');
const os = require('os');
const fs = require('fs');
const packageinfo = require("./package.json");

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    if (req.url === '/') {
        res.end("<h1>Welcome to the Home Page</h1>");
        console.log("<h1>Welcome to the Home Page</h1>");

    } else if (req.url === '/about') {
        res.end(`
            <h1>About OS</h1>
            <ul>
                <li>P: ${os.hostname()}</li>
                <li>Architecture: ${os.arch()}</li>
                <li>Total Memory: ${os.totalmem()}</li>
                <li>OS Version: ${os.version()}</li>
            </ul>
        `);

    } else if (req.url === '/example') {
        fs.readFile("example.txt", 'utf8', (err, data) => {
            if (err) {
                res.end('<h1>Error reading file</h1>');
            } else {
                res.end(`
                    <h1>Profile Content</h1>
                    <pre>${data}</pre>
                `);
            }
        });

    } else if (req.url === '/author') {
        res.end(`
            <h1>Package Info</h1>
            <p>Author: ${packageinfo.author}</p>
            `);

    } else {
        res.end("<h1>404 - Page Not Found</h1>");
    }
});

server.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});
