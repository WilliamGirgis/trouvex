const express = require('express');
const path = require('path');
const userRoutes = require('./server/routes/user')
//const fileRoutes = require('./server/routes/file')
const mailRoutes = require('./server/routes/mail')
const objectRoutes = require('./server/routes/object')
//const publicationRoutes = require('./server/routes/publication')
const http = require('http');
const app = express();
const port = process.env.PORT || 4200;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'dist/portfolio'))); // Production directory

//app.use('/publication',publicationRoutes);
//app.use('/file',fileRoutes);
app.use('/user',userRoutes);
app.use('/mail',mailRoutes);
app.use('/object',objectRoutes);

app.get('*',(req,res) => { //Catch all others routes request and return  the index
    res.sendFile(path.join(__dirname,'dist/portfolio/index.html'))
})

app.listen(port,(req,res) =>{
    console.log("listening on port:" + port)
})




