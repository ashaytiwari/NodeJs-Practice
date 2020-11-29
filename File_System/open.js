var fs = require('fs');

const file = './demo.txt';

fs.open(file, 'r', function(err, fd){
    if(err){
        console.log(err);
    }
    else{
        console.log(fd);
    }
});