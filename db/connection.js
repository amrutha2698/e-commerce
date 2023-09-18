//import mongoose
const mongoose = require('mongoose')

//get connection string
const DB = process.env.DATABASE

//connect the mongodb atlas
mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("Mongodb Atlas:cart database connected successfully...");
}).catch((error)=>{
    console.log("mongo db connection error:",error);
});
