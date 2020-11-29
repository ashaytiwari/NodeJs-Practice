var fs = require('fs');
const path = require('path');

// Function to get current filenames in directory
fs.readdir(__dirname, (err, files) => {
    if(err){
        console.log(err);
    }
    else{
        console.log('\nCurrent Files in dir\n');
        files.forEach(file => {
            console.log(file);
        });
    }
});

// Function to get current filenames in directory with "withFileTypes" set to "true"
fs.readdir(__dirname, { withFileTypes: true }, (err, files) => {
    if(err){
        console.log(err);
    }
    else{
        console.log('\nCurrent Files in dir\n');
        files.forEach(file => {
            console.log(file);
        });
    }
});

// Function to get current filenames in directory with specific extension 
fs.readdir(__dirname, (err, files) => {
    if(err){
        console.log(err);
    }
    else{
        console.log('\n.txt Files in dir\n');
        files.forEach(file => {
            if(path.extname(file) === '.txt')
            console.log(file);
        });
    }
});

// synchronous readdir
const files = fs.readdirSync(__dirname);
console.log('Synchronous reading');
files.forEach(file => {
    console.log(file);
})