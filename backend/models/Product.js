const mongoose = require("mongoose")

const productSchema = new mongoose.Schema(
    {
        name: {
            type:String,
            required: true
        },
        price: {
            type:Number,
            required: true
        },
        categoryId: {
            type:mongoose.Schema.ObjectId, //foreign key/referencing
            ref: 'Category',
            required: true
        },
        sellerId: {
            type:mongoose.Schema.ObjectId,
            ref: 'User',
            required: true
        },
        productImage:{
            type:String
        }
    }
)

module.exports = mongoose.model(
    'Product', productSchema
)