const express = require('express');

const app = express();
app.set('view engine', 'ejs');

app.listen(3000); // returns instance of server (can save in var for websockets)

app.get('/', (req, res) => {
    const blogs = [
        {title: "Yoshi find eggs", snippet: "Reprehenderit aliquip mollit laboris culpa ex nisi."},
        {title: "Mario find peach", snippet: "Non occaecat nulla occaecat dolore proident velit esse consectetur laborum nisi reprehenderit dolor anim ut."},
        {title: "How to defeat Bowser", snippet:"Dolor ex est enim eiusmod eiusmod laborum non ipsum laborum esse sint in."}
    ];
    res.render('index', {title:"Dynamic Home", blogs});
});

app.get('/about', (req, res) => {
    res.render('about', {title: "Dynamic About"});
});

app.get('/blogs/create', (req, res)=>{
    res.render('create', {title: "Dynamic Create"});
});

app.use((req, res) => {
    res.status(404).render('error', {title:"Dynamic Error"});
})