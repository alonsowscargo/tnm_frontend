import React, { useState } from "react";
// import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Form from '../../components/form/Form'
import InputAutocomplete from '../../components/form/AutoComplete'
import Field from '../../components/form/Field'
import { useFormSearch } from "../../hooks/useFormSearch"
import { data } from "./data"
import MaterialTable from 'material-table';
import DetailTable from "./componts/DetailTable"
import Modal from "./componts/Modal"
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


import {
  // IconButton,
  Button
} from '@material-ui/core';
import MainTitle from "components/Title/MainTitle";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
];


const estados = [
  { title: 'Pre servicio' },
  { title: 'En transito' },
  { title: 'Termiando' },
  { title: 'Eliminado' },
];


//// serach
const initalForm = {
  referencia: '',
  contenedor: ''
}

const columns = [
  { title: "liq", field: "liq", },
  { title: "Envio", field: "envio", },
  { title: "Creación", field: "fecha_creacion" },
  { title: "Cli. Desp.", field: "cliente_despacho", },
  { title: "Factura SII", field: "facturacion_sii", },
  { title: "Fecha SII", field: "fecha_sii", },
  { title: "Id Servicio", field: "servicio" },
  { title: "Neto", field: "neto" },
  { title: "Cant. Servicio", field: "n_servicios", cellStyle: { width: 150 }  },
]

const Dashboard = () => {

  const [filter, setFilter] = useState(false)

  const handleFilter = () => {
    setFilter(!filter)
  }

  const {
    form,
    // loading,
    // response,
    handleChange,
    handleSubmit,
  } = useFormSearch(initalForm)


  ///////////////// Dialog 
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [openD, setOpenD] = useState(false);

  const handleClickD = () => {
    setOpenD(true, { vertical: 'top', horizontal: 'center' });
  };

  const handleCloseD = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenD(false);
  };


  return (
    <>
      <MainTitle title="Facturación" nameButton="nueva facturación" />


      <Form onSubmit={handleSubmit}>
        <div className="app-filter">
          <div className="app-input">
            <InputAutocomplete
              label="Cliente facturación"
              placeholder="Seleccionar cliente"
              data={top100Films}
            />
          </div>

          <div className="app-input">
            <InputAutocomplete
              label="Cliente despacho"
              placeholder="Seleccionar despacho"
              data={top100Films}
            />
          </div>

          <div className="app-input">
            <Field
              type="text"
              label="Referencia"
              placeholder="Ingresa tu referencia"
              name="referencia"
              value={form.referencia}
              onChange={handleChange}
              fullWidth
            />
          </div>

          <div className="app-input">
            <Field
              type="text"
              label="Nº. Contenedor"
              placeholder="Ingresa tu contenedor"
              name="contenedor"
              value={form.contenedor}
              onChange={handleChange}
              fullWidth
            />
          </div>


          <div className="app-action">
            <Button
              variant="outlined"
              size="small"
              color="primary"
              className="app-button mr-2"
              fullWidth
            >
              Buscar
            </Button>

            <Button
              variant="outlined"
              size="small"
              color="secondary"
              className="app-button"
              fullWidth
              // onClick={handleClickMenu}
              onClick={handleFilter}

            >
              Filtros
            </Button>
          </div>
        </div>


        {filter &&

          <div className="app-filter app-filter-secundary">
            <div className="app-input">
              <InputAutocomplete
                label="Cliente facturación"
                placeholder="Seleccionar cliente"
                data={top100Films}
              />
            </div>

            <div className="app-input">
              <InputAutocomplete
                label="Cliente despacho"
                placeholder="Seleccionar despacho"
                data={top100Films}
              />
            </div>

            <div className="app-input">
              <InputAutocomplete
                label="Estado"
                placeholder="Seleccionar"
                data={estados}
              />
            </div>

            <div className="app-input">
              <InputAutocomplete
                label="Conductor etapa 1"
                placeholder="Etapa 1"
                data={estados}
              />
            </div>
          </div>
        }
      </Form>

      <div className="app-table mt-5">
        <div className="app-table-sticky">
          <MaterialTable
            title="Facturación"
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
                emptyDataSourceMessage: <h6 style={{ textAlign: 'center', margin: '0' }}>No jajaja</h6>
              }
            }}
            detailPanel={[
              {
                render: (rowData) => {
                  return (
                    <DetailTable rowData={rowData} handleClickOpen={handleClickOpen} />
                  );
                }
              }
            ]}
          />
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        // setConfirmEmail={setConfirmEmail}
        handleClick={handleClickD}
      />

      {/* <Message
        open={confirmEmail}
        titleMessage="jajja"
        message="jajaja"
        typeAlert="alertSuccess"
        onClose={handleCloseEmail}
        callAction="prueba"
        width="sm"
      /> */}

      <Snackbar 
        open={openD} 
        autoHideDuration={6000} 
        onClose={handleCloseD}
        // TransitionComponent={TransitionRight}
        // direction="right"
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
       }}
      >
        <Alert onClose={handleCloseD } severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  )
};

export default Dashboard;
