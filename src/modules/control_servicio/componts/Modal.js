import React from 'react'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';


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


const Modal = ({ open, onClose, }) => {
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
            fullWidth="lg"
            maxWidth="lg"
        >
            {/* <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle> */}

            <DialogTitle id="customized-dialog-title" onClose={onClose}>
                Detalle del servicio
            </DialogTitle>
            
            <DialogContent dividers>
                {/* <div className='app-item-service'>
                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Id servicio</h3>
                        <h4 className="text-xs font-weight-300">58102</h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Referencia</h3>
                        <h4 className="text-xs font-weight-300">OC 59889 (2) 60028 (2)</h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Comercial</h3>
                        <h4 className="text-xs font-weight-300">Lilian Arguedas</h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Cliente facturación</h3>
                        <h4 className="text-xs font-weight-300">Vanni</h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Cliente despacho</h3>
                        <h4 className="text-xs font-weight-300">Vanni</h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Tipo servicio</h3>
                        <h4 className="text-xs font-weight-300">IMPO</h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Tipo carga</h3>
                        <h4 className="text-xs font-weight-300">FCL</h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Agencia aduana</h3>
                        <h4 className="text-xs font-weight-300">Ajleon 3</h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Nave</h3>
                        <h4 className="text-xs font-weight-300">Msc Ruby</h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">ETA</h3>
                        <h4 className="text-xs font-weight-300">17-03-2022 / 01:00 hrs</h4>
                    </div>
                </div> */}


                <div className='app-item-service'>
                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Id servicio</h3>
                        <h4 className="text-xs font-weight-300">58102</h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Referencia</h3>
                        <h4 className="text-xs font-weight-300">OC 59889 (2) 60028 (2)</h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Comercial</h3>
                        <h4 className="text-xs font-weight-300">Lilian Arguedas</h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Cliente facturación</h3>
                        <h4 className="text-xs font-weight-300">Vanni</h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Cliente despacho</h3>
                        <h4 className="text-xs font-weight-300">Vanni</h4>
                    </div>


                    <div className='app-border-color my-2'></div>




                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Tipo servicio</h3>
                        <h4 className="text-xs font-weight-300">IMPO</h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Tipo carga</h3>
                        <h4 className="text-xs font-weight-300">FCL</h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Agencia aduana</h3>
                        <h4 className="text-xs font-weight-300">Ajleon 3</h4>
                    </div>
                </div>

                {/* <div className='app-border my-2'></div> */}

                {/* <div className='app-item-service'>
                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Tipo servicio</h3>
                        <h4 className="text-xs font-weight-300">IMPO</h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Tipo carga</h3>
                        <h4 className="text-xs font-weight-300">FCL</h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Agencia aduana</h3>
                        <h4 className="text-xs font-weight-300">Ajleon 3</h4>
                    </div>
                </div> */}

                <div className='app-borde my-3'></div>


                {/* <div className='app-item-service'>
                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Nº contenedor</h3>
                        <h4 className="text-xs font-weight-300">TCNU790766-3</h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Tamaño</h3>
                        <h4 className="text-xs font-weight-300">40</h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Tipo contenedor</h3>
                        <h4 className="text-xs font-weight-300">DRY</h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Conexión</h3>
                        <h4 className="text-xs font-weight-300">NO APLICA</h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Temperatura ºC</h3>
                        <h4 className="text-xs font-weight-300">Lugar</h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Contenedor Tara (Kg)</h3>
                        <h4 className="text-xs font-weight-300">0</h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Carga Tara (Kg)</h3>
                        <h4 className="text-xs font-weight-300">8684</h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Carga IMO</h3>
                        <h4 className="text-xs font-weight-300">-</h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Número IMO</h3>
                        <h4 className="text-xs font-weight-300">NO APLICA</h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Fecha inicio conexión</h3>
                        <h4 className="text-xs font-weight-300"> - </h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Hora inicio conexión</h3>
                        <h4 className="text-xs font-weight-300"> - </h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Fecha termino conexión</h3>
                        <h4 className="text-xs font-weight-300"> - </h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Hora termino conexión</h3>
                        <h4 className="text-xs font-weight-300"> - </h4>
                    </div>
                </div> */}


                <div className='app-item-service'>
                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Nº contenedor</h3>
                        <h4 className="text-xs font-weight-300">TCNU790766-3</h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Tamaño</h3>
                        <h4 className="text-xs font-weight-300">40</h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Tipo contenedor</h3>
                        <h4 className="text-xs font-weight-300">DRY</h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Conexión</h3>
                        <h4 className="text-xs font-weight-300">NO APLICA</h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Temperatura ºC</h3>
                        <h4 className="text-xs font-weight-300">Lugar</h4>
                    </div>

                    <div className='app-border-color my-2'></div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Contenedor Tara (Kg)</h3>
                        <h4 className="text-xs font-weight-300">0</h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Carga Tara (Kg)</h3>
                        <h4 className="text-xs font-weight-300">8684</h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Carga IMO</h3>
                        <h4 className="text-xs font-weight-300">-</h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Número IMO</h3>
                        <h4 className="text-xs font-weight-300">NO APLICA</h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Fecha inicio conexión</h3>
                        <h4 className="text-xs font-weight-300"> - </h4>
                    </div>
                </div>

                {/* <div className='app-border my-2'></div>

                <div className='app-item-service'>
                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Contenedor Tara (Kg)</h3>
                        <h4 className="text-xs font-weight-300">0</h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Carga Tara (Kg)</h3>
                        <h4 className="text-xs font-weight-300">8684</h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Carga IMO</h3>
                        <h4 className="text-xs font-weight-300">-</h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Número IMO</h3>
                        <h4 className="text-xs font-weight-300">NO APLICA</h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Fecha inicio conexión</h3>
                        <h4 className="text-xs font-weight-300"> - </h4>
                    </div>
                </div> */}

                <div className='app-borde my-3'></div>

                <div className='app-item-service'>
                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Nave</h3>
                        <h4 className="text-xs font-weight-300">Msc Ruby</h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">ETA</h3>
                        <h4 className="text-xs font-weight-300">17-03-2022 / 01:00 hrs</h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Peonetas</h3>
                        <h4 className="text-xs font-weight-300">0</h4>
                    </div>

                    <div className="app-item">
                        <h3 className="text-xs font-weight-500">Escoltas</h3>
                        <h4 className="text-xs font-weight-300">0</h4>
                    </div>
                </div>


            </DialogContent>
            {/* <DialogActions>
                <Button onClick={onClose} color="primary">
                    Disagree
                </Button>
                <Button onClick={onClose} color="primary" autoFocus>
                    Agree
                </Button>
            </DialogActions> */}
        </Dialog>
    )
}

export default Modal