const express = require('express');

const app = express();

app.listen(3000); // returns instance of server (can save in var for websockets)

app.get('/', (req, res) => {
    res.sendFile('./views/index.html', {root: 'h:/SelfLearning/BackEnd/JavaScript/NodeJS_CrashCourse'});
});

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', {root: 'h:/SelfLearning/BackEnd/JavaScript/NodeJS_CrashCourse'});
});

app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

app.use((req, res) => {
    res.sendFile('./views/error.html', {root: 'h:/SelfLearning/BackEnd/JavaScript/NodeJS_CrashCourse'});
})