const express = require('express');
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require('./routes/blogRoutes');

const app = express();
const dbURI = "mongodb+srv://testlucas:evilred@lucascluster.hr7yd6q.mongodb.net/node-crash-course?retryWrites=true&w=majority";

mongoose.connect(dbURI, {useNewUrlParser:true, useUnifiedTopology: true})
.then((result) => {
    console.log("Connected to db");
    app.listen(3000); // returns instance of server (can save in var for websockets)
})
.catch((err) => {console.log(err)});

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.redirect("/blogs");
});

app.get('/about', (req, res) => {
    res.render('about', {title: "About me"});
});

app.use("/blogs", blogRoutes);

app.use((req, res) => {
    res.status(404).render('error', {title:"Dynamic Error"});
})