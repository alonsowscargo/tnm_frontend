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
  postRegisterMenu,
  putRegisterMenu
} from 'actions/MenuMaintainer';

const MantenedorMenusInfo = (props) => {

  const dispatch = useDispatch();
  const [controls, setControls] = useState(props.payload);

  const [menus, setMenus] = useState(props);
  useEffect(() => {
    setMenus(props);
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

  function onChangeMenuPadre(event) {
    event.persist();
    const tempControls = produce(controls, draft => {
      draft['menuPadre'] = event.target.value;
    });
    setControls(tempControls);
    dispatch(onChangePayload(tempControls));
  }

  function limpiarPayloads(){
    const tempControls = produce(controls, draft => {
      draft['id'] = 0;
      draft['nombre'] = '';
      draft['permiso'] = '';
      draft['menuPadre'] = '';
      draft['url'] = '';
    });
    setControls(tempControls);
  }

  return (
    <div>
        <div className="bg-primary Form_Cabecera">
          <IntlMessages id="label.InformacionMenu"/>
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
                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 d-flex flex-column">
                  <TextField
                  id="permiso"
                  label={<IntlMessages id="label.permiso"/>}
                  required
                  size="small"
                  margin="none"
                  defaultValue={controls.permiso}
                  value={controls.permiso}
                  onChange={onChange}
                  />
                </div>
                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 d-flex flex-column">
                  <FormControl>
                    <InputLabel required>{<IntlMessages id="label.menuPadre"/>}</InputLabel>
                    <Select
                      id="menuPadre"
                      defaultValue={controls.menuPadre}
                      value={controls.menuPadre}
                      onChange={onChangeMenuPadre}
                      size="small"
                      margin="none"
                    >
                      <MenuItem key="0" value="0"> Ninguno </MenuItem>
                      {menus.menuList.map(item => (
                        <MenuItem key={item.id} value={item.id}> {item.nombre} </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 d-flex flex-column">
                  <TextField
                  id="url"
                  label={<IntlMessages id="label.url"/>}
                  required
                  size="small"
                  margin="none"
                  defaultValue={controls.url}
                  value={controls.url}
                  onChange={onChange}
                  />
                </div>
              </div>
              <Button variant="contained" className="bg-primary text-white jr-btn jr-btn-sm mt-3 rounded-lg" onClick={()=>{
                if(controls.id>0){
                  dispatch(putRegisterMenu(controls))
                }else{
                  dispatch(postRegisterMenu(controls))
                }
                }}>
                <span>{
                  controls.id>0 ? <IntlMessages id="label.actualizar"/> : <IntlMessages id="label.guardar"/>
                }</span>
              </Button>

              <Button variant="contained" className="bg-default jr-btn jr-btn-sm mt-3 rounded-lg" onClick={()=>{limpiarPayloads()}}><IntlMessages id="label.limpiar"/></Button>
        </div>
    </div>
  )
};

export default MantenedorMenusInfo;

