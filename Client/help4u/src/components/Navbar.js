import React from 'react'
import {Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';


const useStyles=makeStyles({
    wrapper:{
        display:'flex',
        height:'4rem',
        //backgroundColor:'yellow',
        border:'solid 1px black'
    },
    left:{
        display:'flex',
        flex:6,
        //backgroundColor:'blue',
        alignItems:'center'
    },
    right:{
        display:'flex',
        flex:6,
        alignItems:'center',
        justifyContent:'flex-end',
        padding:'2%'
    },
    logoname:{
        border:'solid 1px black',
        height:'2rem',
        width:'30%',
        //backgroundColor:'yellow'
    }
});

const Navbar = () => {
    const classes=useStyles();
    return (
        <Box className={classes.wrapper}>
            <Box className={classes.left}>
                <Box className={classes.logoname}>
                    lead logo
                </Box>
            </Box>
            <Box className={classes.right}>
                person name
            </Box>
        </Box>
    )
}

export default Navbar
