import React, { useState } from "react";
// import CrudTableRow from "./CrudTableRow";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Form from '../../../components/form/Form'
import InputAutocomplete from '../../../components/form/AutoComplete'
import Field from '../../../components/form/Field'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import TextField from '@material-ui/core/TextField';

import {
    Button,
    makeStyles,
    IconButton
} from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';


import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';
import Zoom from '@material-ui/core/Zoom';



import {
    BsFileEarmarkArrowDown,
    BsFileEarmarkText,
    BsPencilSquare,
    BsPlus,
    BsTrashFill,
    BsExclamationSquareFill, BsCircleFill
} from "react-icons/bs";

import { BiFilterAlt } from "react-icons/bi";


// import { BsExclamationSquareFill, BsCircleFill } from "react-icons/bs";


import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import DateRangeIcon from '@material-ui/icons/DateRange';

const useStyles = makeStyles((theme) => ({
    muiButtonRoot: {
        minWidth: 0,
        padding: 0,
        fontSize: "12px",
        '& .MuiButton-iconSizeSmall > *:first-child': {
            fontSize: "16px"
        }
    },
    // textField: {
    //     marginLeft: theme.spacing(1),
    //     marginRight: theme.spacing(1),
    // },
}));



const LightTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 12,
    },
  }))(Tooltip);
  
  const useStylesBootstrap = makeStyles((theme) => ({
    arrow: {
      color: "#000"
    },
    tooltip: {
      backgroundColor: "#000",
      fontSize: 12,
      textAlign: "center",
      paddingTop: 12,
      paddingBottom: 12,


    },
  }));


  function BootstrapTooltip(props) {
    const classes = useStylesBootstrap();
    return <Tooltip arrow classes={classes} {...props} />;
  }
  

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
];


