const fs = require('fs');

const path = './docs/largeFile.txt';
const writePath = './docs/newFile.txt';

const readStream = fs.createReadStream(path, { encoding: 'utf8' }); // encoding will convert buffer to string
const writeStream = fs.createWriteStream(writePath);

readStream.on('data', (buf)=>{
    console.log("-- New Buffer --");
    console.log(buf);

    writeStream.write('\n New Buffer \n');
    writeStream.write(buf);
});