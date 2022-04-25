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
import { getRegisterRegionByPaisList } from 'actions/RegionMaintainer';

import {
  onChangePayload,
  postRegisterComunas,
  putRegisterComunas
} from 'actions/ComunasMaintainer';

const MantenedorComunasInfo = (props) => {

  const dispatch = useDispatch();
  const [controls, setControls] = useState(props.payload);

  const [comunas, setComunas] = useState(props);
  useEffect(() => {
    setComunas(props);
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

  function onChangefk_pais(event) {
    event.persist();
    dispatch(getRegisterRegionByPaisList(event.target.value));
    const tempControls = produce(controls, draft => {
      draft['fk_pais'] = event.target.value;
    });
    setControls(tempControls);
    dispatch(onChangePayload(tempControls));
  }

  function onChangefk_region(event) {
    event.persist();
    const tempControls = produce(controls, draft => {
      draft['fk_region'] = event.target.value;
    });
    setControls(tempControls);
    dispatch(onChangePayload(tempControls));
  }

  function limpiarPayloads(){
    const tempControls = produce(controls, draft => {
      draft['id'] = '';
      draft['codigo'] = '';
      draft['nombre'] = '';
      draft['fk_pais'] = 0;
      draft['fk_region'] = 0;
    });
    setControls(tempControls);
    dispatch(getRegisterRegionByPaisList(0));
  }

  return (
    <div>
        <div className="bg-primary Form_Cabecera">
          <IntlMessages id="label.InformacionMenu"/>
        </div>
        <div className="Form_Cuerpo">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 d-flex flex-column">
                  <FormControl>
                    <InputLabel required>{<IntlMessages id="label.pais"/>}</InputLabel>
                    <Select
                      id="fk_pais"
                      defaultValue={controls.fk_pais}
                      value={controls.fk_pais}
                      onChange={onChangefk_pais}
                      size="small"
                      margin="none"
                    >
                      <MenuItem key="0" value="0"> SELECCIONAR </MenuItem>
                      {props.paisList.map(item => (
                        <MenuItem key={item.id} value={item.id}> {item.nombre} </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 d-flex flex-column">
                  <FormControl>
                    <InputLabel required>{<IntlMessages id="label.region"/>}</InputLabel>
                    <Select
                      id="fk_region"
                      defaultValue={controls.fk_region}
                      value={controls.fk_region}
                      onChange={onChangefk_region}
                      size="small"
                      margin="none"
                    >
                      <MenuItem key="" value=""> SELECCIONAR </MenuItem>
                      {props.regionList.map(item => (
                        <MenuItem key={item.id} value={item.id}> {item.nombre} </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 d-flex flex-column">
                  <TextField
                  id="codigo"
                  label={<IntlMessages id="label.codigo"/>}
                  required
                  size="small"
                  margin="none"
                  defaultValue={controls.codigo}
                  value={controls.codigo}
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
              </div>
              <Button variant="contained" className="bg-primary text-white jr-btn jr-btn-sm mt-3 rounded-lg" onClick={()=>{
                if(controls.id>0){
                  dispatch(putRegisterComunas(controls))
                }else{
                  dispatch(postRegisterComunas(controls))
                }
                }}>
                <span>{controls.id>0 ? <IntlMessages id="label.actualizar"/> : <IntlMessages id="label.guardar"/>
}</span>
              </Button>

              <Button variant="contained" className="bg-default jr-btn jr-btn-sm mt-3 rounded-lg" onClick={()=>{limpiarPayloads()}}><IntlMessages id="label.limpiar"/></Button>
        </div>
    </div>
  )
};

export default MantenedorComunasInfo;

