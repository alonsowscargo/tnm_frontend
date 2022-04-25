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
  Col6M3,
} from '../Diccionario.js';

import { 
    Emp_Set_PayloadEmpresas,
    Emp_Hide_Message_Empresas,
    Emp_Get_EmpresasList,
    Emp_Post_Empresas,
    Emp_Get_Empresas,
    Emp_Put_Empresas,
    Emp_Delete_Empresas,
    Emp_Set_Message_Eliminar_Empresas,
    Emp_Get_EmpresasList_Success
    
} from './Actions.js';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(0),
    },
    selectEmpty: {
        marginTop: theme.spacing(1),
    },
}));

/* Listado _ListadoEmpresas */
const FilterComponent_ListadoEmpresas = ({ filterText_ListadoEmpresas, onFilter_ListadoEmpresas, onClear_ListadoEmpresas }) => (
  <div className="row float-right">
    <TextField id="search" type="text" placeholder="Filter" aria-label="Search Input" value={filterText_ListadoEmpresas} onChange={onFilter_ListadoEmpresas} />
    <i class={IconClose3x} onClick={onClear_ListadoEmpresas} title="CERRAR"></i>
  </div>
);
/* Listado _ListadoEmpresas */



const Form = ({title, match}) => { 
  
    /* MAINTAINER MAINTAINER MAINTAINER MAINTAINER */
    /* MAINTAINER MAINTAINER MAINTAINER MAINTAINER */
    const {
      Emp_Payload, 
      Emp_EmpresasList,
      Alert_Message_Empresas,
      Show_Message_Empresas,
      Message_Eliminar_Empresas,

    } = useSelector(({Empresas_Maintainer}) => Empresas_Maintainer);

    const [controlsEmpresas, setControlsEmpresas] = useState(Emp_Payload);
    const [controlsTempEmpresas, setControlsTempEmpresas] = useState(Emp_Payload);

    useEffect(()=>{

      setControlsEmpresas(Emp_Payload);
      setControlsTempEmpresas(Emp_Payload);

    },[Emp_Payload]);

    /* MAINTAINER MAINTAINER MAINTAINER MAINTAINER */
    /* MAINTAINER MAINTAINER MAINTAINER MAINTAINER */

    useEffect(() => {
      if (Show_Message_Empresas) {
        toast[`${Alert_Message_Empresas.type}`](Alert_Message_Empresas.text);
            dispatch(Emp_Hide_Message_Empresas());
      }
    }, [Show_Message_Empresas]);

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        if(Emp_EmpresasList.length==0)
        {
            dispatch(Emp_Get_EmpresasList());
        }
    },[]);

    /* CHANGE CONTACTOS TIPOS */
    /* CHANGE CONTACTOS TIPOS */
    function onChangeEmpresas(event) {
        event.persist();
        if(isNaN(event.target.value)==true) { var valor = event.target.value.toUpperCase(); } else { var valor = event.target.value; }
        const tempControls = produce(controlsEmpresas, draft => {
          draft[event.target.id ? event.target.id:event.target.name] = valor;
        });
        setControlsEmpresas(tempControls);
        setControlsTempEmpresas(tempControls);
    }
    
    function setPayloadEmpresas() {

        dispatch(Emp_Set_PayloadEmpresas(controlsTempEmpresas));

    }
    /* CHANGE CONTACTOS TIPOS */
    /* CHANGE CONTACTOS TIPOS */

    const [IdEliminar_ListadoEmpresas, setIdEliminar_ListadoEmpresas] = React.useState(false);
    const [openEliminar_ListadoEmpresas, setOpenEliminar_ListadoEmpresas] = React.useState(false);

    const handleCloseEliminar_ListadoEmpresas = () => {
      setOpenEliminar_ListadoEmpresas(false);
      setIdEliminar_ListadoEmpresas(0);
      dispatch(Emp_Set_Message_Eliminar_Empresas(false));
    };

    function Confirmar_Eliminar_ListadoEmpresas(row)
    {
      setIdEliminar_ListadoEmpresas(row);
      setOpenEliminar_ListadoEmpresas(true);
      dispatch(Emp_Set_Message_Eliminar_Empresas(true));
    }
    
    useEffect(() => {
      if (!Message_Eliminar_Empresas) {
        setOpenEliminar_ListadoEmpresas(false);
        setIdEliminar_ListadoEmpresas(0);
      }
    }, [Message_Eliminar_Empresas]);
    
    /* ELIMINAR PROPUESTA COMERCIAL*/

    /* Listado _ListadoEmpresas */
    const [resetPaginationToggle_ListadoEmpresas, setResetPaginationToggle_ListadoEmpresas] = React.useState(false);
    const [filterText_ListadoEmpresas, setFilterText_ListadoEmpresas] = React.useState('');

    let filteredItems_ListadoEmpresas=Emp_EmpresasList;
    filteredItems_ListadoEmpresas =( filterText_ListadoEmpresas.length >0 && Emp_EmpresasList.length>0 ) ? Emp_EmpresasList.filter(item =>
    (
    item.id==filterText_ListadoEmpresas
    || ( item.codigo!=null && item.codigo.toLowerCase().includes(filterText_ListadoEmpresas.toLowerCase()) )
    || ( item.nombre!=null && item.nombre.toLowerCase().includes(filterText_ListadoEmpresas.toLowerCase()) )
    )):Emp_EmpresasList;

    const subHeaderComponentMemo_ListadoEmpresas = React.useMemo(() => {
      const handleClear_ListadoEmpresas = () => {
        if (filterText_ListadoEmpresas) {
          setResetPaginationToggle_ListadoEmpresas(!resetPaginationToggle_ListadoEmpresas);
          setFilterText_ListadoEmpresas('');
        }
      };

      return <div className={Col6M0}>
      <div className="col-12">
        <FilterComponent_ListadoEmpresas onFilter_ListadoEmpresas={e => setFilterText_ListadoEmpresas(e.target.value)}
        onClear_ListadoEmpresas={handleClear_ListadoEmpresas} filterText_ListadoEmpresas={filterText_ListadoEmpresas} /></div>
      </div>;
    }, [filterText_ListadoEmpresas, resetPaginationToggle_ListadoEmpresas]);

    const columns_ListadoEmpresas = [
      {
          name: <IntlMessages id="label.acciones"/>,
          cell: row =>
          {
            return (<div class="row pl-3">

                <i class={IconEdit2x} title="EDITAR"
                onClick={()=>{
                  dispatch(Emp_Get_Empresas(row.id));
                }} ></i>

                <i class={IconDelete2x} title="ELIMINAR"
                onClick={()=>{
                  Confirmar_Eliminar_ListadoEmpresas(row);
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
    /* Listado _ListadoEmpresas */

return (
<div>
<div className="modules_contenido">
{/* CONTENIDO CONTENIDO */}
<div>
    <div className="bg-primary Form_Cabecera mt-3">
      <IntlMessages id="label.empresas"/>
    </div>
    <div className="Form_Cuerpo">
        <div className="row">
            <div className={Col6M3}>
                <InputLabel className="Label_Input_Format">{<IntlMessages id="label.nombre"/>}<i class={IconRequerido1x}></i></InputLabel>
                <TextField 
                  id="nombre"                  
                  defaultValue={controlsEmpresas.nombre}
                  value={controlsTempEmpresas.nombre}
                  onChange={onChangeEmpresas}
                  onBlur={setPayloadEmpresas}
                  size="small"
                  className="Input_Number_Format"
                  />
            </div>
        </div>
        <div className="row">
            <div className="BotonPrimary" onClick={()=>{
                if(controlsEmpresas.id==0){
                    dispatch(Emp_Post_Empresas(controlsEmpresas));
                }else{
                    dispatch(Emp_Put_Empresas(controlsEmpresas));
                }
            }}>{ controlsEmpresas.id != 0 ? <IntlMessages id="label.actualizar"/> : <IntlMessages id="label.guardar"/>}</div>

            <div className="BotonDefault" onClick={()=>{
                dispatch(Emp_Get_EmpresasList());
            }}><IntlMessages id="label.limpiar"/></div>
        </div>
        <DataTable
        className="TablaDataRow"
        columns={columns_ListadoEmpresas}
        data={filteredItems_ListadoEmpresas}
        pagination
        subHeader
        subHeaderComponent={subHeaderComponentMemo_ListadoEmpresas}
        />
    </div>

<ToastContainer />
<Dialog
    open={openEliminar_ListadoEmpresas}
    onClose={handleCloseEliminar_ListadoEmpresas}
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
      <span onClick={handleCloseEliminar_ListadoEmpresas} color="primary" className="btn btn-primary">NO</span>
      <span onClick={()=>{ dispatch(Emp_Delete_Empresas(IdEliminar_ListadoEmpresas.id)); }} color="primary" className="btn btn-danger" autoFocus> SI </span>
    </DialogActions>
</Dialog>
</div>
{/* CONTENIDO CONTENIDO */}
</div>
</div>
)};

export default Form;