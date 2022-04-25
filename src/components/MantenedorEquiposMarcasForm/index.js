import React,{useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MantenedorEquiposMarcasInfo from 'components/MantenedorEquiposMarcasInfo';
import MantenedorEquiposMarcasListado from 'components/MantenedorEquiposMarcasListado';

import { getRegisterEquiposMarcasList } from 'actions/EquiposMarcasMaintainer';
/* select */

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const MantenedorEquiposMarcasForm = ({title, match}) => {

  const path = match.path.substr(1);
  const subPath = path.split('/');

  const classes = useStyles();
  const theme = useTheme();
  
  const {loader, payload, equiposMarcasList} = useSelector(({equiposMarcasMaintainer}) => equiposMarcasMaintainer);
  
  const dispatch = useDispatch();
  useEffect(() => {
    if(equiposMarcasList.length===0)
    {
      dispatch(getRegisterEquiposMarcasList());
    }
  }, []);

  return (
    <div className="page-heading justify-content-sm-between align-items-sm-center">
        <h2 className="title">{title}</h2>
        <MantenedorEquiposMarcasInfo payload={payload} equiposMarcasList={equiposMarcasList}/>
        <MantenedorEquiposMarcasListado equiposMarcasList={equiposMarcasList}/>
    </div>
  )
};

export default MantenedorEquiposMarcasForm;