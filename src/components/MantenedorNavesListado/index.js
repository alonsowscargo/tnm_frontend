import React,{useEffect, useState} from 'react';
import MaterialTable from 'material-table';
import IntlMessages from 'util/IntlMessages';
import {useDispatch, useSelector} from 'react-redux';
import { Satellite } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import {
  deleteRegisterNaves, 
  getRegisterNaves,
} from 'actions/NavesMaintainer';

const MantenedorNavesListado = (props) => {
  const [propState, setpropState] = useState(props);
  useEffect(() => {
      setpropState(props);
  }, [props]);

  const dispatch = useDispatch();
  const [state, setState] = useState({
    columns: [
      { title: <IntlMessages id="label.mmsi"/>, field: 'mmsi' },
      { title: <IntlMessages id="label.imo"/>, field: 'imo' },
      { title: <IntlMessages id="label.nombre"/>, field: 'nombre' },
      { title: <IntlMessages id="label.bandera"/>, field: 'bandera' },
      { title: <IntlMessages id="label.tipo"/>, field: 'tipo' },
    ],
  });

  return (
    <div>
        <div className="bg-primary Form_Cabecera mt-3">
            <IntlMessages id="label.listadoNaves"/>
          </div>
          <div className="border rounded">
          <MaterialTable
            title=''
            columns={state.columns}
            data={propState.navesList}
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
                onClick: (event, rowData) => {
                  dispatch(getRegisterNaves(rowData));
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
                  dispatch(deleteRegisterNaves(rowData));
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

export default MantenedorNavesListado;
