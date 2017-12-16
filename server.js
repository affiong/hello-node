const express = require('express');
const hbs = require('hbs');
const fs = require ('fs');
const port = process.env.PORT|| 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials')

hbs.registerHelper('screamIt', (text) =>{
    return text.toUpperCase();
});

app.use((req, res, next) =>{
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;

    console.log(log);
    fs.appendFile('server.log', log + '\n');
    next();
});


app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/practice'));// getting file from another directry

app.get('/', (req, res) =>{
    res.render('home.hbs',{
        pageTitle: 'Home page',
        welcomeMessage: 'Welcome to my website',
        currentYear: new Date().getFullYear()
    });
});

app.get('/about', (req, res) =>{
    res.render('about.hbs',{
        pageTitle: 'About page',
        welcomeMessage: 'Show time',
        currentYear: new Date().getFullYear()
    });
});



app.get('/about', (req, res) =>{
     res.send('About page'); 
});

// app.listen(3000)

//how to crate a new page//


app.get('/bad', (req, res) =>{
    res.send({
        errorMessage: 'Unale to handle request'
    });
});
// app.listen(3000)



app.listen(port, ()=>{
    console.log('listening to port 3000')
});

// to kow what port we are running on




 