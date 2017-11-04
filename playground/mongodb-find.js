//fetch records from database

//ES6 destructuring
const { MongoClient, ObjectID } = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("unable to connect to Mongodb server");
    }
    console.log("connected to Mongodb server");

    //access the collection
    //db.collection('Todos').find({ completed: true }).toArray().then((docs) => {

    // db.collection('Todos').find({
    //     _id: new ObjectID('59fcd63778368c16644dc9e3')
    // }).toArray() .then((docs)=>{
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log("unable to fetch todos",err);
    // });
  //toArray()return a promise


//cursor
//   db.collection('Todos').count().then((count)=>{
//         console.log(`Todos count: ${count}`);
//     },(err)=>{
//         console.log("unable to fetch todos",err);
//   });

  db.collection('Users').find({Name:"Shilpi"}).toArray().then((docs)=>{
      console.log(JSON.stringify(docs,undefined,2));
  }, (err) => {
      console.log("unable to fetch Users", err);
  }); 

   // db.close();
});
