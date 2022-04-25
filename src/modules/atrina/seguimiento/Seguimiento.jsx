import React, { useState } from 'react';
import Tabs from './tabs/Tabs'
import Accordion from './collapse/Accordion'
import ProgresBarMobile from './progress-bar/ProgresBarMobile'
import { Link } from 'react-router-dom'
import { DatosCardServicios } from './DatosCardServicios'
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem, ButtonDropdown } from "reactstrap";
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';

const Seguimiento = () => {
    // useState mode servicio
    const [modoServicio, setModoServicio] = useState(false)

    // estpas de seguimiento
    const etapaActual = 2;
    const totalEtapa = 5;
    const mensajeEtapa = 'Lo sentimos, tus paquetes aún no han llegado a nuestras bodegas en China. Continuamos gestionado.';


    // etapas de seguimiento 
    const estapasSeguimiento = [
        { id: '1', title: 'Bodegas China', estado: 'active' },
        { id: '2', title: 'espera consolidación', estado: 'active' },
        { id: '3', title: 'en transcito', estado: '' },
        { id: '4', title: 'Revisión aduana', estado: ''},
        { id: '5', title: 'Bodegas WS cargo', estado: ''}
    ]

    // function  onclick cambiar el useState 
    const seguimiento = item => {
        console.log(item)
        setModoServicio(true)
        // scroll top para cambiar del servicio
    }

    // dropdown idioma
    const [dropdownSeguimiento, setSeguimientoOpen] = useState(false);
    const openSeguimiento = () => setSeguimientoOpen(!dropdownSeguimiento);

    return (
        <div className="page-seguimiento">
            {
                // Información del seguimiento del servicio
                modoServicio ?
                    <Container className="mt-5">
                        <Row>
                            {/* <Col sm={{ size: 10, order: 1 }} className="mobile-none">
                                <h2 className="title-h2 font-weight-900">
                                    Estado de tu compra  1/5 
                                </h2>
                                <h4 className="title-h4 font-weight-700 mb-3">
                                    Retiro en Bodega
                                </h4>
                                <p className="text font-weight-400">Lo sentimos, tus paquetes aún no han llegado a nuestras bodegas en China. Continuamos gestionado.</p>
                            </Col> */}

                            <Col sm={{ size: 9, order: 1 }} className="title-seguimiento">
                                <h2 className="title-h2 font-weight-900">
                                    N° Servicio 19
                                </h2>
                                <h4 className="title-h4 font-weight-500 mb-3">
                                    3 Proveedores / 1000 M³ / 190 Bultos
                                </h4>
                            </Col>

                            <Col sm={{ size: 12, order: 3 }} className="see-mobile">
                                <ProgresBarMobile />
                            </Col>

                            <Col sm={{ size: 3, order: 2 }} className="content-buttons">
                                <Button className="button button-primary button-100">pagar</Button>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="no-mobile">
                                <div className="border my-5"></div>
                                <h4 className="title-h4 font-weight-900 text-center mb-2">Estado de tu compra {`${etapaActual}`} / {`${totalEtapa}`}</h4>
                                <h5 className="title-h5 font-weight-500 text-center mb-2"> Retiro en Bodega</h5>
                                <p className="text font-weight-400 text-center">{`${mensajeEtapa}`}</p>
                                
                                {/* barra de progreso seguimiento de servicio */}
                                <ul id="progressbar">
                                    {
                                        estapasSeguimiento.map(item => (
                                            <li key={item.id} 
                                                className={`text-small font-weight-500 ${item.estado}`}
                                            >
                                                {item.title}
                                            </li>
                                        ))
                                    }
                                </ul>

                                <p className="text-small font-weight-500 propuesta-comercial">
                                    Si quieres saber más información sobre la propuesta comercial pincha
                                    <Link className="link" to="#">
                                        aquí
                                    </Link>
                                </p>
                            </Col>

                            <Col className="see-mobile mb-2 propuesta-comercial">
                                <p className="text-small font-weight-500 see-mobile">
                                    Si quieres saber más información sobre la propuesta comercial pincha
                                    <Link className="link" to="#">
                                        aquí
                                    </Link>

                                    o comunica con tu ejecutivo 
                                </p>
                                <i class="zmdi zmdi-whatsapp zmdi-hc-5x my-4"></i>
                                <div className="border"></div>
                            </Col>
                        </Row>

                        <h4 className="title-h4 font-weight-900 padding-subtitle">Información de tu compra</h4>
                        <Tabs />
                        <Accordion />
                    </Container>

                    : ''
            }
            <div className=
                {
                    // ClassName background gris del contenedor card
                    modoServicio ? 'bg-gray' : 'mt-5'
                }
            >
                <div className="container">
                    <div className="Seguimiento title-Dropdown mb-2">
                        <ButtonDropdown isOpen={dropdownSeguimiento} toggle={openSeguimiento}>
                            <DropdownToggle caret>
                                Estado de Servicios
                            </DropdownToggle>

                            <DropdownMenu right>
                                {
                                    estapasSeguimiento.map(item => (
                                        <DropdownItem key={item.id}>{item.title}</DropdownItem>
                                    ))
                                }
                            </DropdownMenu>
                        </ButtonDropdown>
                    </div>

                    {
                        // map card servicios
                        DatosCardServicios.map(item => (
                            <div className="cards"
                                key={item.id}
                                onClick={() => seguimiento(item)}
                            >
                                <div className="cards-body content-space-between">
                                    <div className="card-data">
                                        <h5 className="title-h5 font-weight-700 text-capitalize">
                                            {item.tituloServicio}
                                        </h5>

                                        <p className="text font-weight-400 text-capitalize">
                                            {item.proveedores} Proveedores<spa className="slash">/</spa>
                                            {item.volumen} m³<spa className="slash">/</spa>
                                            {item.bultos} Bultos
                                        </p>
                                    </div>

                                    <div className={`cards-icon ${item.iconEstado}`}>
                                        <i className="zmdi zmdi-alert-circle zmdi-hc-lg"></i>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Seguimiento
