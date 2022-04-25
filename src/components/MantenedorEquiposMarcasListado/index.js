import React,{useEffect, useState} from 'react';
import MaterialTable from 'material-table';
import IntlMessages from 'util/IntlMessages';
import {useDispatch, useSelector} from 'react-redux';
import { Satellite } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import {
  deleteRegisterEquiposMarcas, 
  getRegisterEquiposMarcas,
} from 'actions/EquiposMarcasMaintainer';

const MantenedorEquiposMarcasListado = (props) => {
  const [propState, setpropState] = useState(props);
  useEffect(() => {
      setpropState(props);
  }, [props]);

  const dispatch = useDispatch();
  const [state, setState] = useState({
    columns: [
      { title: <IntlMessages id="label.nombre"/>, field: 'nombre' },
    ],
  });

  return (
    <div>
        <div className="bg-primary Form_Cabecera mt-3">
            <IntlMessages id="label.listadoEquiposMarcas"/>
          </div>
          <div className="border rounded">
          <MaterialTable
            title=''
            columns={state.columns}
            data={propState.equiposMarcasList}
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
                  dispatch(getRegisterEquiposMarcas(rowData));
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
                  dispatch(deleteRegisterEquiposMarcas(rowData));
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

export default MantenedorEquiposMarcasListado;
