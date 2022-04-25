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

} from './Actions.js';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(0),
    },
    selectEmpty: {
        marginTop: theme.spacing(1),
    },
}));

/* Listado _Base_Listado */

const List_Base_Listado = [
  { id:1,nombre:'NOMBRE 1'},
  { id:2,nombre:'NOMBRE 2'},
  { id:3,nombre:'NOMBRE 3'},
  { id:4,nombre:'NOMBRE 4'},
  { id:5,nombre:'NOMBRE 5'},
]
const FilterComponent_Base_Listado = ({ filterText_Base_Listado, onFilter_Base_Listado, onClear_Base_Listado }) => (
  <div className="row float-right">
    <TextField id="search" type="text" placeholder="Filter" aria-label="Search Input" value={filterText_Base_Listado} onChange={onFilter_Base_Listado} />
    <i class={IconClose3x} onClick={onClear_Base_Listado} title="CERRAR"></i>
  </div>
);
/* Listado _Base_Listado */



const Form = ({title, match}) => { 
  
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const classes = useStyles();
    const {

    } = useSelector(({Clientes_Maintainer}) => Clientes_Maintainer);

    const dispatch = useDispatch();

    /* ELIMINAR PROPUESTA COMERCIAL*/
    const [IdEliminar_Base_Listado, setIdEliminar_Base_Listado] = React.useState(false);
    const [openEliminar_Base_Listado, setOpenEliminar_Base_Listado] = React.useState(false);

    const handleCloseEliminar_Base_Listado = () => {
      setOpenEliminar_Base_Listado(false);
      setIdEliminar_Base_Listado(0);
      //dispatch(Pc_Set_Message_Eliminar_Base_Listado(false));
    };

    function Confirmar_Eliminar_Base_Listado(row)
    {
      setIdEliminar_Base_Listado(row);
      setOpenEliminar_Base_Listado(true);
      //dispatch(Pc_Set_Message_Eliminar_Base_Listado(true));
    }
    /*
    useEffect(() => {
      if (!Message_Eliminar_Base_Listado) {
        setOpenEliminar_Base_Listado(false);
        setIdEliminar_Base_Listado(0);
      }
    }, [Message_Eliminar_Base_Listado]);
    */
    /* ELIMINAR PROPUESTA COMERCIAL*/

    /* Listado _Base_Listado */
    const [resetPaginationToggle_Base_Listado, setResetPaginationToggle_Base_Listado] = React.useState(false);
    const [filterText_Base_Listado, setFilterText_Base_Listado] = React.useState('');

    let filteredItems_Base_Listado=List_Base_Listado;
    filteredItems_Base_Listado =( filterText_Base_Listado.length >0 && List_Base_Listado.length>0 ) ? List_Base_Listado.filter(item =>
    (
    item.id==filterText_Base_Listado
    || item.nombre.includes(filterText_Base_Listado)
    )):List_Base_Listado;

    const subHeaderComponentMemo_Base_Listado = React.useMemo(() => {
      const handleClear_Base_Listado = () => {
        if (filterText_Base_Listado) {
          setResetPaginationToggle_Base_Listado(!resetPaginationToggle_Base_Listado);
          setFilterText_Base_Listado('');
        }
      };

      return <div className={Col6M0}>
      <div className="col-12">
        <FilterComponent_Base_Listado onFilter_Base_Listado={e => setFilterText_Base_Listado(e.target.value)}
        onClear_Base_Listado={handleClear_Base_Listado} filterText_Base_Listado={filterText_Base_Listado} /></div>
      </div>;
    }, [filterText_Base_Listado, resetPaginationToggle_Base_Listado]);

    const columns_Base_Listado = [
      {
          name: <IntlMessages id="label.acciones"/>,
          cell: row =>
          {
            return (<div class="row">

                <i class={IconEdit2x} title="EDITAR"
                onClick={()=>{
                  // dispatch(Pc_Get_Base_Listado(row));
                }} ></i>

                <i class={IconDelete2x} title="ELIMINAR"
                onClick={()=>{
                  // Confirmar_Eliminar_Base_Listado(row);
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
    /* Listado _Base_Listado */

return (
<div>
<div className="modules_contenido">
{/* CONTENIDO CONTENIDO */}
<div>
    <div className="bg-primary Form_Cabecera mt-3">
      <IntlMessages id="label.tituloFormulario"/>
    </div>
    <div className="Form_Cuerpo">
        <div className="row">
            <div className={Col3M3}>
                <InputLabel className="Label_Input_Format">{<IntlMessages id="label.campo1"/>}<i class={IconRequerido1x}></i></InputLabel>
                <TextField 
                  id="campo1"                  
                  size="small"
                  className="Input_Number_Format"
                  />
            </div>
            <div className={Col3M3}>
                <InputLabel className="Label_Input_Format">{<IntlMessages id="label.campo2"/>}<i class={IconRequerido1x}></i></InputLabel>
                <TextField 
                  id="campo2"                  
                  size="small"
                  className="Input_Number_Format"
                  />
            </div>
            <div className={Col3M3}>
                <InputLabel className="Label_Input_Format">{<IntlMessages id="label.campo3"/>}<i class={IconRequerido1x}></i></InputLabel>
                <TextField 
                  id="campo3"                  
                  size="small"
                  className="Input_Number_Format"
                  />
            </div>
            <div className={Col3M3}>
                <InputLabel className="Label_Input_Format">{<IntlMessages id="label.campo4"/>}<i class={IconRequerido1x}></i></InputLabel>
                <TextField 
                  id="campo4"                  
                  size="small"
                  className="Input_Number_Format"
                  />
            </div>            
        </div>
        <div className="row">
            <div className="BotonPrimary" onClick={()=>{
                /*
                if(controlsClientesDirecciones.id>0){
                  dispatch(Put_ClientesDirecciones(controlsClientesDirecciones));
                }else{
                  dispatch(Post_ClientesDirecciones(controlsClientesDirecciones));
                }
                */
            }}>{ 0>0 ? <IntlMessages id="label.actualizar"/> : <IntlMessages id="label.guardar"/>}</div>

            <div className="BotonDefault" onClick={()=>{
                /*
                dispatch(getRegisterPaisList());
                */
            }}><IntlMessages id="label.volver"/></div>
        </div>
        <DataTable
        className="TablaDataRow"
        columns={columns_Base_Listado}
        data={filteredItems_Base_Listado}
        pagination
        subHeader
        subHeaderComponent={subHeaderComponentMemo_Base_Listado}
        />
    </div>

<ToastContainer />
<Dialog
    open={openEliminar_Base_Listado}
    onClose={handleCloseEliminar_Base_Listado}
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
      <span onClick={handleCloseEliminar_Base_Listado} color="primary" className="btn btn-primary">NO</span>
      <span onClick={()=>{ /*dispatch(Pc_Delete_Base_Listado(IdEliminar_Base_Listado));*/ }} color="primary" className="btn btn-danger" autoFocus> SI </span>
    </DialogActions>
</Dialog>
</div>
{/* CONTENIDO CONTENIDO */}
</div>
</div>
)};

export default Form;