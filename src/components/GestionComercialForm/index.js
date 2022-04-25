import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IntlMessages from 'util/IntlMessages';
import GestionComercialRegistroContactoForm from 'components/GestionComercialRegistroContactoForm';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function getSteps() {
  return [
    'REGISTRO CONTACTO'
    , 'CONACTO CLIENTE'
    , 'GENERACION PROPUESTA'
    , 'CREAR/ASIGNAR CLIENTE'
    , 'GENERAR FICHA/ETIQUETAS'
    , 'CREAR/ASIGNAR PROVEEDOR'
    , 'SOLICITUD PL'
    , 'REGISTRO/VALIDACION PL'
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0: return 'REGISTRO CONTACTO';
    case 1: return 'CONACTO CLIENTE';
    case 2: return 'GENERACION PROPUESTA';
    case 3: return 'CREAR/ASIGNAR CLIENTE';
    case 4: return 'GENERAR FICHA/ETIQUETAS';
    case 5: return 'CREAR/ASIGNAR PROVEEDOR';
    case 6: return '7.- ENVIO FICHA/ETIQUETAS';
    case 7: return '8.- SOLICITUD DE PROVEEDORES/CONSOLIDADES';

    default:
      return 'Unknown step';
  }
}

function getLoadStep(step) {
  switch (step) {
    case 0: return <GestionComercialRegistroContactoForm/>;
    case 1: return '2.- CONTACTO A CLIENTE';
    case 2: return '3.- REGISTRO ANTECEDENTES';
    case 3: return '4.- REGISTRO CLIENTES';
    case 4: return '5.- REGISTRO CONSIGNATARIO';
    case 5: return '6.- CREAR/ASIGNAR CLIENTE';
    case 6: return '7.- ENVIO FICHA/ETIQUETAS';
    case 7: return '8.- SOLICITUD DE PROVEEDORES/CONSOLIDADES';
    case 8: return '9.- REGISTRO/VALIDACION PROVEEDOR';
    case 9: return '10.- SOLICITUD PL';
    case 10: return '11.- REGISTRO/VALIDACION PL';
  }
}

export default function GestionComercial() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [loadStep, setLoadStep] = React.useState(0);
  const [loadModa, setLoadModal] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();

  const handleStep = (step) => () => {
    setActiveStep(step);
    setLoadStep(step);
  };

  return (
    <div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 d-flex page-heading mr-3">
          <Stepper nonLinear activeStep={activeStep}  orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepButton onClick={handleStep(index)} completed={completed[index]}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
        </div>
        <div className="
         col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8
         page-heading justify-content-sm-between">
          <Typography className={classes.instructions}>{getLoadStep(activeStep)}</Typography>
        </div>
      </div>
    </div>
  );
}