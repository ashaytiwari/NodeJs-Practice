var fs = require('fs');

// Get the files in current diectory 
// before deletion
getFilesInDir();

fs.unlinkSync('profile.ejs');
console.log('\n Profile.ejs File Deleted');

// Get the files in current diectory 
// after deletion 
getFilesInDir();

/**
 * Function to get current filenames in Directory 
 * They have access to files present in File System Dir 
 */
function getFilesInDir() {
    console.log('\n Files present in Directory');
    let files = fs.readdirSync(__dirname);
    console.log(files);
    // files.forEach(file => {
    //     console.log(file);
    // });
}