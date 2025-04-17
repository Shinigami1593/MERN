const mongoose = require("mongoose")

const connectDB = () =>{
    mongoose.connect(process.env.DB_URL)
    .then(() => console.log("datebase connected"))
    .catch((err) => console.error("DB Connection Error: ",err));
}

module.exports = connectDB;