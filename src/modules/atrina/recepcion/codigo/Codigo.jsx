import React, { useState, useEffect } from "react";
import { Button } from 'reactstrap';
import Cliente from "../cliente/Cliente";
import Agregar_provedor from "../agregar_provedor/Agregar_provedor";
import Header from "../header/Header";
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';




const Codigo = () => {
    // useState
    const [modoRecepcion, setMdoRecepcion] = useState(0);
    const [agregarProveedor, setAgregarProveedor] = useState(false);
    const [abrirSearch, setAbrirSearch] = useState(false);
    // const [open, setOpen] = useState(false);

    // function  onclick
    const recepcion = () => {
        setMdoRecepcion(1);
        setAgregarProveedor(false);
    };

    // function  onclick
    const proveedor = () => {
        setAgregarProveedor(true);
        setMdoRecepcion(2);
        setOpen(true);
    };


    const openSearch = () => {
        setAbrirSearch(true)
        setMdoRecepcion(2)
    }

    // Close the full screen search box
    const closeSearch = () => {
        setAbrirSearch(false)
        setMdoRecepcion(0)
    }


    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            {
                modoRecepcion === 0 ?
                    (
                        <>
                            <Header
                                titulo1='Cliente'
                                titulo2=' '
                                class='header-recepcion'
                                iconBack='zmdi-chevron-left'
                                iconSearch='zmdi-search'
                                openSearch={openSearch}
                            />
                            
                            <div className="container carga-top">
                                <h4 className="title-h4 font-weight-900 text-color padding-subtitle">
                                    Código QR cliente
                                </h4>
                                <div className="qr" onClick={() => recepcion()}></div>
                            </div>

                            <div className="container mt-5">
                                <Button className="button button-primary button-100 text-uppercase" onClick={handleClickOpen}>
                                    CONTINUAR SIN CLIENTE
                                </Button>{ }
                            </div>

                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle className="mt-3 pb-0" id="alert-dialog-title">
                                    {"Continuar sin cliente ?"}
                                </DialogTitle>

                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Desea realizar la recepción de bultos sin Registrar un cliente.
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions className="mb-3">
                                    <Button className="button button-light px-4" onClick={handleClose}>
                                        No
                                    </Button>
                                    <Button className="button button-success mx-2 px-4" onClick={() => proveedor()}>
                                        Si
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </>

                    )
                    : ' '
            }

            {
                modoRecepcion === 1 ?
                    (<Cliente />)
                    :
                    ' '
            }

            {
                modoRecepcion === 2 ?
                    (
                        <div className={abrirSearch ? 'overlay abrir' : 'overlay cerrar'}>
                            <div className="overlay-content mx-4">
                                <div className="main-title d-flex align-items-center">
                                    <i class="zmdi zmdi-chevron-left" onClick={() => closeSearch()}></i>
                                    <h2 className="title-h1 font-weight-900 text-capitalize">
                                        Buscar Cliente
                                    </h2>
                                </div>

                                <FormGroup className="input-search">
                                    <Input
                                        type="search"
                                        name="search"
                                        id="exampleSearch"
                                        placeholder="Ingresa nombre del cliente"
                                    />

                                </FormGroup>

                                <div className="cards">
                                    <div className="cards-body content-space-between">
                                        <div className="card-data">
                                            <h5 className="title-h5 font-weight-700 text-capitalize">
                                                Yasmín MukledA
                                            </h5>
                                            <p className="text font-weight-400">
                                                Elaboración de hielo Marco López E.I.R.L
                                            </p>
                                        </div>
                                        <div className="cards-icon icon-succses">
                                            <i class="zmdi zmdi-edit zmdi-hc-lg"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    : ''
            }

            {
                agregarProveedor ?
                    (<Agregar_provedor />)
                    :
                    ''
            }


        </>
    );
};

export default Codigo;