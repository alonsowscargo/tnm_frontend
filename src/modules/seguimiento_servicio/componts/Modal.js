import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Form from "components/form/Form";
import Textarea from "components/form/Textarea";
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';

import {
    Typography,
    IconButton,
    DialogContent,
    Dialog,
    Button,
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


const Modal = ({ open, onClose, form, errors, loading, response, handleChange, handleBlur, handleSubmit, newData }) => {

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            // TransitionComponent={Transition}
            fullWidth
            maxWidth="lg"
        >
            <DialogTitle className="px-5 pt-5" onClose={onClose}>
                Ubicación actual y destino
            </DialogTitle>

            <DialogContent className="px-5 pb-5">

                <div className='row'>
                    <div className='col-6 border-right'>
                        <h5 className="text-small font-weight-500">Desde:</h5>
                        <p className="text-small font-weight-300 text-capitalize">General velásquez, renca, provincia de santiago, región  metropolitana de santiago, chile</p>
                    </div>

                    <div className='col-6'>
                        <h5 className="text-small font-weight-500">Hacia:</h5>
                        <p className="text-small font-weight-300 text-capitalize">General velásquez, renca, provincia de santiago, región  metropolitana de santiago, chile</p>
                    </div>
                </div>

                {/* contenedor para el mapa */}
                <div className='row my-3'>
                    <div className='col-12'>
                        <h5 className="title-h5 font-weight-600 mb-2">Ruta sugerida</h5>
                         <div className='mapa-seguimiento-servicio my-3'></div>
                    </div>
                </div>

                <div className='row'>
                    {/* listado de comentarios */}
                    <div className='col-8'>
                        <h4 className="title-h5 font-weight-600 mb-2">Comentarios</h4>

                        {
                            newData.length > 0 ?
                            newData.map((item, index) => (
                                    <div className="app-list" key={index}>
                                        <div className="app-data">
                                            <p className="text-small font-weight-400">{item.comentario}</p>
                                            <p className="text-xs font-weight-300 text-italic">responsable: vanni, 10:00 hrs.</p>
                                        </div>
                                    </div>
                            ))
                            :
                            <h5 className="text font-weight-400">No has realizado comentarios...</h5>
                        } 
                     </div>

                    {/* form para agregar comentario */}
                    <div className='col-4'>
                         <h4 className="text font-weight-500 mb-3">Nuevo comentario</h4>
                        <Form onSubmit={handleSubmit}>
                            <Textarea 
                                placeholder="Escribe tu comentario"
                                name="comentario"
                                value={form.comentario}
                                onChange={handleChange}
                                handleBlur={handleBlur}
                                validations={errors.comentario}
                                fullWidth
                            />

                            { response  ?
                                <Alert severity="success" className='mt-3'>Has agregado un comentario</Alert>
                                :
                                <Button
                                        variant="outlined"
                                        size="large"
                                        color="secondary"
                                        className="app-button mt-3"
                                        type="submit"
                                >
                                    Agregar { loading && <CircularProgress color="inherit" className='ml-3' size={20} />}
                                </Button>
                            }
                        </Form>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default Modal