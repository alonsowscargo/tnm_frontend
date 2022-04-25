import React, { useEffect, useState } from 'react';
import Header from './header/Header'
import Codigo from './codigo/Codigo'

const Recepcion = () => {

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
            (
                <Codigo/>
            )
            :
            (
                <> 
                    <Header
                    titulo1='Wang Tao'
                    titulo2='Operario'
                    class='header-recepcion header-home'
                    />

                    <div class="container mt-5">
                        <div className="cards" onClick={() => recepcion()}>
                            <div className="cards-body content-space-between">
                                <div className="card-data">
                                    <h5 className="title-h5 font-weight-700 text-capitalize">
                                        Recepción de bultos
                                    </h5>
                                </div>
                                <div className="cards-icon icon-warning">
                                    <i class="zmdi zmdi-chevron-right font-weight-900"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </> 
            )
        }
        </>
    )
}

export default Recepcion
