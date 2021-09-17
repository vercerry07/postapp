let mongoose = require('mongoose')
let postschema = mongoose.Schema({


    creator:{type:String},
    title:{type:String, required:true},
    message:{type:String, required:true},
    selectedfile:{type:String},
    likecount:{type:Number, default: 0},
    createdAt:{type: Date, default: new Date()}

})

let Postmessage = mongoose.model('Postmessage', postschema)
module.exports = Postmessage