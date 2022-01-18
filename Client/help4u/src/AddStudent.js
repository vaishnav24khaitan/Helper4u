import React, { useState } from "react";
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
 
//import { useHistory } from "react-router-dom";
 
const AddStudent = () => {
  // let history = useHistory(); // Use for Navigate on Previous
  const [user, setUser] = useState({
    student_name: "",
    student_dob: "",
    student_school: "",
    student_class: "",
    student_div: "",
  });
 
  const { student_name,student_dob,student_school,student_class,student_div} = user;
   
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
   
  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3000/posts",user);
    alert('Data Inserted');
    // history.push("/");
  };
  return (
    <div className="container bg-light">
      <div class="row">  
       <div className="col-sm-4 mx-auto shadow p-5">
        <form onSubmit={e => onSubmit(e)}>
        {/* <form onSubmit=""> */}

          {/* Full Name */}
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Full  Name"
              name="student_name"
              value={student_name}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          {/* Date of Birth */}
          <div className="form-group">
            <TextField
            id="date"
            name="student_dob"
            value={student_dob}
            onChange={e => onInputChange(e)}
            label="Choose your birthdate"
            type="date"
            InputLabelProps={{
            shrink: true,
            }}
            />
          </div>

           {/* School */}
          <div className="form-group">
            <select aria-label="select" name="student_school"
            value={student_school}
            onChange={e => onInputChange(e)}>
              <option>Select</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
              
          </div>


          {/* Class */}
          <div className="form-group">
            <select aria-label="select" name="student_class"
            value={student_class}
            onChange={e => onInputChange(e)}>
              <option>Select</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
              
          </div>


          {/* Division */}
          <div className="form-group">
            <select aria-label="select" name="student_div"
            value={student_div}
            onChange={e => onInputChange(e)}>
              <option>Select</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
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
          
          <button className="btn btn-primary btn-block">Add Product</button>
        </form>
      </div>
    </div>
  </div>  
  );
};
 
export default AddStudent;