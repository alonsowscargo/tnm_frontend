import React from 'react'
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';

import {
    makeStyles,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
    DialogTitle
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    alertSuccess: {
        width: "80px",
        height: "80px",
        border: "solid 3px #6FCF97",
        color: "#6FCF97",
        margin: "0 auto",
        borderRadius: "100%",
        fontsize: "400px",

        "& .MuiSvgIcon-root": {
            width: "48px",
            height: "48px",
        }
    },
    iconDanger: {
        width: "80px",
        height: "80px",
        border: "solid 3px #EA5259",
        color: "#EA5259",
        margin: "0 auto",
        borderRadius: "100%",
        fontsize: "400px",

        "& .MuiSvgIcon-root": {
            width: "48px",
            height: "48px",
        }
    },
    alertDanger: {
        color: "#EA5259",
        margin: "0 auto",
        // border: "solid 3px #EA5259",
        // borderRadius: "100%",

        "& .MuiSvgIcon-root": {
            width: "64px",
            height: "64px",
        }
    },
    alertWarning: {
        color: "#F8C96A",
        margin: "0 auto",

        "& .MuiSvgIcon-root": {
            width: "64px",
            height: "64px",
        }
    },
    dialog: {
        "& .MuiDialogActions-root": {
            justifyContent: "center"
        }
    }
}));

const Message = ({ open, titleMessage, message, typeAlert, onClose, callAction,width, setEliminarOk, handleDeleteConfirmation}) => {
    const classes = useStyles();

    // const handleDeleteConfirmation = () => {
    //     setEliminarOk(true);
    //   };

    return (
        // <Alert color={props.bgColor}>{props.msg}</Alert>
        <Dialog
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            onClose={onClose}
            className={classes.dialog}
            fullWidth
            maxWidth={width}
        >
            <DialogContent className="mt-3 justify-center">
                    { typeAlert == "alertSuccess"  &&
                        <div className={`justify-center ${classes.alertSuccess}`}>
                            <CheckIcon />
                        </div> 
                    }
                    { typeAlert == "alertDanger" &&
                        <div className={`justify-center ${classes.iconDanger}`}>
                            <CloseIcon />
                        </div> 
                    }

                    { typeAlert == "alertWarning" &&
                        <div className={`justify-center ${classes.alertWarning}`}>
                            <ReportProblemIcon />
                        </div> 
                    }
            </DialogContent>

            <DialogContent className="text-center mb-2">
                <DialogTitle className='pt-0'>{titleMessage}</DialogTitle>

                {/* <DialogContentText>{tituloMensaje}</DialogContentText> */}
                <DialogContentText className="px-0 px-md-5">{message}</DialogContentText>
            </DialogContent>

            <DialogActions className="mb-4">
                <Button
                    variant="outlined"
                    size="medium"
                    color="secondary"
                    onClick={onClose}
                >
                   cancelar
                </Button>

                <Button
                    variant="outlined"
                    size="medium"
                    color="secondary"
                    onClick={ () => {
                        // handleDeleteConfirmation();
                        onClose();
                    }}
                >
                    {callAction}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default Message