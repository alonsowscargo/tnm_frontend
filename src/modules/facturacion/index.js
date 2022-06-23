import React, { useState } from "react";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Form from '../../components/form/Form'
import InputAutocomplete from '../../components/form/AutoComplete'
import Field from '../../components/form/Field'
import { useFormSearch } from "../../hooks/useFormSearch"
import { data } from "./data"
import MaterialTable from 'material-table';
import DetailTable from "./componts/DetailTable"
import Modal from "./componts/Modal"


import {
  IconButton,
  Button
} from '@material-ui/core';
import MainTitle from "components/Title/MainTitle";

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
  { title: "Servicio", field: "servicio" },
  { title: "Neto", field: "neto" },
  { title: "Nº. Servicio", field: "n_servicios" },
]




// const columns = [
//   { title: "Envio", field: "envio", cellStyle: { width: 100, } },
//   { title: "Creación", field: "fecha_creacion" },
//   { title: "Cli. Desp.", field: "cliente_despacho", },
//   { title: "Factura SII", field: "facturacion_sii", cellStyle: { width: 300, } },
//   { title: "Fecha SII", field: "fecha_sii", cellStyle: { width: 300, } },
//   { title: "Servicio", field: "servicio" },
//   { title: "Neto", field: "neto" },
//   { title: "Nº. Servicio", field: "n_servicios" },
// ]


const Dashboard = () => {

  const [filter, setFilter] = useState(false)

  const handleFilter = () => {
    setFilter(!filter)
  }

  const {
    form,
    loading,
    response,
    handleChange,
    handleSubmit,
  } = useFormSearch(initalForm)

  // const[anchorEl, setAnchorEl] = useState(null)

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  ///////////////// Dialog 
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MainTitle title="Fcaturación" nameButton="nueva facturación" />


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
      />
    </>
  )
};

export default Dashboard;
