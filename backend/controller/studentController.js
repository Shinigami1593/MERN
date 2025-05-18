const User = require("../models/Student")
// const bcrypt = require("bcrypt")

exports.registerStudent = async (req,res) => {
    const {stu_id,stu_email,stu_name} = req.body

    //validation
    if(!stu_id || !stu_email){
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
                    {"stu_id" : stu_id},
                    {"stu_email" : stu_email},
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

        const newUser = new User(
            {
                stu_id,
                stu_email,
                stu_name
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