const mongoose = require("mongoose")

const ContactSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name Must REquired"]
    },
    email:{
        type:String,
        required:[true,"Email Address Must REquired"]
    },
    phone:{
        type:String,
        required:[true,"Phone Number Must REquired"]
    },
    subject:{
        type:String,
        required:[true,"Subject Must REquired"]
    },
    message:{
        type:String,
        required:[true,"Message Must REquired"]
    },
    date:{
        type:String,
        default:""
    },
    status:{
        type:String,
        default:"Active"
    }
})
const Contact = new mongoose.model("Contact",ContactSchema)
module.exports = Contact