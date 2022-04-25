import React,{useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import IntlMessages from 'util/IntlMessages';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import {changePasswordConfiguracion,hideMessageConfiguracion,showMessageConfiguracion} from './Actions';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import produce from 'immer';
import {
    IconRequerido1x,
    Col3M3,
  } from '../Diccionario.js';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Configuracion = (props)=>{
    const [value, setValue] = React.useState(0);
    const [pass, setPass] = React.useState({p1:'',p2:''});

    const dispatch = useDispatch();
    const {
        showMessage,
        alertMessage
      } = useSelector(({Configuracion}) => Configuracion);

    useEffect(() => {
    if (showMessage) {
        toast[`${alertMessage.type}`](alertMessage.text);
        setTimeout(() => {
            dispatch(hideMessageConfiguracion());
        }, 100);
    }
    }, [showMessage]);


    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    const onChange=(event)=>{
        event.persist();
        const tempControls = produce(pass, draft => {
          draft[event.target.id ? event.target.id:event.target.name] = event.target.value;
        });
        setPass(tempControls);
    }
    return(
        <div className="mt-3">
        <AppBar position="static" className="rounded bg-primary Form_Cabecera">
            <Tabs value={value} onChange={handleChange} aria-label="TABS">
            <Tab label="PASSWORD" {...a11yProps(0)} />
            </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} className="border" style={{backgroundColor:'#fff'}}>
            <div className="row">
            <div className={Col3M3}>
                    <InputLabel className="Label_Input_Format">{<IntlMessages id="label.contrasena"/>}<i class={IconRequerido1x}></i></InputLabel>
                    <TextField 
                      id="p1"
                      name="p1"
                      value={pass.p1}
                      defaultvalue={pass.p1}
                      onChange={onChange}
                      //onBlur={Pay_setControlsClientesUsuarios}
                      size="small"
                      className="Input_Number_Format"
                      type="password"
                      />
                </div>
                <div className={Col3M3}>
                    <InputLabel className="Label_Input_Format">{<IntlMessages id="label.repetirContrasena"/>}<i class={IconRequerido1x}></i></InputLabel>
                    <TextField 
                      id="p2"
                      name="p2"
                      value={pass.p2}
                      defaultvalue={pass.p2}
                      onChange={onChange}
                      //onBlur={Pay_setControlsClientesUsuarios}
                      size="small"
                      className="Input_Number_Format"
                      type="password"
                      />
                </div> 
                <div className={Col3M3}>
                <Button variant="contained" className="bg-primary jr-btn jr-btn-md rounded-lg mt-3" onClick={()=>{
                    if(pass.p1===pass.p2){
                        dispatch(changePasswordConfiguracion(pass));
                    }else{
                        dispatch(showMessageConfiguracion({type:"error",text:"Las contraseñas deben ser iguales"}));
                    }
                }}><i className="zmdi zmdi-save"/>
                <span><IntlMessages id="label.guardar"/></span>
                </Button>   
                </div>
            </div>
        </TabPanel>
        <ToastContainer />
        </div>
        )
};

export default Configuracion;