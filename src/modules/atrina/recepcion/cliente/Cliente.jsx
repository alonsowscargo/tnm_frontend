import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Carga from '../carga/Carga';
import Header from '../header/Header'

const Cliente = () => {
    // useState
    const [modoRecepcion, setmMdoRecepcion] = useState(false)

    // function  onclick 
    const recepcion = () => {
        setmMdoRecepcion(true)
    }


    return (
        <>
            {
                modoRecepcion ?
                    <Carga />
                    :
                    (
                        <>
                            <Header
                                titulo1='Dab Energy'
                                titulo2='ID 3456 / 17.890.876-0'
                                class='header-recepcion'
                                iconBack='zmdi-chevron-left'
                            />

                            <div className="container carga-top">
                                <h4 className="title-h4 font-weight-900 text-color text-capitalize padding-subtitle">proveedores c/carga</h4>
                                <div className="cards">
                                    <div className="cards-body content-space-between">
                                        <div className="card-data">
                                            <h5 className="title-h5 font-weight-700 text-capitalize">
                                                Shanghai Holley
                                            </h5>
                                            {/* <p className="text font-weight-400 text-capitalize">
                                                Nombre chino
                                            </p> */}
                                            <p className="text font-weight-400 text-capitalize">
                                                1000 m³<spa className="slash">/</spa>56 bultos<spa className="slash">/</spa>1000 kg
                                            </p>
                                        </div>
                                        <div className="cards-icon icon-danger">
                                            <i class="zmdi zmdi-edit zmdi-hc-lg"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="cards">
                                    <div className="cards-body content-space-between">
                                        <div className="card-data">
                                            <h5 className="title-h5 font-weight-700 text-capitalize">
                                                Holley
                                            </h5>
                                            {/* <p className="text font-weight-400 text-capitalize">
                                                Nombre chino
                                            </p> */}
                                            <p className="text font-weight-400 text-capitalize">
                                                1000 m³<spa className="slash">/</spa>56 bultos<spa className="slash">/</spa>1000 kg
                                            </p>
                                        </div>
                                        <div className="cards-icon icon-danger">
                                            <i class="zmdi zmdi-edit zmdi-hc-lg"></i>
                                        </div>
                                    </div>
                                </div>

                                <h4 className="title-h4 font-weight-900 text-capitalize padding-subtitle">proveedores s/carga</h4>
                                <div className="cards">
                                    <div className="cards-body content-space-between">
                                        <div className="card-data">
                                            <h5 className="title-h5 font-weight-700 text-capitalize">
                                                Wang Tao
                                            </h5>
                                            {/* <p className="text font-weight-400 text-capitalize">
                                                Nombre chino
                                            </p> */}
                                        </div>
                                        <div className="cards-icon icon-succses">
                                            <i class="zmdi zmdi-edit zmdi-hc-lg"></i>
                                        </div>
                                    </div>
                                </div>

                                <h4 className="title-h4 font-weight-900 text-capitalize padding-subtitle">agregar proveedor</h4>
                                <div className="form-content mb-5">
                                    <Form>
                                        <FormGroup>
                                            <Label for="exampleAddress">Código</Label>
                                            <Input type="text" name="address" id="exampleAddress" placeholder="Código proveedor" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleAddress2">Nombre</Label>
                                            <Input type="text" name="address2" id="exampleAddress2" placeholder="Nombre del proveedor" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleAddress2">Nombre Chino</Label>
                                            <Input type="text" name="address2" id="exampleAddress2" placeholder="Nombre Chino proveedor" />
                                        </FormGroup>
                                        <Button className="button button-success button-100 text-uppercase" id="root" onClick={() => recepcion()}>Agregar proveedor</Button>{ }
                                    </Form>
                                </div>
                            </div>
                        </>
                    )
            }
        </>
    )
}

export default Cliente
