import React from 'react'
import DialogContent from '@material-ui/core/DialogContent';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Form from '../../../components/form/Form';
import Field from '../../../components/form/Field';
import Submit from '../../../components/form/Submit';
import WarningIcon from '@material-ui/icons/Warning';


import {
    InputLabel,
    TextField,

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


// open={openDelete}
// onClose={handleCloseDelete}
// form={form}
// onChange={handleChange}
// dataToEdit={dataToEdit}
// handleSubmit={handleSubmit}
// handleReset={handleReset}
// prueba={prueba}
// validations={errors}


const ModalTwo = ({ open, onClose }) => {

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

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth="sm"
            maxWidth="sm"
        >
            {/* <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle> */}

            <DialogTitle id="customized-dialog-title" onClose={onClose}>
                Días libres
            </DialogTitle>
            <DialogContent dividers>

                {/* {rowData.cliente_despacho} */}

                <div className="justify-center mb-3">
                    <WarningIcon className="icon-color-warning mr-2"/>
                    <h3 className="text font-weight-400 text-center">Estimado, ingresar la cantidad días libres</h3>
                </div>

                {/* <div className="app-item-20">
                        <h4 className="text-xs font-weight-300">
                            {f.getDate()}/{f.getMonth()}/{f.getFullYear()}
                        </h4>
                    </div> */}

                {/* <div className="app-detail-item app-border">
                    <div className="app-item-40">
                        <h4 className="text-xs font-weight-300">{prueba.cliente_despacho} </h4>
                    </div>

                    <div className="app-item-20">
                        <h4 className="text-xs font-weight-300">
                            {f.getDate()}/{f.getMonth()}/{f.getFullYear()}
                        </h4>
                    </div>

                    <div className="app-item-25">
                        <h4 className="text-xs font-weight-300">{prueba.dias_libres}</h4>
                    </div>
                </div> */}
            </DialogContent>
        </Dialog>
    )
}

export default ModalTwo