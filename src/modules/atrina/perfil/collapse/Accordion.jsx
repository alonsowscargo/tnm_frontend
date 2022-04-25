import React, { useState } from 'react';
import { Collapse, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import { getItem } from 'localforage';

const Accordion = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const [isOpen2, setIsOpen2] = useState(false);
    const toggle2 = () => setIsOpen2(!isOpen2);

    const titleTabs = [
        {
            id: '1',
            title: 'datos tributarios'
        },
        {
            id: '2',
            title: 'representante legal'
        }
    ]

    const contentCollapse = [
        {
            id: '1',
            content:
                [
                    { title: 'rut', descripcion: '17.258.258.k' },
                    { title: 'razón social', descripcion: 'lorem ipsum' },
                    { title: 'giro', descripcion: '123456' },
                    { title: 'email', descripcion: 'email@gmail.com' },
                    { title: 'telefono 1', descripcion: '+569 67889878' },
                    { title: 'telefono 2', descripcion: '+569 67889878' },
                    { title: 'web', descripcion: 'www.wscargo.cl' }
                ]
        },
        {
            id: '2',
            content:
                [
                    { title: 'rut', descripcion: '17.258.258.k' },
                    { title: 'razón social', descripcion: 'lorem ipsum' },
                    { title: 'nombre', descripcion: 'alonso matias' },
                    { title: 'apellido', descripcion: 'trina zavala' },
                    { title: 'email', descripcion: 'alonso@gmail.com' },
                    { title: 'documento', docuemento1: 'célula frontal', documento2: 'célula trasera' },
                    { title: 'documento', docuemento1: 'poder simple 1', documento2: 'poder simple 2' }
                ]
        }
    ]

    return (
        <div className="conteiner-collapse">
            <div className="collapsible-header" onClick={toggle}>
                <h4 className="text font-weight-500 text-capitalize">datos tributarios</h4>
                <i className="zmdi zmdi-caret-down"></i>
            </div>

            {/* {
                    contentCollapse.map(item => (
                        <Collapse isOpen={item} key={item.id}>
                            <div className="list">
                                <div className="list_item">
                                    <div className="list_tittle text-small font-weight-400">
                                       {item.id}
                                    </div>
                                    <div className="list_desciption text-small font-weight-300">
                                        {item.id}
                                    </div>
                                </div>
                            </div>
                        </Collapse>
                    ))
                } */}
            <Collapse isOpen={isOpen}>
                <div className="list">
                    <div className="list_item">
                        <div className="list_tittle text-small font-weight-400">
                            rut
                        </div>
                        <div className="list_desciption text-small font-weight-300">
                            17.258.258.k
                        </div>
                    </div>

                    <div className="list_item">
                        <div className="list_tittle text-small font-weight-400">
                            giro
                        </div>
                        <div className="list_desciption text-small font-weight-300">
                            123456
                        </div>
                    </div>

                    <div className="list_item">
                        <div className="list_tittle text-small font-weight-400">
                            email
                        </div>
                        <div className="list_desciption text-small font-weight-300">
                            email@gmail.com
                        </div>
                    </div>

                    <div className="list_item">
                        <div className="list_tittle text-small font-weight-400">
                            telefono
                        </div>
                        <div className="list_desciption text-small font-weight-300">
                            +569 67889878 / +569 67889878
                        </div>
                    </div>
                    <div className="list_item">
                        <div className="list_tittle text-small font-weight-400">
                            web
                        </div>
                        <div className="list_desciption text-small font-weight-300">
                            www.wscargo.cl
                        </div>
                    </div>
                </div>
            </Collapse> 

            <div className="collapsible-header" onClick={toggle2}>
                <h4 className="text font-weight-500 text-capitalize">representante legal</h4>
                <i className="zmdi zmdi-caret-down"></i>
            </div>
            
            <Collapse isOpen={isOpen2}>
                <div className="list">
                    <div className="list_item">
                        <div className="list_tittle text-small font-weight-400">
                            Rut
                        </div>
                        <div className="list_desciption text-small font-weight-300">
                            17.258.258.k
                        </div>
                    </div>

                    <div className="list_item">
                        <div className="list_tittle text-small font-weight-400">
                            razón social
                        </div>
                        <div className="list_desciption text-small font-weight-300">
                            Lorem Ipsum
                        </div>
                    </div>

                    <div className="list_item">
                        <div className="list_tittle text-small font-weight-400">
                            Nombre
                        </div>
                        <div className="list_desciption text-small font-weight-300">
                            alonso matias
                        </div>
                    </div>

                    <div className="list_item">
                        <div className="list_tittle text-small font-weight-400">
                            apellido
                        </div>
                        <div className="list_desciption text-small font-weight-300">
                            Trina Zavala
                        </div>
                    </div>

                    <div className="list_item">
                        <div className="list_tittle text-small font-weight-400">
                            email
                        </div>
                        <div className="list_desciption text-small font-weight-300">
                            email@ejemplo.cl
                        </div>
                    </div>
                </div>
            </Collapse> 
        </div>
    )
}

export default Accordion
