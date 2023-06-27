const mongoose = require("mongoose")

const WishlistSchema = mongoose.Schema({
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
    color:{
        type:String,
        required:[true,"Product Color must Required"],
    },
    size:{
        type:String,
        required:[true,"Product Size must Required"],
    },
    price:{
        type:Number,
        required:[true,"Product Price must Required"],
    },
    pic:{
        type:String,
        default:""
    }
})
const Wishlist = new mongoose.model("Wishlist",WishlistSchema)
module.exports = Wishlist