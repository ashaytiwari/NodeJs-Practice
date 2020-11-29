var fs = require('fs');

let data = 'Jai Shri Ram!';

fs.writeFile('demo.txt', data, (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log('File written successfully\n');
        console.log("Updated file:");
        console.log(fs.readFileSync('demo.txt', 'utf-8'));
    }
})

// Synchronous writing of file
fs.writeFileSync('demo1.txt', data);
console.log('File written successfully\n');
console.log("Updated file:");
console.log(fs.readFileSync('demo1.txt', 'utf-8'));