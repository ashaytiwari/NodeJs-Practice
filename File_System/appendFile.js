var fs = require('fs');

let data = " Hare Krishna Hare Rama";

console.log("Original File");
console.log(fs.readFileSync('demo.txt', 'utf-8'));

fs.appendFile('demo.txt', data, (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log('Appended File');
        console.log(fs.readFileSync('demo.txt', 'utf-8'));
    }
});