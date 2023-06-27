const mongoose = require("mongoose")

const CartSchema = mongoose.Schema({
    userid:{
        type:String,
        required:[true,"User Id must Required"],
    },
    productid:{
        type:String,
        required:[true,"Product Id must Required"],
    },
    name:{
        type:String,
        required:[true,"Product Name must Required"],
    },
    price:{
        type:Number,
        required:[true,"Product Price must Required"],
    },
    color:{
        type:String,
        required:[true,"Product Color must Required"],
    },
    size:{
        type:String,
        required:[true,"Product Size must Required"],
    },
    q:{
        type:Number,
        default:1
    },
    total:{
        type:Number,
        required:[true,"Total Price must Required"],
    },
    pic:{
        type:String,
        default:""
    }
})
const Cart = new mongoose.model("Cart",CartSchema)
module.exports = Cart