import React from 'react'
import './header.scss'

const Header = (props) => {
    return (
        <>
            <div className={`header ${props.class}`}
                id={props.id}>
                <div className="container main-title">
                    <i class={`zmdi  ${props.iconBack}`}></i>

                    <div className="title">
                        {
                            props.iconSearch ? 
                            (
                                <div className="title-icon">
                                    <h1 className="title-h1 font-weight-900 text-light text-capitalize">
                                        {props.titulo1}
                                    </h1>
                                    <i onClick={props.openSearch} class={`zmdi  ${props.iconSearch}`}></i>
                                </div>
                            )
                            : 
                            (
                                <h1 className="title-h1 font-weight-900 text-light text-capitalize">
                                    {props.titulo1}
                                </h1>
                            )
                        }

                        <h4 className="title-h4 font-weight-500 text-light mt-1 text-capitalize">
                            {props.titulo2}
                        </h4>
                    </div>

                    
                    {/* {
                        props.iconSearch ? 'si': 'no'
                    } */}

                    {/* <div className="title">
                        <h1 className="title-h1 font-weight-900 text-light text-capitalize">
                            {props.titulo1}
                        </h1>
                        <i class={`zmdi  ${props.iconSearch}`}></i>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Header
