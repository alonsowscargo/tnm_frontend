import React from 'react'
import {
    Button,
    Chip,
} from '@material-ui/core';

import { MdHeadsetMic } from "react-icons/md";

import { 
    BsFileEarmarkArrowDown, 
    BsFileEarmarkText, 
} from "react-icons/bs";

const DetailTable = ({rowData,handleClickOpen}) => {
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


            {
                rowData.entregras.map((item, index) => (
                    <div className="app-detail-item app-border" key={index}>
                        <div className="app-item-40">
                            <h4 className="text-xs font-weight-400">
                                {item.typo_title} <span className="font-weight-300">{item.typo}</span>
                            </h4>
                        </div>

                        <div className="app-item-20">
                            <h5 className="text-xs font-weight-300">{item.fecha} / {item.hora}hrs</h5>
                        </div>

                        <div className="app-item-25">
                            <h5 className="text-xs font-weight-300">{item.conductor}</h5>
                        </div>

                        <div className="app-item-15">
                            <h5 className="text-xs font-weight-300">{item.tracto}</h5>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default DetailTable