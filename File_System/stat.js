const fs = require('fs');

// Getting information for a file
fs.stat('Ghibli.js', (err, stats) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Stats object for Ghibli.js');
        console.log(stats);

        // Using methods of the Stats object
        console.log('Path is file:', stats.isFile());
        console.log('Path is directory:', stats.isDirectory());
    }
});

// Getting information for a directory
fs.stat('Images', (err, stats) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Stats object for Images');
        console.log(stats);

        // Using methods of the Stats object
        console.log('Path is file:', stats.isFile());
        console.log('Path is directory:', stats.isDirectory());
    }
});