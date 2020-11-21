var fs = require('fs');

fs.open('demo.txt', 'w+', function(err, f){
    if(err){
        console.log(err);
    }
    else{
        console.log(f);
        console.log("file Opened");
    }
});