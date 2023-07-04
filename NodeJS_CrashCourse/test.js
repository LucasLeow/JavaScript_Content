const fs = require('fs');

if (fs.existsSync('./docs/blog1.txt')) {
    fs.unlink('./docs/blog1.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log("File deleted");
    })
}
