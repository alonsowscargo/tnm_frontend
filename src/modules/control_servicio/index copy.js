import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import DetailTable from "./componts/DetailTable";
import { data } from "./data";
import Message from "../../components/Message/Message";
import { helpHttp } from "../../helpers/HelpHttp";
import Loading from "../../components/loading/Loading"

import { BsExclamationSquareFill, BsCircleFill } from "react-icons/bs";


import ModalTwo from "./componts/ModalTwo";

import {
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  muiChipRoot: {
    padding: 0,
    fontSize: "10px",
    height: "24px",
  },
}));


const initalForm = {
  cliente_despacho: "",
  contenedor: "",
  tipo: "",
  tamano: "",
  nave: "",
  eta: "",
  referencia: "",
  servicio: "",
  dias_libres: "",
  fecha_limite: "",
  reserva: "",
  kg: "",
};

const Dashboard = () => {
  // const classes = useStyles();

  const columnsT = [
    { title: "Contenedor", field: "contenedor", cellStyle: { width: 100 } },
    { title: "tipo", field: "tipo", cellStyle: { width: 10 } },
    { title: "tamaño", field: "tamano", cellStyle: { width: 100 } },
    { title: "nave", field: "nave", cellStyle: { width: 400 } },
    { title: "eta", field: "eta", cellStyle: { width: 100 } },
    { title: "referencia", field: "referencia", cellStyle: { width: 600 } },
    { title: "servicio", field: "servicio" },
    { title: "D. libres", field: "dias_libres", cellStyle: { width: 200 } },
    {
      title: "F. límite",
      field: "fecha_limite",
      render: (data) => {
        if (data.dias_libres < 5) {
          return <div className="text-one">{data.fecha_limite} </div>;
        }
        if (data.dias_libres > 5 && data.dias_libres < 9) {
          return (
            <div className="text-two">
              <BsCircleFill className="mr-1" />
              {data.fecha_limite}{" "}
            </div>
          );
        }
        if (data.dias_libres > 10) {
          return (
            <div className="text-three">
              <BsCircleFill className="mr-1" />
              {data.fecha_limite}{" "}
            </div>
          );
        }
      },
    },
  ];

  /// dialog sias libres
  // const [openModal, setOpenModal] = useState(false);

  // const handleClickOpenModal = () => {
  //   setOpenModal(true);
  // };

  // const handleCloseModal = () => {
  //   setOpenModal(false);
  // };

  // ///

  // useEffect(() => {
  //   setOpenDialog(true);
  // }, [])

  const [db, setDb] = useState(data);
  const [dataToEdit, setDataToEdit] = useState(null);

  const [prueba, setPrueba] = useState([]);
  // const [pruebaT, setPruebaT] = useState([]);


  //console.log(prueba);
  // variables que van al formualrio
  // createData
  // updateData
  // dataToEdit
  // setDataToEdit

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  // table
  // setDataToEdit
  // deleteData

  const createData = (data) => {
    data.id = Date.now();
    console.log(data);
    setDb([...db, data]);
  };

  const createData2 = (data) => {
    data.id = Date.now();
    console.log(data);
    // setPrueba([...prueba, data]);


    let tem = prueba;

    tem.push(data)
    console.log(tem)
    setPrueba(tem)
    // selected.coment=value;
    // ticketsLocal[indexTicket]=selected;
    // setFormTicket(selected);
    // setTicketsLocal(ticketsLocal);
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  // const deleteData = (id) => {
  //   let newData = db.filter(el => el.id !== id);
  //   setDb(newData);
  // }

  // todo este va en el componente del formualrio
  const [form, setForm] = useState(initalForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initalForm);
    }
  }, [dataToEdit]);

  const handleCloseDialog = () => {
    //setOpenDialog(false);
    setResponse(false)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });



    // let selected=lodash.cloneDeep(ticketsLocal[indexTicket]);
    // selected.coment=value;
    // ticketsLocal[indexTicket]=selected;
    // setFormTicket(selected);
    // setTicketsLocal(ticketsLocal);
  };






  const handleSubmit = (e) => {
    e.preventDefault();

    

    



    if (form.id != null  ) {
      //createData(form);
      updateData(form);
      createData2(form);
    } 
    // else {
    //   updateData(form);
    //   createData2(form);
    // }

    setLoading(true);
    helpHttp()
      .post("https://formsubmit.co/ajax/alonsotrina22@gmail.com", {
        body: form,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        //setTimeout(() => setLoading(false), 4000);
        setLoading(false)
        setResponse(true);
        setForm(initalForm);
      });

    handleReset();
  };

  const handleReset = () => {
    setForm(initalForm);
    setDataToEdit(null);
  };

  /////
  // Dialog para eliminar
  const [openDelete, setOpenDelete] = useState(false);
  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  /////////////
  const [openDialog, setOpenDialog] = useState(false);

  // const handleOpenDialog = () => {
  //   setOpenDialog(true);
  // };

  useEffect(() => {
    setOpenDialog(true);
  }, [])



  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <div className="app-title">
        <h1 className="font-weight-700 m-0">Control servicios</h1>
      </div>

      <div className="justify-space-between mt-5 mb-3">
        <div className="app-leyend">
          <BsExclamationSquareFill className="icon-color-one" />
          <h3 className="text-xs">
            Servicios con fecha límite menor o igual al día de hoy.
          </h3>
        </div>

        <div className="app-leyend">
          <BsExclamationSquareFill className="icon-color-two" />
          <h3 className="text-xs">
            Servicios con fecha limite desde hoy hasta los siguiente dos días.
          </h3>
        </div>

        <div className="app-leyend">
          <BsExclamationSquareFill className="icon-color-three" />
          <h3 className="text-xs">
            Servicios con fecha limite entre los 2 a 4 días siguientes.
          </h3>
        </div>
      </div>

      <div className="app-table">
        <div className="app-table-sticky">
          <MaterialTable
            title="Servicios"
            columns={columnsT}
            data={db}
            onRowClick={(event, rowData, togglePanel) => {
              // Copy row data and set checked state
              togglePanel();
            }}
            options={{
              exportButton: false,
              //filtering: true,
              search: true,
              paging: false,
              detailPanelType: "single",
              maxBodyHeight: "80vh",
            }}
            localization={{
              body: {
                emptyDataSourceMessage: (
                  <h6 style={{ textAlign: "center", margin: "0" }}>
                    No jajaja
                  </h6>
                ),
              },
            }}
            detailPanel={[
              {
                render: (rowData) => {
                  return (
                    <DetailTable
                      rowData={rowData}
                      handleClickOpenDelete={handleClickOpenDelete}
                      setDataToEdit={setDataToEdit}
                      prueba={prueba}
                      setPrueba={setPrueba}
                    />
                  );
                },
              },
            ]}
          />
        </div>
      </div>

      {loading && <Loading />}


      { response && 
        <Message
          open={response}
          onClose={handleCloseDialog}
          titleMessage="¡Estimado!"
          // type icon, alertSuccess, alertWarning, alertDanger 
          typeAlert="alertSuccess"
          message="Haz registrado con éxito tus días libres."
          callAction="Ok"
          width="sm"
        />
      }

      <ModalTwo
        open={openDelete}
        onClose={handleCloseDelete}
        form={form}
        onChange={handleChange}
        dataToEdit={dataToEdit}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
        prueba={prueba}
      />


      <Message
        open={openDialog}
        onClose={handleClose}
        titleMessage="¡Importante!"
        // type icon, alertSuccess, alertWarning, alertDanger 
        typeAlert="alertWarning"
        //message={`${msj1.bold()}`}
        message="Estimado cliente, la información contenida en el siguiente cuadro es referencial y Transporte Nuevo Mundo Spa. no asume responsabilidad por los datos que ahí se encuentran. La información definitiva deberá ser confirmada con la naviera y operador logístico que presta el servicio de transporte marítimo. Si usted no ingresa información de los días libres, el valor por defecto que asume el sistema es de 14 días y aparece en gris y cursiva. El cálculo se realiza considerando la fecha de arribo de la nave (ETA) y no la fecha de descarga del contenedor de la nave."
        callAction="Ok"
        width="md"
      />

    </>
  );
};

export default Dashboard;
