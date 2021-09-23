let mongoose = require('mongoose')
let postschema = mongoose.Schema({


    name: {type:String},
    creator:{type:String},
    title:{type:String, required:true},
    message:{type:String, required:true},
    selectedfile:{type:String},
    likes:{type:[String], default: []},

    createdAt:{type: Date, default: new Date()}

})
let Postmessage = mongoose.model('Postmessage', postschema)
module.exports = Postmessage