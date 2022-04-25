
import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import HelpIcon from '@material-ui/icons/Help';

import {
    InputLabel,
    TextField,
    IconButton,
    InputAdornment,
    makeStyles,
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    ButtonNav: {
        padding: '0',
        height: '13px',
        width: '2%',
        color: "#8F8F8F",
        fontSize: "14px",
        "&:hover": {
            backgroundColor: "transparent",
            color: "#44403f",
        }
    },
    icon: {
        fontSize: "16px",
        marginLeft: "-30px"
    },
    label: {
        color: "#8F8F8F"
    },
    number: {
        padding: "3px 0 6px 0"
    }
}));

const Two = () => {
    const classes = useStyles();

    return (
        <>
            <div className="form-content input-material-ui">
                <div className="row">
                    <div className='col-12 mb-2'>
                        <h4 className="text font-weight-500 mb-2">Con estos datos te entregaremos una oferta personalizada.</h4>
                    </div>
                    {/* input rut */}
                    <div className="col-6 col-lg-4">
                        <InputLabel className="Label_Input_Format">Rut</InputLabel>
                        <TextField
                            id="rut"
                            name="rut"
                            placeholder="17.278.987-0"
                        />
                    </div>

                    {/* input */}
                    <div className="col-6 col-lg-4">
                        <InputLabel className="Label_Input_Format">Nombre</InputLabel>
                        <TextField
                            id="nombre"
                            name="nombre"
                            placeholder="Ingresa Nombre"
                        />
                    </div>

                    {/* input */}
                    <div className="col-12 col-lg-4 my-3 my-lg-0">
                        <InputLabel className="Label_Input_Format">Email</InputLabel>
                        <TextField
                            id="email"
                            name="email"
                            placeholder="ejemplo@gmail.com"
                        />
                    </div>

                    {/* input */}
                    <div className="col-12 col-lg-4 mt-0 mt-lg-3">
                        <InputLabel className="Label_Input_Format">Teléfono</InputLabel>
                        <TextField
                            id="tel"
                            name="tel"
                            placeholder="90234567"
                            size="small"
                            type="tel"
                            InputProps={{
                                startAdornment: <InputAdornment className={classes.number} position="start">+569</InputAdornment>
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Two;
