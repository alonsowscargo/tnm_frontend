import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import MantenedorUsuariosInfo from './Form';
import MantenedorUsuariosListado from './Listado';
import {
 getRegisterUsersList,
 hideMessageUserAux,
 onToggleModalUserData,
 getRoles
} from './Actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const MantenedorUsuariosForm = ({title, match}) => {
  const {
    payload,
    usersList,
    showMessage,
    alertMessage,
    validations,
    roles
  } = useSelector(({usersMaintainer}) => usersMaintainer);

  const dispatch = useDispatch();
  
  useEffect(() => {
    if (showMessage) {
      toast[`${alertMessage.type}`](alertMessage.text);
      setTimeout(() => {
          dispatch(hideMessageUserAux());
      }, 100);
    }
  
  }, [showMessage]);

  useEffect(()=>{
    if(usersList.length===0){
      dispatch(getRegisterUsersList());
    }
  },[]);

  useEffect(()=>{
    if(roles.length===0){
      dispatch(getRoles());
    }
  },[]);

  return (
    <div>
    <div className="page-heading justify-content-sm-between align-items-sm-center">
        <h2 className="title">{title}</h2>
        <MantenedorUsuariosInfo payload={payload} validations={validations} roles={roles}/>
        <MantenedorUsuariosListado usersList={usersList} onToggleModalUserData={onToggleModalUserData}/>
    </div>
    <ToastContainer />
    </div>
  )
};

export default MantenedorUsuariosForm;