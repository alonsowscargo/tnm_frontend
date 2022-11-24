import React from 'react'
import Button from '@material-ui/core/Button';
import ItemDetail from './ItemDetail'

import {
    BsFileEarmarkArrowDown,
    BsEnvelope
} from "react-icons/bs";

const DetailTable = ({ rowData, handleClickOpen }) => {
    return (
        <div className="app-detail-table">
            <div className="app-detail-headaer">
                <div></div>

                <div className="app-detail-action">
                    <Button
                        variant="outlined"
                        size="small"
                        startIcon={<BsFileEarmarkArrowDown />}
                        color="primary"
                        className="mr-2"
                    >
                        Liq
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        startIcon={<BsFileEarmarkArrowDown />}
                        color="primary"
                        className="mr-2"
                    >
                        PDF SII
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        startIcon={<BsFileEarmarkArrowDown />}
                        color="primary"
                        className="mr-2"
                    >
                        Zip
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        startIcon={<BsEnvelope />}
                        color="secondary"
                        className="mr-2"
                        onClick={handleClickOpen}
                    >
                        Email
                    </Button>
                </div>
            </div>

            <ItemDetail
                option={[
                    { titulo: 'Cuadrilla', content: `${rowData.cuadrilla}`, },
                    { titulo: 'Sobrepeso', content: `${rowData.sobrepeso}` },
                    { titulo: 'Sobreestadia', content: `${rowData.sobreestadia}` },
                    { titulo: 'Almacenaje', content: `${rowData.almacenaje}` },
                    { titulo: 'Refeer', content: `${rowData.refeer}` },
                    { titulo: 'Imo', content: `${rowData.imo}` }
                ]}
            />
        </div>
    )
}

export default DetailTable