var fs = require('fs');

let writeStream = fs.createWriteStream('demo.txt');

writeStream.write('Hare Krishna');

readStream = fs.createReadStream('demo.txt');
readStream.on('data', (chunks) => {
    console.log(chunks.toString());
})
