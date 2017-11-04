//Insert records


//const MongoClient = require('mongodb').MongoClient;

//ES6 destructuring
const {MongoClient,ObjectID} = require('mongodb');
//ObjectID constructor lets us make new Object ID's to uniquely identify things
// var obj = new ObjectID();


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
       return console.log("unable to connect to Mongodb server"); 
    }
    console.log("connected to Mongodb server");
    //insert new record into collection

    // db.collection('Todos').insertOne({
    //     text:'Something to do',
    //     completed:false
    // },(err,result)=>
    //     if(err){
    //         return console.log('Unable to insert todo',err);
    //     }

    //     console.log(JSON.stringify(result.ops,undefined,2));
    //     //ops attribute is going to store all our documents that
    //     //we inserted . In this case its insertone
    // });  

    // db.collection('Users').insertOne({
    //    Name:"Shilpi",
    //     Age:26,
    //     Location:"Asutin"
    // },(err,result)=>{
    //     if(err){
    //         return console.log("Unable to insert user",err);
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    // });


   db.close();
   //disconnect from server
});
