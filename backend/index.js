//import
const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("../backend/database/db")
const userRoutes = require("../backend/route/userRoute")
//Object
const app = express()

dotenv.config();



app.use(express.json())
//Port
const PORT = 8080;

//listen
app.listen(8080,()=>{
    console.log(`Server running in the ${PORT}`);
    
});

app.use("/api/user",userRoutes);

connectDB();

app.get('/', (req,res) => {
    res.send('hello world')
});
console.log("hello")