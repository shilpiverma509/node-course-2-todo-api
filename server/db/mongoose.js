var mongoose = require('mongoose');
//connect mongoose to database
//tll mongoose to use built in Promise library
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp',
    { useMongoClient: true })
    .then((fulfilled) => {






    },
    (rejected) => {
        console.log(rejected);
    });

    // module.export={
    //     mongoose:mongoose
    // };
    //Using Es6
    module.exports={mongoose};
