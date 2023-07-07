const express = require('express');
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

const app = express();
const dbURI = "mongodb+srv://testlucas:evilred@lucascluster.hr7yd6q.mongodb.net/node-crash-course?retryWrites=true&w=majority";

mongoose.connect(dbURI, {useNewUrlParser:true, useUnifiedTopology: true})
.then((result) => {
    console.log("Connected to db");
    app.listen(3000); // returns instance of server (can save in var for websockets)
})
.catch((err) => {console.log(err)});

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.static('public'));

app.get('/', (req, res) => {
    Blog.find() // retrieve all data from Database
    .then((result) => {
        console.log(result);
        res.render('index', {title: "Home", blogs: result});
    })
    .catch((err) => {
        console.log(err);
    });
});

app.get('/about', (req, res) => {
    res.render('about', {title: "About me"});
});

app.get('/blogs/create', (req, res)=>{
    res.render('create', {title: "Create New Blog"});
});

app.use((req, res) => {
    res.status(404).render('error', {title:"Dynamic Error"});
})