import React,{useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import IntlMessages from 'util/IntlMessages';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import produce from 'immer';
import Checkbox from '@material-ui/core/Checkbox';
import NumberFormat from 'react-number-format';
import styled from 'styled-components';
import DataTable from 'react-data-table-component';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Modal, ModalHeader,ModalBody} from 'reactstrap';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import {
  IconEdit2x,
  IconDelete2x,
  IconClose3x,
  IconEtiqueta2x,
  IconRequerido1x,
  Col6M0,
  Col3M3,
} from '../Diccionario.js';

import { 
    R_Set_PayloadRoles,
    R_Hide_Message_Roles,
    R_Get_RolesList,
    R_Post_Roles,
    R_Get_Roles,
    R_Put_Roles,
    R_Delete_Roles,
    R_Set_Message_Eliminar_Roles,
    R_Get_RolesList_Success
    
} from './Actions.js';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(0),
    },
    selectEmpty: {
        marginTop: theme.spacing(1),
    },
}));

/* Listado _ListadoRoles */
const FilterComponent_ListadoRoles = ({ filterText_ListadoRoles, onFilter_ListadoRoles, onClear_ListadoRoles }) => (
  <div className="row float-right">
    <TextField id="search" type="text" placeholder="Filter" aria-label="Search Input" value={filterText_ListadoRoles} onChange={onFilter_ListadoRoles} />
    <i class={IconClose3x} onClick={onClear_ListadoRoles} title="CERRAR"></i>
  </div>
);
/* Listado _ListadoRoles */



const Form = ({title, match}) => { 
  
    /* MAINTAINER MAINTAINER MAINTAINER MAINTAINER */
    /* MAINTAINER MAINTAINER MAINTAINER MAINTAINER */
    const {
      R_Payload, 
      R_RolesList,
      Alert_Message_Roles,
      Show_Message_Roles,
      Message_Eliminar_Roles,

    } = useSelector(({Roles_Maintainer}) => Roles_Maintainer);

    const [controlsRoles, setControlsRoles] = useState(R_Payload);
    const [controlsTempRoles, setControlsTempRoles] = useState(R_Payload);

    useEffect(()=>{

      setControlsRoles(R_Payload);
      setControlsTempRoles(R_Payload);

    },[R_Payload]);

    /* MAINTAINER MAINTAINER MAINTAINER MAINTAINER */
    /* MAINTAINER MAINTAINER MAINTAINER MAINTAINER */

    useEffect(() => {
      if (Show_Message_Roles) {
        toast[`${Alert_Message_Roles.type}`](Alert_Message_Roles.text);
            dispatch(R_Hide_Message_Roles());
      }
    }, [Show_Message_Roles]);

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        if(R_RolesList.length==0)
        {
            dispatch(R_Get_RolesList());
        }
    },[]);

    /* CHANGE CONTACTOS TIPOS */
    /* CHANGE CONTACTOS TIPOS */
    function onChangeRoles(event) {
        event.persist();
        if(isNaN(event.target.value)==true) { var valor = event.target.value.toUpperCase(); } else { var valor = event.target.value; }
        const tempControls = produce(controlsRoles, draft => {
          draft[event.target.id ? event.target.id:event.target.name] = valor;
        });
        setControlsRoles(tempControls);
        setControlsTempRoles(tempControls);
    }
    
    function setPayloadRoles() {

        dispatch(R_Set_PayloadRoles(controlsTempRoles));

    }
    /* CHANGE CONTACTOS TIPOS */
    /* CHANGE CONTACTOS TIPOS */

    const [IdEliminar_ListadoRoles, setIdEliminar_ListadoRoles] = React.useState(false);
    const [openEliminar_ListadoRoles, setOpenEliminar_ListadoRoles] = React.useState(false);

    const handleCloseEliminar_ListadoRoles = () => {
      setOpenEliminar_ListadoRoles(false);
      setIdEliminar_ListadoRoles(0);
      dispatch(R_Set_Message_Eliminar_Roles(false));
    };

    function Confirmar_Eliminar_ListadoRoles(row)
    {
      setIdEliminar_ListadoRoles(row);
      setOpenEliminar_ListadoRoles(true);
      dispatch(R_Set_Message_Eliminar_Roles(true));
    }
    
    useEffect(() => {
      if (!Message_Eliminar_Roles) {
        setOpenEliminar_ListadoRoles(false);
        setIdEliminar_ListadoRoles(0);
      }
    }, [Message_Eliminar_Roles]);
    
    /* ELIMINAR PROPUESTA COMERCIAL*/

    /* Listado _ListadoRoles */
    const [resetPaginationToggle_ListadoRoles, setResetPaginationToggle_ListadoRoles] = React.useState(false);
    const [filterText_ListadoRoles, setFilterText_ListadoRoles] = React.useState('');

    let filteredItems_ListadoRoles=R_RolesList;
    filteredItems_ListadoRoles =( filterText_ListadoRoles.length >0 && R_RolesList.length>0 ) ? R_RolesList.filter(item =>
    (
    item.id==filterText_ListadoRoles
    || item.nombre.toLowerCase().includes(filterText_ListadoRoles.toLowerCase())
    )):R_RolesList;

    const subHeaderComponentMemo_ListadoRoles = React.useMemo(() => {
      const handleClear_ListadoRoles = () => {
        if (filterText_ListadoRoles) {
          setResetPaginationToggle_ListadoRoles(!resetPaginationToggle_ListadoRoles);
          setFilterText_ListadoRoles('');
        }
      };

      return <div className={Col6M0}>
      <div className="col-12">
        <FilterComponent_ListadoRoles onFilter_ListadoRoles={e => setFilterText_ListadoRoles(e.target.value)}
        onClear_ListadoRoles={handleClear_ListadoRoles} filterText_ListadoRoles={filterText_ListadoRoles} /></div>
      </div>;
    }, [filterText_ListadoRoles, resetPaginationToggle_ListadoRoles]);

    const columns_ListadoRoles = [
      {
          name: <IntlMessages id="label.acciones"/>,
          cell: row =>
          {
            return (<div class="row pl-3">

                <i class={IconEdit2x} title="EDITAR"
                onClick={()=>{
                  dispatch(R_Get_Roles(row.id));
                }} ></i>

                <i class={IconDelete2x} title="ELIMINAR"
                onClick={()=>{
                  Confirmar_Eliminar_ListadoRoles(row);
                }} ></i>

              </div>
            );
          }
      },
      {
        name: <IntlMessages id="label.id"/>,
        selector: 'id',
        sortable: true,
      },
      {
        name: <IntlMessages id="label.nombre"/>,
        selector: 'nombre',
        sortable: true,
      },
    ];
    /* Listado _ListadoRoles */

