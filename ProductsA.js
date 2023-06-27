const mongoose = require("mongoose")
const ProductSchema =mongoose.Schema({
    name:{
        type:String,
        required:[true,"Product Name Must Required"],
        unique:true
    },
    maincategory:{
        type:String,
        required:[true,"Maincategory must Required"]
    },
    subcategory:{
        type:String,
        required:[true,"Subcategory Must Required"]
    },
    brand:{
        type:String,
        required:[true,"Brand Must Required"]
    },
    color:{
        type:String,
        required:[true,"Color Must Required"]
    }
})
const Product = new mongoose.model("Product",ProductSchema)
module.exports = Product