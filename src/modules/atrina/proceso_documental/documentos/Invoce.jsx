import React, { useState } from 'react'
import FormTicket from '../formTicket/FormTicket'
import CargaInvoce from '../carga/CargaInvoce'
import LoadingForm from './LoadingForm'
import documento from './uno.png'
import PackingList from './PackingList'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

import {
    Button,
    Alert
} from 'reactstrap'

import {
    InputLabel,
    TextField,
    FormControl,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Select,
    MenuItem,
    makeStyles,
    IconButton,
    Box,
    Typography,
    Tab,
    Tabs,
    AppBar
} from "@material-ui/core"

import PropTypes from 'prop-types';

// funciton tabs 
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
// funciton tabs 

const useStyles = makeStyles({
    colRight: {
        height: '100vh',
        boxShadow: '-8px 0px 26px 0px rgba(0, 0, 0, 0.103)',
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
    appTabs: {
        position: 'absolute',
        top: 0,
        left: 0,
        background: 'rgba(255, 255, 255, 0.000)',
        boxShadow: 'none',
        alignItems: 'flex-end',
        padding: '8px 48px'
    },
    tabs: {
        transition: '.6s',
        "& .MuiTabs-indicator": {
            display: "none"
        },
        "& .MuiTab-textColorPrimary": {
            color: '#ccc#fafafa',
        },
        "& .Mui-selected": {
            backgroundColor: "#fafafa",
            color: '#ccc',
            transition: '.6s all ease',
            boxShadow: "0px 0px 2px rgb(0 0 0 / 10%)"
        },
        "& .MuiTab-root": {
            minWidth: '50px'
        }
    }
});

const Invoce = ({ handleback }) => {
    const classes = useStyles();
    const [openMensaje, setoOpenMensaje] = useState(false)
    const [validationButton, setValidationButton] = useState(false)
    const [alertMessage, setAlertMessage] = useState(false)
    const [viewCambio, setViewCambio] = useState(0)
    const [newmessage, setNewMessage] = useState(false)

    const [age, setAge] = useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    // tabs
    const [value, setValue] = React.useState(0);
    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
    };


    const handlebackInvoce = () => {
        setViewCambio(0)
    };

    const abrirMensaje = () => {
        setoOpenMensaje(true)
    }
    const closeMensaje = () => {
        setoOpenMensaje(false)
        setAlertMessage(false)
        setNewMessage(false)
    }

    const packingList = () => {
        setViewCambio(1)
    }

    const addCargaManual = () => {
        setViewCambio(2)
    }

    // State para loading validar datos
    const [loading, setLoading] = useState(false)
    const cambiarEstado = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setValidationButton(true)
        }, 3000)
    }

    return (
        <div className="container-fluid viuw-full-page">
            {
                // State principal
                viewCambio === 0 ?
                    (
                        <div className="row">
                            <div className="col-6 paddingCol">
                                <div className="title-icon mb-3">
                                    <IconButton
                                        onClick={() => handleback()}
                                        className="icon-medium mr-2"
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
                                            // form para comparar información con el Invoce
                                            <div className="form-content">
                                                <form className="gestion">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <FormGroup>
                                                                <InputLabel className="Label_Input_Format">nombre cliente</InputLabel>
                                                                <FormControlLabel control={<Checkbox defaultChecked />} label="2500 / Comercial DLL Spa / 14.678.987.5" />
                                                            </FormGroup>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="border my-3"></div>
                                                        </div>
                                                        <div className="col-12">
                                                            <FormGroup>
                                                                <InputLabel className="Label_Input_Format">nombre proveedor</InputLabel>
                                                                <FormControlLabel control={<Checkbox defaultChecked />} label="89 / Shanghai Holley / nombre chino" />
                                                            </FormGroup>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="border my-3"></div>
                                                        </div>
                                                        <div className="col-6 pr-2">
                                                            <InputLabel className="Label_Input_Format">total factura</InputLabel>
                                                            <TextField
                                                                id="invoiceLocal-total-factura"
                                                                name="totalFactura"
                                                                defaultValue="10.0000"
                                                                size="small"
                                                            />
                                                        </div>
                                                        <div className="col-6 pl-2">
                                                            <InputLabel className="Label_Input_Format">Seleccionar moneda</InputLabel>
                                                            <FormControl>
                                                                <Select
                                                                    labelId="demo-simple-select-label"
                                                                    id="demo-simple-select"
                                                                    value={age}
                                                                    onChange={handleChange}
                                                                    displayEmpty
                                                                >
                                                                    <MenuItem value="" disabled>
                                                                        Tipo Moneda
                                                                    </MenuItem>
                                                                    <MenuItem key="YUAN" value="10">
                                                                        YUAN
                                                                    </MenuItem>
                                                                    <MenuItem key="USD" value="20">
                                                                        USD
                                                                    </MenuItem>
                                                                    <MenuItem key="CLP" value="30">
                                                                        CLP
                                                                    </MenuItem>
                                                                </Select>
                                                            </FormControl>
                                                        </div>

                                                        {
                                                            // State de validación de datos
                                                            validationButton ?
                                                                (
                                                                    <div className="col-12 mt-3">
                                                                        <Alert color="success" className='mb-0'>
                                                                            Los datos se han Validado correctamente.
                                                                        </Alert>
                                                                    </div>
                                                                )
                                                                :
                                                                (
                                                                    <div className="col-12 mt-3">
                                                                        <Button
                                                                            className="button button-danger button-100"
                                                                            onClick={() => cambiarEstado()}
                                                                        >
                                                                            validar información
                                                                        </Button>
                                                                    </div>
                                                                )
                                                        }
                                                    </div>
                                                </form>
                                            </div>
                                        )
                                }

                                {/* <Fade in={todo.in} timeout={400}> */}
                                <div
                                    className="title-icon my-4"
                                    onClick={() => abrirMensaje()}
                                >
                                    <p className="text-small font-weight-500">
                                        Si los datos no concuerdan con el <strong>Invoce</strong>, comunicate con el ejecutivo
                                    </p>
                                    <IconButton className="icon-medium ml-2">
                                        <i class="zmdi zmdi-mail-send"></i>
                                    </IconButton>
                                </div>


                                <div className="content-buttons">
                                    {
                                        // State disabled para el btn generar carga
                                        validationButton ?
                                            (
                                                <Button
                                                    className="button button-danger button-50 mr-1"
                                                    onClick={() => addCargaManual()}
                                                >
                                                    generar carga
                                                </Button>
                                            )
                                            :
                                            (
                                                <Button
                                                    className="button button-danger button-50 mr-1"
                                                    onClick={() => addCargaManual()}
                                                    disabled
                                                >
                                                    generar carga
                                                </Button>
                                            )
                                    }


                                    <Button
                                        className="button button-primary button-50 ml-1"
                                        onClick={() => packingList()}
                                    >
                                        Continuar sin Invoce
                                    </Button>

                                </div>
                            </div>

                            <div className={`col-6 ${classes.colRight}`}>
                                <AppBar position="static" className={classes.appTabs}>
                                    <Tabs
                                        value={value}
                                        onChange={handleChangeTab}
                                        aria-label="simple tabs example"
                                        className={classes.tabs}
                                        textColor="primary"
                                    >
                                        <Tab icon={<InsertDriveFileIcon />} aria-label="invoce 1" {...a11yProps(0)} />
                                        <Tab icon={<InsertDriveFileIcon />} aria-label="invoce 2" {...a11yProps(1)} />
                                    </Tabs>
                                </AppBar>
                                <TabPanel value={value} index={0} className={classes.iframe}>
                                    <img src={documento} alt="" draggable="false" />
                                    <img src={documento} alt="" draggable="false" />
                                </TabPanel>
                                <TabPanel value={value} index={1} className={classes.iframe}>
                                    <img src={documento} alt="" draggable="false" />
                                </TabPanel>
                            </div>

                            {/* módulo para enviar ticket a ejecutivo */}
                            <FormTicket
                                closeMensaje={closeMensaje}
                                openMensaje={openMensaje}
                                alertMessage={alertMessage}
                                setAlertMessage={setAlertMessage}
                                newmessage={newmessage}
                                setNewMessage={setNewMessage}
                            />
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
                //  pantalla para generar carga invoce
                viewCambio === 2 ?
                    (
                        <div className="row">
                            <div className="col-6 view-100vh px-0">
                                <CargaInvoce handlebackInvoce={handlebackInvoce}  packingList={packingList}/>
                            </div>

                            <div className={`col-6 ${classes.colRight}`}>
                                {/* div para ver docuemnto */}
                                <div className={classes.iframe}>
                                    <img src={documento} alt="" draggable="false" />
                                </div>
                            </div>
                        </div>
                    ) :
                    null
            }
        </div>
    )
}

export default Invoce