return (
<div>
<div className="modules_contenido">
{/* CONTENIDO CONTENIDO */}
<div>
    <div className="bg-primary Form_Cabecera mt-3">
      <IntlMessages id="label.roles"/>
    </div>
    <div className="Form_Cuerpo">
        <div className="row">
            <div className={Col3M3}>
                <InputLabel className="Label_Input_Format">{<IntlMessages id="label.nombre"/>}<i class={IconRequerido1x}></i></InputLabel>
                <TextField 
                  id="nombre"                  
                  defaultValue={controlsRoles.nombre}
                  value={controlsTempRoles.nombre}
                  onChange={onChangeRoles}
                  onBlur={setPayloadRoles}
                  size="small"
                  className="Input_Number_Format"
                  />
            </div>
            
        </div>
        <div className="row">
            <div className="BotonPrimary" onClick={()=>{
                if(controlsRoles.id==0){
                    dispatch(R_Post_Roles(controlsRoles));
                }else{
                    dispatch(R_Put_Roles(controlsRoles));
                }
            }}>{ controlsRoles.id != 0 ? <IntlMessages id="label.actualizar"/> : <IntlMessages id="label.guardar"/>}</div>

            <div className="BotonDefault" onClick={()=>{
                dispatch(R_Get_RolesList());
            }}><IntlMessages id="label.limpiar"/></div>
        </div>
        <DataTable
        className="TablaDataRow"
        columns={columns_ListadoRoles}
        data={filteredItems_ListadoRoles}
        pagination
        subHeader
        subHeaderComponent={subHeaderComponentMemo_ListadoRoles}
        />
    </div>

<ToastContainer />
<Dialog
    open={openEliminar_ListadoRoles}
    onClose={handleCloseEliminar_ListadoRoles}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
>
    <DialogTitle id="alert-dialog-title">{<IntlMessages id="label.deseaEliminar"/>}</DialogTitle>
    <DialogContent>
        <DialogContentText id="alert-dialog-description">
        <IntlMessages id="label.laInformacionNoPodraSerRecuperada"/>
        </DialogContentText>
    </DialogContent>
    <DialogActions>
      <span onClick={handleCloseEliminar_ListadoRoles} color="primary" className="btn btn-primary">NO</span>
      <span onClick={()=>{ dispatch(R_Delete_Roles(IdEliminar_ListadoRoles.id)); }} color="primary" className="btn btn-danger" autoFocus> SI </span>
    </DialogActions>
</Dialog>
</div>
{/* CONTENIDO CONTENIDO */}
</div>
</div>
)};

export default Form;