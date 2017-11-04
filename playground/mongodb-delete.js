//delete records from database

//ES6 destructuring
const { MongoClient, ObjectID } = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("unable to connect to Mongodb server");
    }
    console.log("connected to Mongodb server");
    //deleteMany
    // db.collection('Todos').deleteMany({text:'eat lunch'}).then((result)=>{
    //    console.log(result);
    // });
    
    //deleteOne
    // db.collection('Todos').deleteOne({ text: 'eat lunch' }).then((result)=>{
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({ completed:false }).then((result)=>{
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({Name:"Shilpi"}).then((result)=>{
    //     console.log(result);
    // }); 

 


    // db.close();
});
