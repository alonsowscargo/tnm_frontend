import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogTitle from '@material-ui/core/DialogTitle';

import {
    Typography,
    IconButton,
    DialogContent,
    Dialog,
} from '@material-ui/core';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
        backgroundColor: "red"
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

// btn para cerrar dialog
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


const Modal = ({ open, onClose }) => {

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
            maxWidth="sm"
        >
            <DialogTitle className="" onClose={onClose}>
                Ubicación actual y destino
            </DialogTitle>

            <DialogContent className="pb-4" dividers>

                <div className='row'>
                    <div className='col-12 mb-3'>
                        <div className='bg-color-gray p-3'>
                            <p className="text-xs font-weight-300 text-capitalize"><span className='font-weight-500'>Desde: </span>General velásquez, renca, provincia de santiago, región  metropolitana de santiago, chile</p>
                        </div>

                    </div>

                    <div className='col-12'>
                        <div className='bg-color-light-primary p-3'>
                            <h3 className="text-xs font-weight-300 text-capitalize"><span className='font-weight-500'>Hacia: </span>General velásquez, renca, provincia de santiago, región  metropolitana de santiago, chile</h3>
                        </div>
                    </div>
                </div>

                {/* contenedor para el mapa */}
                <div className='row my-3'>
                    <div className='col-12'>
                        <h5 className="title-h5 font-weight-600 mb-2">Ruta sugerida</h5>
                        <div className='mapa-seguimiento-servicio my-3'></div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default Modal