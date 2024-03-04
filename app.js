const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();

// register view engine

// connect to mongoDB
const dbURI = 'mongodb+srv://abigailjcollins:OujfZKO68Ftyb78z@nodetuts.7qlsgem.mongodb.net/'
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));



    app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// register view engine

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
// app.get('/add-blog', (req, res) =>{
// const blog = new Blog({
//     title: 'new blog 2',
//     snippet: 'about my new blog',
//     body: 'more about my new blog'
// });
// blog.save()
//     .then((result) =>{
//         res.send(result)
//     })
//     .catch((err) =>{
//         console.log(err)
//     });
// });

// app.get('/single-blog', (req, res) =>{
//     Blog.findById("65e5df0a872f9a466b4196cb")
//     .then((result) =>{
//         res.send(result)
//     })
//     .catch((err) =>{
//         console.log(err)
//     });
// })

// app.get('/all-blogs', (req, res) =>{
//     Blog.find()
//     .then((result) =>{
//         res.send(result);
//     })
//     .catch((err) =>{
//         console.log(err)
//     });
// })



// routing
app.get('/', (req, res) =>{
   res.redirect('/blogs')
    // res.send('<p> Home Page </p>');
    // res.sendFile('./views/index.html', {root: __dirname});
});

app.get('/about', (req, res) =>{
    res.render('about', {title: "About"})
    // res.send('<p> About Page </p>');
    // res.sendFile('./views/about.html', {root: __dirname});
});


// blog routes
app.use("/blogs", blogRoutes)


// redirects


// 404 page
app.use((req, res) =>{
    res.status(404).render('404', {title: "404"})

    // res.status(404).sendFile('./views/404.html', {root: __dirname});
});