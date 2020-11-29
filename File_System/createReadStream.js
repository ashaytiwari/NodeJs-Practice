var fs = require('fs');

reader = fs.createReadStream('demo.txt');

reader.on('data', function(chunk){
    console.log(chunk.toString());
})