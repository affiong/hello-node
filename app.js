const express = require('express');

var app = express();

app.get('/', (req, res) =>{
    res.send('<h1>Hello Express!');
});
// app.listen(3000)

//  how to craete a node server

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


app.get('/contact', ( req,res) =>{
    res.send('Contact Us')
});

// app.listen(3000)


app.get('/link', (req, res) =>{
    res.send({
       createLink: 'Please create a link'
    });
});
 app.listen(3000)