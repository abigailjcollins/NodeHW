const express = require('express');
const morgan = require('morgan')

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');





// listen for requests
app.listen(3000);

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