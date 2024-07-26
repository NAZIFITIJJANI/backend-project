
const express = require('express');
const mongoose = require('mongoose');
const authroute = require('./routes/authroute')
// const postroute = require('./routes/postroute')
const postRoute = require('./routes/postroute')
const commentroute = require('./routes/commentroute')
const likesroute = require('./routes/likesroute')
const app = express();


app.set('view engine', 'ejs')

const dbURI = 'mongodb://localhost:27017/tweetApp';

mongoose.connect(dbURI)
.then(()=> {
    app.listen(5000, () =>{
        console.log('app running on port 5000');
    });
})
.catch((err) => console.log('connection error:', err));

app.use(express.json());


app.get('/home', (req, res)=>{
    // res.send({message: "welcome to the api"})
    res.render('home')
});

// app.get('/users', (res, req) => {
//     // res.json({message: 'wellcome'})
//     res.send('')
// })

app.use(authroute)
app.use(postRoute)
app.use(commentroute)
app.use(likesroute)