import React,{useEffect, useState} from 'react';
import MaterialTable from 'material-table';
import IntlMessages from 'util/IntlMessages';
import {useDispatch} from 'react-redux';
import Button from '@material-ui/core/Button';
import {
  deleteRegisterUser,
  onChangePayload,
  getLoadDataUser,
  onToggleModalUserData
} from '../Actions';
/*
import {
  getUserContacts
} from 'modules/usuarioContactos/Actions';
import {getUserBanksAccounts} from 'modules/usuarioCuentasBancarias/Actions';
import {getUserNotes} from 'modules/usuarioNotas/Actions';*/
const lodash=require('lodash');

const MantenedorUsuariosListado = (props) => {
  const [propState, setpropState] = useState(props);
  useEffect(() => {
    setpropState(props);
}, [props]);
const dispatch = useDispatch();
  const [state, setState] = useState({
    columns: [
      { title: <IntlMessages id="label.id"/>, field: 'id' },
      { title: <IntlMessages id="label.usuario"/>, field: 'usuario' },
      { title: <IntlMessages id="label.nombre"/>, field: 'nombre' },
      { title: <IntlMessages id="label.apellidos"/>, field: 'apellidos' },
      { title: <IntlMessages id="label.email"/>, field: 'email' },
      { title: <IntlMessages id="label.telefono"/>, field: 'telefono' },
      { title: <IntlMessages id="label.rol"/>, field: 'fk_rol_nombre' },
      { title: <IntlMessages id="label.estado"/>, field: 'estado_nombre' },
    ],
  });

  return (
    <div>
        <div className="bg-primary Form_Cabecera mt-3">
            <IntlMessages id="label.listadoUsuarios"/>
          </div>
          <div className="border rounded">
          <MaterialTable
            title=''
            columns={state.columns}
            data={propState.usersList}
            localization={{
              header: {
                actions: <IntlMessages id="label.acciones"/>
              },
              pagination: {
                  labelDisplayedRows: '{from}-{to} of {count}'
              },
              toolbar: {
                  nRowsSelected: '{0} '
              },
              body: {
                  emptyDataSourceMessage: <IntlMessages id="label.sinInformacion"/>,
                  filterRow: {
                      filterTooltip: 'Filter'
                  }
              }
            }}        
            actions={[
              {
                icon: props => (
                  <Button variant="contained" className="bg-warning jr-btn jr-btn-md rounded-lg">
                    <i className="zmdi zmdi-edit"/>
                  </Button>
                ),
                tooltip: 'Editar',
                onClick: (event, newData) => {
                  let objEdit=lodash.cloneDeep(newData);
                  delete objEdit.tableData;
                  dispatch(onChangePayload(objEdit));
                  /*dispatch(getLoadDataUser({id:objEdit.id}));
                  dispatch(getUserContacts({usuario_id:objEdit.id}));
                  dispatch(getUserBanksAccounts({usuario_id:objEdit.id}));*/
                }
              },
              {
                icon: props => (
                  <Button variant="contained" className="bg-danger jr-btn jr-btn-md rounded-lg">
                    <i className="zmdi zmdi-delete"/>
                    </Button>
                ),
                tooltip: 'Eliminar',
                onClick: (event, rowData) => {
                  dispatch(deleteRegisterUser(rowData));
                }
              },
              {
                icon: props => (
                  <Button variant="contained" className="bg-info jr-btn jr-btn-md rounded-lg">
                    <i className="zmdi zmdi-assignment-account"/>
                  </Button>
                ),
                tooltip: 'Ver / Editar información adicional',
                onClick: (event, newData) => {
                  let objEdit=lodash.cloneDeep(newData);
                  delete objEdit.tableData;
                  dispatch(getLoadDataUser({id:objEdit.id}));
                  //dispatch(getUserContacts(objEdit.id));
                  //dispatch(getUserBanksAccounts(objEdit.id));
                  dispatch(onToggleModalUserData({usuario_id:objEdit.id}));
                  //dispatch(getUserNotes(objEdit.id));
                }
              }
            ]}
            options={{
              exportButton: true
            }}
          />
      </div>
  </div>
  );
}

export default MantenedorUsuariosListado;
