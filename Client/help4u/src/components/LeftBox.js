import React from 'react'
import { Button, makeStyles } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles=makeStyles({
    wrapper:{
        display:'flex',
        flexDirection:'column',
        //backgroundColor:'yellow',
        flex:3,
        border:'solid 1px black'
    },
    headingbox:{
        display:'flex',
        //backgroundColor:'red',
        height:'3rem',
        border:'solid 1px black',
        alignItems:'center',
        justifyContent:'center',
    },
    btn:{
        color:'blue'
    }
});

const LeftBox = () => {
    const classes=useStyles();
    return (
        <Box className={classes.wrapper}>
            <Box className={classes.headingbox}>
                <Link to="/addstudent"><Button className={classes.btn}>Add students</Button></Link>
            </Box>
            <Box className={classes.headingbox}>
                View students.
            </Box>
            <Box className={classes.headingbox}></Box>
            <Box className={classes.headingbox}></Box>
            <Box className={classes.headingbox}></Box>
            <Box className={classes.headingbox}></Box>
            <Box className={classes.headingbox}></Box>
            <Box className={classes.headingbox}></Box>
            <Box className={classes.headingbox}></Box>
        </Box>
    )
}

export default LeftBox
