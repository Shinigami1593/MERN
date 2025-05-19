const User = require("../../models/User")
const bcrypt = require("bcrypt")

//5common api
//Create, Read ALl, Read one, Update one, Delete One

exports.createUser = async(res,req) => {
    const {username,email,firstName,lastName,password} = req.body
    
        //validation
    if(!username || !email || !password){
        return res.status(400).json(
            {
                "success" :false,
                "message" : "Missing fields"
            }
        )
    }
    //db logic in try/catch
    try{
        const existingUser = await User.findOne(
            {
                $or: [
                    {"username" : username},
                    {"email" : email},
                ]
            }
        )
        if(existingUser){
            return res.status(400).json(
                {
                    "success" :false,
                    "message" : "User exists"                   
                }
            )
        }

        //hash password 
        const hasedPas = await bcrypt.hash(
            password, 10 //10 is complexity
        )
        const newUser = new User(
            {
                username,
                email,
                firstName,
                lastName,
                password : hasedPas
            }
        )
        await newUser.save()
        return res.status(201).json(
            {
                "success" :true,
                "message" : "User Registered"
            }
        )
    }catch(err){
        return res.status(500).json(
            {
                "success" : false,
                "message" : "Server error"
            }
        )
    }
}

//2 Get all/ Read all
exports.getUsers = async(req,res) => {
    try{
        const users = await User.find();
        return res.status(200).json(
            {
                "success":true,
                "message":"All users",
                "data":users
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

// 3 Get one/ Read one
exports.getOneUser = async(res,req) => {
    try{
        const id = req.params.id
        const user = await User.findOne(
            {
                "_id":id
            }
        )
        return res.status(200).json(
            {
                "success":true,
                "message":"One user fetched",
                "data": user
            }
        )
    }catch(err){
        return res.status(500).json(
            {
                "success":false,
                "message":"server error"
            }
        )
    }
}

// 4 Update One
exports.UpdateOne = async(res,req) => {
    const { firstName,lastName } = req.body
    const _id = req.params.id //mongodb id
    try{
        const user = await User.updateOne(
            {
                "_id":_id
            },
            {
                $set:{
                    "firstName":firstName,
                    "lastName":lastName
                }
            }
        )
        return res.status(200).json(
            {
                "success":true,
                "message": "User updated"
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

// 5 Delete One
exports.deleteOne = async(res,req) => {
    const _id = req.params.id
    try{
        const user = await User.deleteOne(
            {
                "_id":_id
            }
        )
        return res.status(200).json(
            {
                "success":true,
                "message": "User deleted"
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