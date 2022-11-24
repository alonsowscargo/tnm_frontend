import React from 'react'
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';

import {
    makeStyles,
    Dialog,
    DialogContent,
    DialogContentText,
    Typography ,
    IconButton
    // DialogTitle
} from "@material-ui/core";



const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});



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
            width: "72px",
            height: "72px",
        }
    },
    dialog: {
        "& .MuiDialogActions-root": {
            justifyContent: "center"
        }
    }
}));

const Message = ({ open, titleMessage, message, typeAlert, onClose, callAction,width }) => {
    const classes = useStyles();

    return (
        <Dialog
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            onClose={onClose}
            className={classes.dialog}
            fullWidth
            maxWidth={width}
        >
            <DialogTitle onClose={onClose}>

            </DialogTitle>

            <DialogContent className="pt-5 justify-center">
                    { typeAlert === "alertSuccess"  &&
                        <div className={`justify-center ${classes.alertSuccess}`}>
                            <CheckIcon />
                        </div> 
                    }
                    { typeAlert === "alertDanger" &&
                        <div className={`justify-center ${classes.iconDanger}`}>
                            <CloseIcon />
                        </div> 
                    }

                    { typeAlert === "alertWarning" &&
                        <div className={`justify-center ${classes.alertWarning}`}>
                            <ReportProblemIcon />
                        </div>
                    }
            </DialogContent>

            <DialogContent className='text-center pb-5'>
                <DialogTitle className='pt-0'>{titleMessage}</DialogTitle>

                {/* <DialogContentText>{tituloMensaje}</DialogContentText> */}
                <DialogContentText className="px-0 px-md-5">{message}</DialogContentText>
            </DialogContent>
        </Dialog>
    )
}

export default Message