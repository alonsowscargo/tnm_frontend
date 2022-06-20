import React from 'react'
import {
    Button,
    Chip,
} from '@material-ui/core';

import { MdHeadsetMic } from "react-icons/md";

import {
    BsFileEarmarkArrowDown,
    BsFileEarmarkText,
    BsEnvelope
} from "react-icons/bs";

const DetailTable = ({ rowData, handleClickOpen }) => {
    return (
        <div className="app-detail-table">
            <div className="app-detail-headaer">
                <h4 className="text-small font-weight-400"></h4>

                <div className="app-detail-action">
                    <Button
                        variant="outlined"
                        size="small"
                        startIcon={<BsEnvelope />}
                        color="primary"
                        className="mr-2"
                        onClick={handleClickOpen}
                    >
                        Email
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        startIcon={<BsFileEarmarkArrowDown />}
                        color="secondary"
                        className="mr-2"
                    >
                        Liq
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        startIcon={<BsFileEarmarkArrowDown />}
                        color="secondary"
                        className="mr-2"
                    >
                        PDF SII
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        startIcon={<BsFileEarmarkArrowDown />}
                        color="secondary"
                        className="mr-2"
                    >
                        Zip
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