const CrudTable = ({ data, setDataToEdit, deleteData, handleOpen, setEditDay }) => {

    const classes = useStyles();
    const [serviceDetail, setServiceDetail] = useState(null)

    const handleOcultar = (index) => {
        console.log(index)
        if (serviceDetail === index) {
            return setServiceDetail(null)
        }
        setServiceDetail(index);
    };

    return (
        <div>
            {/* <div className="app-title justify-space-between mb-4">
                <h1 className="font-weight-700 m-0">Control de servicio</h1>

                <Button
                    variant="outlined"
                    size="medium"
                    // startIcon={<BsPlus />}
                    color="primary"
                    className="app-button"
                    onClick={handleOpen}
                >
                    nuevo servicio
                </Button>
            </div> */}



            {/* <div className="justify-space-between mt-5 mb-3">
                <div className="app-leyend app-leyend-one">
                    <BsExclamationSquareFill className="icon-color-one" />
                    <h3 className="text-xs">
                        Servicios con fecha límite menor o igual al día de hoy.
                    </h3>
                </div>

                <div className="app-leyend app-leyend-two">
                    <BsExclamationSquareFill className="icon-color-two" />
                    <h3 className="text-xs">
                        Servicios con fecha limite desde hoy hasta los siguiente dos días.
                    </h3>
                </div>

                <div className="app-leyend app-leyend-three">
                <BsExclamationSquareFill className="icon-color-three" />
                <h3 className="text-xs">
                    Servicios con fecha limite entre los 2 a 4 días siguientes.
                </h3>
                </div>
            </div> */}

            <Form>
                <div className="app-filter">
                    <div className="app-input">
                        <Field
                            type="text"
                            label="Referencia"
                            placeholder="Ingresa tu referencia"
                            name="referencia"
                            fullWidth
                        />
                    </div>

                    <div className="app-input">
                        <Field
                            type="text"
                            label="Nº. Contenedor"
                            placeholder="Ingresa tu contenedor"
                            name="contenedor"
                            fullWidth
                        />
                    </div>


                    <div className="app-action">
                        <Button
                            variant="outlined"
                            size="small"
                            color="primary"
                            className="app-button mr-2"
                            // fullWidth
                        >
                            Buscar
                        </Button>

                        <Button
                            variant="outlined"
                            size="small"
                            color="secondary"
                            className="app-button"
                            // fullWidth
                        // onClick={handleClickMenu}
                        //onClick={handleFilter}

                        >
                            Limpiar
                        </Button>
                    </div>

                    <div className="app-leyendas">
                        {/* <h3 className="text-xs">
                            Leyendas
                        </h3> */}

                        <LightTooltip title="Servicios con fecha límite menor o igual al día de hoy.">
                            <DeleteIcon className="icon-color-one"/>
                        </LightTooltip>


                        <BootstrapTooltip title="Servicios con fecha limite desde hoy hasta los siguiente dos días.">
                            <DeleteIcon  className="icon-color-two mx-3" />
                        </BootstrapTooltip>

                        <BootstrapTooltip title="Servicios con fecha limite entre los 2 a 4 días siguientes.">
                            <DeleteIcon className="icon-color-three"/>
                        </BootstrapTooltip>
                    </div>
                </div>
            </Form>


            <table id="customers" className="mt-5">
                <thead>
                    <tr>
                        <th></th>
                        <th>Contenedor</th>
                        <th>tipo</th>
                        <th>Tamaño</th>
                        <th>Nave</th>
                        <th>Eta</th>
                        <th>referencia</th>
                        <th>servicio</th>
                        <th>Días libres</th>
                        <th>Fecha límite</th>
                    </tr>
                </thead>

                {/* <tbody> */}
                {
                    data.map((el, index) => (
                        <tbody key={index}>
                            <tr onClick={() => handleOcultar(index)} className={serviceDetail === index ? "cl-a" : "cl-p"}>
                                <td className="cl-4">{serviceDetail === index ? <ExpandMoreIcon /> : <ChevronRightIcon />}</td>
                                <td>{el.container}</td>
                                <td>{el.type}</td>
                                <td>{el.size}</td>
                                <td>{el.ship}</td>
                                <td>{el.eta}</td>
                                <td>{el.reference}</td>
                                <td>{el.service}</td>
                                <td>{el.free_days}</td>
                                <td>{el.deadline_date}
                                </td>
                            </tr>

                            <tr className="labels">
                                <td colSpan="11">
                                    <div className={serviceDetail === index ? "card-detail show" : "card-detail"}>

                                        <div className="app-detail-table">
                                            <div className="app-detail-headaer">
                                                <div className="align-item-center">
                                                    <h4 className="text-xs font-weight-400">Cliente despacho: <span className="font-weight-300">{el.client_dispatch}</span></h4>
                                                    <h4 className="text-xs font-weight-400 mx-3">Kg: <span className="font-weight-300">{el.kg}</span></h4>
                                                    <h4 className="text-xs font-weight-400">Nº Reserva <span className="font-weight-300">{el.number_reservation}</span></h4>
                                                </div>

                                                <div className="app-detail-action">
                                                    <Button
                                                        variant="outlined"
                                                        size="small"
                                                        startIcon={<DateRangeIcon />}
                                                        //color="primary"
                                                        className="mr-2"
                                                        onClick={() => {
                                                            setDataToEdit(el);
                                                            handleOpen();
                                                            setEditDay(true);
                                                            //setPrueba(el)
                                                            //handleClickOpenDelete();
                                                            // setPrueba([...prue rowData]);
                                                        }}
                                                    >
                                                        Día libre
                                                    </Button>

                                                    <Button
                                                        variant="outlined"
                                                        size="small"
                                                        startIcon={<EditIcon />}
                                                        //color="primary"
                                                        className="mr-2"
                                                        onClick={() => {
                                                            setDataToEdit(el);
                                                            handleOpen();
                                                            //handleClickOpenDelete();
                                                            // setPrueba([...prue rowData]);
                                                        }}
                                                    >
                                                        Editar
                                                    </Button>

                                                    <Button
                                                        variant="outlined"
                                                        size="small"
                                                        startIcon={<DeleteIcon />}
                                                        color="secondary"
                                                        className="mr-2"
                                                        onClick={() => {
                                                            deleteData(el.id);
                                                            //setChao(el);
                                                            //setConfirmOpen(true)
                                                            // handleDelete(el.id)
                                                        }}
                                                    >
                                                        Eliminar
                                                    </Button>
                                                </div>
                                            </div>

                                            <div className="app-detail-item">
                                                <div className="app-item-40">
                                                    {/* <h4 className="text-xs font-weight-500">Lugar</h4> */}
                                                </div>

                                                <div className="app-item-20">
                                                    <h4 className="text-xs font-weight-500">Fecha</h4>
                                                </div>

                                                <div className="app-item-25">
                                                    <h4 className="text-xs font-weight-500">Conductor</h4>
                                                </div>

                                                <div className="app-item-15">
                                                    <h4 className="text-xs font-weight-500">Almacenaje / Docs</h4>
                                                </div>
                                            </div>


                                            <div className="app-detail-item app-border">
                                                <div className="app-item-40">
                                                    <h4 className="text-xs font-weight-400">
                                                        Retiro Full
                                                    </h4>
                                                </div>

                                                <div className="app-item-20">
                                                    <h5 className="text-xs font-weight-300">10-03-2022 / 12:40hrs</h5>
                                                </div>

                                                <div className="app-item-25">
                                                    <h5 className="text-xs font-weight-300">Osvaldo Antonio Escalona Avedaño</h5>
                                                </div>

                                                <div className="app-item-15">
                                                    <h5 className="text-xs font-weight-300">TNM SAI</h5>
                                                </div>
                                            </div>


                                            <div className="app-detail-item app-border">
                                                <div className="app-item-40">
                                                    <h4 className="text-xs font-weight-400">
                                                        Presentación Cliente
                                                    </h4>
                                                </div>

                                                <div className="app-item-20">
                                                    <h5 className="text-xs font-weight-300">10-03-2022 / 12:40hrs</h5>
                                                </div>

                                                <div className="app-item-25">
                                                    <h5 className="text-xs font-weight-300">Sergo Bastian Vega Vega</h5>
                                                </div>

                                                <div className="app-item-15">
                                                    <Button
                                                        // variant="outlined"
                                                        size="small"
                                                        startIcon={<BsFileEarmarkArrowDown />}
                                                        // disabled={item.docs_guia_state === 1 ? false: true}
                                                        className={classes.muiButtonRoot}
                                                        color="secondary"
                                                    >
                                                        Guía
                                                    </Button>
                                                </div>
                                            </div>

                                            <div className="app-detail-item app-border">
                                                <div className="app-item-40">
                                                    <h4 className="text-xs font-weight-400">
                                                        Presentación Cliente
                                                    </h4>
                                                </div>

                                                <div className="app-item-20">
                                                    <h5 className="text-xs font-weight-300">10-03-2022 / 12:40hrs</h5>
                                                </div>

                                                <div className="app-item-25">
                                                    <h5 className="text-xs font-weight-300">Sergo Bastian Vega Vega</h5>
                                                </div>

                                                <div className="app-item-15">
                                                    <Button
                                                        // variant="outlined"
                                                        size="small"
                                                        startIcon={<BsFileEarmarkArrowDown />}
                                                        disabled
                                                        // disabled={item.docs_guia_state === 1 ? false: true}
                                                        className={classes.muiButtonRoot}
                                                        color="secondary"
                                                    >
                                                        EIR
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    ))
                }
            </table>
        </div>
    );
};

export default CrudTable;



{/* <tbody>
<tr>
    <td colSpan="11">Sin datos</td>
</tr>
</tbody> */}