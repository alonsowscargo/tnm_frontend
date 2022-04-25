import React, { Fragment, useState } from 'react'
import documento from './uno.png'
import ValidarPackingList from './ValidarPackingList'
import LoadingForm from './LoadingForm';

import {
    Alert,
    Button,
    UncontrolledAlert 
} from 'reactstrap';

import {
    Chip,
    IconButton,
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles({
    colRight: {
        height: '100vh',
        boxShadow: '-8px 0px 26px 0px rgba(0, 0, 0, 0.103)',
        padding: '0px',
        background: '#FFF'
    },
    colLeft: {
        height: '100vh',
        padding: '0px',
        background: '#FFF'
    },
    iframe: {
        width: '100%',
        height: '100vh',
        overflow: 'scroll',
        '& img': {
            width: '100%',
            height: '100vh'
        },
        '& .MuiBox-root': {
            padding: '0 !important'
        }
    },
    positionTop :{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 2,
        height: "10vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    muiChip: {
        background: '#FC565C',
        color: '#fff'
    },
    positioBottom: {
        position: "absolute",
        bottom: 0,
        left: 0,
        height: "15vh",
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
    }
});

const ValidarInvoce = ({ handlebackCargaManual, handleback }) => {
    const classes = useStyles();
    const [validationFile, setValidationFile] = useState(0)
    const [filePacakingList, setFilePacakingList] = useState(false)
    const [validationButton, setValidationButton] = useState(false)
    const [loading, setLoading] = useState(false)

    const validarFilePacakingList = () => {
        setValidationFile(1)
    }

    const prueba = () => {
        setFilePacakingList(true)
    }
    // const backValidation

    // State loading button validar invoce
    const loadingButtonValidar = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setValidationButton(true)
        }, 3000)
    }





    return (
        <div className="row">
            {
                validationFile === 0 ?
                    (
                        <>
                            {/* <div className="col-6 view-100vh background-light px-0 box-shadow-left"> */}
                            <div className={`col-6 ${classes.colLeft}`}>
                                {/* div para ver docuemnto */}
                                <div className={classes.iframe}>
                                    <img src={documento} alt="" draggable="false" />
                                    <img src={documento} alt="" draggable="false" />
                                </div>

                                {/* descargar documentos */}
                                <div className={`${classes.positionTop} px-5`}>
                                    <IconButton
                                        onClick={() => handlebackCargaManual()}
                                        className="icon-large"
                                    >
                                        <i className="zmdi zmdi-chevron-left"></i>
                                    </IconButton>
                                    <Chip label="Antiguo" />
                                </div>
                            </div>


                            <div className={`col-6 ${classes.colRight}`}>
                                {/* descargar documentos */}
                                <div className={`${classes.positionTop} px-5`}>
                                    <Chip label="Nuevo" className={classes.muiChip} />
                                </div>

                                {
                                    validationButton ?
                                    (
                                        <div className={`${classes.positioBottom} px-5`}>
                                            <UncontrolledAlert
                                                color="success" 
                                                className="mx-5 mt-4"
                                                onClick={() => prueba()}
                                            >
                                                Los datos se han Validado correctamente.
                                            </UncontrolledAlert>
                                        </div>

                                    )
                                    :
                                    (
                                        <div className={`${classes.positioBottom} px-5`}>
                                            <Button className="button button-primary button-50 ml-1"
                                                onClick={() => loadingButtonValidar()}
                                            >
                                                Validar Invoce
                                            </Button>
                                        </div>
                                    )
                                }

                                {
                                    filePacakingList ? 
                                    (
                                        <div className={`${classes.positioBottom} px-5`}>
                                            <Button 
                                                className="button button-primary button-50 ml-1"
                                                onClick={() => validarFilePacakingList()}
                                            >
                                                siguiente
                                            </Button>
                                        </div>
                                    )
                                    :  null
                                }

                                {/* div para ver docuemnto */}
                                {
                                    loading ? 
                                    (<LoadingForm class='loading-validation-document'/>)
                                    :
                                    (
                                        <div className={classes.iframe}>
                                            <img src={documento} alt="" draggable="false" />
                                            <img src={documento} alt="" draggable="false" />
                                        </div>
                                    )
                                }
                            </div>
                        </>
                    )
                    :
                    null
            }

            {
                validationFile === 1 ?
                    (<ValidarPackingList handleback={handleback}/>)
                    : ''
            }

        </div>
    )
}

export default ValidarInvoce
