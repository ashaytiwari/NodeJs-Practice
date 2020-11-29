var fs = require('fs');

fs.readFile('demo.txt', 'utf-8', function(err, data){
    if(err){
        console.log(err);
    }
    else{
        console.log('Asynchronous Reading:-', data);
    }
});
console.log('Reading Demo.txt');

// Synchronous reading of file
let data = fs.readFileSync('demo.txt', 'utf-8');
console.log('Synchronous Reading:-', data);