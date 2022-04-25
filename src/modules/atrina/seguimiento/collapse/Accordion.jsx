import React, { useState } from 'react';
import { Collapse, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
const Accordion = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const [isOpen2, setIsOpen2] = useState(false);
    const toggle2 = () => setIsOpen2(!isOpen2);

    return (
        <div className="conteiner-collapse">
            <div className="collapsible-header" onClick={toggle}>
                <h4 className="text font-weight-500 text-capitalize">Detalle Pedido</h4>
                <i class="zmdi zmdi-caret-down"></i>
            </div>

            <Collapse isOpen={isOpen}>
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
            </Collapse>

            <div className="collapsible-header" onClick={toggle2}>
                <h4 className="text font-weight-500 text-capitalize">Proveedor 1</h4>
                <i class="zmdi zmdi-caret-down"></i>
            </div>
            
            <Collapse isOpen={isOpen2}>
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
                            Carga
                        </div>
                        <div className="list_desciption text-small font-weight-300">
                            Esperados 0 / Recibidos 3
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
            </Collapse>
        </div>
    )
}

export default Accordion
