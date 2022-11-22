import React from 'react'
import {
    Button,
    // Chip,
} from '@material-ui/core';

// import { MdHeadsetMic } from "react-icons/md";

import {
    BsFileEarmarkArrowDown,
    BsFileEarmarkText,
} from "react-icons/bs";

const DetailTable = ({ rowData, handleClickOpen }) => {
    return (
        <div className="app-detail-table">
            <div className="app-detail-headaer">
                <h4 className="text-small font-weight-400">Cliente despacho: Vanni</h4>

                <div className="app-detail-action">
                    <Button
                        variant="outlined"
                        size="small"
                        startIcon={<BsFileEarmarkText />}
                        color="primary"
                        className="mr-2"
                        onClick={handleClickOpen}
                    >
                        Detalle
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        startIcon={<BsFileEarmarkArrowDown />}
                        color="secondary"
                        className="mr-2"
                    >
                        Eir
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        startIcon={<BsFileEarmarkArrowDown />}
                        color="secondary"
                    >
                        Guía
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
                    <h4 className="text-xs font-weight-500">Tracto</h4>
                </div>
            </div>


            <div className="app-detail-item app-border">
                <div className="app-item-40">
                    <h4 className="text-xs font-weight-400"><b>Retiro:</b> {rowData.retiro.titulo}</h4>
                </div>

                <div className="app-item-20">
                    <h5 className="text-xs font-weight-300">{rowData.retiro.fecha} / {rowData.retiro.hora}hrs</h5>
                </div>

                <div className="app-item-25">
                    <h5 className="text-xs font-weight-300">{rowData.retiro.conductor}</h5>
                </div>

                <div className="app-item-15">
                    <h5 className="text-xs font-weight-300">{rowData.retiro.tracto}</h5>
                </div>
            </div>

            <div className="app-detail-item app-border">
                <div className="app-item-40">
                    <h4 className="text-xs font-weight-400"><b>Presentación:</b> {rowData.presentacion.titulo}</h4>
                </div>

                <div className="app-item-20">
                    <h5 className="text-xs font-weight-300">{rowData.presentacion.fecha} / {rowData.presentacion.hora}hrs</h5>
                </div>

                <div className="app-item-25">
                    <h5 className="text-xs font-weight-300">{rowData.presentacion.conductor}</h5>
                </div>

                <div className="app-item-15">
                    <h5 className="text-xs font-weight-300">{rowData.presentacion.tracto}</h5>
                </div>
            </div>

            <div className="app-detail-item app-border">
                <div className="app-item-40">
                    <h4 className="text-xs font-weight-400"><b>Devolución:</b> {rowData.devolucion.titulo}</h4>
                </div>

                <div className="app-item-20">
                    <h5 className="text-xs font-weight-300">{rowData.devolucion.fecha} / {rowData.devolucion.hora}hrs</h5>
                </div>

                <div className="app-item-25">
                    <h5 className="text-xs font-weight-300">{rowData.devolucion.conductor}</h5>
                </div>

                <div className="app-item-15">
                    <h5 className="text-xs font-weight-300">{rowData.devolucion.tracto}</h5>
                </div>
            </div>
        </div>
    )
}

export default DetailTable