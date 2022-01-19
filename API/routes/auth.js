const router=require('express').Router();
const { Router } = require('express');
const User = require('../models/User');
const bcrypt=require('bcrypt');

//Register
router.post("/register", async (req,res)=>{
    try{
        const salt=await bcrypt.genSalt(10);
        const hashedpass=await bcrypt.hash(req.body.password,salt); 
        const newUser= new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedpass 
        })

        const user=await newUser.save();
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err); 
        return ;
    }
})


//login
router.post("/login", async (req,res)=>{
    try{
        const user= await User.findOne({username:req.body.username});
        !user && res.status(400).json("wrong credentials");

        const validate=await bcrypt.compare(req.body.password, user.password);
        !validate && res.status(400).json("wrong credentials");

        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
        return ;
    }
});

module.exports = router