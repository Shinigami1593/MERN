const mongoose = require("mongoose")

const connectDB = async () => {
    try{
        await mongoose.connect(                     //   ----
            "mongodb://localhost:27017/mydb",       //       |
            {
                useNewUrlParser: true,              //       |   \
                useUnifiedTopology : true           //       |   /   connnecttion of db
            }
        )                                           //
    }catch(err){
        console.log("Db err", err)
    }
}

module.exports = connectDB