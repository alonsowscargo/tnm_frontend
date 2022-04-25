import React, { useState } from 'react'
import ImgExcel from './excel.png'
import LoadingForm from './LoadingForm'

import {
    Alert,
    Button,
    UncontrolledAlert
} from 'reactstrap';

import {
    IconButton,
    FormGroup,
    Input,
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles({
    viewContent: {
        boxShadow: "0px -9px 26px 0px rgba(0, 0, 0, 0.103)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "15vh"
    },
    contentTitle: {
        display: "flex",
        alignItems: "center",
        height: "15vh"
    },
    viewExcel: {
        height: "70vh",
        overflow: "scroll",
        overflowY: "scroll",
        OverflowX: "scroll",
        position: "relative",

        "& .alertExcel": {
            position: "absolute !important",
            bottom: "0",
            left: "0",
            width: "87%"
        }
    },
    bgFile: {
        padding: "40px 0",
        border: "3px dashed #ccc",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "16px"
    }
});

const CargaInvoce = ({ handlebackPackingList, validarExcel, setValidarExcel, handleValidarDocumento }) => {
    const classes = useStyles();
    const [mostrarFormCarga, setMostrarFormCarga] = useState(0)
    const [loadingValidacion, setLoadingValidacion] = useState(false)

    const addCargaMasiva = () => {
        setMostrarFormCarga(2)
    }

    const removeCargaManual = () => {
        setMostrarFormCarga(0)
        setValidarExcel(false)
    }

    // State para loading validar datos
    const validarDatosExcel = () => {
        setLoadingValidacion(true)
        setMostrarFormCarga(0)

        setTimeout(() => {
            setLoadingValidacion(false)
            setValidarExcel(true)
        }, 3000)
    }


    return (
        <>
            <div className={`${classes.contentTitle} px-4`}>
                <div className="title-icon">
                    <IconButton
                        onClick={() => handlebackPackingList()}
                        className="icon-small mr-2"
                    >
                        <i className="zmdi zmdi-chevron-left"></i>
                    </IconButton>
                    <h3 className="title-h3 font-weight-900">
                        2500 / Comercial DLL Spa
                    </h3>
                </div>
            </div>

            {
                mostrarFormCarga === 2 ?
                    (
                        // form carga masiva
                        <div className={`${classes.viewExcel} px-5`}>
                            <form>
                                <div className="flex-end mb-4">
                                    <IconButton
                                        onClick={() => removeCargaManual()}
                                        className="icon-small icon-button"
                                    >
                                        <i class="zmdi zmdi-close"></i>
                                    </IconButton>
                                </div>

                                <div className={`col-12 ${classes.bgFile} proceso-documental`}>
                                    <FormGroup>
                                        <Input
                                            className="my-0 input-file"
                                            type="file"
                                        />
                                    </FormGroup>
                                </div>

                                <div className="col-12 px-0">
                                    <Button
                                        onClick={() => validarDatosExcel()}
                                        className="button button-gray button-100"
                                    >
                                        Cargar información
                                    </Button>
                                </div>
                            </form>
                        </div>
                    )
                    :
                    (

                        <>
                            {
                                // loading 
                                loadingValidacion ?

                                    (<LoadingForm />)
                                    :
                                    (
                                        // content iframe
                                        <div className={`${classes.viewExcel}`}>
                                            {
                                                validarExcel ?
                                                    (
                                                        // alert de confirmación
                                                        <UncontrolledAlert ccolor="success" className="mx-5 alertExcel">
                                                            Los datos se han Validado correctamente. p
                                                        </UncontrolledAlert>
                                                    )
                                                    : null
                                            }
                                            <img src={ImgExcel} alt="" draggable="false" />

                                        </div>
                                    )
                            }
                        </>

                    )
            }

            {/* acciones principales */}
            <div className={`${classes.viewContent} px-4`}>
                {
                    validarExcel ?
                        (
                            <Button
                                className="button button-success button-100 mr-1"
                            >
                                descargar excel
                            </Button>
                        )
                        :
                        (
                            <Button
                                className="button button-gray button-100 mr-1"
                                onClick={() => validarDatosExcel()}
                            >
                                validar info
                            </Button>
                        )
                }

                <Button
                    className="button button-danger button-100 ml-1"
                    onClick={() => addCargaMasiva()}
                >
                    carga masiva
                </Button>
                {
                    // contenido bottom, validar documento Invoce - Packing List
                    validarExcel ?
                        (

                            <Button
                                className="button button-primary button-100 ml-2"
                                onClick={() => handleValidarDocumento()}
                            >
                                Validar documentos
                            </Button>

                        )
                        : null
                }
            </div>
        </>
    )
}

export default CargaInvoce
