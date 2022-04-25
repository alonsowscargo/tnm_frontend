import React, { useState } from 'react';
import { Button } from 'reactstrap';
import Detalle from '../detalle_carga/Detalle'
import Header from '../header/Header'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Resumen = () => {
    const [modoRecepcion, setmMdoRecepcion] = useState(false)

    // function  onclick 
    const recepcion = () => {
        setmMdoRecepcion(true)
    }

    // alert  eliminar productos
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
                modoRecepcion ?
                    (
                        <Detalle
                            title1="Proceso"
                            title2="Finalizado con éxito."
                            texto1="Estimado(a), haz completado con éxito esta recepción de bultos."
                            btn={false}
                        />
                    )
                    :
                    (
                        <>
                            <Header
                                titulo1='Resumen'
                                titulo2=''
                                class='header-recepcion'
                                iconBack='zmdi-chevron-left'
                            />

                            <div className="container carga-top">
                                <div className="padding-subtitle">
                                    <h3 className="title-h3 font-weight-900 text-color text-capitalize">Cliente</h3>
                                    <p className="text font-weight-400 text-color text-capitalize">
                                        Comercial DLL Spa
                                    </p>
                                </div>

                                <div className="padding-subtitle">
                                    <h3 className="title-h3 font-weight-900 text-color text-capitalize ">Bultos</h3>
                                    <p className="text font-weight-400 text-color text-capitalize">
                                        Recibidos 9<span className="slash">/</span>Esperados 10
                                    </p>
                                </div>

                                <div className="margin-top">
                                    <h3 className="title-h3 font-weight-900 text-capitalize padding-subtitle">
                                        Detalle carga
                                    </h3>
                                </div>
                                

                                <div className="cards cards-resumen mb-3">
                                    <div className="cards-header content-space-between">
                                        <h4 className="title-h4 font-weight-900 text-capitalize mb-0">
                                            proveedor
                                        </h4>
                                        <div className="cards-icon icon-succses">
                                            <i class="zmdi zmdi-translate"></i>
                                        </div>
                                    </div>

                                    <div className="cards-body">
                                        <div className="card-data">
                                            <h5 className="title-h5 font-weight-700 text-capitalize">
                                                Shanghai Holley
                                            </h5>
                                            <p className="text font-weight-400 text-capitalize">
                                                Shangai Holley<span className="slash">/</span>Código 45678
                                            </p>
                                        </div>
                                    </div>

                                    <div className="cards-header">
                                        <h4 className="title-h4 font-weight-900 text-capitalize mb-0">
                                            Carga
                                        </h4>
                                    </div>

                                    <div className="cards-body content-space-between">
                                        <div className="card-data">
                                            <h5 className="title-h5 font-weight-700 text-capitalize">
                                                Sillas Gamer
                                            </h5>
                                            <p className="text font-weight-400 text-capitalize">
                                                105 m³<span className="slash">/</span>45 bultos<span className="slash">/</span>7 kg
                                            </p>
                                        </div>
                                        
                                        <div className="cards-icon icon-small icon-danger"
                                            onClick={() => handleClickOpen()}>
                                            <i class="zmdi zmdi-close"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="cards cards-resumen mb-3">
                                    <div className="cards-header content-space-between">
                                        <h4 className="title-h4 font-weight-900 text-capitalize mb-0">
                                            proveedor
                                        </h4>
                                        <div className="cards-icon icon-warning">
                                            <i class="zmdi zmdi-translate"></i>
                                        </div>
                                    </div>

                                    <div className="cards-body">
                                        <div className="card-data">
                                            <p className="text font-weight-400">
                                                Sin Información, no hay datos registrados
                                            </p>
                                        </div>
                                    </div>

                                    <div className="cards-header">
                                        <h4 className="title-h4 font-weight-900 text-capitalize mb-0">
                                            Carga
                                        </h4>
                                    </div>

                                    {/* producto 1 */}
                                    <div className="cards-body content-space-between">
                                        <div className="card-data">
                                            <h5 className="title-h5 font-weight-700 text-capitalize">
                                                máquina trotadora
                                            </h5>
                                            <p className="text font-weight-400 text-capitalize">
                                                105 m³<span className="slash">/</span>45 bultos<span className="slash">/</span>7 kg
                                            </p>
                                        </div>

                                        <div className="cards-icon icon-small icon-danger"
                                            onClick={() => handleClickOpen()}>
                                            <i class="zmdi zmdi-close"></i>
                                        </div>
                                    </div>

                                    {/* producto 2 */}
                                    <div className="cards-body content-space-between">
                                        <div className="card-data">
                                            <h5 className="title-h5 font-weight-700 text-capitalize">
                                                calcetines de papel
                                            </h5>
                                            <p className="text font-weight-400 text-capitalize">
                                                105 m³<span className="slash">/</span>45 bultos<span className="slash">/</span>7 kg
                                            </p>
                                        </div>
                                        
                                        <div className="cards-icon icon-small icon-danger"
                                            onClick={() => handleClickOpen()}>
                                            <i class="zmdi zmdi-close"></i>
                                        </div>
                                    </div>

                                    {/* producto 3 */}
                                    <div className="cards-body content-space-between">
                                        <div className="card-data">
                                            <h5 className="title-h5 font-weight-700 text-capitalize">
                                                Carcasas para celulares
                                            </h5>
                                            <p className="text font-weight-400 text-capitalize">
                                                105 m³<span className="slash">/</span>45 bultos<span className="slash">/</span>7 kg
                                            </p>
                                        </div>
                                        
                                        <div className="cards-icon icon-small icon-danger"
                                            onClick={() => handleClickOpen()}>
                                            <i class="zmdi zmdi-close"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="container my-5">
                                <Button className="button button-100 button-primary mb-2" onClick={() => recepcion()}>finalizar proceso</Button>{ }
                                <Button className="button button-100 button-gray">cancelar proceso</Button>
                            </div>


                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle className="mt-3 pb-0" id="alert-dialog-title">
                                    {"Eliminar Máquina Trotadora"}
                                </DialogTitle>

                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Desea eliminar la carga registrada ?
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions className="mb-3">
                                    <Button className="button button-light px-4" onClick={() => handleClose()}>
                                        No
                                    </Button>
                                    <Button className="button button-success mx-2 px-4" onClick={() => handleClose()}>
                                        Si
                                    </Button>
                                </DialogActions>
                            </Dialog>

                        </>
                    )
            }
        </>
    )
}

export default Resumen
