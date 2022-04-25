import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { Datos } from '../Datos';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const titleTabs = [
        {
            id: '1',
            title: 'detalle pedido'
        },
        {
            id: '2',
            title: 'proveedor 1'
        }
    ]

    return (
        <div>
            <Nav tabs className="tabs">
                {
                    titleTabs.map(item => (
                        <NavItem key={item.id}>
                            <NavLink
                                className={classnames({ active: activeTab === `${item.id}` })}
                                onClick={() => { toggle(`${item.id}`); }}
                            >
                                {item.title}
                            </NavLink>
                        </NavItem>
                    ))
                }
            </Nav>

            <TabContent className="tabContent" activeTab={activeTab}>
                <TabPane tabId="1">
                    <div className="list">
                        <div className="list_item">
                            <div className="list_tittle text-small font-weight-400">
                                Recepción
                            </div>
                            <div className="list_desciption text-small font-weight-300">
                                pri. 30-06-2021 / últ. 30-06-2021
                            </div>
                        </div>

                        <div className="list_item">
                            <div className="list_tittle text-small font-weight-400">
                                Bultos
                            </div>
                            <div className="list_desciption text-small font-weight-300">
                                Esperados 0 / Recibidos 3
                            </div>
                        </div>

                        <div className="list_item">
                            <div className="list_tittle text-small font-weight-400">
                                Detalle
                            </div>
                            <div className="list_desciption text-small font-weight-300">
                                100 kg / 100  m³ / 89 Bulltos
                            </div>
                        </div>
                    </div>
                </TabPane>

                <TabPane tabId="2">
                    <div className="list">
                        <div className="list_item">
                            <div className="list_tittle text-small font-weight-400">
                                nombre
                            </div>
                            <div className="list_desciption text-small font-weight-300">
                                Shanghai Holley
                            </div>
                        </div>

                        <div className="list_item">
                            <div className="list_tittle text-small font-weight-400">
                                Carga Esperada
                            </div>
                            <div className="list_desciption text-small font-weight-300">
                                0 / 3
                            </div>
                        </div>

                        <div className="list_item">
                            <div className="list_tittle text-small font-weight-400">
                                Documentos
                            </div>
                            <div className="list_desciption text-small font-weight-300">
                                <Link to="#" className="link">Packing list </Link>
                                <Link to="#" className="link">Invoice</Link>
                            </div>
                        </div>
                    </div>

                    <div className="list">
                        <div className="list_item">
                            <div className="list_tittle text-small font-weight-400">
                                Recepción 1
                            </div>
                            <div className="list_desciption text-small font-weight-300">
                                30/08/21
                            </div>
                        </div>

                        <div className="list_item">
                            <div className="list_tittle text-small font-weight-400">
                                Producto
                            </div>
                            <div className="list_desciption text-small font-weight-300">
                                Lámparas
                            </div>
                        </div>

                        <div className="list_item">
                            <div className="list_tittle text-small font-weight-400">
                                Detalle
                            </div>
                            <div className="list_desciption text-small font-weight-300">
                                100 kg / 1000 m³ / 3 bultos
                            </div>
                        </div>
                    </div>
                </TabPane>
            </TabContent>
        </div>
    )
}

export default Tabs
