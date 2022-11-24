import React, { useState } from "react";
import { useForm } from "../../hooks/useForm"
import { data } from "./data"
import { useHistory } from "react-router";
import MaterialTable from 'material-table';
import DetailTable from "./componts/DetailTable"
import MainTitleBack from "components/Title/MainTitleBack"
import Modal from "./componts/Modal"




const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const columns = [
    { title: "Contenedor", field: "contenedor" },
    { title: "Referencia", field: "referencia", cellStyle: { width: 350 } },
    { title: "conductor", field: "nave", },
    { title: "patente", field: "hora_retiro" },
    { title: "rut", field: "eta", },
    { title: "teléfono", field: "fecha_retiro", },
    { title: "hora programada", field: "hora_presentacion", cellStyle: { width: 200 } },
    {
      title: "monitoreo", field: "monitoreo",
      cellStyle: (e, rowData) => {
        if (rowData.monitoreo === "atrasado") {
          return { color: "#fff", backgroundColor: '#C8352E' };
        }

        if (rowData.monitoreo === "posible atraso") {
          return { color: "#fff", backgroundColor: '#3e95cd' };
        }
      },
      render: rowData => <div onClick={() => handleOpenModal(rowData.id)}>{rowData.monitoreo}</div>
    },
  ]



  const handleOpenModal = (id) => {
    setOpenModal(true);
    console.log('desde la fuction', id)
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    // setErrors({ error: "errorDefault" })
    // setForm(initialForm)
  };

  return (
    <>
      {/* <MainTitleBack title="Seguimiento de servicio para hoy"  /> */}

      <div className="app-table">
        <div className="app-table-sticky">
          <MaterialTable
            title="Servicios del día"
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
              maxBodyHeight: '40vh',
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
                    <DetailTable rowData={rowData} handleOpenModal={handleOpenModal} />
                  );
                }
              }
            ]}
          />
        </div>
      </div>


      <Modal
        open={openModal}
        onClose={handleCloseModal}
      // form={form}
      // setForm={setForm}
      // loading={loading}
      // errors={errors}
      // response={response}
      // newData={newData}
      // handleChange={handleChange}
      // handleBlur={handleBlur}
      // handleSubmit={handleSubmit}
      />

    </>
  )
};

export default Dashboard;
