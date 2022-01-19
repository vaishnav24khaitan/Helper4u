import React, { useState } from "react";
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';

const useStyles=makeStyles({
  formgroup:{
    display:'flex',
    width:'20rem',
    height:'3rem',
    margin:'2px',
    alignItems:'center',
    justifyContent:'center'
  },
  container:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center'

  }
});



 
//import { useHistory } from "react-router-dom";
 
const AddStudent = () => {
  // let history = useHistory(); // Use for Navigate on Previous 
  /*const [user, setUser] = useState({
    fullname: "",
    dob: "",
    school: "",
    student_class: "",
    division: "",
  });
 
  const { fullname,dob,school,student_class,division} = user;
   
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log('andar gaya');
  };*/

  const [fullname,setFullname]=useState("");
  const [dob,setDob]=useState("");
  const [school,setSchool]=useState("");
  /*const [Class,setClass]=useState("");*/
  const [division,setDivision]=useState("");
  const [status,setStatus]=useState("active");
  const [error, setError] = useState(false);
   
  const onSubmit = async (e) => {
    console.log("yaha tak aagaya");
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/student/", {
        fullname,
        dob,
        school,
        /*Class,*/
        division,
        status,
      });
      res.data && window.location.replace("/viewstudent");
    } catch (err) {
      setError(true);
    }
  };
  const classes=useStyles();
  return (
    <div className="container bg-light">
      <div class="row">  
       <div className="col-sm-4 mx-auto shadow p-5">
           <h4>ADD STUDENT</h4>
        <form onSubmit={onSubmit}>
        {/* <form onSubmit=""> */}

          {/* Full Name */}
          <div className={classes.formgroup}>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Full  Name"
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>
          
          {/* Date of Birth */}
          <div className={classes.formgroup}>
            <TextField
            id="date"
            onChange={(e) => setDob(e.target.value)}
            label="Choose your birthdate"
            type="date"
            InputLabelProps={{
            shrink: true,
            }}
            />
          </div>

           {/* School */}
          <div className={classes.formgroup}>
            <label>school:</label>
            <select aria-label="select" name="school"
            onChange={(e) => setSchool(e.target.value)}>
              <option>Select</option>
              <option value="Tuplip school1">Tuplip school</option>
              <option value="KV school">KV school</option>
              <option value="Narayana">Narayana</option>
            </select>
              
          </div>


          {/* Class */}
          {/* <div className="form-group">
            <select aria-label="select" name="student_class"
            onChange={(e) => setClass(e.target.value)}>
              <option>Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
              
          </div> */}


          {/* Division */}
          <div className={classes.formgroup}>
            <label>Division:</label>
            <select aria-label="select" name="division"
            onChange={(e) => setDivision(e.target.value)}>
              <option>Select</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
              
          </div>

          {/* Status */}
          {/* <div className="form-group">
            {['checkbox', 'radio'].map((type) => (
              <div key={`inline-${type}`} className="form-group">
                <check
                  inline
                  label="1"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
              </div>
            ))}
          </div>
           */}
           <label>status:</label>
           <br></br>
          <label class="container">active
            <input type="radio" name="radio" onChange={(e) => setStatus("active")}></input>
            <span class="checkmark"></span>
          </label>
          <label class="container">inactive
            <input type="radio" name="radio" onChange={(e) => setStatus("in active")}></input>
            <span class="checkmark"></span>
          </label>
          <br></br>
          <button type="submit" className="btn btn-primary btn-block">Add Student</button>
        </form>
        {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
      </div>
    </div>
  </div>  
  );
};
 
export default AddStudent;
