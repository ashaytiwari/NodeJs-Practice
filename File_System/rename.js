const fs = require('fs');

// List all the filenames before renaming 
getCurrentFilenames(); 

fs.rename('Ghibli.js', 'index.js', (err) => {
    console.log('File Renamed');

  // List all the filenames after renaming
    getCurrentFilenames();
});

// Function to get current filenames 
// in directory 
function getCurrentFilenames() { 
    console.log("Current filenames:"); 
    fs.readdirSync(__dirname).forEach(file => { 
      console.log(file); 
    }); 
  }