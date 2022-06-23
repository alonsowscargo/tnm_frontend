import React, { useEffect, useState, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  readAllAction,
  noAction,
  createAction,
  updateAction,
  deleteAction
} from "./Actions";

import { helpHttp } from "../../helpers/HelpHttp";
import CrudTable from "./componts/CrudTable"
// import CrudForm from "./componts/CrudForm"
import Loading from "../../components/loading/Loading";
import AlertMessage from "../../components/Message/AlertMessage";
// import { HashRouter, NavLink, Route, Switch } from "react-router-dom";
import ModalTwo from "./componts/ModalTwo"
import SkeletonTable from "./componts/SkeletonTable"

import Message from "../../components/Message/Message";

import ConfirmDialog from "./componts/ConfirmDialog"




// import MaterialTable from "material-table";
// import { BsExclamationSquareFill, BsCircleFill } from "react-icons/bs";
// import DetailTable from "./componts/DetailTable";
import Button from '@material-ui/core/Button';
// import {
//   BsFileEarmarkText,
// } from "react-icons/bs";


// import {
//   // BrowserRouter as Router,
//   // HashRouter,
//   // Redirect,
//   Route,
//   Switch,
// } from "react-router-dom";



const DashboardT = () => {


  // const state = useSelector(state => state);
  // const dispatch = useDispatch();
  // const {db} = state.crud

  const {
    db,
  } = useSelector(({ crudT }) => crudT);

  const dispatch = useDispatch();

  const [dataToEdit, setDataToEdit] = useState(null);
  const [errorData, setErrorData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [editDay, setEditDay] = useState(false)
  const [prueba, setPrueba] = useState([]);



  // Dialog para eliminar
  const [eliminar, setEliminar] = useState(false);
  const [eliminarOk, setEliminarOk] = useState(false);

  // const handleDeleteConfirmation = () => {
  //         setEliminarOk(true);
  //       };

  const [deleteToEdit, setDeleteToEdit] = useState(null);


  const handleDelete = () => {
    setEliminar(true);
  };
  const handleCloseDelete = () => {
    setEliminar(false);
  };
  // Dialog para eliminar


  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
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


  const createData2 = (data) => {

    data.id = Date.now();



    //console.log(data);
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

  // console.log("-------------------")

  const [chao, setChao] = useState(false);
  // console.log(chao + '-------')

  const [confirmOpen, setConfirmOpen] = useState(false);

  const deleteData = (id) => {
    // levabtar modal
    //setConfirmOpen(true)
    //setState(false)

    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );


    // poner en true el valos
    // si el valor es true ....
    if(isDelete) {
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


    // console.log(eliminarOk)
    // handleDeleteConfirmation()
    // setConfirmOpen(true)


  };


  const handleLogout = () => {
    //console.log("this hould logout the user");
    setChao(true)
  };

  return (
    <div>
      {loading && <SkeletonTable />}
      {/* {loading && <Loading />} */}

      {errorData && <AlertMessage msg={`Error ${errorData.status}: ${errorData.statusText}`} type="error" />}

      {db.length > 0 &&
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
          handleOpen={handleOpen}
          setEditDay={setEditDay}
          handleDelete={handleDelete}
          // setPrueba={setPrueba}
          //setConfirmOpen={setConfirmOpen}
        // setChao={setChao}

        />
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

      {/* <h2>Press the button below so the confirmation modal appears </h2>
      <Button color="inherit" onClick={() => setConfirmOpen(true)}>
        eLIMI
      </Button>

      <ConfirmDialog
        content="Are you sure you want to leeeave us ?"
        open={confirmOpen}
        setOpen={setConfirmOpen}
        //onConfirm={handleLogout}
        setChao={setChao}
      /> */}

      <Message
        open={eliminar}
        onClose={handleCloseDelete}
        titleMessage="¡Estimado!"
        // type icon, alertSuccess, alertWarning, alertDanger 
        typeAlert="alertSuccess"
        message="Haz registrado con éxito tus días libres."
        callAction="Ok"
        width="sm"
        setEliminarOk={setEliminarOk}
      />
    </div>
  );
};

export default memo(DashboardT);
