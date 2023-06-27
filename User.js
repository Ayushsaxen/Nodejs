const mongoose = require("mongoose")
const validator = require("validator")

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name must Required"]
    },
    username: {
        type: String,
        required: [true, "User Name must Required"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email Id must Required"],
        validate(value) {
            if (!validator.isEmail(value))
                throw new Error("Invalid Email Id")
        }
    }
    ,
    phone: {
        type: String,
        required: [true, "Phone Number must Required"],
        minLength:[10,"Phone Number Length Must Be Equal to 10"]
    }
    ,
    password: {
        type: String,
        required: [true, "Password must Required"],
        validator(value) {
            if (!schema(value))
                throw new Error("Invalid Password!!! Password Must Contains Atleast 8 Character, Sholud Contain Atleast 1 UpperCase Character 1 Lower Case Character and 1 Special Character and It Can't Contain Space")
        }
    }
    ,
    addressline1: {
        type: String,
        default: ""
    }
    ,
    addressline2: {
        type: String,
        default: ""
    }
    ,
    addressline3: {
        type: String,
        default: ""
    }
    ,
    pin: {
        type: String,
        default: ""
    }
    ,
    city: {
        type: String,
        default: ""
    }
    ,
    state: {
        type: String,
        default: ""
    }
    ,
    pic: {
        type: String,
        default: ""
    }
})
const User = new mongoose.model("User", UserSchema)
module.exports = User