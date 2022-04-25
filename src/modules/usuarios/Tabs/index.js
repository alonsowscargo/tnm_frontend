import React,{useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DireccionesForm from '../../usuarioDirecciones';
import NotasForm from '../../usuarioNotas';
import RelacionClientesForm from '../../usuarioClientes';
import CuentasBancariasForm from '../../usuarioCuentasBancarias';
import ContactosForm from '../../usuarioContactos';
import {Modal, ModalHeader,ModalBody} from 'reactstrap';
import CloseIcon from '@material-ui/icons/Close';
import IntlMessages from 'util/IntlMessages';
import IconButton from '@material-ui/core/IconButton';
import '../styles.scss';

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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },paper: {
    position: 'absolute',
    width: 200,
    backgroundColor: '#fff',//theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  }
}));

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


const MantenedorClientesTabs=(props)=>{
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [propState, setpropState] = useState(props);
  useEffect(() => {
    setpropState(props);
}, []);
const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    props.modalUserId ?
    <Modal toggle={()=>{dispatch(props.onToggleModalUserData())}} isOpen={props.openModal}>
        <ModalHeader className="modal-box-header bg-primary text-white Form_Cabecera">
          <IntlMessages id="contact.addContact"/>
                <IntlMessages id="label.editInfoUser"/>
            <IconButton className="text-white" onClick={()=>{dispatch(props.onToggleModalUserData())}}
                        >
                <CloseIcon/>
            </IconButton>
        </ModalHeader>
    <ModalBody>
    <div /*className={classes.root}*/ className="mt-3">
      <AppBar position="static" className="rounded bg-primary Form_Cabecera">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="DIRECCIONES" {...a11yProps(0)} />
          <Tab label="CONTACTOS" {...a11yProps(1)} />
          <Tab label="NOTAS" {...a11yProps(2)} />
          <Tab label="CUENTAS BANCARIAS" {...a11yProps(3)} />
          <Tab label="CLIENTES" {...a11yProps(4)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0} className="border" style={{backgroundColor:'#fff'}}>
        <DireccionesForm addressTypes={props.addressTypes} payloadAddress={props.payloadAddress} onChangePayloadAddress={props.onChangePayloadAddress} addressUserList={props.addressUserList} collapsed={props.collapsed} onChangeCollapse={props.onChangeCollapse}/>
      </TabPanel>
      
      <TabPanel value={value} index={1} className="border" style={{backgroundColor:'#fff'}}>
        {<ContactosForm contactTypes={props.contactTypes} payloadContact={props.payloadContact}/>}
      </TabPanel>      
      
      <TabPanel value={value} index={2} className="border" style={{backgroundColor:'#fff'}}>
        <NotasForm/>
      </TabPanel>
      
      <TabPanel value={value} index={3} className="border" style={{backgroundColor:'#fff'}}>
         {<CuentasBancariasForm bankAccountsTypes={props.bankAccountsTypes} banks={props.banks}/>}      </TabPanel>
      
      <TabPanel value={value} index={4} className="border" style={{backgroundColor:'#fff'}}>
        {<RelacionClientesForm/>} 
      </TabPanel>
    </div></ModalBody></Modal>:<div></div>
  );
}

export default MantenedorClientesTabs;