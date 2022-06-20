import React from 'react'
import {
    Button,
    makeStyles
} from '@material-ui/core';


import {
    BsFileEarmarkArrowDown,
    BsFileEarmarkText,
    BsPencilSquare
} from "react-icons/bs";

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

const DetailTable = ({ rowData, handleClickOpenDelete, setDataToEdit, setPrueba, prueba }) => {
    const classes = useStyles();

    return (


        // <div className="app-detail-table">
        //     <div className="app-detail-headaer">


        //         <div className="app-detail-action">
        //             <button
        //                 onClick={() => {
        //                     setDataToEdit(rowData);
        //                     handleClickOpenDelete();
        //                     setPrueba(rowData);
        //                 }}
        //             >
        //                 editar
        //             </button>
        //         </div>
        //     </div>


        //     <div className="app-detail-item app-border">
        //         <div className="app-item-40">
        //             <h4 className="text-xs font-weight-400">
        //                 {rowData.id}
        //             </h4>
        //         </div>

        //         <div className="app-item-20">
        //             <h5 className="text-xs font-weight-300">{rowData.name}</h5>
        //         </div>

        //         <div className="app-item-25">
        //             <h5 className="text-xs font-weight-300">{rowData.constelacion}</h5>
        //         </div>
        //     </div>
        // </div>

        <div className="app-detail-table">
            <div className="app-detail-headaer">
                <div className="align-item-center">
                    <h4 className="text-xs font-weight-500">Cliente despacho: <span className="font-weight-300">{rowData.cliente_despacho}</span></h4>
                    <h4 className="text-xs font-weight-500 mx-3">Kg: <span className="font-weight-300">{rowData.kg}</span></h4>
                    <h4 className="text-xs font-weight-500">Nº Reserva <span className="font-weight-300">{rowData.reserva}</span></h4>
                </div>

                <div className="app-detail-action">
                    <Button
                        variant="outlined"
                        size="small"
                        startIcon={<BsFileEarmarkText />}
                        color="primary"
                        className="mr-2"
                        // onClick={handleClickOpen}

                        // onClick={() => {
                        //     // setRepresentanteLegal(rowData);
                        //     handleClickOpen(rowData);
                        // }}

                    >
                        Detalle
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        startIcon={<BsPencilSquare />}
                        color="secondary"
                        onClick={() => {
                            setDataToEdit(rowData);
                            //handleClickOpenDelete();
                            // setPrueba([...prue rowData]);
                        }}
                    >
                        Día libre
                    </Button>
                </div>
            </div>

            <div className="app-detail-item">
                <div className="app-item-40">
                    <h4 className="text-xs font-weight-500">Lugar</h4>
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

            {/* {
                rowData.tracking.map((item, index) => (
                    <div className="app-detail-item app-border" key={index}>
                        <div className="app-item-40">
                            <h4 className="text-xs font-weight-400">
                                {item.titulo} 
                                <span className="font-weight-300 ml-2">
                                    {item.tipo === "" ? "Pendiente": `${item.tipo}`}
                                </span>
                            </h4>
                        </div>

                        <div className="app-item-20">
                            <h5 className="text-xs font-weight-300">{item.fecha} / {item.hora}hrs</h5>
                        </div>

                        <div className="app-item-25">
                            <h5 className="text-xs font-weight-300">{item.conductor}</h5>
                        </div>

                        <div className="app-item-15">

                            { 
                                item.almacenaje === "" ?
                                <h5 className="text-xs font-weight-300">Pendiente</h5> 
                                :
                                <h5 className="text-xs font-weight-300">{item.almacenaje}</h5> 
                            }

                            { item.docs_guia && 
                                <Button
                                        // variant="outlined"
                                        size="small"
                                        startIcon={<BsFileEarmarkArrowDown />}
                                        disabled={item.docs_guia_state === 1 ? false: true}
                                        className={classes.muiButtonRoot}
                                        color="secondary"
                                    >
                                        Guía
                                </Button>
                            }

                            { item.docs_eir && 
                                <Button
                                        variant="text"
                                        size="small"
                                        startIcon={<BsFileEarmarkArrowDown />}
                                        color="secondary"
                                        className={classes.muiButtonRoot}
                                        disabled={item.docs_eir_state === 1 ? false: true}
                                    >
                                        Eai
                                </Button>
                            }
                        </div>
                    </div>
                ))
            } */}
        </div>
    )
}

export default DetailTable