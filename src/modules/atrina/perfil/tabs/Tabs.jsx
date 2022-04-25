import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom'
import { TabsUser } from '../TabsUser'

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const titleTabs = [
        {
            id: '1',
            title: 'datos tributarios'
        },
        {
            id: '2',
            title: 'representante legal'
        }
        // {
        //     id: '3',
        //     title: 'dirección de facturación'
        // }
    ]

    return (
        <div>
            <Nav tabs className="tabs mt-5">
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
                {
                    TabsUser.map(item => (
                        <TabPane tabId={item.id} key={item.id}>
                            <div className="list">
                                {
                                    item.content.map(item2 => (
                                        <div className="list_item" key={item2.id}>
                                            <div className="list_tittle text-small font-weight-400">
                                                {item2.title}
                                            </div>
                                            {
                                                !item2.descripcion ? 
                                                (
                                                    <div className="list_desciption text-small font-weight-300">
                                                        <Link to="#" className="link">{item2.documento1}</Link>
                                                        <Link to="#" className="link">{item2.documento2}</Link>
                                                    </div>
                                                    
                                                ) : 
                                                (
                                                    <div className="list_desciption text-small font-weight-300">
                                                    {item2.descripcion}
                                                    </div>
                                                )
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        </TabPane>
                    ))
                }
            </TabContent>
        </div>
    )
}

export default Tabs
