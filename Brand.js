const mongoose = require("mongoose")
const BrandSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Brand Name Must REquired"],
        unique:true
    }
})
const Brand = new mongoose.model("Brand",BrandSchema)
module.exports=Brand







// const mongoose = require("mongoose")

// const BrandSchema = mongoose.Schema({
//     name:{
//         type:String,
//         required:[true,"Brand Name must Required"],
//         unique:true
//     }
// })
// const Brand = new mongoose.model("Brand",BrandSchema)
// module.exports = Brand