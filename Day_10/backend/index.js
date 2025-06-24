
const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === "/api" && req.method === "GET") {
        const userData = {
            name: "Shivam Kumar",
            age: 25,
            location: "India"
        };

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(userData));
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Not Found" }));
    }
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    // res.end({ message: 'Hello from Node.js server!' });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
