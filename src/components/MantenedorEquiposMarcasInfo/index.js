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
  postRegisterEquiposMarcas,
  putRegisterEquiposMarcas
} from 'actions/EquiposMarcasMaintainer';

const MantenedorEquiposMarcasInfo = (props) => {

  const dispatch = useDispatch();
  const [controls, setControls] = useState(props.payload);

  const [equiposMarcas, setEquiposMarcas] = useState(props);
  useEffect(() => {
    setEquiposMarcas(props);
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
      draft['nombre'] = '';
    });
    setControls(tempControls);
  }

  return (
    <div>
        <div className="bg-primary Form_Cabecera">
          <IntlMessages id="label.InformacionEquiposMarcas"/>
        </div>
        <div className="Form_Cuerpo">
            <div className="row">
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
            </div>
            <Button variant="contained" className="bg-primary text-white jr-btn jr-btn-sm mt-3 rounded-lg" onClick={()=>{
              if(controls.id>0){
                dispatch(putRegisterEquiposMarcas(controls))
              }else{
                dispatch(postRegisterEquiposMarcas(controls))
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

export default MantenedorEquiposMarcasInfo;

