import React, { useState } from 'react';
import { Button } from 'reactstrap';
import Resumen from '../resumen/Resumen';

const Detalle = (props) => {
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
                    (
                        <Resumen />
                    )
                    :
                    (
                        <div className="bg-detalle">
                            
                            <div className="container">
                                <div className="mb-4">
                                    <h2 className="title-h2 text-light font-weight-900">{props.title1}</h2>
                                    <h2 className="title-h2 text-light font-weight-900">{props.title2}</h2>
                                    <h4 className="title-h4 text-light font-weight-700 mt-1">{props.fecha}</h4>
                                </div>

                                <div className="description padding-subtitle">
                                    {
                                        props.texto2 ? 
                                        (
                                            <p className="text text-light mb-2">
                                                <strong>Producto</strong><span className="slash">/</span>Sin Información
                                            </p>

                                        )
                                        :
                                        ''
                                    }
                                    <p className="text text-light">{props.texto1}</p>
                                    {
                                        props.texto2 ? 
                                        (
                                            <>
                                            <p className="text text-light font-weight-400 my-2">
                                                <strong>Medidas</strong><span className="slash">/</span>Sin Información
                                            </p>
                                            <p className="text text-light font-weight-400">
                                                <strong>Currier</strong><span className="slash">/</span>Sin Información
                                            </p>
                                            </>

                                        )
                                        :
                                        ''
                                    }
                                </div>
                            </div>


                            {
                                props.btn === true ?

                                (
                                    <div className="bg-l px-3">
                                        <div className="container">
                                            <Button className="button button-primary button-100 text-uppercase" onClick={() => recepcion()}>Continuar</Button>{ }
                                            <Button className="button button-gray button-100 text-uppercase my-2" onClick={() => recepcion()}>agregar carga mismo proveedor</Button>{ }
                                            <Button className="button button-gray button-100 text-uppercase" onClick={() => recepcion()}>agregar Nueva carga</Button>{ }
                                        </div>
                                    </div>
                                )
                                    
                                : 
                                (
                                    <div className="bg-l px-3">
                                        <div className="container">
                                            <Button className="button button-primary button-100 my-4 text-uppercase">Volver al inicio</Button>{ }
                                        </div>
                                    </div>
                                )
                            }

                        </div>
                    )
            }
        </div>
    )
}

export default Detalle
