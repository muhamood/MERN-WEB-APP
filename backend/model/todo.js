const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const todoSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    created_At: {
        type: Date,
        default: Date.now()
    },
    stars:{
        type: Number,
        min: 0,
        max:5
    } 
})

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;