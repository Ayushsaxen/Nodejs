const mongoose = require("mongoose")
const ContactSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name Must Required"]
    },
    email:{
        type:String,
        required:[true,"Email Address Must Required"]
    },
    phone:{
        type:String,
        required:[true,"Phone Number Must Required"]
    },
    subject:{
        type:String,
        required:[true,"Subject Must Required"]
    },
    message:{
        type:String,
        required:[true,"Message Must Required"]
    },
    date:{
        type:String,
        required:""
    },
    status:{
        type:String,
        default:"Active"
    },
    date:{
        type:String,
        default:" "
    },
    Status:{
        type:String,
        default:"Active"
    }
})
const Contact = new mongoose.model("Contact",ContactSchema)
module.exports=Contact