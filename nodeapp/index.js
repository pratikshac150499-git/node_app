const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("HELLO INDIA!");
});

module.exports = server;

if (require.main === module) {
    server.listen(3000, () => {
        console.log("Server running on port 3000");
    });
}
