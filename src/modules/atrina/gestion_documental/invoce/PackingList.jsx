import React, { Fragment, useState } from 'react'
import { Button } from 'reactstrap';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormTicket from '../formTicket/FormTicket';
import documento from './uno.png'
import CargaPackingList from '../carga_manual/CargaPackingList';
import AddBox from '../formTicket/AddBox';
import DetalleBox from '../formTicket/DetalleBox';
import Chip from '@material-ui/core/Chip';
import LoadingForm from './LoadingForm'
import Switch from '@material-ui/core/Switch';
import ValidarInvoce from '../validar_documento/ValidarInvoce';

const PackingList = ({ handlebackInvoce, handleback }) => {

    const [viewCambio, setViewCambio] = useState(0)
    const [openMensaje, setOpenMensaje] = useState(false)
    const [openAddBox, setOpenAddBox] = useState(false)
    const [openDetalleBox, setOpenDetalleBox] = useState(false)
    const [buttonBox, setButtonBox] = useState(false) // state para vizualiza tbn detalla de carga
    const [validationButton, setValidationButton] = useState(false)

    // State loading consolidar caja
    const [loadingConsolidar, setLoadingConsolidar] = useState(false)
    const loadingButtonConsolidar = () => {
        setLoadingConsolidar(true)
        setTimeout(() => {
            setLoadingConsolidar(false)
            setButtonBox(true)
            setOpenAddBox(false)
        }, 3000)
    }

    const abrirMensaje = () => {
        setOpenMensaje(true)
    }
    const closeMensaje = () => {
        setOpenMensaje(false)
    }

    const abrirBox = () => {
        setOpenAddBox(true)
    }
    const abrirDetalleBox = () => {
        setOpenDetalleBox(true)
    }
    const closeBox = () => {
        setOpenAddBox(false)
        setOpenDetalleBox(false)
    }

    const generarBox = () => {
        setButtonBox(true)
        setOpenAddBox(false)
    }

    const addCargaManual = () => {
        setViewCambio(2)
    }

    const handlebackPackingList = () => {
        setViewCambio(0)
    }

    // state volver al add carga
    const  handlebackaddCargaManual = () => {
        setViewCambio(2)
    }

    // state para validar docuemnto
    const handleValidarDocumento = () => {
        setViewCambio(3)
    }

    // State  para loading validar datos
    const [loading, setLoading] = useState(false)
    const cambiarEstado = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setValidationButton(true)
        }, 3000)
    }

    return (

        <Fragment>
            {
                viewCambio === 0 ?
                    (
                        <div className="row">
                            <div className="col-6 view-100vh content-document">
                                <div className="title-icon mb-3">
                                    <IconButton
                                        onClick={() => handlebackInvoce()}
                                        className="icon-small mr-2"
                                    >
                                        <i className="zmdi zmdi-chevron-left"></i>
                                    </IconButton>
                                    <h2 className="title-h2 text-capitalize font-weight-900">
                                        packing list
                                    </h2>
                                </div>

                                {
                                    loading ?
                                        
                                    (<LoadingForm />)
                                    :
                                    (
                                        <div className="form-content">
                                        <form noValidate autoComplete="off" className="gestion">
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
                                                <div className="col-6 mb-3">
                                                    <InputLabel className="Label_Input_Format">Volumen total</InputLabel>
                                                    <Input
                                                        label="input 1"
                                                        variant="filled"
                                                        size="small"
                                                    />
                                                </div>
                                                <div className="col-6 mb-3">
                                                    <InputLabel className="Label_Input_Format">peso neto</InputLabel>
                                                    <Input
                                                        label="input 1"
                                                        variant="filled"
                                                        size="small"
                                                    />
                                                </div>
                                                <div className="col-6 mb-3">
                                                    <InputLabel className="Label_Input_Format">peso bruto</InputLabel>
                                                    <Input
                                                        label="input 1"
                                                        variant="filled"
                                                        size="small"
                                                    />
                                                </div>
                                                <div className="col-6 mb-3">
                                                    <InputLabel className="Label_Input_Format">cantidad bultos</InputLabel>
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
                                                   
                                                    {/* <FormControlLabel
                                                        control={
                                                            <Switch
                                                                onChange={() => cambiarEstado()}
                                                                color="danger"
                                                            />
                                                        }
                                                        label="Validar información"
                                                    /> */}
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
                                        onClick={() => abrirMensaje()}
                                        className="button button-gray button-50 mr-1">
                                        ejecutivo
                                    </Button>
                                    <Button
                                        onClick={() => addCargaManual()}
                                        className="button button-danger button-50 ml-1">
                                        generar carga
                                    </Button>
                                </div>
                            </div>

                            <div className="col-6 view-100vh background-light box-shadow-left">
                                <div className="iframe">
                                    <img src={documento} alt="" draggable="false" />
                                </div>
                                <Button
                                    className="button button-primary button-50 button-position-bottom"
                                    onClick={() => handleback()}
                                >
                                    página principal
                                </Button>

                                {/* acción para descargar archivos */}
                                <div className="content-title  download-file">
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
                            </div>

                            {/* componente para enviar ticket a los ejecutivos */}
                            <FormTicket closeMensaje={closeMensaje} openMensaje={openMensaje} />
                        </div>
                    )
                    : null
            }


            {
                viewCambio === 2 ?
                    (
                        <Fragment>
                            <div className="col-12 view-scroll-y view-50vh background-light">
                                <div className="title-icon">
                                    <IconButton
                                        onClick={() => handlebackPackingList()}
                                        className="icon-small mr-2"
                                    >
                                        <i className="zmdi zmdi-chevron-left"></i>
                                    </IconButton>

                                    <h3 className="title-h3 text-ligh font-weight-900">
                                        Comercial DLL Spa / Shanghai Holley / Packing List
                                    </h3>
                                </div>

                                <div className="iframe">
                                    <img src={documento} alt="" draggable="false" />
                                </div>
                            </div>

                            <div className="col-12 view-50vh view-scroll-y py-5 box-shadow-top ">
                                <CargaPackingList
                                    abrirBox={abrirBox}
                                    abrirDetalleBox={abrirDetalleBox}
                                    handleback={handleback}
                                    buttonBox={buttonBox}
                                    // validarDocumento={validarDocumento} 
                                    handleValidarDocumento={handleValidarDocumento}
                                />
                            </div>

                            {/* abrirDetalleBox={abrirDetalleBox} */}

                            {/* componete para generar las cajas packing list */}
                            <AddBox 
                                openAddBox={openAddBox} 
                                closeBox={closeBox} 
                                generarBox={generarBox}
                                loadingButtonConsolidar={loadingButtonConsolidar} 
                                loadingConsolidar={loadingConsolidar}/>

                            {/* componete para generar las cajas packing list */}
                            <DetalleBox openDetalleBox={openDetalleBox} closeBox={closeBox} />
                        </Fragment>
                    ) :
                    null
            }

            {
                viewCambio === 3 ?
                (
                <ValidarInvoce
                    handleback={handleback}
                    handlebackaddCargaManual={handlebackaddCargaManual}/>
                )
                : null
            }

        </Fragment>
    )
}

export default PackingList
