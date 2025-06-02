const mongoose = require("mongoose")

const CategorySchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:false,
            unique: true
        },
        filepath:{
            type:String,
        }
    }
)

module.exports = mongoose.model(
    'Category', CategorySchema
)