let mongoose = require('mongoose')
let userschema = mongoose.Schema({


    name:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    id:{type:String}
})
let User = mongoose.model('User', userschema)

module.exports = User