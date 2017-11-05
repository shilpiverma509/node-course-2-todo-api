//load in library imports

var express = require ('express');
var bodyParser = require('body-parser');


//load in local imports
var { mongoose } = require('./db/mongoose');
var {Todo} = require('./models/todo');
var{User}= require('./models/user');

var app = express();

//configure middleware
app.use(bodyParser.json());
//The return value from this JSON method is a function and that
//is the middleware we need to give to express

//Configure our routes for rst API
//for resource creation
app.post('/todos',(req,res)=>{
    //  console.log(req.body);
    var todo = new Todo({
        text:req.body.text
    });
//save todo to local database
    todo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    });
});

app.listen(3000,()=>{
    console.log('App is up and running on port 3000');
});

