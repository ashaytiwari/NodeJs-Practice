const express = require('express');
const app = express();

let jsonData = [
    { Book: 'Bhagwad Geeta', Author: 'Srila Prabhupad'},
    { Book: 'Beyond Birth and Death', Author: 'Srila Prabhupad'},
    { Book: 'Sri Ishopanishad', Author: 'Srila Prabhupad'},
    { Book: 'Journey Home', Author: 'Radhanth swami'},
    { Book: 'Japa Book', Author: 'Bhurinjan das'},
];

app.get('/' || '/home', (req, res) => {
    console.log('Request made by:- ' + req.url);
    res.send(__dirname + './HTTP/index.html');
});

app.get('/api', (req, res) => {
    console.log('Request made by:- ' + req.url);
    res.json(jsonData);
});

app.listen(3000, () => {
    console.log('Your server is running on port 3000');
})