import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Detalle from '../detalle_carga/Detalle'
import Header from '../header/Header'

const Carga = () => {
    // useState
    const [modoRecepcion, setmMdoRecepcion] = useState(false)

    // function  onclick 
    const recepcion = () => {
        setmMdoRecepcion(true)
    }


    // efecto top
    useEffect(() => {
        const body = document.querySelector('#top');
    
        body.scrollIntoView({
            behavior: 'smooth'
        }, 500)
    
    }, []);


    return (
        <>
            {
                modoRecepcion ?
                    (
                        <Detalle
                            title1="Bultos Recepcionado."
                            fecha="30 /09 /21"
                            texto1="9 Kg / 77 Bultos / 1000 M³"
                            texto2="54 x 45 x 67 cm"
                            texto3="Currier 90909999"
                            btn={true}
                        />
                    )
                    :
                    (

                        <>
                            <Header
                                titulo1='Carga'
                                titulo2=' '
                                class='header-recepcion'
                                iconBack='zmdi-chevron-left'
                                id='top'

                            />

                            <Form className="carga-top" >
                                <Container>
                                    <Row>
                                        <Col xs={12}>
                                            <h4 className="title-h4 font-weight-900 text-color text-capitalize padding-subtitle">
                                                Código reserva / L5689
                                            </h4>
                                        </Col>
                                    </Row>

                                    <Row form className="form-content mb-2">
                                        <Col xs={12}>
                                            <h4 className="text font-weight-900 mb-2 text-capitalize">
                                                producto
                                            </h4>
                                        </Col>
                                        <Col xs={12}>
                                            <FormGroup>
                                                <Label for="label">Producto</Label>
                                                <Input type="text" name="nombre" id="nombre" placeholder="Nombre de producto" />
                                            </FormGroup>
                                        </Col>
                                        <Col xs={12}>
                                            {/* <FormGroup>
                                                <Label for="label">Fecha de recepción</Label>
                                                <Input type="text" name="fecha" id="fecha" placeholder="fecha" />
                                            </FormGroup> */}
                                            <FormGroup>
                                                <Label for="exampleDate">Date</Label>
                                                <Input
                                                type="date"
                                                bsSize="lg"
                                                name="date"
                                                id="exampleDate"
                                                placeholder="fecha"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col xs={6}>
                                            <FormGroup>
                                                <Label for="label">Ingresa bultos*</Label>
                                                <Input type="text" name="fecha" id="fecha" placeholder="Nº bultos" />
                                            </FormGroup>
                                        </Col>
                                        <Col xs={6}>
                                            <FormGroup>
                                                <Label for="label">Tipo de carga</Label>
                                                <Input type="select" name="select" id="exampleSelect">
                                                <option>Ninguna</option>
                                                <option>Pallet</option>
                                                <option>Caja</option>
                                                <option>Container</option>
                                                </Input>
                                                <i className="zmdi zmdi-caret-down right"></i>
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row form className="form-content mb-2">
                                        <Col xs={12}>
                                            <h4 className="text font-weight-900 mb-2 text-capitalize">
                                                medidas
                                            </h4>
                                        </Col>
                                        <Col xs={6}>
                                            <FormGroup>
                                                <Label for="label">Alto (cm)</Label>
                                                <Input type="text" name="alto" id="alto" placeholder="10 cm" />
                                            </FormGroup>
                                        </Col>
                                        <Col xs={6}>
                                            <FormGroup>
                                                <Label for="label">Ancho (cm)</Label>
                                                <Input type="text" name="ancho" id="ancho" placeholder="38 cm" />
                                            </FormGroup>
                                        </Col>
                                        <Col xs={6}>
                                            <FormGroup>
                                                <Label for="label">Profundidad (cm)</Label>
                                                <Input type="text" name="profundidad" id="profundidad" placeholder="45 cm" />
                                            </FormGroup>
                                        </Col>
                                        <Col xs={6}>
                                            <FormGroup>
                                                <Label for="label">Peso (kg)</Label>
                                                <Input type="text" name="peso" id="peso" placeholder="10 kg" />
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row form className="form-content mb-2">
                                        <Col xs={12}>
                                            <h4 className="text font-weight-900 mb-2 text-capitalize">
                                                almacenamiento
                                            </h4>
                                        </Col>
                                        <Col xs={12}>
                                            <FormGroup>
                                                <Label for="label">Ubicación de la carga</Label>
                                                <Input type="select" name="select" id="exampleSelect">
                                                <option>Ninguna</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                </Input>
                                                <i className="zmdi zmdi-caret-down right"></i>
                                            </FormGroup>
                                        </Col>
                                        <Col xs={6}>
                                            <FormGroup>
                                                <Label for="label">Peso total (kg)</Label>
                                                <Input type="text" name="peso" id="peso" placeholder="Peso" />
                                            </FormGroup>
                                        </Col>
                                        <Col xs={6}>
                                            <FormGroup>
                                                <Label for="label">Volumen total</Label>
                                                <Input type="text" name="volumen" id="volumen" placeholder="Volumnen" />
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row form className="form-content mb-2">
                                        <Col xs={12}>
                                            <h4 className="text font-weight-900 mb-2 text-capitalize">
                                                currier
                                            </h4>
                                        </Col>
                                        <Col xs={12}>
                                            <FormGroup>
                                                <Label for="label">Currier</Label>
                                                <Input type="select" name="select" id="currier">
                                                <option>Ninguna</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                </Input>
                                                <i className="zmdi zmdi-caret-down right"></i>
                                            </FormGroup>
                                        </Col>
                                        <Col xs={9}>
                                            <FormGroup>
                                                <Label for="label">Número de seguimiento</Label>
                                                <Input type="text" name="numeroSeguimiento" id="numeroSeguimiento" placeholder="007890#456" />
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row form className="form-content mb-2">
                                        <Col xs={12}>
                                            <h4 className="text font-weight-900 mb-2 text-capitalize">
                                                documentos
                                            </h4>
                                        </Col>
                                        <Col xs={12}>
                                            <FormGroup>
                                                <Label for="label">Adjuntar Packing / List Invoice </Label>
                                                <Input type="textarea" className="form-textarea" name="text" id="exampleText" />
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row form className="form-content">
                                        <Col xs={12}>
                                            <h4 className="text font-weight-900 mb-2">
                                                Fotos de la Carga
                                            </h4>
                                        </Col>
                                        <Col xs={12}>
                                            <FormGroup>
                                                <Label for="exampleText">Adjuntar documento img</Label>
                                                <Input type="textarea" className="form-textarea" name="text" id="exampleText" />
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row  className="mt-4 mb-5">
                                        <Col xs={12}>
                                            <Button className="button button-danger button-100 text-uppercase" 
                                                onClick={() => recepcion()}>
                                                    guardar carga
                                                </Button>{ }
                                        </Col>
                                    </Row>
                                </Container>
                            </Form>

                        </>
                    )
            }
        </>
    )
}

export default Carga
