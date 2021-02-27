const http = require('http');
const path = require('path');
const fs = require('fs').promises;
const users = require('./../data/users.json');
const host = 'localhost';
const port = 8000;

const mrp = (req, res) => {
    fs.readFile('../src/index.html')
        .then(content => {
            res.setHeader('Content-Type', 'text/html');
            res.writeHead(200);
            res.end(content);
        })
        .catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
};

const server = http.createServer(mrp);
server.listen(port, host, () => {
    console.log(`MRP Server is running on http://${host}:${port}`);
});