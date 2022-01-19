import { Box, Button } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core';
import axios from 'axios';
import { Link } from 'react-router-dom';

const useStyles=makeStyles({
    wrapper:{
        display:'flex',
        flexDirection:'column',
        //backgroundColor:'yellow',
        width:'100%',
    },
    headingbox:{
        display:'flex',
        //backgroundColor:'red'
    },
    btn:{
        fontSize:'10px',
        color:'blue'
    }
});

const StudentsBox = ({students}) => {
    const classes=useStyles();
    var num=1;
    //console.log(students)
    const DeleteStudent = async (name,id) => {
        try {
          await axios.delete(`/student/${id}`, {
            data: { fullname: name },
          });
          window.location.replace("/viewstudent");
        } catch (err) {}
      };

    const AddId=(id)=>{
        localStorage.setItem('id',id);
    }
    return (
        <Box className={classes.wrapper}>
            <Box className={classes.headingbox} >
                <Box style={{width:'5%',border:'solid 1px black'}}>
                    id
                </Box>
                <Box style={{width:'20%',border:'solid 1px black'}}>
                    name
                </Box>
                <Box style={{width:'10%',border:'solid 1px black'}}>
                    DOB
                </Box>
                <Box style={{width:'30%',border:'solid 1px black'}}>
                    school
                </Box>
                {/* <Box style={{width:'10%',border:'solid 1px black'}}>
                    class
                </Box> */}
                <Box style={{width:'5%',border:'solid 1px black'}}>
                    division
                </Box>
                <Box style={{width:'10%',border:'solid 1px black'}}>
                    status
                </Box>
                <Box style={{width:'13%',border:'solid 1px black'}}>
                    ..
                </Box>
            </Box>
            {students.map(student=>(
                <Box className={classes.headingbox} >
                    <Box style={{width:'5%',border:'solid 1px black'}}>
                        {num}
                    </Box>
                    <Box style={{width:'20%',border:'solid 1px black'}}>
                        {student.fullname}
                    </Box>
                    <Box style={{width:'10%',border:'solid 1px black'}}>
                        {student.dob}
                    </Box>
                    <Box style={{width:'30%',border:'solid 1px black'}}>
                        {student.school}
                    </Box>
                    {/* <Box style={{width:'10%',border:'solid 1px black'}}>
                        no
                    </Box> */}
                    <Box style={{width:'5%',border:'solid 1px black'}}>
                        {student.division}
                    </Box>
                    <Box style={{width:'10%',border:'solid 1px black'}}>
                        {student.status}
                    </Box>
                    <Box style={{width:'13%',border:'solid 1px black', display:'flex'}}>
                        <Link to='/editstudent' /*state={{id:student._id, name:student.fullname}}*/><Button onClick={(e)=>AddId(student._id)} className={classes.btn}>edit</Button></Link>
                        <Button onClick={(e)=>DeleteStudent(student.fullname,student._id)} className={classes.btn}>Delete</Button>
                    </Box>
                </Box>
            ))}
        </Box>
    )
}

export default StudentsBox
