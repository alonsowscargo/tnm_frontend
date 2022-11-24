import React from 'react'
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import ItemDetail from './ItemDetail'
import {
    BsFileEarmarkArrowDown,
    // BsEnvelope
} from "react-icons/bs";

const DetailTable = ({ rowData, handleOpenModal }) => {
    return (
        <div className="app-detail-table">
            <div className="app-detail-headaer">
                <div className='align-item-center'>
                    <Chip 
                        label={`ID ${rowData.id}`}
                        color="secondary" 
                        variant="outlined" 
                        size="small"
                    />

                    {
                        // si existe cliente despacho
                        rowData.cli_despacho && <h4 className="text-small font-weight-400 ml-3">Cliente despacho: {rowData.cli_despacho}</h4>
                    }
                </div>



                {
                    rowData.monitoreo === "posible atraso"  &&
                    <div className="app-detail-action">
                        <Button
                            variant="outlined"
                            size="small"
                            startIcon={<BsFileEarmarkArrowDown />}
                            color="primary"
                            className="mr-2"
                            onClick={handleOpenModal}
                        >
                            ver mapa
                        </Button>
                    </div>
                }
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
                <div className="app-item-15">
                    <h4 className="text-xs font-weight-500">Remolque</h4>
                </div>
            </div>

            <ItemDetail
                option={[
                    {
                        titulo_item: 'Retiro:',
                        titulo: `${rowData.retiro.titulo}`,
                        fecha: `${rowData.retiro.fecha}`,
                        hora: `${rowData.retiro.hora}`,
                        conductor: `${rowData.retiro.conductor}`,
                        tracto: `${rowData.retiro.tracto}`,
                        remolque: `${rowData.retiro.remolque}`
                    },
                    {
                        titulo_item: 'Presentación:',
                        titulo: `${rowData.presentacion.titulo}`,
                        fecha: `${rowData.presentacion.fecha}`,
                        hora: `${rowData.presentacion.hora}`,
                        conductor: `${rowData.presentacion.conductor}`,
                        tracto: `${rowData.presentacion.tracto}`,
                        remolque: `${rowData.presentacion.remolque}`
                    },
                    {
                        titulo_item: 'Devolución:',
                        titulo: `${rowData.devolucion.titulo}`,
                        fecha: `${rowData.devolucion.fecha}`,
                        hora: `${rowData.devolucion.hora}`,
                        conductor: `${rowData.devolucion.conductor}`,
                        tracto: `${rowData.devolucion.tracto}`,
                        remolque: `${rowData.devolucion.remolque}`
                    },
                ]}
            />


            {/* {
                rowData.detail.map((item, index) => (
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

                        <div className="app-item-15">
                            <h5 className="text-xs font-weight-300">{item.remolque ? item.remolque: 'Sin información'}</h5>
                        </div>
                    </div>
                ))
            } */}
        </div>
    )
}

export default DetailTable