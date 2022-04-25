import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import AddIcon from '@material-ui/icons/Add';
import ErrorIcon from '@material-ui/icons/Error';
import RemoveIcon from '@material-ui/icons/Remove';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';


import {
    Avatar,
    Box,
    Typography,
    Tab,
    Tabs,
    AppBar,
    FormControlLabel,
    Checkbox,
    FormGroup,
    AccordionDetails,
    AccordionSummary,
    Accordion,
    Button,
    Hidden
} from "@material-ui/core";

// Function Tabs MUI //
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
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
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}
// Function Tabs MUI //

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        background: "#fff",
        padding: "32px 0",
        boxShadow: "0px 0px 6px rgb(0 0 0 / 10%)",
        borderRadius: "4px",
    },
    contentBotton: {
        marginLeft: "48px",
        '@media screen and (max-width: 767px)': {
            marginLeft: "24px",
        }
    },
    contentTop: {
        margin: "0 48px",
        '@media screen and (max-width: 767px)': {
            margin: "0 24px",
        }
    },
    button: {
        background: "tranparent",
        border: "solid 2px #8F8F8F",
        color: "#8F8F8F",
        fontSize: "12px",
        padding: "8px 16px",
        '&:hover ': {
            background: "#F5F5F5",
            border: "solid 2px #F5F5F5",
        }
    },
    uno: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        width: "90% !import"
    },
    icon: {
        fontSize: "16px",
        color: "8F8F8F"
    }
}));

// obj. info tabs China/Chile/Otros //
const ItemTabsChinaMostrar = [
    {
        text: 'Recepción de carga en puerto de China.'
    },
    {
        text: 'Confirmación de recepción de carga en China.'
    },
    {
        text: 'Almacenaje de bodega en China.'
    },
    {
        text: 'Consolidación de contenedor junto a otras cargas.'
    }
]
const ItemTabsChinaOcultar = [
    {
        text: 'Agente de aduanas.'
    },
    {
        text: 'Documentación de aduanas.'
    },
    {
        text: 'Gastos de aduanas.'
    },
    {
        text: 'Certificado de origen para hacer valer el TLC en Chile (sólo para el servicio po M3 y costo de productos superior a $1.000 USD total).'
    },
    {
        text: 'Transporte marítimo con naviera.'
    },
]
const ItemTabsChileMostrar = [
    {
        text: 'Agencia de aduanas.'
    },
    {
        text: 'Documentación de aduana.'
    },
    {
        text: 'Trámite pago de IVA importación en Chile.'
    },
    {
        text: 'Gastos de aduana en Chile.'
    }
]
const ItemTabsChileOcultar = [
    {
        text: 'Gastos portuarios en Chile.'
    },
    {
        text: 'Desconsolidación en Chile.'
    },
    {
        text: 'Gastos por eventual aforo físico.'
    },
    {
        text: 'Almacenaje en Chile.'
    },
    {
        text: 'Transporte a la bodega en Santiago.'
    },
]
const ItemTabsOtrasCondiciones = [
    {
        text: 'Se considera  solo una programación de despacho en Chile de común acuerdo. Si no se encuentra en el lugar para recibir en fecha y hora programada. Puede retirar en nuestra bodega o solicitar nuevo despacho con costo adicional.'
    },
    {
        text: 'Considerar cobro de almacenaje si carga no se programa dentro de los 3 días siguientes a notificación de arribo.'
    }
]
// obj. info tabs China/Chile/Otros //

