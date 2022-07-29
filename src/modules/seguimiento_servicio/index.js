import React, { useState } from "react";
import { data } from "./data"
import { useHistory } from "react-router";
import MaterialTable from 'material-table';
import DetailTable from "./componts/DetailTable"
import MainTitleBack from "components/Title/MainTitleBack"
import Modal from "./componts/Modal"
const columns = [

  { title: "Contenedor", field: "contenedor" },
  { title: "Referencia", field: "referencia",cellStyle: { width: 350 } },
  // { title: "Cli. Desp.", field: "cli_despacho", },
  { title: "conductor", field: "nave", },
  { title: "patente", field: "hora_retiro" },
  { title: "rut", field: "eta", },
  { title: "teléfono", field: "fecha_retiro", },
  { title: "salida", field: "hora_retiro" },
  { title: "hora programada", field: "hora_presentacion" },
  { title: "hora estimada", field: "fecha_presentacion" },
  {
    title: "monitoreo",
    field: "monitoreo",
    render: (data) => {
      if (data.monitoreo === "atrasado") {
        return <div className="text-color-danger ">{data.monitoreo} </div>;
      }
      if (data.monitoreo === "posible atraso") {
        return (
          <div className="text-color-primary">
            {/* <BsCircleFill className="mr-1" /> */}
            {data.monitoreo}{" "}
          </div>
        );
      }

    },
  },
]

const initialForm = {
  name: '',
}

const Dashboard = () => {
  const history = useHistory();
  const [openModal, setOpenModal] = useState(false);
  const [form, setForm] = useState(initialForm)

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
    setForm(initialForm)
  };


  const handleclick = () => {
    history.push("/app/inicio")
  }

  return (
    <>
      <MainTitleBack title="Seguimiento de servicio para hoy" onClick={handleclick}/>

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
                    <DetailTable rowData={rowData} handleOpenModal={handleOpenModal}/>
                  );
                }
              }
            ]}
          />
        </div>
      </div>


      <Modal
        open={openModal}
        initialForm={initialForm}
        form={form}
        setForm={setForm}
        onClose={handleCloseModal}

      />

    </>
  )
};

export default Dashboard;
