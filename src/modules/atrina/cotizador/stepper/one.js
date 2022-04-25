import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Uno from './stepperTwo/One';
import Dos from './stepperTwo/Two'
import Tres from './stepperTwo/Three'
import imgBox from './pp.jpeg';
import { Link } from 'react-router-dom'
import CloseIcon from '@material-ui/icons/Close';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import KeyboardTabIcon from '@material-ui/icons/KeyboardTab'
import EditIcon from '@material-ui/icons/Edit';

import {
    Avatar,
    Stepper,
    Step,
    StepLabel,
    StepContent,
    Button,
    Paper,
    Typography,
    IconButton,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    makeStyles
} from "@material-ui/core";

import {
    showBtnStepper,
    hiddenBtnStepper,
    mostrarFormUser,
    ocultarFormUser
} from '../Actions.js';

const useStyles = makeStyles((theme) => ({
    stepper: {
        background: 'transparent',
        padding: '0'
    },
    stepLabel: {
        background: '#fff',
    },
    iconLabel: {
        background: 'rgba(248, 201, 106, 0.471)',
        color: '#F8C96A',
        padding: '16px',
        marginRight: '16px'
    },
    iconLabelAtive: {
        background: 'rgba(111, 207, 151, 0.471)',
        color: '#6FCF97',
        padding: '16px',
        marginRight: '16px'
    },
    ButtonNav: {
        borderRadius: "100%",
        padding: '6px 12px',
        color: "#8F8F8F",
        fontSize: "20px",
        "&:hover": {
            backgroundColor: "transparent",
            color: "#44403f",
        }
    },
    icon: {
        fontSize: "16px"
    },
    avatarXl: {
        width: "80px",
        height: "80px",
        marginRight: "16px",
    },
    avatarXxl: {
        width: "180px",
        height: "180px",
        margin: "0 auto",

    },
    contentAvatar: {
        width: "100%"
    },
    paddingBottom: {
        padding: "0 24px",
        '@media screen and (max-width: 767px)': {
            padding: "0"
        }
    },
    closeButton: {
        position: 'absolute',
        right: "12px",
        top: "12px",
        color: theme.palette.grey[500],
    },
    titleDialog: {
        lineHeight: "24px",
        color: "#263238",
    }
}));

function getSteps() {
    return ['Datos de carga', 'Datos de contacto', 'Revisa tu cotización'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return <Uno />;
        case 1:
            return <Dos />;
        case 2:
            return <Tres />;
        default:
            return 'Unknown stepIndex';
    }
}

