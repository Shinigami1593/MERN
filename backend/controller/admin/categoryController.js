const Category = require("../../models/Category")

exports.createCategory = async(req,res) => {
    const {name} = req.body

    if(!name){
        return res.status(400).json(
            {
                "success":false,
                "message":"Missing fields"
            }
        )
    }
    const newCategory = new Category(
        {
            name
        }
    )

    await newCategory.save()
    return res.status(201).json(
        {
            "success":true,
            "message":"Category saved"
        }
    )
}

exports.getCategory = async(req,res) => {
    try{
        const category = await Category.find();
        return res.status(200).json(
            {
                "success":true,
                "message":"All category",
                "data": category
            }
        )
    } catch(err){
        return res.status(500).json(
            {
                "success":false,
                "message":"Server error"
            }
        )
    }
}

exports.getOneCategory = async(req,res) => {
    try{
        const id = req.params.id
        const category = await Category.findOne(
            {
                "_id":id
            }
        )
        return res.status(200).json(
            {
                "success":true,
                "message": "One category fetched",
                "data": category
            }
        )
    }catch(err){
        return res.status(500).json(
            {
                "success":false,
                "message":"Server error"
            }
        )      
    }
}
exports.updateOne = async(req,res) => {
    const { name } = req.body
    const _id = req.params.id //mongodb id
    try{
        const category = await Category.updateOne(
            {
                "_id":_id
            },
            {
                $set:{
                    "categoryName": name,
                }
            }
        )
        return res.status(200).json(
            {
                "success":true,
                "message": "Category updated"
            }
        )
    }catch(err){
        return res.status(500).json(
            {
                "success":false,
                "message": "Server error"
            }
        )
    }
}

exports.deleteOne = async(req,res) => {
    const _id = req.params.id
    try{
        const category = await Category.deleteOne(
            {
                "_id":_id
            }
        )
        return res.status(200).json(
            {
                "success":true,
                "message": "Category deleted"
            }
        )
    }catch(err){
        return res.status(200).json(
            {
                "success":false,
                "message": "Sever error"
            }
        )
    }
}