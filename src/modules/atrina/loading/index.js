import React, { useState }  from 'react'
import { Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Loading from './Loading';


const Form = () => {
    const [loading, setLoading] = useState(false)

    const cambiarEstado = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }

    if(loading){
        return (
            <>
                <Loading />
            </>
            
        )

    } else {
        return (
            <div className="view-full">
                <div className="container"> 
                    <Button className="button button-primary button-100 mt-5"
                        onClick={() => cambiarEstado()}
                    >
                        carga masiva
                    </Button>

                </div>
            </div>
        )

    }
};

export default Form;