const CardOne = (props) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const {
        controlShow,
        controlMostar
    } = useSelector(({ Cotizador }) => Cotizador);

    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);

        if (activeStep === 1) {
            dispatch(mostrarFormUser({}))
            handleClickOpen()
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    const handleStep = (step) => () => {
        setActiveStep(step);

        if (step <= 1) {
            dispatch(ocultarFormUser({}))
        }
    };

    // // variable local
    //  dialog
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // sidebar fixed
    const [show, setShow] = useState(false);
    const handleShow = () => {
        const seccion = document.getElementsByClassName('aside');
        //console.log(window.scrollY);
        if (typeof window !== seccion) {
            if (window.pageYOffset > 278) {
                if (!show) {
                    console.log("set to true");
                    setShow(true);
                }
            }
            if (window.pageYOffset < 278) {
                console.log("set to false");
                setShow(false);
            }
        }
    };

    React.useEffect(() => {
        const seccion = document.getElementsByClassName('sidenav1');
        if (typeof window !== seccion) {
            window.addEventListener("scroll", handleShow);
        }
        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("scroll", handleShow);
            }
        };
    }, []);
    // sidebar fixed

    return (
        <>
            <div className="main-flex">
                {/* aside */}
                <aside className={show ? "aside aside-fixed" : "aside"}>
                    <h3 className="title-h3 font-weight-900 mb-3">Simula tu cotización para iniciar tu importación</h3>
                    <p className="text font-weight-400">Solo necesitas el metro cúbico (M3), peso y los productos a importar.</p>

                    <div className="border my-4"></div>

                    <h5 className="text-small font-weight-500 mb-3">Puedes hacer este proceso de manera <strong>fácil y rápida.</strong></h5>

                    <div className="title-icon">
                        <div className="cards-icon icon-succses icon-large mr-3"><LabelImportantIcon /></div>
                        <p className="text-small font-weight-400">Realizar nuevas cotizaciones</p>
                    </div>

                    <div className="title-icon my-3">
                        <div className="cards-icon icon-succses icon-large mr-3"><LabelImportantIcon /></div>
                        <p className="text-small font-weight-400">Darle Seguimiento detallado a tus impotaciones</p>
                    </div>

                    <div className="title-icon">
                        <div className="cards-icon icon-succses icon-large mr-3"><LabelImportantIcon /></div>
                        <p className="text-small font-weight-400">Darle Seguimiento detallado a tus impotaciones</p>
                    </div>

                    {
                        activeStep === 2 ?
                            (
                                <div>
                                    <div className="border my-4"></div>
                                    <h5 className="text font-weight-500 mb-3">Tu ejecutivo(a) comercial designado es:</h5>

                                    <div className="cards">
                                        <div className="cards-body content-space-betwee d-flex px-3">
                                            <Avatar alt="Remy Sharp" src={imgBox} className={classes.avatarXl} />

                                            <div className={`card-data ${classes.contentAvatar}`}>
                                                <h5 className="title-h5 font-weight-700 text-capitalize">lucylla tosso</h5>
                                                <p className="text-small font-weight-400">lucylla.tosso@wscargo.cl</p>
                                                <div className="border my-2"></div>
                                                <div className="align-item-center">
                                                    <Link to="#" className="link-phone">+569 90456789</Link>
                                                    <span className="slash mx-2">/</span>
                                                    <Link to="#" className="link-whatsApp"><WhatsAppIcon /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : null
                    }


                </aside>
                {/* fin aside */}

                {/* contenido right */}
                <section className="section">
                    <div className="stepper-cotizar pt-4 pt-md-0">
                        <Stepper activeStep={activeStep} className={classes.stepper} orientation="vertical">
                            {steps.map((label, index) => (
                                <Step key={label}>
                                    <StepLabel className={classes.stepLabel}>
                                        <div className="justify-space-between">
                                            <div className="align-item-center">
                                                <div className={activeStep < index + 1 ? (classes.iconLabel) : (classes.iconLabelAtive)}>
                                                    <LabelImportantIcon />
                                                </div>

                                                {label}
                                            </div>

                                            {
                                                activeStep < index + 1 ?
                                                    ''
                                                    :
                                                    (
                                                        <IconButton
                                                            onClick={handleStep(index)}
                                                            className={classes.ButtonNav}
                                                            aria-label="editar"
                                                        >
                                                            <EditIcon className={classes.icon} />
                                                        </IconButton>
                                                    )
                                            }
                                        </div>
                                    </StepLabel>

                                    <StepContent>
                                        {getStepContent(index)}
                                        <div className={`my-3 ${classes.paddingBottom}`} >
                                            {/* {activeStep === 1 ? (() => dispatch(mostrarFormUser({}))): (handleNext())} */}
                                            {
                                                activeStep === steps.length - 1 ?
                                                    ''
                                                    :
                                                    (
                                                        <Button className="button button-warning button-100-mobile" onClick={handleNext}>
                                                            <KeyboardTabIcon className="mr-2" /> {activeStep === 1 ? "Generar cotización" : "Siguiente"}
                                                        </Button>
                                                    )
                                            }

                                        </div>
                                    </StepContent>
                                </Step>
                            ))}
                        </Stepper>

                        {activeStep === steps.length && (
                            <Paper square elevation={0} className={classes.resetContainer}>
                                <Typography>All steps completed - you&apos;re finished</Typography>
                                <Button onClick={handleReset} className={classes.button}>
                                    Reset
                                </Button>
                            </Paper>
                        )}
                    </div>
                </section>

                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle className="mt-3 pb-0 justify-end" id="alert-dialog-title">
                        <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </DialogTitle>

                    <DialogContent>
                        <DialogContentText>
                            <Avatar alt="Remy Sharp" src={imgBox} className={classes.avatarXxl} />
                        </DialogContentText>
                    </DialogContent>
                    <DialogContent className="text-center mb-3">
                        <DialogContentText className={classes.titleDialog}>
                            ¡Hola, soy <strong>Lucylla Tosso</strong>!
                        </DialogContentText>
                        <DialogContentText>
                            Soy tu ejecutivo(a) comercial designada para acompañarte en este proceso de importación, antes dudas y consulta sobre el servicio puedes contactarte conmigo.
                        </DialogContentText>
                    </DialogContent>
                    {/* <DialogActions className="mb-3 mr-3">
                        <Button className="button button-primary" onClick={handleClose}>
                            Continuar
                        </Button>
                    </DialogActions> */}
                </Dialog>
                {/* contenido right */}
            </div>
        </>

    )
};

export default CardOne;