import React, { Fragment, useState } from 'react'
import FormTicket from '../formTicket/FormTicket'
import LoadingForm from './LoadingForm'
import documento from './uno.png'
import CargaPackingList from '../carga/CargaPackingList'
import ValidarInvoce from './ValidarInvoce';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

import {
    Button,
    Alert
} from 'reactstrap'

import {
    Input,
    InputLabel,
    FormGroup,
    FormControlLabel,
    Checkbox,
    IconButton,
    makeStyles,
    Box,
    Typography,
    Tab,
    Tabs,
    AppBar
} from "@material-ui/core"

import PropTypes from 'prop-types';

// tabs 
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

// tabs 

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

const PackingList = ({ handlebackInvoce, handleback }) => {
    const classes = useStyles();
    const [viewCambio, setViewCambio] = useState(0)
    const [openMensaje, setOpenMensaje] = useState(false)
    const [newmessage, setNewMessage] = useState(false)
    const [validationButton, setValidationButton] = useState(false)
    const [alertMessage, setAlertMessage] = useState(false)
    const [validarExcel, setValidarExcel] = useState(false)

    // tabs
    const [value, setValue] = React.useState(0);
    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
    };


    const abrirMensaje = () => {
        setOpenMensaje(true)
    }
    const closeMensaje = () => {
        setOpenMensaje(false)
        setAlertMessage(false)
        setNewMessage(false)
    }

    const handlebackCargaManual = () => {
        setViewCambio(2)
    }

    const addCargaManual = () => {
        setViewCambio(2)
    }

    const handlebackPackingList = () => {
        setViewCambio(0)
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
                            <div className="col-6 paddingCol">
                                <div className="title-icon mb-3">
                                    <IconButton
                                        onClick={() => handlebackInvoce()}
                                        className="icon-medium mr-2"
                                    >
                                        <i className="zmdi zmdi-chevron-left"></i>
                                    </IconButton>
                                    <h2 className="title-h2 text-capitalize font-weight-900">
                                        packing list
                                    </h2>
                                </div>

                                {
                                    loading ?
                                        //class='loading-form-packing'
                                        (<LoadingForm />)
                                        :
                                        (
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
                                                        <div className="col-3 pr-2">
                                                            <InputLabel className="Label_Input_Format">Volumen total</InputLabel>
                                                            <Input
                                                                label="input 1"
                                                                variant="filled"
                                                                size="small"
                                                            />
                                                        </div>
                                                        <div className="col-3 px-2">
                                                            <InputLabel className="Label_Input_Format">peso neto</InputLabel>
                                                            <Input
                                                                label="input 1"
                                                                variant="filled"
                                                                size="small"
                                                            />
                                                        </div>
                                                        <div className="col-3  px-2">
                                                            <InputLabel className="Label_Input_Format">peso bruto</InputLabel>
                                                            <Input
                                                                label="input 1"
                                                                variant="filled"
                                                                size="small"
                                                            />
                                                        </div>
                                                        <div className="col-3 pl-2">
                                                            <InputLabel className="Label_Input_Format">cantidad bultos</InputLabel>
                                                            <Input
                                                                label="input 1"
                                                                variant="filled"
                                                                size="small"
                                                            />
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

                                <div
                                    onClick={() => abrirMensaje()}
                                    className="title-icon my-4"
                                >
                                    <p className="text-small font-weight-500">Si los datos no concuerdan con el <strong>Invoce</strong>, comunicate con el ejecutivo</p>
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
                                        onClick={() => handleback()}
                                    >
                                        página principal
                                    </Button>
                                </div>
                            </div>

                            <div className={`col-6 ${classes.colRight}`}>
                                {/* div para ver docuemnto */}
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

                            {/* componente para enviar ticket a los ejecutivos */}
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
                    : null
            }


            {
                //  pantalla para generar carga invoce
                viewCambio === 2 ?
                    (
                        <div className="row">
                            <div className="col-6 view-100vh px-0">
                                <CargaPackingList
                                    handlebackPackingList={handlebackPackingList}
                                    validarExcel={validarExcel}
                                    setValidarExcel={setValidarExcel}
                                    handleValidarDocumento={handleValidarDocumento}
                                />
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

            {
                viewCambio === 3 ?
                    (
                        <ValidarInvoce
                            handlebackCargaManual={handlebackCargaManual}
                            handleback={handleback}
                        />
                    )
                    : null
            }
        </Fragment>
    )
}

export default PackingList
