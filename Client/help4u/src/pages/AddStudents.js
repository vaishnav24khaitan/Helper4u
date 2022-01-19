import React from 'react'
import {Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import AddStudentForm from '../components/AddStudentForm';
import LeftBox from '../components/LeftBox';
import Navbar from '../components/Navbar';


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
        paddingLeft:'2%'
    },
});
const AddStudents = () => {
    const classes=useStyles();
    return (
        <Box>
            <Navbar/>
            <Box className={classes.wrapper}>
                <Box className={classes.left}>
                    <LeftBox/>
                </Box>
                <Box className={classes.right}>
                    <AddStudentForm/>
                </Box>
            </Box>
        </Box>
    )
}

export default AddStudents
