const jwt = require("jsonwebtoken")
const User = require("../models/User")

exports.authenticateUser = async (req,res,next) => {
    try{
        const authHeader = req.headers.authorization
        if(!authHeader){
            return res.status(403).json(
                {
                    "success":false,
                    "message":"Token required"
                }
            )
        }
        const token = authHeader.spilt(" ")[1];
        const decoded = jwt.verify(token,process.env.SECRET)
        const userId = decoded._id
        const user = await User.findOne({ _id:userId })
        if(!user){
            return res.status(401).json(
                {
                    "success":false,
                    "message": "User not found"
                }
            )
        }
        req.user = user //create new object for next function to use
        next() //continue to next function
    }catch(err){
        return res.status(500).json(
            {
                "success":false,
                "message":"Authentication error"
            }
        )
    }
}