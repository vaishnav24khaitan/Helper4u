import React from 'react'
import {Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import AddStudentForm from '../components/AddStudentForm';
import StudentsBox from '../components/StudentsBox';
import LeftBox from '../components/LeftBox';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';


const useStyles=makeStyles({
    wrapper:{
        display:'flex',
        height:'100vh',
        //backgroundColor:'yellow',
    },
    left:{
        display:'flex',
        flex:3,
        //backgroundColor:'blue',
    },
    right:{
        display:'flex',
        flex:9,
        paddingLeft:'2%',
        paddingTop:'2%'
    },
});
const ViewStudents = () => {
    const classes=useStyles();
    const [students, setStudents] = useState([]);
    useEffect(()=>{
        const fetchStudents = async ()=>{
            const res=await axios.get("/student");
            setStudents(res.data);
        }
        fetchStudents();
    });
    return (
        <Box>
            <Navbar/>
            <Box className={classes.wrapper}>
                <Box className={classes.left}>
                    <LeftBox/>
                </Box>
                <Box className={classes.right}>
                    <StudentsBox students={students}/>
                </Box>
            </Box>
        </Box>
    )
}

export default ViewStudents
