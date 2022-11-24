import React, { useEffect, useState, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { helpHttp } from "../../helpers/HelpHttp";
import {
  readAllAction,
  noAction,
  createAction,
  updateAction,
  deleteAction
} from "./Actions";
import MaterialTable from "material-table";
import DetailTable from "./componts/DetailTable";
import EditIcon from '@material-ui/icons/Edit';
import Message from "components/Message/Message";
import MainTitle from "components/Title/MainTitle";
import AlertMessage from "components/Message/AlertMessage";
import ModalTwo from "./componts/ModalTwo"
import SkeletonTable from "./componts/SkeletonTable"




const DashboardT = () => {
  const columnsT = [
    { title: "Contenedor", field: "container" },
    { title: "referencia", field: "reference" },
    { title: "tipo", field: "type" },
    { title: "tamaño", field: "size" },
    { title: "nave", field: "ship" },
    { title: "eta", field: "eta", },
    {
      title: "Días libres",
      render: rowData => 
        <div className="justify-space-between" onClick={() => handleOpen(rowData)}>
          <b>{rowData.free_days}</b>
          <EditIcon className="icon-default mr-2" />
        </div>
    },
    {
      title: "Fecha límite", field: "deadline_date",
      cellStyle: (e, rowData) => {
        if (rowData.free_days < 5) {
          return { color: "#000", backgroundColor: '#bdbdbd' };
        }
        if (rowData.free_days > 5 && rowData.free_days < 10) {
          return { color: "#fff", backgroundColor: '#875395' };
        }

        if (rowData.free_days >= 10) {
          return { color: "#fff", backgroundColor: '#C8352E' };
        }
      },
    },
  ];

  const {
    db,
  } = useSelector(({ crudT }) => crudT);

  const dispatch = useDispatch();

  const [dataToEdit, setDataToEdit] = useState(null);
  const [errorData, setErrorData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [editDay, setEditDay] = useState(false)
  const [prueba, setPrueba] = useState([]);


  const [openDialog, setOpenDialog] = useState(false);


  useEffect(() => {
    setOpenDialog(true);
  }, [])



  // Dialog para eliminar
  const [eliminar, setEliminar] = useState(false);



  // const handleDelete = () => {
  //   setEliminar(true);
  // };
  // const handleCloseDelete = () => {
  //   setEliminar(false);
  // };
  // Dialog para eliminar


  const [open, setOpen] = useState(false);

  const handleOpen = (data) => {
    setOpen(true);
    setDataToEdit(data);
    setEditDay(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let api = helpHttp();
  let url = 'http://localhost:4000/santos'


  useEffect(() => {
    setLoading(true)
    console.log(db)
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          //setDb(res)
          dispatch(readAllAction(res));
          setErrorData(null)
        } else {
          dispatch(noAction())
          setErrorData(res)
        }
        setLoading(false)
      })
  }, [url, dispatch])


  // const createData2 = (data) => {

  //   data.id = Date.now();



  //   //console.log(data);
  //   // setPrueba([...prueba, data]);
  //   let tem = prueba;
  //   tem.push(data)
  //   console.log(tem)
  //   setPrueba(tem)



  //   // selected.coment=value;
  //   // ticketsLocal[indexTicket]=selected;
  //   // setFormTicket(selected);
  //   // setTicketsLocal(ticketsLocal);
  // };

  // const createData2 = (data) => {
  //     data.id = Date.now();
  //     console.log(data);
  //     // setPrueba([...prueba, data]);
  //     let tem = prueba;
  //     tem.push(data)
  //     console.log(tem)
  //     setPrueba(tem)
  // };


  const createData = (data) => {
    data.id = Date.now();
    let options = {
      body: data,
      headers: { "content-type": "application/json" }
    }

    api.post(url, options).then((res) => {
      if (!res.err) {
        //setDb([...db, data]);
        dispatch(createAction(res))
      } else {
        setErrorData(res)
      }
    })
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    console.log(endpoint)

    let options = {
      body: data,
      headers: { "content-type": "application/json" }
    }

    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        //let newData = db.map((el) => (el.id === data.id ? data : el));
        //setDb(newData);
        dispatch(updateAction(res))

      } else {
        setErrorData(res)
      }
    })
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );


    // poner en true el valos
    // si el valor es true ....
    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" }
      }

      api.del(endpoint, options).then((res) => {
        if (!res.err) {
          ///let newData = db.filter((el) => el.id !== id);
          //setDb(newData);
          dispatch(deleteAction(id))

        } else {
          setErrorData(res)
        }
      })
    } else {
      return
    }
  };


  const handleCloseMsg = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <MainTitle
        title="Control de servicio"
      // nameButton="nuevo servicio"
      // handleClick={handleOpen}
      />

      <div className="row mb-3">
        <div className="col-4">
          <div className="bg-color-purple text-color-light p-1">
            <h3 className="text-xs text-center">Servicios con fecha límite menor o igual al día de hoy.</h3>
          </div>
        </div>
        <div className="col-4 px-0">
          <div className="bg-color-danger text-color-light p-1">
            <h3 className="text-xs text-center">Servicios con fecha limite desde hoy hasta los siguiente dos días.</h3>
          </div>
        </div>

        <div className="col-4">
          <div className="bg-color-default p-1">
            <h3 className="text-xs text-center">Servicios con fecha limite entre los 2 a 4 días siguientes.</h3>
          </div>
        </div>

      </div>

      {loading && <SkeletonTable />}

      {errorData && <AlertMessage msg={`Error ${errorData.status}: ${errorData.statusText}`} type="error" />}

      {db.length > 0 &&
        <div className="app-table">
          <div className="app-table-sticky">
            <MaterialTable
              title="Servicios"
              columns={columnsT}
              data={db}
              onRowClick={(event, rowData, togglePanel) => {
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
                        // handleClickOpenDelete={handleClickOpenDelete}
                        setDataToEdit={setDataToEdit}
                        prueba={prueba}
                        setPrueba={setPrueba}
                        handleOpen={handleOpen}
                        deleteData={deleteData}
                        setEditDay={setEditDay}
                      />
                    );
                  },
                },
              ]}
            />
          </div>
        </div>

      }


      <ModalTwo
        open={open}
        onClose={handleClose}
        createData={createData}
        //createData2={createData2}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
        editDay={editDay}
        setEditDay={setEditDay}
      // prueba={prueba}

      />

      <Message
        open={eliminar}
        // onClose={handleCloseDelete}
        titleMessage="¡Estimado!"
        // type icon, alertSuccess, alertWarning, alertDanger 
        typeAlert="alertSuccess"
        message="Haz registrado con éxito tus días libres."
        callAction="Ok"
        width="sm"
      // setEliminarOk={setEliminarOk}
      />

      <Message
        open={openDialog}
        onClose={handleCloseMsg}
        titleMessage="¡Importante!"
        // type icon, alertSuccess, alertWarning, alertDanger 
        typeAlert="alertWarning"
        message="Estimado cliente, la información contenida en el siguiente cuadro es referencial y Transporte Nuevo Mundo Spa. no asume responsabilidad por los datos que ahí se encuentran. La información definitiva deberá ser confirmada con la naviera y operador logístico que presta el servicio de transporte marítimo. Si usted no ingresa información de los días libres, el valor por defecto que asume el sistema es de 14 días y aparece en gris y cursiva. El cálculo se realiza considerando la fecha de arribo de la nave (ETA) y no la fecha de descarga del contenedor de la nave."
        callAction="Ok"
        width="sm"
      />
    </div>
  );
};

export default memo(DashboardT);
