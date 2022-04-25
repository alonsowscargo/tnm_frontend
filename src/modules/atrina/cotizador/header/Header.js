import React from 'react'
import {useDispatch} from 'react-redux';
import './header.scss';
import {
    setContentHeaderRecepcionNew
} from '../Actions';

const Header = (props) => {
    const dispatch = useDispatch();
    

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
