import React, { useState, useEffect } from "react";
import { data } from "./data"
import { useHistory } from "react-router";
import MaterialTable from 'material-table';
import DetailTable from "./componts/DetailTable"
import MainTitleBack from "components/Title/MainTitleBack"
import Message from "components/Message/Message";

const columns = [
  { title: "Contenedor", field: "contenedor" },
  { title: "nave", field: "nave", },
  { title: "eta", field: "eta", },
  { title: "Referencia", field: "referencia", cellStyle: { width: 350 } },
  // { title: "Cli. Desp.", field: "cli_despacho", },
  { title: "Fecha retiro", field: "fecha_retiro", cellStyle: { width: 200 } },
  { title: "hora retiro", field: "hora_retiro", },
  {
    title: "F. presentación", field: "fecha_presentacion",
    cellStyle: {
      backgroundColor: 'rgba(200, 54, 46, 0.815)',
      color: '#FFF',
      width: 200
    },
  },
  {
    title: "H. presentación.",
    cellStyle: {
      backgroundColor: '#C8352E',
      color: '#FFF',
      width: 200
    },
    field: "hora_presentacion"
  },
]

const Dashboard = () => {
  const history = useHistory();
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    setOpenDialog(true);
  }, [])

 
  const handleclick = () => {
    history.push("/app/inicio")
  }

  const handleClose = () => {
    setOpenDialog(false);
  };


  return (
    <>
      <MainTitleBack title="Servicio con problemas" onClick={handleclick} />

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



      <Message
        open={openDialog}
        onClose={handleClose}
        titleMessage="¡Importante!"
        // type icon, alertSuccess, alertWarning, alertDanger 
        typeAlert="alertWarning"
        message="Los Servicios con problemas, se debe a que la fecha de presentación no puede ser anterior a la fecha de retiro o tu contenedor no cuenta con horario de retiro."
        callAction="Ok"
        width="sm"
      />
    </>
  )
};

export default Dashboard;
