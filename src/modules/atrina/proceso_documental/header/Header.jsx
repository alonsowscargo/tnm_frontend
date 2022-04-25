import React from 'react'
import './header.scss'

const Header = (props) => {
    return (
        <>
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
        </>
    )
}

export default Header
