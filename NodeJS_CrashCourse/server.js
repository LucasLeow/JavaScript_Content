const http = require('http');

const server = http.createServer((req, res) => {
    console.log("request made");
});

const PORT = 3000;
server.listen(PORT, 'localhost', () => {
    console.log(`Listening for requests on port ${PORT}`);
});