const Three = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = useState(0);
    const [open, setOpen] = useState(true);
    const [openTwo, setOpenTwo] = useState(true);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const handleClick = () => {
        setOpen(!open);
    };

    const handleClickOpen = () => {
        setOpenTwo(!openTwo);
    };

    return (
        <>
            <div className="cards">
                <div className="cards-body pb-0">
                    <div className="card-data">
                        <h5 className="title-h5 font-weight-700 mb-2">Cotización (22/01/2022)</h5>
                        <p className="text-small font-weight-400">Acontinuación encontraras el valor de tu cotización y los costos asociados al <strong>servicio de WS Cargo</strong> (Esta cotización tiene una duración de 7 días).</p>
                    </div>
                </div>

                <div className="cards-body content-space-between pt-3 pb-2">
                    <p className="text font-weight-500 ml-2">Detalle</p>

                    <div className="card-data justify-end">
                        <h5 className="text font-weight-500">30kg  /  29 m³ / Lámparas</h5>
                    </div>
                </div>

                <div className="cards-body content-space-between py-2" onClick={() => handleClickOpen()}>
                    
                    <div className="title-icon">
                        {openTwo ? (<ExpandMoreIcon className={classes.icon} />) : (<ExpandLessIcon className={classes.icon} />)}
                        <p className="text font-weight-500 ml-1">Tarifa</p>
                    </div>

                    <div className="card-data justify-end">
                        <h5 className={`text font-weight-500 ${classes.uno}`}>405 USD/m3</h5>
                    </div>
                </div>

                {
                    openTwo ? '' :
                        (

                            <div className="cards-body py-2">
                                <div className="card-data">
                                    <p className="text-small font-weight-400">- Para cargas con volumen <strong>menor a 5 m3</strong>, se debe agregar <strong>100 USD</strong> como base.</p>
                                    <p className="text-small font-weight-400 py-3 py-md-2">- Hasta <strong>500 kg/m3</strong></p>
                                    <p className="text-small font-weight-400">- Valor final se calcula con <strong>m3 exactos (mínimo 1 m3).</strong> Si traes 6,3 m3, el valor del servicio es <strong>6,3x405= 2.551,5 USD</strong></p>
                                </div>
                            </div>
                        )
                }

                <div className="cards-body py-3"><div className="border"></div></div>

                <div className="cards-body content-space-between py-0">
                    <h4 className="title-h4 font-weight-700">Total</h4>

                    <div className="card-data card-data justify-end">
                        <h4 className="title-h4 font-weight-700">$1.000.000</h4>
                    </div>
                </div>


                <div className="cards-body content-space-between pt-4 pb-3">
                    <div className="card-data">
                        <p className="text font-weight-500">Propuesta comercial</p>
                    </div>

                    <Button size="small" className={classes.button} onClick={handleClick}>
                        Descargar
                    </Button>
                </div>

                <div className="cards-body pt-0">
                    <FormGroup className="input-material-ui">
                        <FormControlLabel control={<Checkbox />} label="He leído y acepto las condiciones de la propuesta comercial." />
                    </FormGroup>
                </div>
            </div>


            {/* tabs */}
            <div className={`tabs-material-ui ${classes.root}`}>
                <div className={`mb-2 ${classes.contentTop}`}>
                    <h5 className="title-h5 font-weight-700">Qué incluye nuestro servicio</h5>

                    {/* <h4 className="text font-weight-500 mb-2">Qué incluye nuestro servicio</h4> */}
                </div>

                <AppBar position="static">
                    <Hidden smDown>
                        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                            <Tab label="En China" {...a11yProps(0)} />
                            <Tab label="En Chile" {...a11yProps(1)} />
                            <Tab label="Otras condiciones" {...a11yProps(2)} />

                            {/* <Hidden xsDown><Tab label="Otras condiciones" {...a11yProps(3)} /></Hidden> */}
                        </Tabs>
                    </Hidden>

                    <Hidden smUp>
                        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                            <Tab label="En China" {...a11yProps(0)} />
                            <Tab label="En Chile" {...a11yProps(1)} />
                        </Tabs>
                    </Hidden>
                </AppBar>

                <TabPanel value={value} index={0}>
                    {
                        ItemTabsChinaMostrar.map((item, index) => (
                            <div className="list_item" key={index}>
                                <div className="text-small font-weight-400">{item.text}</div>
                            </div>
                        ))
                    }
                    {
                        // info no visible
                        open ? '' :
                            (
                                <>
                                    {
                                        ItemTabsChinaOcultar.map((item, index) => (
                                            <div className="list_item" key={index}>
                                                <div className="text-small font-weight-400">{item.text}</div>
                                            </div>
                                        ))
                                    }

                                </>
                            )
                    }
                </TabPanel>

                <TabPanel value={value} index={1}>
                    {
                        ItemTabsChileMostrar.map((item, index) => (
                            <div className="list_item" key={index}>
                                <div className="text-small font-weight-400">{item.text}</div>
                            </div>
                        ))
                    }

                    {
                        // info no visible
                        open ? '' :
                            (
                                <>
                                    {
                                        ItemTabsChileOcultar.map((item, index) => (
                                            <div className="list_item" key={index}>
                                                <div className="text-small font-weight-400">{item.text}</div>
                                            </div>
                                        ))
                                    }

                                </>
                            )
                    }
                </TabPanel>

                <TabPanel value={value} index={2}>
                    {
                        ItemTabsOtrasCondiciones.map((item, index) => (
                            <div className="list_item" key={index}>
                                <div className="text-small font-weight-400">{item.text}</div>
                            </div>
                        ))
                    }
                </TabPanel>

                <div className={classes.contentBotton}>
                    <Button size="small" className={classes.button} onClick={handleClick}>
                        {open ? 'Ver más' : 'Ver menos'}
                    </Button>
                </div>
            </div>

            <div className="cards mt-3">
                <div className="cards-body">
                    <div className="card-data">
                        <div className="title-icon mb-3">
                            <ErrorIcon className="icon-xl icon-color-danger mr-3" style={{ fontSize: 40 }} />
                            <h5 className="title-h5 font-weight-700">El servicio excluye</h5>
                        </div>

                        <p className="text-small font-weight-400 mb-2 mb-md-1">- IVA de importación. Para dudas consultar con tu ejecutivo comercial o en <Link to="#" className="link">(preguntas frecuentes)</Link></p>
                        <p className="text-small font-weight-400">- Certificados exigidos por autoridad para algunos productos. <Link to="#" className="link">(Ver información Aduana)</Link></p>
                    </div>
                </div>
            </div>

            <Hidden smUp>
                <Accordion className="mt-1">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Otras Condiciones</Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <div>
                            <p className="text-small font-weight-400 mb-2">
                                - Se considera  solo una programación de despacho en Chile de común acuerdo. Si no se encuentra en el lugar para recibir en fecha y hora programada. Puede retirar en nuestra bodega o solicitar nuevo despacho con costo adicional.
                            </p>
                            <p className="text-small font-weight-400">
                                - Considerar cobro de almacenaje si carga no se programa dentro de los 3 días siguientes a notificación de arribo.
                            </p>

                        </div>
                    </AccordionDetails>
                </Accordion>
            </Hidden>
        </>
    )
}

export default Three
