//delete records from database

//ES6 destructuring
const { MongoClient, ObjectID } = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("unable to connect to Mongodb server");
    }
    console.log("connected to Mongodb server");
    //collections
   // http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('59fe1d5ecca0c0c4373c2a22')
    // },{
    //     //update operators
    //     //https://docs.mongodb.com/manual/reference/operator/update/set/#up._S_set
    //     $set:{
    //         completed:true
    //     }
    // },{
    //     returnOriginal:false
    // }).then((result)=>{
    //     console.log(result);
    // });
    
    // db.collection('Users').findOneAndUpdate({
    //     _id: new ObjectID('59fcd786ea190621c823a147')
    //     },
    //     {
    //         $set:{
    //             Name:"Shilpi"
    //         },
    //         $inc:{
    //         "Age":1
    //         }
    //     },
    //     {
    //     returnOriginal:false
    //     }).then((result)=>{
    //     console.log(result);
    //     });

    db.collection('Users').update({}, {
        $set:{
            Location:"Austin"
        }
    }).then((result)=>{
        console.log(result);
    });


    // db.close();
});
