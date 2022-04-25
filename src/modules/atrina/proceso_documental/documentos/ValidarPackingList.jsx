import React, { useState } from 'react'
import documento from './uno.png'
import LoadingForm from './LoadingForm';


import {
    Alert,
    Button,
    UncontrolledAlert 
} from 'reactstrap';

import {
    Chip,
    IconButton,
    makeStyles,
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
        width: "100%,",
        zIndex: 2,
        height: "10vh",
        display: "flex",
        // justifyContent: "flex-end",
        alignItems: "flex-end"
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

const ValidarPackingList = ({ handleback }) => {
    const classes = useStyles();
    const [validationButton, setValidationButton] = useState(false)
    const [filePacakingList, setFilePacakingList] = useState(false)
    const [loading, setLoading] = useState(false)

    // const backValidation
    const prueba = () => {
        setFilePacakingList(true)
    }
    // State loading button validar invoce
    const loadingButtonValidar = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setValidationButton(true)
        }, 3000)
    }

    return (
        <>
            <div className={`col-6 ${classes.colLeft}`}>
                {/* div para ver docuemnto */}
                <div className={classes.iframe}>
                    <img src={documento} alt="" draggable="false" />
                    <img src={documento} alt="" draggable="false" />
                </div>

                {/* descargar documentos */}
                <div className={`${classes.positionTop} px-5`}>
                    <Chip label="Antiguo" />
                </div>
            </div>

            <div className={`col-6 ${classes.colRight }`}>
                <div className={`${classes.positionTop} px-5`}>
                    <Chip label="Nuevo"  className={classes.muiChip} />
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
                            //<div className="position-bottom flex-end px-5">
                            <div className={`${classes.positioBottom} px-5`}>
                                <Button className="button button-primary button-50 ml-1"
                                    onClick={() => loadingButtonValidar()}
                                >
                                    Validar Packing List
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
                                    onClick={() => handleback()}
                                >
                                    Página principal
                                </Button>
                            </div>
                        )
                        : null
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
                            // <div className="iframe">
                            //     <img src={documento} alt="" draggable="false" />
                            //     <img src={documento} alt="" draggable="false" />
                            // </div>
                        )
                }
            </div>

        </>
    )
}

export default ValidarPackingList
