import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardOne from './stepper/one';
import CardTwo from './stepper/two';
import CardThree from './stepper/three';
import imgBox from './placeholder.jpg'
import Header from './header/Header';
import EditIcon from '@material-ui/icons/Edit';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import CloseIcon from '@material-ui/icons/Close';
import KeyboardTabIcon from '@material-ui/icons/KeyboardTab';


import {
  Avatar,
  Stepper,
  Step,
  StepLabel,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  makeStyles,
  
} from "@material-ui/core";

import {
  showBtnStepper,
  hiddenBtnStepper,
  mostrarFormUser,
  ocultarFormUser
} from './Actions';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  bgStepper: {
    background: 'transparent',
    padding: '24px 100px 24px 100px'
  },
  avatarXxl: {
    width: "180px",
    height: "180px",
    margin: "0 auto",

  },
  iconLabel: {
    color: 'red',
    padding: '8px',
  },
  iconLabelAtive: {
    color: "#fff",
  },
}));

function getSteps() {
  return ['Cotizar', 'Registar', 'Etiquetas'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <CardOne />;
    case 1:
      return <CardTwo />;
    case 2:
      return <CardThree />;
    default:
      return 'Unknown stepIndex';
  }
}

const RecepcionForm = (props) => {
  const dispatch = useDispatch();

  const {
    controlShow,
    controlMostar
  } = useSelector(({ Cotizador }) => Cotizador);


  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [prueba, setPrueba] = useState(3);
  const steps = getSteps();
  // variable local
  const [viuwForm, setViuwForm] = useState(false);

  useEffect(() => {
    setViuwForm(controlMostar);
  }, [controlMostar]);



  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setPrueba(prueba - 1)
    if (activeStep === 1) {
      handleClickOpen()
    }
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
    setPrueba(prueba + 1)
    if (step === 0) {
      dispatch(ocultarFormUser({}))
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setPrueba(prueba + 1)
  };

  const handleReset = () => {
    setActiveStep(0);
    setPrueba(3)
  };

  //  dialog
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <Header />
      <div className="container-fuid paddingContainer">

        <h2 className="title-h2 font-weight-900">Estas a {prueba} pasos para comenzar tu importación...</h2>

        <div className={`stepper-principal ${classes.root}`}>
          <Stepper activeStep={activeStep} className={classes.bgStepper}>
            {steps.map((label, index) => (
              <Step key={index} className={classes.stepper}>
                <StepLabel>
                  <div className="justify-center-center" onClick={activeStep < index + 1 ? "" : (handleStep(index))}>
                    <div className={activeStep < index + 1 ? "icon-label" : "icon-label-ative"}>
                      {activeStep < index + 1 ? (<LabelImportantIcon />) : (<EditIcon className={classes.icon} />)}
                    </div>
                    {label}
                  </div>
                </StepLabel>
              </Step>
            ))}
          </Stepper>

          <div className={classes.instructions}>{getStepContent(activeStep)}</div>
          {/* <div>
            {activeStep === steps.length ? (
              <div>
                <Typography className={classes.instructions}>All steps completed</Typography>
                <Button onClick={handleReset}>Reset</Button>
              </div>
            ) : (
              <div>
                <div className={classes.instructions}>{getStepContent(activeStep)}</div>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                  >
                    Back
                  </Button>
                  <Button variant="contained" color="primary" 
                    onClick={handleNext}
                    onClick={() => { handleNext(); dispatch(mostrarFormUser({}));}}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next LLLL'}
                  </Button>
                </div>
              </div>
            )}
          </div> */}
          {
            viuwForm ?
              (
                <div className="justify-end mb-5 mr-2">
                  <Button className="button button-primary button-100-mobile" onClick={handleNext}>
                    <KeyboardTabIcon className="mr-2" /> {activeStep === steps.length - 1 ? 'Iniciar Inportación' : 'Siguiente Etapa'}
                  </Button>
                </div>
              )
              : null
          }
        </div>


        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle className="pb-0 pt-2 justify-end" id="alert-dialog-title">
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
              ¡Listo <strong>Evidal</strong>!
            </DialogContentText>
            <DialogContentText className="px-0 px-md-5">
              Estimado(a) Te haz registrado con éxito, revisa la bandeja de entrada de tu correo para activar tu cuenta.
            </DialogContentText>
          </DialogContent>
          {/* <DialogActions className="mb-3 mr-3">
                        <Button className="button button-primary" onClick={handleClose}>
                            Continuar
                        </Button>
                    </DialogActions> */}
        </Dialog>


      </div>
    </>

  )
};

export default RecepcionForm;