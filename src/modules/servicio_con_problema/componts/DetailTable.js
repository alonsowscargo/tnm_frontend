import React from 'react'
import Button from '@material-ui/core/Button';

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

            <div className='app-item-service'>
                {
                    rowData.detail.map((item, index) => (
                        <div className="app-item" key={index}>
                            <h3 className="text-xs font-weight-500">{item.title}</h3>
                            <h4 className="text-xs font-weight-300">{item.content}</h4>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default DetailTable