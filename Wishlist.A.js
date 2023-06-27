const mongoose = require("mongoose")
const WishlistSchema=mongoose.Schema({
    uesrid:{
        type:String,
        required:[true,"USer ID Must REquired"]
    },
})