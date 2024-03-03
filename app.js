const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// connect to mongoDB
const dbURI = 'mongodb+srv://abigailjcollins:OujfZKO68Ftyb78z@nodetuts.7qlsgem.mongodb.net/'
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));




app.use(express.static('public'));

app.use(morgan('dev'));

// register view engine
app.set('view engine', 'ejs');

// app.use((req, res, next) => {
//     console.log('in the next middleware');
//      next();
//    });
   


// app.use((req,res, next) =>{
//     console.log("new request made")
//     console.log("host", req.hostname)
//     console.log('path', req.path)
//     console.log('method', req.method);
//     next();
// })

// mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) =>{
const blog = new Blog({
    title: 'new blog',
    snippet: 'about my new blog',
    body: 'more about my new blog'
});
blog.save()
    .then((result) =>{
        res.send(result)
    })
    .catch((err) =>{
        console.log(err)
    });
});

app.get('/single-blog', (req, res) =>{
    Blog.findById()
})

app.get('/all-blogs', (req, res) =>{
    Blog.find()
    .then((result) =>{
        res.send(result);
    })
    .catch((err) =>{
        console.log(err)
    });
})



// routing
app.get('/', (req, res) =>{
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    
    res.render('index', {title: 'Home', blogs})
    // res.send('<p> Home Page </p>');
    // res.sendFile('./views/index.html', {root: __dirname});
});

app.get('/about', (req, res) =>{
    res.render('about', {title: "About"})
    // res.send('<p> About Page </p>');
    // res.sendFile('./views/about.html', {root: __dirname});
});

// redirects
app.get('/blogs/create', (req, res) =>{
    res.render('create', {title: "Create a Blog"})
        // res.redirect('/about');
});

// 404 page
app.use((req, res) =>{
    res.status(404).render('404', {title: "404"})

    // res.status(404).sendFile('./views/404.html', {root: __dirname});
});