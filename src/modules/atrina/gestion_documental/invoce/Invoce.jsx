import React, { Fragment, useState } from 'react'
import { Button } from 'reactstrap';
import PackingList from './PackingList';
import Input from '@material-ui/core/Input';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Checkbox from '@material-ui/core/Checkbox';
import FormTicket from '../formTicket/FormTicket';
import Carga_manual from '../carga_manual/Carga_manual';
import LoadingForm from './LoadingForm'
import IconButton from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';
// import Stack from '@material-ui/core/Stack';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'

/* select */
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import documento from './uno.png'


const Invoce = ({ handleback }) => {
    const [openMensaje, setoOpenMensaje] = useState(false)
    const [validationButton, setValidationButton] = useState(false)

    const [viewCambio, setViewCambio] = useState(0)

    const packingList = () => {
        setViewCambio(1)
    }

    const handlebackInvoce = () => {
        setViewCambio(0)
    };

    const abrirMensaje = () => {
        setoOpenMensaje(true)
    }
    const closeMensaje = () => {
        setoOpenMensaje(false)
    }

    const addCargaManual = () => {
        setViewCambio(2)
    }
    // const [age, setAge] = React.useState('');

    // const handleChange2 = (event) => {
    //     setAge(event.target.value);
    // };

    // State para loading validar datos
    const [loading, setLoading] = useState(false)
    const cambiarEstado = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setValidationButton(true)
        }, 3000)
    }

    // State  para diálogo de confirmación
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
        alert('jajajaj')
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="container-fluid viuw-full-page px-0">
            {
                viewCambio === 0 ?
                    (
                        <div className="row">
                            <div className="col-6 view-100vh content-document">
                                <div className="title-icon mb-3">
                                    <IconButton
                                        onClick={() => handleback()}
                                        className="icon-small mr-2"
                                    >
                                        <i className="zmdi zmdi-chevron-left"></i>
                                    </IconButton>
                                    <h2 className="title-h2 text-capitalize font-weight-900">
                                        Invoce
                                    </h2>
                                </div>


                                {
                                    loading ?
                                        (<LoadingForm />)
                                        :
                                        (
                                            <div className="form-content">
                                                <form className="gestion">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <FormGroup>
                                                                <InputLabel className="Label_Input_Format">nombre cliente</InputLabel>
                                                                <FormControlLabel control={<Checkbox defaultChecked />} label="Comercial DLL Spa" />
                                                            </FormGroup>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="border my-3"></div>
                                                        </div>
                                                        <div className="col-12">
                                                            <FormGroup>
                                                                <InputLabel className="Label_Input_Format">nombre proveedor</InputLabel>
                                                                <FormControlLabel control={<Checkbox defaultChecked />} label="Shanghai Holley" />
                                                            </FormGroup>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="border my-3"></div>
                                                        </div>
                                                        <div className="col-6">
                                                            <InputLabel className="Label_Input_Format">total factura</InputLabel>
                                                            <Input
                                                                label="input 1"
                                                                variant="filled"
                                                                size="small"
                                                            />
                                                        </div>
                                                        <div className="col-6 mb-3">
                                                            <InputLabel className="Label_Input_Format">tipo moneda</InputLabel>
                                                            <Input
                                                                label="input 1"
                                                                variant="filled"
                                                                size="small"
                                                            />
                                                        </div>
                                                        <div className="col-6">

                                                        {
                                                            validationButton ?
                                                            (
                                                                <Button
                                                                    className="button button-success button-100"
                                                                    // onClick={() => cambiarEstado()}
                                                                >
                                                                    información Validada
                                                                </Button>
                                                            )
                                                            :
                                                            (
                                                                <Button
                                                                className="button button-outline-danger button-100"
                                                                onClick={() => cambiarEstado()}
                                                                >
                                                                    validar información
                                                                </Button>
                                                            )
                                                        }
                                                            
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        )
                                }



                                <div className="title-icon my-4">
                                    <p className="text-small font-weight-500">Si los datos no concuerdan con el <strong>Invoce</strong>, comunicate con el ejecutivo</p>
                                </div>


                                <div className="content-buttons">
                                    <Button
                                        className="button button-gray button-50 mr-1"
                                        onClick={() => abrirMensaje()}

                                    >
                                        ejecutivo
                                    </Button>

                                    <Button
                                        className="button button-danger button-50 ml-1"
                                        onClick={() => addCargaManual()}
                                    >
                                        generar carga
                                    </Button>

                                </div>
                            </div>

                            <div className="col-6 view-100vh background-light box-shadow-left">

                                <Button className="button button-primary button-50 button-position-bottom"
                                    // onClick={() => handleClickOpen()}
                                    onClick={() => packingList()}
                                >
                                    Continuar sin Invoce
                                </Button>
                                {/* Diálogo de confirmación para continuar sin Invoce */}
                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >
                                    <DialogTitle className="mt-3 pb-0" id="alert-dialog-title">
                                        {"Continuar sin cliente ?"}
                                    </DialogTitle>

                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-description">
                                            Desea continuar sin registrar el Invoce?
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions className="mb-3">
                                        <Button className="button button-light px-4" onClick={handleClose}>
                                            No
                                        </Button>
                                        <Button 
                                            className="button button-success mx-2 px-4" 
                                            onClick={() => packingList()}>
                                            Si
                                        </Button>
                                    </DialogActions>
                                </Dialog>

                                <div className="content-title download-file">
                                    <Chip
                                        label="Invoce"
                                        color="primary"
                                        icon={<i className="zmdi zmdi-file"></i>}
                                        className="px-2 mr-2"
                                    />
                                    <Chip
                                        label="Invoce"
                                        color="primary"
                                        icon={<i className="zmdi zmdi-file"></i>}
                                        className="px-2"
                                    />
                                </div>
                                <div className="iframe">
                                    <img src={documento} alt="" draggable="false" />
                                </div>
                            </div>

                            {/* módulo para enviar ticket a ejecutivo */}
                            <FormTicket closeMensaje={closeMensaje} openMensaje={openMensaje} />
                        </div>
                    )
                    :
                    null
            }

            {
                viewCambio === 1 ?
                    (
                        <PackingList handlebackInvoce={handlebackInvoce} handleback={handleback} />
                    ) :
                    null
            }

            {
                viewCambio === 2 ?
                    (
                        <Fragment>
                            <div className="col-12 view-scroll-y view-50vh background-light px-0">
                                <div className="title-icon">
                                    <IconButton
                                        onClick={() => handlebackInvoce()}
                                        className="icon-small mr-2"
                                    >
                                        <i className="zmdi zmdi-chevron-left"></i>
                                    </IconButton>

                                    <h3 className="title-h3 text-ligh font-weight-900">
                                        Comercial DLL Spa / Shanghai Holley / Invoce
                                    </h3>
                                </div>

                                <div className="iframe">
                                    <img src={documento} alt="" draggable="false" />
                                </div>
                            </div>

                            <div className="col-12 view-50vh view-scroll-y py-5 box-shadow-top">
                                <Carga_manual packingList={packingList} />
                            </div>
                        </Fragment>
                    ) :
                    null
            }
        </div>
    )
}

export default Invoce
