const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    let path = './views/';
    switch(req.url) {
        case '/' : 
            path += 'index.html';
            break;
        case '/about': {
            path += 'about.html';
            break;
        }
        default: {
            path += 'error.html';
        }
    }

    // set response header
    res.setHeader('Content-Type', 'text/html');

    // send html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });
});

const PORT = 3000;
server.listen(PORT, 'localhost', () => {
    console.log(`Listening for requests on port ${PORT}`);
});