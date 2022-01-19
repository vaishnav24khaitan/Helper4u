const router=require('express').Router();
const { Router } = require('express');
const User = require('../models/User');
const Student = require('../models/Student');
const bcrypt=require('bcrypt');

//Create student
router.post("/", async (req,res)=>{
    const newStudent = new Student(req.body);
    try{
        const savedStudents= await newStudent.save();
        res.status(200).json(savedStudents);
    }catch(err){
        res.status(500).json(err);
    }
});

//Delete student
router.delete("/:id", async (req,res)=>{
    try{
        const student= await Student.findById(req.params.id);
        if(student.fullname===req.body.fullname){
            try{
                await student.delete();
                res.status(200).json("student has been deleted");
            }catch(err){
                res.status(500).json(err);
            }
        }
        else{
            res.status(401).json("you can delete only your student");
        }
    }catch(err){
        res.status(500).json(err);
    }
});

//update student
router.put("/:id", async (req, res) => {
    try {
      const student = await Student.findById(req.params.id);
      try {
        const updatedStudent = await Student.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedStudent);
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

//get student
router.get("/:id",async (req,res)=>{
    try{
        const student= await Student.findById(req.params.id);
        res.status(200).json(student);
    }catch(err){
        res.status(500).json(err);
    }
});

//get all students
router.get("/",async (req,res)=>{
    try{
        let students;
        students=await Student.find();
        res.status(200).json(students);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router