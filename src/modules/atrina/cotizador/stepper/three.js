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

import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import ErrorIcon from '@material-ui/icons/Error';



const useStyles = makeStyles((theme) => ({
    iframe: {
        width: "100%",
        height: "500px",
        '@media screen and (max-width: 767px)': {
            height:"315px"
        }
    }
}));


const CardThree = () => {
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
            if (typeof window !== seccion ) {
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
                <h3 className="title-h3 font-weight-900 mb-3">Sistema de etiqueta</h3>
                <p className="text font-weight-400">Toda información sobre el uso de etiquetas, lo encontraras en el siguiente video </p>
                <div className="border my-4"></div>
                <h5 className="text-small font-weight-500 mb-3">Recuerda que...:</h5>

                <div className="title-icon">
                    <div className="cards-icon icon-succses  icon-large mr-3"><LabelImportantIcon /></div>
                    <p className="text-small font-weight-400">Debes descargar tus etiquetas.</p>
                </div>
                <div className="title-icon my-3">
                    <div className="cards-icon icon-succses  icon-large mr-3"><LabelImportantIcon /></div>
                    <p className="text-small font-weight-400">Enviarle tus etiquetas a tu provveedor.</p>
                </div>

                <div className="title-icon">
                    <div className="cards-icon icon-succses icon-large mr-3"><LabelImportantIcon /></div>
                    <p className="text-small font-weight-400">Recuerdale a tu proveedor que debe identificar tus bultos.</p>
                </div>
            </aside>
            {/* fin aside */}

            {/* contenido right */}
            <section className="section">
                <iframe className={`pt-3 pt-md-0 ${classes.iframe}`} src="https://www.youtube-nocookie.com/embed/qlzQxVBAUTU?controls=0&amp;start=11" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
                <div className="cards my-3">
                    <div className="cards-body">
                        <div className="card-data">
                            <div className="title-icon mb-3">
                                <ErrorIcon className="icon-color-warning mr-3" style={{ fontSize: 40 }} />
                                <h5 className="title-h5 font-weight-700">Estimado(a) recuerda que...</h5>
                            </div>

                            <p className="text-small font-weight-400 mb-2 mb-md-1">Su proveedor debe identificar sus bultos con nuestras etiquetas, sin ellas no podemos confirmar recepción de su producto en tiempo y forma.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
};

export default CardThree;