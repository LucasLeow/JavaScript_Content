const Blog = require("../models/blog");

const blog_index = (req, res) => {
    Blog.find().sort({createdAt: -1}) // retrieve all data from Database
    .then((result) => {
        console.log(result);
        res.render('blogs/index', {title: "Home", blogs: result});
    })
    .catch((err) => {
        console.log(err);
    });
};

const blog_details = (req, res) => {
    const id = req.params.id; // to retrieve route params from URL
    console.log(id); // check that id retrieved correctly
    Blog.findById(id)
    .then(result => {
        res.render("blogs/details", {blog: result, title: 'Blog Details'})
    })
    .catch((err) => {
        console.log(err);
    });
};

const blog_create_get = (req, res) => {
    res.render('blogs/create', {title: "Create New Blog"});
};

const blog_create_post = (req, res) => {
    console.log(req.body); // must add router.use(express.urlencoded({extended: true})); to get form data, else undefined
    const blog = new Blog(req.body);
    blog.save() // save to database
    .then((result)=>{
        res.redirect("/");
    })
    .catch((err) => {
        console.log(err);
    });
}

const blog_delete = (req, res) => {
    const id = req.params.id;
    console.log("in delete backend",id);
    Blog.findByIdAndDelete(id)
    .then((result) => {
        res.json({ redirect: "/"});
    })
    .catch((err) => {console.log(err);});
}

module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
};