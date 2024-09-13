const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Check if the request is for the HTML file
    if (req.url === '/' || req.url === '/code.html') {
        const filePath = path.join(__dirname, 'index.html');

        // Read the HTML file
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        // Handle other requests (if any)
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const PORT = 3000; // You can change the port number if needed

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
