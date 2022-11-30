import React from "react";
import { dataTable } from '../dataTable'
import MaterialTable from 'material-table';
import DetailTable from "./DetailTable";
import Modal from "./Modal";
const columns = [
  { title: "Contenedor", field: "contenedor", cellStyle: { width: 100 } },
  { title: "tipo", field: "tipo" },
  { title: "tamaño", field: "tamano" },
  { title: "nave", field: "nave", cellStyle: { width: 300 } },
  { title: "eta", field: "eta" },
  { title: "referencia", field: "referencia", cellStyle: { width: 500 } },
  { title: "servicio", field: "servicio" },
  { title: "estado", field: "estado" },
];
const TableRetiro = ({titleTable}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <>
      <MaterialTable
        title={titleTable}
        columns={columns}
        data={dataTable}
        onRowClick={(event, rowData, togglePanel) => {
          togglePanel();
        }}
        options={{
          exportButton: false,
          search: true,
          paging: false,
          detailPanelType: "single",
          maxBodyHeight: "45vh",
        }}
        localization={{
          body: {
            emptyDataSourceMessage: (
              <h6 style={{ textAlign: "center", margin: "0" }}>No jajaja</h6>
            ),
          },
        }}
        detailPanel={[
          {
            render: (rowData) => {
              return (
                <DetailTable
                  rowData={rowData}
                  handleClickOpen={handleClickOpenModal}
                />
              );
            },
          },
        ]}
      />

<Modal open={open} onClose={handleCloseModal} />
    </>
  );
};

export default TableRetiro;
