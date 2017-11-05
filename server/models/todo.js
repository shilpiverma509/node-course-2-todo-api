var mongoose = require('mongoose');
//Todo comes as a constructor() from mongoose.modal()
//Creating new instance of Todo 

var Todo = mongoose.model('Todo', {
    text: {
                type: String,
                required: true,
                minlength: 1,
                trim: true
            },  
    completed: {
                type: Boolean,
                default: false
            },
            completedAt: {
                type: Number,
                default: null
            }
        });

        // var newTodo = new Todo({
//     text:"Cook dinner"
// });

// //saving to mongodb database
// newTodo.save().then((doc)=>{
//     console.log("saved todo",doc);
// },(e)=>{
//     console.log("Unable to save todo");
// });

module.exports={Todo}; 


        