var fs = require('fs');

console.log("\nCurrent files in the directory");
getCurrentFiles();

fs.copyFile('demo.txt', 'copy.txt', (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log('\nFiles in the dir after copy function');
        getCurrentFiles();
    }
});

// Function to get the current files in the directory
function getCurrentFiles(){
   let files = fs.readdirSync(__dirname);
    files.forEach(file => {
        console.log(file);
    })
}