const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name:String,
    email:{type:String, required:true},
    password:{type:String, required:true},
})

module.exports = mongoose.model('User', schema);