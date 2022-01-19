const mongoose=require('mongoose');

const StudentSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
    },
    dob:{
        type:String,
        required:true,
        unique:true
    },
    school:{
        type:String,
        required:true
    },
    /*class:{
        type:String,
        required:false
    },*/
    division:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
  },
  {timestamps:true}
);

module.exports =mongoose.model("student", StudentSchema);