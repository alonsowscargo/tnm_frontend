import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Form from "components/form/Form";
import Field from "components/form/Field";
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
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


const Modal = ({ open, onClose, form, setForm, initialForm }) => {
    const [comentarios, setComentarios] = useState([])
    const[errors, setErrors] = useState({
        error:"errorDefault"
    })

    console.log('errors', errors)


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(validateForm(form));

        if(Object.keys(errors).length === 0){
            createDataContacto(form);
        }

        handleReset();
    }

    const createDataContacto = (data) => {
        // data.id = Date.now();
        // console.log(data);
        setComentarios([...comentarios, data]);
    }

    const handleReset = () => {
        setForm(initialForm)
        setErrors({ error:"errorDefault"})
    }

    const handleBlur = () => {
        setErrors(validateForm(form));
    }

    const validateForm = (form) => {
        const {
            name,
        } = form;

        let errors = {};
        if(!name.trim()){
            errors.name = "campo obligatorio";
        }
        return errors
    }

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
                            comentarios.length > 0 ?
                            comentarios.map((item, index) => (
                                    <div className="app-list" key={index}>
                                        <div className="app-data">
                                            <p className="text-small font-weight-400">{item.name}</p>
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
                            <Field
                                // label="agregar comentario"
                                type="text"
                                placeholder="Agregra comentario"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                handleBlur={handleBlur}
                                validations={errors.name}
                                fullWidth
                            />
                            <Button
                                    variant="outlined"
                                    size="large"
                                    color="secondary"
                                    className="app-button mt-3"
                                    type="submit"
                            >
                                Agregar
                            </Button>
                        </Form>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default Modal