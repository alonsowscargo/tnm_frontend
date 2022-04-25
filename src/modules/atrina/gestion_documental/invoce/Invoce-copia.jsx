import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Button from '@material-ui/core/Button';
import { Button } from 'reactstrap';
import ButtonGroup from '@material-ui/core/ButtonGroup';
// import Stack from '@material-ui/corel/Stack';
import IconButton from '@material-ui/core/IconButton';
import Carga_manual from '../carga_manual/Carga_manual';

////
// import { styled } from '@material-ui/core/styles';
// import ArrowForwardIosSharpIcon from '@material-ui/core/ArrowForwardIosSharp';
// import MuiAccordion from '@material-ui/core/Accordion';
// import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
// import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
// import Typography from '@material-ui/core/Typography';


///
// const Accordion = styled((props) => (
//     <MuiAccordion disableGutters elevation={0} square {...props} />
// ))(({ theme }) => ({
//     border: `1px solid ${theme.palette.divider}`,
//     '&:not(:last-child)': {
//         borderBottom: 0,
//     },
//     '&:before': {
//         display: 'none',
//     },
// }));

// const AccordionSummary = styled((props) => (
//     <MuiAccordionSummary
//         expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
//         {...props}
//     />
// ))(({ theme }) => ({
//     backgroundColor:
//         theme.palette.mode === 'dark'
//             ? 'rgba(255, 255, 255, .05)'
//             : 'rgba(0, 0, 0, .03)',
//     flexDirection: 'row-reverse',
//     '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
//         transform: 'rotate(90deg)',
//     },
//     '& .MuiAccordionSummary-content': {
//         marginLeft: theme.spacing(1),
//     },
// }));

// const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
//     padding: theme.spacing(2),
//     borderTop: '1px solid rgba(0, 0, 0, .125)',
// }));




/////

const ariaLabel = { 'aria-labelsvadf': 'descriptionsadv' };

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block',
        border: "3px solid red",
        height: 100
    }

})


const Invoce = (props) => {
    const classes = useStyles()
    const [cargaMasiva, setCargaMasiva] = useState(false);
    const [cargaManual, setCargaManual] = useState(false);


    const carMasiva = () => {
        alert('carga mavisa');
        setCargaMasiva(true);
    }
    const carManual = () => {
        setCargaManual(true);
    }
    const handback = () => {
        setCargaManual(false);
    }



    return (
        <div className="container-fluid viuw-full-page">
            <div className="row">
                <div className={cargaManual ? 'col-12 view-50vh view-scroll-y order-2' : 'col-6 view-100vh formulario-gestion'}>
                    {
                        cargaManual ?
                            (
                                <Carga_manual />
                            )
                            :
                            (
                                <>
                                    <div className="title-icon mb-3">
                                        <IconButton
                                            onClick={() => props.volver()}
                                            className="icon-small mr-2"
                                        >
                                            <i className="zmdi zmdi-chevron-left"></i>
                                        </IconButton>

                                        <h2 className="title-h2 font-weight-900">
                                            Invoce
                                        </h2>
                                    </div>

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
                                                <div className="col-6">
                                                    <InputLabel className="Label_Input_Format">total factura</InputLabel>
                                                    <Input
                                                        className={classes.field}
                                                        label="input 1"
                                                        inputProps={ariaLabel}
                                                        variant="filled"
                                                        size="small"
                                                    />
                                                </div>
                                                <div className="col-6">
                                                    <InputLabel className="Label_Input_Format">tipo moneda</InputLabel>
                                                    <Input
                                                        className={classes.field}
                                                        label="input 1"
                                                        inputProps={ariaLabel}
                                                        variant="filled"
                                                        size="small"
                                                    />
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                    <div className="content-buttons mt-5">
                                        <Button className="button button-gray button-50 mr-1"
                                            onClick={() => carManual()}
                                        >
                                            carga manual
                                        </Button>
                                        <Button className="button button-danger button-50 ml-1"
                                            onClick={() => carMasiva()}
                                        >
                                            carga masiva
                                        </Button>
                                    </div>
                                </>
                            )
                    }
                </div>

                <div className={cargaManual ? 'col-12 order-1 view-scroll-y view-50vh background-light' : 'col-6 view-100vh background-light'}>
                    {
                        cargaManual ?
                            (
                                <>
                                    <div className="title-icon">
                                        <IconButton
                                            onClick={() => handback()}
                                            className="icon-small mr-2"
                                        >
                                            <i className="zmdi zmdi-chevron-left"></i>
                                        </IconButton>

                                        <h4 className="title-h4 font-weight-900">
                                            Comercial DLL Spa / Invoce
                                        </h4>
                                    </div>
                                </>

                            )
                            :
                            (
                                <Button className="button button-primary button-absolute"
                                // onClick={() => carMasiva()}
                                >
                                    siguiente 
                                </Button>
                            )
                    }
                </div>
            </div> 
        </div>
    )
}

export default Invoce
