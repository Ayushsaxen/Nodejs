const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Product Name must Required"],
        unique:true
    },
    maincategory:{
        type:String,
        required:[true,"Maincategory must Required"]
    }
    ,
    subcategory:{
        type:String,
        required:[true,"Subcategory must Required"]
    }
    ,
    brand:{
        type:String,
        required:[true,"Brand must Required"]
    }
    ,
    color:{
        type:String,
        required:[true,"Color must Required"]
    }
    ,
    size:{
        type:String,
        required:[true,"Size must Required"]
    }
    ,
    baseprice:{
        type:Number,
        required:[true,"Base Price must Required"]
    }
    ,
    discount:{
        type:Number,
        required:[true,"Discount must Required"]
    }
    ,
    finalprice:{
        type:Number,
        required:[true,"Final Price must Required"]
    }
    ,
    stock:{
        type:String,
        default:"In Stock"
    }
    ,
    description:{
        type:String,
        default:"This is Sample Product"
    },
    pic1:{
        type:String,
        default:""
    }
    ,
    pic2:{
        type:String,
        default:""
    }
    ,
    pic3:{
        type:String,
        default:""
    }
    ,
    pic4:{
        type:String,
        default:""
    }
})
const Product = new mongoose.model("Product",ProductSchema)
module.exports = Product