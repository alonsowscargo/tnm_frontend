import React from 'react'
import { Spinner } from 'reactstrap'
import {
    IconButton,
    FormGroup,
    Input,
    makeStyles
} from '@material-ui/core';


const useStyles =  makeStyles({
    viewContent: { 
        height: "70vh"
    }
});



const LoadingForm = () => {
    const classes = useStyles();
    return (
        <div className={`loading ${classes.viewContent}`}>
            <Spinner />
        </div>
    )
}

export default LoadingForm
