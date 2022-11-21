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
import DataList from 'components/table/detailTable/Item'


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
            <DialogContent dividers className='pb-4'>
            <DataList
                    className='bg-color-light-primary px-4 pt-4 mpb-0'
                    data={[
                        {titulo:'Id servicio', data:'58102'},
                        {titulo:'Referencia', data:'OC 59889 (2) 60028 (2)'},
                        {titulo:'Comeercial', data:'Lilian Arguedas'},
                        {titulo:'Cliente facturación', data:'Vani'},
                        {titulo:'Cliente despacho', data:'Vani'},
                        {titulo:'Tipo servicio', data:'IMPO'},
                        {titulo:'Tipo carga', data:'FLC'},
                        {titulo:'Agencia aduana', data:'Ajleon 3'},
                    ]}
                />

                <DataList
                    className='bg-color-gray px-4 pt-4 my-3'
                    data={[
                        {titulo:'Nave', data:'Msc Ruby'},
                        {titulo:'ETA', data:'17-03-2022 / 01:00 hrs'},
                        {titulo:'Peonetas', data:'0'},
                        {titulo:'Escoltas', data:'0'},
                    ]}
                />


                <DataList
                    className='bg-color-light-primary px-4 pt-4 mpb-0'
                    data={[
                        {titulo:'Nº contenedor', data:'TCNU790766-3'},
                        {titulo:'Tamaño', data:'40'},
                        {titulo:'Tipo contenedor', data:'DRY'},
                        {titulo:'Conexión', data:''},
                        {titulo:'Temperatura ºC', data:''},
                        {titulo:'Contenedor Tara (Kg)', data:'0'},
                        {titulo:'Carga Tara (Kg)', data:'8684'},
                        {titulo:'Carga IMO', data:''},
                        {titulo:'Número IMO', data:''},
                        {titulo:'Fecha inicio conexión', data:''},
                    ]}
                />

            </DialogContent>
        </Dialog>
    )
}

export default Modal