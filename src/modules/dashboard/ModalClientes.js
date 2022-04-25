import React from 'react';
import {useDispatch} from 'react-redux';
import IntlMessages from 'util/IntlMessages';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Form from 'modules/clientes/Form';
import {
    getDashboardClientesSinRepresentanteLegalDocumentacion
} from './Actions';

const ModalClientes = (props) =>{
    const dispatch = useDispatch();
    return(
        <Dialog
          open={props.open}
          onClose={()=>{dispatch(props.onToggle(props.cliente))}}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          fullWidth={true}
          maxWidth="xl"
      >
        <DialogTitle
        style={{height:60}}
        id="customized-dialog-title"
       // onClose={()=>{dispatch(props.onToggle(props.cliente))}}
        className="modal-box-header text-white Form_Cabecera"
        >
          <IntlMessages id="label.editarCliente"/>
          <IconButton className="text-white" onClick={()=>{dispatch(props.onToggle()); dispatch(getDashboardClientesSinRepresentanteLegalDocumentacion());}}>
              <CloseIcon/>
          </IconButton>
        </DialogTitle>
                <DialogContent>
                    <Form isExternal={true} />
                </DialogContent>
        </Dialog>
    )
};


export default ModalClientes;