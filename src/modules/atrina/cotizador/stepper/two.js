import React, { useEffect, useState, Component } from 'react';

import {
    InputLabel,
    TextField,
    FormControlLabel,
    makeStyles,
    IconButton,
    InputAdornment,
    Radio,
    RadioGroup,
    FormControl,
} from "@material-ui/core";

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';


const useStyles = makeStyles((theme) => ({
    ButtonNav: {
        padding: '0',
        height: '13px',
        width: '2%',
        color: "#8F8F8F",
        fontSize: "14px",
        "&:hover": {
            backgroundColor: "transparent",
            color: "#44403f",
        }
    },
    icon: {
        fontSize: "16px",
        marginLeft: "-30px"
    },
    label: {
        color: "#8F8F8F"
    },
    number: {
        padding: "3px 0 7px 0"
    }
}));


const CardTwo = () => {
    const classes = useStyles();

    // Radio Button
    const [value, setValue] = useState('1');
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    // input pass para mostrar contraseña
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    const handleClickShowRepeatPassword = () => setShowRepeatPassword(!showRepeatPassword);
    const handleMouseDownRepeatPassword = () => setShowRepeatPassword(!showRepeatPassword);
    // input pass para mostrar contraseña

    // sidebar fixed
    const [show, setShow] = useState(false);
    const handleShow = () => {
        const seccion = document.getElementsByClassName('aside');
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
        const seccion = document.getElementsByClassName('aside');
        if (typeof window !== seccion) {
            window.addEventListener("scroll", handleShow);
        }
        return () => {
            if (typeof window !== seccion) {
                window.removeEventListener("scroll", handleShow);
            }
        };
    }, []);
    // sidebar fixed


    // efecto top
    useEffect(() => {
        const body = document.querySelector('#top');

        body.scrollIntoView({
            behavior: 'smooth'
        }, 500)

    }, []);




    return (
        <div className="main-flex" id="top">
            {/* aside */}
            <aside className={show ? "aside aside-fixed" : "aside"}>
                <h3 className="title-h3 font-weight-900 mb-3">Registrate</h3>
                <p className="text font-weight-400">Para crear tu cuenta necesitamos los siguiente datos, Solo te tomará unos minutos.</p>
                <div className="border my-4"></div>
                <h5 className="text-small font-weight-500 mb-3">Al crear tu cuenta en WS Cargo podrás:</h5>

                <div className="title-icon">
                    <div className="cards-icon icon-succses  icon-large mr-3"><LabelImportantIcon /></div>
                    <p className="text-small font-weight-400">Realizar nuevas cotizaciones</p>
                </div>

                <div className="title-icon my-3">
                    <div className="cards-icon icon-succses icon-large mr-3"><LabelImportantIcon /></div>
                    <p className="text-small font-weight-400">Darle Seguimiento detallado a tus impotaciones</p>
                </div>
            </aside>
            {/* fin aside */}

            {/* contenido right */}
            <section className="section">
                {/* Radio Button */}


                {/* datos usuaerio */}
                <div className="form-content input-material-ui">
                    <div className="row">
                        <div className='col-12 mb-2'>
                            <h4 className="text font-weight-700 mb-2 text-capitalize">Perfil Usuario</h4>
                        </div>

                        {/* input */}
                        <div className="col-12 col-lg-4 mb-3 mb-md-0">
                            <InputLabel className="Label_Input_Format">Email</InputLabel>
                            <TextField
                                id="invoiceLocal-total-factura"
                                name="totalFactura"
                                placeholder="email@wscargo.cl"
                                type="email"
                            />
                        </div>

                        {/* input */}
                        <div className="col-6 col-lg-4">
                            <InputLabel className="Label_Input_Format">Contraseña</InputLabel>
                            <TextField
                                id="contraseña"
                                name="contraseña"
                                placeholder="Contraseña"
                                type={showPassword ? "text" : "password"}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </div>

                        {/* input */}
                        <div className="col-6 col-lg-4">
                            <InputLabel className="Label_Input_Format">Repetir Contraseña</InputLabel>
                            <TextField
                                id="repetir_contraseña"
                                name="repetir_contraseña"
                                placeholder="Repetir Contraseña"
                                type={showRepeatPassword ? "text" : "password"}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowRepeatPassword}
                                                onMouseDown={handleMouseDownRepeatPassword}
                                            >
                                                {showRepeatPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className="align-item-center my-3">
                    <h4 className="text-small font-weight-700 mr-3">Tipo de cuenta</h4>
                    <FormControl className="input-material-ui">
                        <RadioGroup row aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                            <FormControlLabel value="1" control={<Radio />} label="Empresa" />
                            <FormControlLabel value="2" control={<Radio />} label="Persona" />

                        </RadioGroup>
                    </FormControl>
                </div>

                {
                    // valur 1, perfil persona
                    value === "2" ?
                        (
                            <div className="form-content input-material-ui mb-3">
                                <div className="row">
                                    <div className='col-12 mb-2'>
                                        <h4 className="text font-weight-700 mb-2">Datos del importación</h4>
                                    </div>

                                    {/* input */}
                                    <div className="col-12 col-lg-4">
                                        <InputLabel className="Label_Input_Format">Rut</InputLabel>
                                        <TextField
                                            id="rut"
                                            name="rut"
                                            placeholder="17.678-909-k"
                                        />
                                    </div>

                                    {/* input */}
                                    <div className="col-12 col-lg-4 my-3 my-md-0">
                                        <InputLabel className="Label_Input_Format">Nombre</InputLabel>
                                        <TextField
                                            id="nombre"
                                            name="nombre"
                                            placeholder="Ingresa tu nombre"
                                        />
                                    </div>


                                    {/* input */}
                                    <div className="col-6 col-lg-4">
                                        <InputLabel className="Label_Input_Format">Email</InputLabel>
                                        <TextField
                                            id="email_tributario"
                                            name="email_tributario"
                                            placeholder="Email"
                                            type="email"
                                        />
                                    </div>

                                    {/* input */}
                                    <div className="col-6 col-lg-4 mt-0 mt-md-3">
                                        <InputLabel className="Label_Input_Format">Teléfono</InputLabel>
                                        <TextField
                                            id="tel"
                                            name="tel"
                                            placeholder="90234567"
                                            size="small"
                                            type="tel"
                                            InputProps={{
                                                startAdornment: <InputAdornment className={classes.number} position="start">+569</InputAdornment>
                                            }}
                                        />
                                    </div>

                                    <div className="col-12"><div className="border my-4"></div></div>


                                    <div className='col-12 mb-2'>
                                        <h4 className="text font-weight-700 mb-2">Dirección del importación</h4>
                                    </div>

                                    {/* input */}
                                    <div className="col-6 col-lg-4">
                                        <InputLabel className="Label_Input_Format">Calle</InputLabel>
                                        <TextField
                                            id="calle"
                                            name="calle"
                                            placeholder="Nombre de la calle o avenida"
                                        />
                                    </div>

                                    {/* input */}
                                    <div className="col-6 col-lg-4">
                                        <InputLabel className="Label_Input_Format">Número y/o Depto</InputLabel>
                                        <TextField
                                            id="numero"
                                            name="numero"
                                            placeholder="Numero o departamento"
                                            InputProps={{
                                                startAdornment: <InputAdornment className={classes.number} position="start">#</InputAdornment>
                                            }}
                                        />
                                    </div>

                                    {/* input */}
                                    <div className="col-12 col-lg-4 my-3 mt-md-0">
                                        <InputLabel className="Label_Input_Format">Comuna</InputLabel>
                                        <TextField
                                            id="comuna"
                                            name="comuna"
                                            placeholder="Ingresa tu comuna"
                                        />
                                    </div>

                                    {/* input */}
                                    <div className="col-12 col-lg-4">
                                        <InputLabel className="Label_Input_Format">Región</InputLabel>
                                        <TextField
                                            id="region"
                                            name="region"
                                            placeholder="Ingresa tu región"
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                        : null
                }

                {
                    // valur 2, perfil empresa
                    value === "1" ?
                        (
                            <>
                                {/* datos tributarios */}
                                <div className="form-content input-material-ui my-3">
                                    <div className="row">
                                        <div className='col-12 mb-2'>
                                            <h4 className="text font-weight-700 mb-2">Datos tributarios</h4>
                                        </div>
                                        {/* input */}
                                        <div className="col-12 col-lg-4">
                                            <InputLabel className="Label_Input_Format">Rut</InputLabel>
                                            <TextField
                                                id="rut_tributario"
                                                name="rut_tributario"
                                                placeholder="17.678-909-k"
                                            />
                                        </div>

                                        {/* input */}
                                        <div className="col-12 col-lg-4 my-3 my-md-0">
                                            <InputLabel className="Label_Input_Format">Razón Social</InputLabel>
                                            <TextField
                                                id="invoiceLocal-total-factura"
                                                name="totalFactura"
                                                placeholder="Describe tu razón social"
                                            />
                                        </div>

                                        {/* input */}
                                        <div className="col-12 col-lg-4">
                                            <InputLabel className="Label_Input_Format">Giro</InputLabel>
                                            <TextField
                                                id="giro"
                                                name="giro"
                                                placeholder="Detalle giro"
                                                size="small"
                                            />
                                        </div>

                                        {/* input */}
                                        <div className="col-6 col-lg-4 mt-3">
                                            <InputLabel className="Label_Input_Format">Email</InputLabel>
                                            <TextField
                                                id="email_tributario"
                                                name="email_tributario"
                                                placeholder="Email"
                                                type="email"
                                            />
                                        </div>

                                        {/* input */}
                                        <div className="col-6 col-lg-4 mt-3">
                                            <InputLabel className="Label_Input_Format">Teléfono</InputLabel>
                                            <TextField
                                                id="tel_tributario"
                                                name="tel_tributario"
                                                placeholder="90234567"
                                                size="small"
                                                type="tel"
                                                InputProps={{
                                                    startAdornment: <InputAdornment className={classes.number} position="start">+569</InputAdornment>
                                                }}
                                            />
                                        </div>

                                        <div className="col-12"><div className="border my-4"></div></div>

                                        <div className='col-12 mb-2'>
                                            <h4 className="text font-weight-700 mb-2 text-capitalize">Dirección Tributaria</h4>
                                        </div>

                                        {/* input */}
                                        <div className="col-6 col-lg-4">
                                            <InputLabel className="Label_Input_Format">Calle</InputLabel>
                                            <TextField
                                                id="calle"
                                                name="calle"
                                                placeholder="Nombre de la calle o avenida"
                                            />
                                        </div>

                                        {/* input */}
                                        <div className="col-6 col-lg-4">
                                            <InputLabel className="Label_Input_Format">Número y/o Depto</InputLabel>
                                            <TextField
                                                id="numero"
                                                name="numero"
                                                placeholder="Numero o departamento"
                                                InputProps={{
                                                    startAdornment: <InputAdornment className={classes.number} position="start">#</InputAdornment>
                                                }}
                                            />
                                        </div>

                                        {/* input */}
                                        <div className="col-12 col-lg-4 my-3 mt-md-0">
                                            <InputLabel className="Label_Input_Format">Comuna</InputLabel>
                                            <TextField
                                                id="comuna"
                                                name="comuna"
                                                placeholder="Ingresa tu comuna"
                                            />
                                        </div>

                                        {/* input */}
                                        <div className="col-12 col-lg-4">
                                            <InputLabel className="Label_Input_Format">Región</InputLabel>
                                            <TextField
                                                id="region"
                                                name="region"
                                                placeholder="Ingresa tu región"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* representante legal */}
                                <div className="form-content input-material-ui my-3">
                                    <div className="row">
                                        <div className='col-12 mb-2'>
                                            <h4 className="text font-weight-700 mb-2">Representante legal</h4>
                                        </div>
                                        {/* input */}
                                        <div className="col-12 col-lg-4 mb-0 mb-md-3">
                                            <InputLabel className="Label_Input_Format">Rut</InputLabel>
                                            <TextField
                                                id="rut_tributario"
                                                name="rut_tributario"
                                                placeholder="17.678-909-k"
                                            />
                                        </div>

                                        {/* input  */}
                                        <div className="col-12 col-lg-4 my-3 mt-md-0">
                                            <InputLabel className="Label_Input_Format">Nombre</InputLabel>
                                            <TextField
                                                id="nombre"
                                                name="nombre"
                                                placeholder="Nombre del representante legal"
                                            />
                                        </div>

                                        {/* input  */}
                                        <div className="col-12 col-lg-4 mb-3 mb-md-0">
                                            <InputLabel className="Label_Input_Format">Apellido</InputLabel>
                                            <TextField
                                                id="apellido"
                                                name="apellido"
                                                placeholder="Nombre del representante legal"
                                            />
                                        </div>

                                        {/* input */}
                                        <div className="col-6 col-lg-4">
                                            <InputLabel className="Label_Input_Format">Email</InputLabel>
                                            <TextField
                                                id="email_tributario"
                                                name="email_tributario"
                                                placeholder="Email@escargo.cl"
                                                type="email"
                                            />
                                        </div>

                                        {/* input */}
                                        <div className="col-6 col-lg-4">
                                            <InputLabel className="Label_Input_Format">Teléfono</InputLabel>
                                            <TextField
                                                id="tel_tributario"
                                                name="tel_tributario"
                                                placeholder="90234567"
                                                size="small"
                                                type="tel"
                                                InputProps={{
                                                    startAdornment: <InputAdornment className={classes.number} position="start">+569</InputAdornment>
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : null
                }
            </section>

        </div>
    )
};

export default CardTwo;