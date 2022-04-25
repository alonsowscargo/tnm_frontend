
import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import HelpIcon from '@material-ui/icons/Help';

import {
    Button,
    InputLabel,
    TextField,
    FormControlLabel,
    Checkbox,
    FormGroup,
    makeStyles,
    Tooltip,
    Typography,
    InputAdornment,
    Hidden
} from "@material-ui/core";

// Tooltip MUI //
const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: '#263238',
        color: '#fff',
        maxWidth: 300,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}))(Tooltip);
// Tooltip MUI //

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

const One = () => {
    const classes = useStyles();

    return (
        <>
            <div className="form-content input-material-ui">
                <div className="row">
                    <div className='col-12 mb-2'>
                        <h4 className="text font-weight-500 mb-2">Para valorizar el servicio, debes ingresar el <strong>volumen, peso y tipo de producto</strong> a importar.</h4>
                    </div>
                    {/* input */}
                    <div className="col-6 col-lg-4">
                        <InputLabel className="Label_Input_Format">Volumen M3</InputLabel>
                        <TextField
                            id="Volumen"
                            name="Volumen"
                            placeholder="80"
                            type="number"
                            InputProps={{
                                startAdornment: <InputAdornment className={classes.number} position="start">M3</InputAdornment>
                            }}
                        />
                    </div>

                    {/* input  */}
                    <div className="col-6 col-lg-4">
                        <InputLabel className="Label_Input_Format">Peso Kg</InputLabel>
                        <TextField
                            id="peso"
                            name="peso"
                            placeholder="80"
                            type="number"
                            InputProps={{
                                startAdornment: <InputAdornment className={classes.number} position="start">Kg</InputAdornment>
                            }}
                        />
                    </div>

                    {/* input */}
                    <div className="col-12 col-lg-4 my-3 my-lg-0">
                        <InputLabel className="Label_Input_Format">
                            Descripción producto
                            {/* Tooltip */}
                            <HtmlTooltip
                                title={
                                    <React.Fragment>
                                        <Typography color="inherit">Los productos importados no pueden ser de marca, replica o similar sin autorización de la marca registrada en Chile.</Typography>
                                    </React.Fragment>
                                }
                            >
                                <Button className={classes.ButtonNav}>
                                    <HelpIcon className={classes.icon} />
                                </Button>
                            </HtmlTooltip>
                            {/* fin Tooltip */}
                        </InputLabel>
                        <TextField
                            id="invoiceLocal-total-factura"
                            name="totalFactura"
                            placeholder="Descripbe la carga"
                            size="small"
                        />
                    </div>

                    {/* check */}
                    <div className="col-12">
                        <FormGroup>
                            <FormControlLabel className={classes.label} control={<Checkbox />} label="Declara que, los productos a importar no son de marca, replica o similar sin autorización de la marca registrada en Chile." />
                        </FormGroup>
                    </div>
                </div>
            </div>
        </>
    )
}

export default One;
