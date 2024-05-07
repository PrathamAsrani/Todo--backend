// step 4: we need to define Schema, therefore create 'modal', these will be used in the Controller

const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    text: {
        type: String, 
        require: true
    }
})

module.exports = mongoose.model('Todo', todoSchema);