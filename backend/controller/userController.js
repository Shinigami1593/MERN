const creatUser = (req,res) =>{
    res.send("user create");
}
const getUser = (req,res) => {
    res.send("data get")
}
module.exports={
    creatUser, 
    getUser
}