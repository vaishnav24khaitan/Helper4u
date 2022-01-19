const express=require('express');
const app=express();
const dotenv=require('dotenv');
const mongoose=require('mongoose');
dotenv.config();
const authRoute=require('../api/routes/auth');
const userRoute = require("./routes/users");
const studentRoute = require('./routes/student');


app.use(express.json());

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(console.log("connected to Mongo DB")).catch(err=>console.log(err));


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/student", studentRoute);

app.listen('5000',()=>{
    console.log('server has started on port 5000');
})