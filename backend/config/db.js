const mongoose = require("mongoose")
const CONNECTION_STRING = process.env.MONGODB_URL
const connectDB = async () => {
    try{
        await mongoose.connect(                     //   ----
            CONNECTION_STRING,       //       |
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