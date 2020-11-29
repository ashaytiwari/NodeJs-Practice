var fs = require('fs');

console.log("Giving only read permission to the user");

// Test the read permission 
fs.access('demo.txt', fs.constants.R_OK, (err) => {
    console.log('\n> Checking Permission for reading the file');
    if (err) {
        console.log('No Read Access');
    }
    else {
        console.log('File can be read');
    }
})

// Test both the read and write permissions 
fs.access('demo.txt', fs.constants.R_OK | fs.constants.W_OK, (err) => {
    console.log('\n> Checking Permission for reading and writing the file');
    if (err) {
        console.log('No Read and write Access');
    }
    else {
        console.log('File can be read and write');
    }
})

// Test the if the file exists 
fs.access('demo2.txt', fs.constants.W_OK | fs.constants.R_OK, (err) => {
    console.log('\n> Testing the file if it exists');
    if (err) {
        console.log("File doesn't exists");

        // create the file
        console.log('\n Creating the file');
        fs.writeFileSync('demo2.txt', 'Nitai Gauranga!');

        // Test if the file exists again
        fs.access('demo2.txt', fs.constants.W_OK | fs.constants.R_OK, (err) => {
            if (err) {
                console.log('File does not exists');
            }
            else {
                console.log('File exists');
            }
        })
    }

    else{
        console.log('File exists');
    }



})