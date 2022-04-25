import React, { useEffect, useState } from 'react';
import Tabs from './tabs/Tabs'
import Accordion from './collapse/Accordion'
import { CardUser } from './CardUser'
import { Link } from 'react-router-dom'
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem, ButtonDropdown } from "reactstrap";
import { Container, Row, Col } from 'reactstrap';
// import { useDispatch, useSelector } from 'react-redux';
// import { makeStyles, useTheme } from '@material-ui/core/styles';

/* new template */
// import '../style.scss'


const Form = () => {
    // dropdown idioma
    const [dropdownDirection, setDirectionOpen] = useState(false);
    const openDirection = () => setDirectionOpen(!dropdownDirection,);

    // useState mode servicio
    const [modoPerfil, setmMdoPerfil] = useState(false)

    // function  onclick cambiar el useState 
    const perfilUser = item => {
        console.log(item)
        setmMdoPerfil(true)
    }


    // usuario seleccionado
    const userSeleccionado = [
        { id: '1', title: 'Comercial DLL Spa', descripcion: 'Importadora y comercializadora de productos opticos moreno SPA' }
    ]

    // datos de facturación 
    const datoDireccion = 'Av andres bellos #48587';
    const datoComuna = 'Providencia';
    const datoCuidad = 'Santago';


    // direciones Dropdown
    const direccionDropdown = [
        { id: '1', title: 'Av. andres bello', numeracion: '#4569' },
        { id: '2', title: 'Pedro de valdivia', numeracion: '#45' },
    ]

    return (
        <div className="template page-perfil">

            {
                modoPerfil ?
                    (
                        <Container className="mt-5">
                            <Row>
                                {
                                    userSeleccionado.map(item => (
                                        <Col sm="12" className="title-seguimiento" key={item.id}>
                                            <h2 className="title-h2 font-weight-900">
                                                {item.title}
                                            </h2>
                                            <h4 className="title-h4 font-weight-500">
                                                {item.descripcion}
                                            </h4>
                                        </Col>
                                    ))
                                }

                                <Col sm="12">
                                    <Tabs />
                                    <h4 className="title-h4 font-weight-900 text-capitalize padding-subtitle">
                                        Dirección facturación
                                    </h4>

                                    <div className="cards">
                                        <div className="cards-body content-space-between">
                                            <div className="card-data">
                                                <h5 className="title-h5 font-weight-700 text-capitalize">
                                                    {`${datoDireccion}`} 
                                                </h5>
                                                <p className="text font-weight-400 text-capitalize">
                                                    {`${datoComuna}`} / {`${datoCuidad}`} 
                                                </p>
                                            </div>
                                            <div className="cards-icon icon-succses">
                                                <i class="zmdi zmdi-pin"></i>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <div className="Seguimiento title-Dropdown mt-5">
                                        <ButtonDropdown isOpen={dropdownDirection} toggle={openDirection}>
                                            <DropdownToggle caret>
                                                Direcciones de despacho
                                            </DropdownToggle>

                                            <DropdownMenu right>
                                                {
                                                    direccionDropdown.map(item => (
                                                        <DropdownItem>{item.title} {item.numeracion}</DropdownItem>
                                                    ))
                                                }
                                            </DropdownMenu>
                                        </ButtonDropdown>
                                    </div>

                                    <div className="mapa">
                                        <div className="direccion">
                                            <h3 className="title-h3 font-weight-900">Av. andres bello #48587</h3>
                                            <p className="text-small font-weight-500">Pedro de Valdivia 963</p>
                                        </div>
                                    </div>

                                </Col>
                            </Row>


                            <Row>
                                <Col sm="12">
                                    <h4 className="title-h4 font-weight-900 text-capitalize padding-subtitle">Descargar documentos</h4>
                                </Col>

                                <Col sm="6" className="documnetos">
                                    <div className="cards">
                                        <div className="cards-body content-space-between">
                                            <div className="card-data">
                                                <h5 className="title-h5 font-weight-700 text-capitalize">
                                                    Célula Idéntidad
                                                </h5>
                                                <Link to="#" className="link pl-0">Célula Frontal</Link>
                                                <Link to="#" className="link">Célula Trasera</Link>
                                            </div>

                                            <div className="cards-icon icon-warning">
                                                <i class="zmdi zmdi-download"></i>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col sm="6">
                                    <div className="cards">
                                        <div className="cards-body content-space-between">
                                            <div className="card-data">
                                                <h5 className="title-h5 font-weight-700 text-capitalize">
                                                    Poder simple
                                                </h5>
                                                <Link to="#" className="link pl-0">Poder 1</Link>
                                                <Link to="#" className="link">Poder 2</Link>
                                            </div>

                                            <div className="cards-icon icon-warning">
                                                <i class="zmdi zmdi-download"></i>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <h4 className="title-h4 font-weight-900 padding-subtitle see-mobile">Información del cliente </h4>
                                    <Accordion />
                                </Col>
                            </Row>

                        </Container>
                    )

                    :

                    ''
            }

            <div className=
                {
                    // ClassName background gris del contenedor card
                    modoPerfil ? 'bg-gray' : 'mt-5'
                }
            >
                <div className="container">
                    {
                        // titulo seccion más pedidos
                        modoPerfil ? (<h4 className="title-h4 font-weight-900 padding-subtitle"> Otros Usuario</h4>) : ''
                    }


                    {
                        // map card servicios
                        CardUser.map(item => (
                            <div className="cards"
                                key={item.id}
                                onClick={() => perfilUser(item)}
                            >
                                <div className="cards-body content-space-between">
                                    <div className="card-data">
                                        <h5 className="title-h5 font-weight-700 text-capitalize">
                                            {item.tituloUsuario}
                                        </h5>

                                        <p className="text font-weight-400">
                                            {item.razonSocial}
                                        </p>
                                    </div>

                                    <div className={`cards-icon ${item.iconEstado}`}>
                                        <i class="zmdi zmdi-alert-circle-o"></i>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    )
};

export default Form;