var fs = require('fs');

fs.exists('copy.txt', (exists) => {
    console.log(exists ? 'File found' : 'File not found');
})