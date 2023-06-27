const mongoose = require("mongoose")

const CheckoutSchema = mongoose.Schema({
    userid: {
        type: String,
        required: [true, "User Id must Required"],
    },
    mode: {
        type: String,
        default:"COD"
    },
    status: {
        type: String,
        default:"Not Packed"
    },
    paymentstatus: {
        type: String,
        default:"Pending"
    },
    rppid: {
        type: String,
        default:""
    },
    total: {
        type: Number,
        required: [true, "Checkout Total Amount must Required"],
    },
    shipping: {
        type: Number,
        required: [true, "Checkout Shipping Amount must Required"],
    },
    final: {
        type: Number,
        required: [true, "Checkout Final Amount must Required"],
    },
    date: {
        type: String,
        default:""
    },
    products: [
        {
            productid: {
                type: String,
                required: [true, "Product Id must Required"],
            },
            name: {
                type: String,
                required: [true, "Product Name must Required"],
            },
            price: {
                type: Number,
                required: [true, "Product Price must Required"],
            },
            color: {
                type: String,
                required: [true, "Product Color must Required"],
            },
            size: {
                type: String,
                required: [true, "Product Size must Required"],
            },
            q: {
                type: Number,
                default: 1
            },
            total: {
                type: Number,
                required: [true, "Total Price must Required"],
            },
            pic: {
                type: String,
                default: ""
            }
        }
    ]
})
const Checkout = new mongoose.model("Checkout", CheckoutSchema)
module.exports = Checkout