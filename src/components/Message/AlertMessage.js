import React from "react";
import Alert from '@material-ui/lab/Alert';



const AlertMessage = ({msg, type}) => {

    return (
        <Alert severity={type}>{msg}</Alert>
    );
};

export default AlertMessage;
