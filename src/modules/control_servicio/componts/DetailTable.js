import React from 'react'
import {
    Button,
    makeStyles,
    Chip
} from '@material-ui/core';

import {
    BsFileEarmarkArrowDown,
    // BsFileEarmarkText,
    // BsPencilSquare
} from "react-icons/bs";

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
}));

const DetailTable = ({ rowData, handleClickOpenDelete, setDataToEdit, setPrueba, prueba, handleOpen, deleteData, setEditDay }) => {
    const classes = useStyles();

    return (
        <div className="app-detail-table">
            <div className="app-detail-headaer">
                <div className="align-item-center">
                    <Chip
                        label={`Cliente despacho: ${rowData.client_dispatch}`}
                        color="secondary"
                        variant="outlined"
                        size="small"
                    />
                    <h4 className="text-xs font-weight-500 mx-3">Kg: <span className="font-weight-300">{rowData.kg}</span></h4>
                    <h4 className="text-xs font-weight-500">Nº Reserva <span className="font-weight-300">{rowData.number_reservation}</span></h4>
                </div>

                <div className="app-detail-action">
                    <Button
                        variant="outlined"
                        size="small"
                        startIcon={<DateRangeIcon />}
                        //color="primary"
                        className="mr-2"
                    // onClick={() => {
                    //     setDataToEdit(rowData);
                    //     handleOpen();
                    //     setEditDay(true);
                    // }}
                    >
                        Día libre
                    </Button>

                    {/* <Button
                        variant="outlined"
                        size="small"
                        startIcon={<EditIcon />}
                        //color="primary"
                        className="mr-2"
                        onClick={() => {
                            setDataToEdit(rowData);
                            handleOpen();
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
                            deleteData(rowData.id);
                        }}
                    >
                        Eliminar
                    </Button> */}
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
                        Retiro Full {rowData.retiro_full}
                    </h4>
                </div>

                <div className="app-item-20">
                    <h5 className="text-xs font-weight-300">{rowData.retiro_full_fecha} / {rowData.retiro_full_hora}hrs</h5>
                </div>

                <div className="app-item-25">
                    <h5 className="text-xs font-weight-300">{rowData.retiro_full_conductor}</h5>
                </div>

                <div className="app-item-15">
                    <h5 className="text-xs font-weight-300">{rowData.retiro_full_almacenaje}</h5>
                </div>
            </div>


            <div className="app-detail-item app-border">
                <div className="app-item-40">
                    <h4 className="text-xs font-weight-400">
                        Presentación Cliente {rowData.presentacion_cliente}
                    </h4>
                </div>

                <div className="app-item-20">
                    <h5 className="text-xs font-weight-300">{rowData.presentacion_cliente_fecha} / {rowData.presentacion_cliente_hora}hrs</h5>
                </div>

                <div className="app-item-25">
                    <h5 className="text-xs font-weight-300">{rowData.presentacion_cliente_conductor}</h5>
                </div>

                <div className="app-item-15">
                    <Button
                        // variant="outlined"
                        size="small"
                        startIcon={<BsFileEarmarkArrowDown />}
                        disabled={rowData.presentacion_cliente_docs === 0 ? true : false}
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
                        Devolución / Stacking {rowData.devolucion}
                    </h4>
                </div>

                <div className="app-item-20">
                    <h5 className="text-xs font-weight-300">{rowData.devolucion_fecha} / {rowData.devolucion_hora}hrs</h5>
                </div>

                <div className="app-item-25">
                    <h5 className="text-xs font-weight-300">{rowData.devolucion_conductor}</h5>
                </div>

                <div className="app-item-15">
                    <Button
                        // variant="outlined"
                        size="small"
                        startIcon={<BsFileEarmarkArrowDown />}
                        disabled={rowData.devolucion_docs === 0 ? true : false}
                        className={classes.muiButtonRoot}
                        color="primary"
                    >
                        EIR
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default DetailTable