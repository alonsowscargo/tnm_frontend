import React,{useEffect, useState} from 'react';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import IntlMessages from 'util/IntlMessages';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {useDispatch, useSelector} from 'react-redux';
import produce from 'immer';

/* select */
import Select from '@material-ui/core/Select';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
/* select */

import {
  onChangePayload,
  postRegisterNaves,
  putRegisterNaves
} from 'actions/NavesMaintainer';

const MantenedorNavesInfo = (props) => {

  const dispatch = useDispatch();
  const [controls, setControls] = useState(props.payload);

  const [naves, setNaves] = useState(props);
  useEffect(() => {
    setNaves(props);
    setControls(props.payload);
  }, [props]);

  function onChange(event) {
    event.persist();
    const tempControls = produce(controls, draft => {
      draft[event.target.id] = event.target.value;
    });
    setControls(tempControls);
    dispatch(onChangePayload(tempControls));
  }

  function limpiarPayloads(){
    const tempControls = produce(controls, draft => {
      draft['id'] = 0;
      draft['mmsi'] = '';
      draft['imo'] = '';
      draft['nombre'] = '';
      draft['bandera'] = '';
      draft['tipo'] = '';
    });
    setControls(tempControls);
  }

  return (
    <div>
        <div className="bg-primary Form_Cabecera">
          <IntlMessages id="label.InformacionNaves"/>
        </div>
        <div className="Form_Cuerpo">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 d-flex flex-column">
                  <TextField
                  id="mmsi"
                  label={<IntlMessages id="label.mmsi"/>}
                  required
                  size="small"
                  margin="none"
                  defaultValue={controls.mmsi}
                  value={controls.mmsi}
                  onChange={onChange}
                  />
                </div>
                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 d-flex flex-column">
                  <TextField
                  id="imo"
                  label={<IntlMessages id="label.imo"/>}
                  required
                  size="small"
                  margin="none"
                  defaultValue={controls.imo}
                  value={controls.imo}
                  onChange={onChange}
                  />
                </div>  
                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 d-flex flex-column">
                  <TextField
                  id="nombre"
                  label={<IntlMessages id="label.nombre"/>}
                  required
                  size="small"
                  margin="none"
                  defaultValue={controls.nombre}
                  value={controls.nombre}
                  onChange={onChange}
                  />
                </div>  
                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 d-flex flex-column">
                  <TextField
                  id="bandera"
                  label={<IntlMessages id="label.bandera"/>}
                  required
                  size="small"
                  margin="none"
                  defaultValue={controls.bandera}
                  value={controls.bandera}
                  onChange={onChange}
                  />
                </div>                                                
            </div>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 d-flex flex-column">
                  <TextField
                  id="tipo"
                  label={<IntlMessages id="label.tipo"/>}
                  required
                  size="small"
                  margin="none"
                  defaultValue={controls.tipo}
                  value={controls.tipo}
                  onChange={onChange}
                  />
                </div>
            </div>            
            <Button variant="contained" className="bg-primary text-white jr-btn jr-btn-sm mt-3 rounded-lg" onClick={()=>{
              if(controls.id>0){
                dispatch(putRegisterNaves(controls))
              }else{
                dispatch(postRegisterNaves(controls))
              }
              }}>
              <span>{controls.id>0 ? <IntlMessages id="label.actualizar"/> : <IntlMessages id="label.guardar"/>}</span>
            </Button>

            <Button variant="contained" className="bg-default jr-btn jr-btn-sm mt-3 rounded-lg" onClick={()=>{limpiarPayloads()}}>
              <IntlMessages id="label.limpiar"/>
            </Button>
        </div>
    </div>
  )
};

export default MantenedorNavesInfo;

