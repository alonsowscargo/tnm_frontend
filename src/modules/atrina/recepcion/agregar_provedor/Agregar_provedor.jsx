import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Carga from '../carga/Carga';
import Header from '../header/Header';

const Agregar_provedor = () => {
    // useState
    const [modoRecepcion, setmMdoRecepcion] = useState(false)

    // function  onclick 
    const recepcion = () => {
        setmMdoRecepcion(true)
    }
    return (
        <div>

            {
                modoRecepcion ?

                    (<Carga />)
                    :
                    (
                        <>
                            <Header
                                titulo1='Proveedor'
                                titulo2=' '
                                class='header-recepcion'
                                iconBack='zmdi-chevron-left'
                            />

                            <div className="container carga-top">
                                <h4 className="title-h4 font-weight-900 text-color text-capitalize padding-subtitle">agregar proveedor</h4>
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
                                        <Button className="button button-success button-100 text-uppercase" onClick={() => recepcion()}>Agregar proveedor</Button>{ }
                                    </Form>
                                </div>
                            </div>


                            <div className="container my-5">
                                <Button className="button button-primary button-100 text-uppercase" onClick={() => recepcion()}>continuar sin proveedor</Button>{ }
                            </div>

                        </>

                    )
            }


        </div>
    )
}

export default Agregar_provedor
