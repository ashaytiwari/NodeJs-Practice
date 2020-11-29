var fs = require('fs');

console.log('Original file content');
console.log(fs.readFileSync('copy.txt', 'utf-8'));

fs.link('copy.txt', 'hardLink.txt', (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log('\nHard Link created');
        console.log('Content of the hard link: ', fs.readFileSync('hardLink.txt', 'utf-8'));

        console.log('\nDeleting original file\n');
        fs.unlinkSync('copy.txt');

        console.log('Content of the hard link: ', fs.readFileSync('hardLink.txt', 'utf-8'));
    }
})