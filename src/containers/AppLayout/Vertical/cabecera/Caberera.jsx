import React from 'react'
import './cabecera.scss'

const Caberera = (props) => {
    return (
        <div>
            <div className={`header ${props.class}`}>
                <div className="container main-title">
                    <h1 className="title-h1 font-weight-900 text-light text-capitalize">
                    {props.titulo1}
                    </h1>
                    <h1 className="title-h1 font-weight-900 text-light text-capitalize">
                        {props.titulo2}
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Caberera
