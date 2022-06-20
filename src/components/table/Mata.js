import React from 'react'
import MaterialTable, { MTableToolbar } from 'material-table';


const Mata = ({title, columns,data, titleD, dail}) => {
    // const {
    //     content1,
    //     content2,
    //     content3
    // } = dail;

    console.log(dail)

    console.log(dail[4])
    return (
        <MaterialTable
            title={title}
            columns={columns}
            data={data}
            options={{
                exportButton: false,
                //filtering: true,
                search: true,
                paging: false,
                detailPanelType: "single"
            }}

            localization={{
                body: {
                    emptyDataSourceMessage: <h6 style={{ textAlign: 'center', margin: '0' }}>No jajaja</h6>
                }
            }}
            detailPanel={[
                {
                    tooltip: "Show Name",
                    render: (rowData) => {
                        return (
                            <div
                                className="px-5 py-4 app-table"
                                style={{
                                    borderLeft: "solid #C8352E 3px",
                                    paddingBotom: "48px",
                                    fontSize: 100,
                                    textAlign: "center",
                                    color: "white",
                                    // backgroundColor: "#43A047"
                                }}
                            >

                                <div className="d-flex-l">
                                    <div className="app-item-c">
                                        <h4 className="text-small font-weight-500">Ref ñ  {dail[4].content4} - {titleD} </h4>
                                        <div className="border"></div>

                                        <h5 className="text-small font-weight-300">{rowData.referencia}</h5>
                                    </div>

                                    <div className="app-item-c">
                                        <h4 className="text-small font-weight-500">Retiro full / vacio {titleD.title2}</h4>
                                        <div className="border"></div>

                                        <h5 className="text-small font-weight-300">{rowData.retiro_full_vacio}</h5>
                                    </div>

                                    <div className="app-item-c">

                                        <h4 className="text-small font-weight-500">Fecha retiro {titleD.title3}</h4>
                                        <div className="border"></div>

                                        <h5 className="text-small font-weight-300">{rowData.fecha_retiro}</h5>
                                    </div>

                                    <div className="app-item-c">

                                        <h4 className="text-small font-weight-500">Fecha presentación</h4>
                                        <div className="border"></div>
                                        <h5 className="text-small font-weight-300">{rowData.fecha_presentación}</h5>

                                    </div>

                                    <div className="app-item-c">

                                        <h4 className="text-small font-weight-500">Devolución stacking</h4>
                                        <div className="border"></div>
                                        <h5 className="text-small font-weight-300">{rowData.devolución_stacking}</h5>

                                    </div>

                                    <div className="app-item-c">

                                        <h4 className="text-small font-weight-500">fecha devolucion</h4>
                                        <div className="border"></div>

                                        <h5 className="text-small font-weight-300">{rowData.fecha_devolucion}</h5>

                                    </div>

                                    <div className="app-item-c">

                                        <h4 className="text-small font-weight-500">dias libres</h4>
                                        <div className="border"></div>

                                        <h5 className="text-small font-weight-300">{rowData.dias_libres}</h5>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                }
            ]}
        />
    )
}

export default Mata