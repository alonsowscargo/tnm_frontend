import React,{useEffect, useState} from 'react';
import IntlMessages from 'util/IntlMessages';
import Button from '@material-ui/core/Button';
import {useDispatch} from 'react-redux';
/* select */
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import produce from 'immer';
import lodash from 'lodash';
import {validationsUser,UserEmpty} from 'models';
import {
  onChangePayload,
  postRegisterUser,
  putRegisterUser,
  cleanRegisterUser,
  onChangeValidationsUser
} from '../Actions';
import {
  IconEdit2x,
  IconDelete2x,
  IconClose3x,
  IconEtiqueta2x,
  IconRequerido1x,
  Col6M0,
  Col3M3,
} from '../../Diccionario.js';
const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const MantenedorUsuariosInfo = (props) => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const dispatch = useDispatch();
  const [controls, setControls] = useState(props.payload);

  useEffect(() => {
    setControls(props.payload);
}, [props]);

function onChange(event) {
    event.persist();
    const tempControls = produce(controls, draft => {
      draft[event.target.id ? event.target.id:event.target.name] = event.target.value;
    });
    setControls(tempControls);
   dispatch(onChangePayload(tempControls));
}


  const handleChange = event => {
    setPersonName(event.target.value);
  };

  const handleChangeMultiple = event => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };

  return (
  <div>
      <div className="bg-primary Form_Cabecera">
        <IntlMessages id="label.InformacionUsuario"/>
      </div>
      <div className="Form_Cuerpo">    
        <div className="row">
          <div className={Col3M3}>
              <InputLabel className="Label_Input_Format">{<IntlMessages id="label.rut"/>}<i class={IconRequerido1x}></i></InputLabel>
              <TextField 
                id="rut"
                name="rut"
                helperText={props.validations.rut.textError}
                error={props.validations.rut.error}
                required={props.validations.rut.required}
                defaultValue={controls.rut}
                value={controls.rut}
                onChange={onChange}              
                size="small"
                className="Input_Number_Format"
                />
          </div>
          <div className={Col3M3}>
              <InputLabel className="Label_Input_Format">{<IntlMessages id="label.usuario"/>}<i class={IconRequerido1x}></i></InputLabel>
              <TextField 
                id="usuario"
                name="usuario"
                defaultValue={controls.usuario}
                value={controls.usuario}
                onChange={onChange}
                required={props.validations.usuario.required}
                helperText={props.validations.usuario.textError}
                error={props.validations.usuario.error}            
                size="small"
                className="Input_Number_Format"
                />
          </div>  
          <div className={Col3M3}>
              <InputLabel className="Label_Input_Format">{<IntlMessages id="label.nombre"/>}<i class={IconRequerido1x}></i></InputLabel>
              <TextField 
                id="nombre"
                name="nombre"
                defaultValue={controls.nombre}
                value={controls.nombre}
                onChange={onChange}
                required={props.validations.nombre.required}
                helperText={props.validations.nombre.textError}
                error={props.validations.nombre.error}         
                size="small"
                className="Input_Number_Format"
                />
          </div>  
          <div className={Col3M3}>
              <InputLabel className="Label_Input_Format">{<IntlMessages id="label.apellidos"/>}<i class={IconRequerido1x}></i></InputLabel>
              <TextField 
                id="apellidos"
                name="apellidos"
                onChange={onChange}
                defaultValue={controls.apellidos}
                value={controls.apellidos}
                required={props.validations.apellidos.required}
                helperText={props.validations.apellidos.textError}
                error={props.validations.apellidos.error}        
                size="small"
                className="Input_Number_Format"
                />
          </div>                              
        </div>
        <div className="row mt-4">
            <div className={Col3M3}>
                <InputLabel className="Label_Input_Format">{<IntlMessages id="label.telefono"/>}<i class={IconRequerido1x}></i></InputLabel>
                <TextField 
                  id="telefono"
                  name="telefono"
                  onChange={onChange}
                  defaultValue={controls.telefono}
                  value={controls.telefono}      
                  size="small"
                  className="Input_Number_Format"
                  />
            </div> 
            <div className={Col3M3}>
                <InputLabel className="Label_Input_Format">{<IntlMessages id="label.rol"/>}<i class={IconRequerido1x}></i></InputLabel>
                <Select 
                  id="fk_rol"
                  name="fk_rol"
                  defaultValue={controls.fk_rol}
                  value={controls.fk_rol}
                  onChange={onChange} 
                  required={props.validations.fk_rol.required}
                  helperText={props.validations.fk_rol.textError}
                  error={props.validations.fk_rol.error}      
                  size="small"
                  className="Input_Number_Format"
                  >
                  <MenuItem key="0" value="0"> Ninguno </MenuItem>
                    {props.roles && props.roles.map(item => (
                    <MenuItem key={item.id} value={item.id}> {item.nombre} </MenuItem>
                  ))}
                  </Select>
            </div> 
            <div className={Col3M3}>
                <InputLabel className="Label_Input_Format">{<IntlMessages id="label.password"/>}<i class={IconRequerido1x}></i></InputLabel>
                <TextField 
                  type="password"
                  id="password"
                  name="password"
                  onChange={onChange}
                  defaultValue={controls.password}
                  size="small"
                  className="Input_Number_Format"
                  />
            </div>       
            <div className={Col3M3}>
                <InputLabel className="Label_Input_Format">{<IntlMessages id="label.estado"/>}<i class={IconRequerido1x}></i></InputLabel>
                <Select 
                  id="estado"
                  name="estado"
                  value={controls.estado ? 1:0}
                  onChange={onChange}
                  input={<Input />}
                  size="small"
                  className="Input_Number_Format"
                >
                  <MenuItem key='1' value={1}> ACTIVO </MenuItem>
                  <MenuItem key='0' value={0}> BLOQUEADO </MenuItem>
                </Select>
            </div>       
        </div>
        <div className="row mt-3">
            <div className={Col3M3}>
                <InputLabel className="Label_Input_Format">{<IntlMessages id="label.email"/>}<i class={IconRequerido1x}></i></InputLabel>
                <TextField 
                  id="email"
                  name="email"
                  onChange={onChange}
                  defaultValue={controls.email}
                  value={controls.email}
                  required={props.validations.email.required}
                  helperText={props.validations.email.textError}
                  error={props.validations.email.error}
                  size="small"
                  className="Input_Number_Format"
                  />
            </div> 
          </div>
        {/*<div className="row mt-3">
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 d-flex flex-column">
              <label htmlFor="upload-photo">
                <input
                  style={{ display: 'none' }}
                  id="upload-photo"
                  name="upload-photo"
                  type="file"
                />
                <Button color="gray" variant="contained" component="span">
                  {<IntlMessages id="label.subirImagen"/>}
                </Button>
              </label>       
            </div>   
                  </div>*/}
        <div className="row">
        <div className="BotonPrimary" onClick={()=>{
          let save=true;
          if(controls.id>0){
            if(save==true){
              dispatch(putRegisterUser(controls));
            }
            
          }else{
            let vldtns=lodash.cloneDeep(props.validations);
            if(controls.rut.length==0){
              save=false;
              vldtns={
                ...vldtns,
                rut:{
                  ...vldtns.rut,
                  error:true,
                  textError:'El rut es requerido'
                }
              }
            }

            if(controls.usuario.length==0){
              save=false;
              vldtns={
                ...vldtns,
                usuario:{
                  ...vldtns.usuario,
                  error:true,
                  textError:'El usuario es requerido'
                }
              }
            }

            if(controls.nombre.length==0){
              save=false;
              vldtns={
                ...vldtns,
                nombre:{
                  ...vldtns.nombre,
                  error:true,
                  textError:'El nombre es requerido'
                }
              }
            }

            if(controls.apellidos.length==0){
              save=false;
              vldtns={
                ...vldtns,
                apellidos:{
                  ...vldtns.apellidos,
                  error:true,
                  textError:'El apellido es requerido'
                }
              }
            }

            if(controls.email.length==0){
              save=false;
              vldtns={
                ...vldtns,
                email:{
                  ...vldtns.email,
                  error:true,
                  textError:'El email es requerido'
                }
              }
            }

            if(controls.fk_rol==0){
              save=false;
              vldtns={
                ...vldtns,
                fk_rol:{
                  ...vldtns.fk_rol,
                  error:true,
                  textError:'El rol es requerido'
                }
              }
            }

            if(save){
              dispatch(onChangeValidationsUser(validationsUser));
              dispatch(postRegisterUser(controls));
            }else{
              dispatch(onChangeValidationsUser(vldtns));
            }
             /* dispatch(onChangeValidationsUser({
                ...props.validations,
                rut:{
                  ...props.validations.rut,
                  error:true,
                  textError:'El rut es requerido'
                }
              }))
            }else{
              dispatch(postRegisterUser(controls))
            }*/
            
          }          
          }}>
        <span>{controls.id>0 ? <IntlMessages id="label.actualizar"/>:<IntlMessages id="label.guardar"/>}</span>
        </div>
        <div className="BotonDefault" onClick={()=>{
            dispatch(cleanRegisterUser());       
          }}>
          <i className="zmdi zmdi-clear"/>
        <span><IntlMessages id="label.limpiar"/></span>
        </div>
        </div>
      </div>
  </div>
  )
};

export default MantenedorUsuariosInfo;
