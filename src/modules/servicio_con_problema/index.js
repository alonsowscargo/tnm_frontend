import React from "react";
import { data } from "./data"
import { useHistory } from "react-router";
import MaterialTable from 'material-table';
import DetailTable from "./componts/DetailTable"
import MainTitleBack from "components/Title/MainTitleBack"

const columns = [
  { title: "Contenedor", field: "contenedor" },
  { title: "nave", field: "nave", },
  { title: "eta", field: "eta", },
  { title: "Referencia", field: "referencia",cellStyle: { width: 400 } },
  { title: "Cli. Desp.", field: "cli_despacho", },
  { title: "Fecha retiro", field: "fecha_retiro", },
  { title: "hora retiro", field: "hora_retiro" },
  { title: "hora Presentación", field: "hora_presentacion" },
  { title: "fecha presentación", field: "fecha_presentacion" },
]

const Dashboard = () => {
  const history = useHistory();

  const handleclick = () => {
    history.push("/app/inicio")
  }

  return (
    <>
      <MainTitleBack title="Servicio con problemas" onClick={handleclick}/>

      <div className="app-table">
        <div className="app-table-sticky">
          <MaterialTable
            title="Listado de servicio"
            columns={columns}
            data={data}
            onRowClick={(event, rowData, togglePanel) => {
              togglePanel();
            }}
            options={{
              exportButton: false,
              filtering: false,
              search: true,
              paging: false,
              detailPanelType: "single",
              maxBodyHeight: '80vh',
            }}
            localization={{
              body: {
                emptyDataSourceMessage: <h6 style={{ textAlign: 'center', margin: '0' }}>Sin resultado</h6>
              }
            }}
            detailPanel={[
              {
                render: (rowData) => {
                  return (
                    <DetailTable rowData={rowData} />
                  );
                }
              }
            ]}
          />
        </div>
      </div>
    </>
  )
};

export default Dashboard;
