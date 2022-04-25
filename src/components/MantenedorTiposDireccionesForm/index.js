import React,{useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MantenedorTiposDireccionesInfo from 'components/MantenedorTiposDireccionesInfo';
import MantenedorTiposDireccionesListado from 'components/MantenedorTiposDireccionesListado';

import { getRegisterTiposDireccionesList } from 'actions/TiposDireccionesMaintainer';
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

const MantenedorTiposDireccionesForm = ({title, match}) => {

  const path = match.path.substr(1);
  const subPath = path.split('/');

  const classes = useStyles();
  const theme = useTheme();
  
  const {loader, payload, tiposDireccionesList} = useSelector(({tiposDireccionesMaintainer}) => tiposDireccionesMaintainer);
  
  const dispatch = useDispatch();
  useEffect(() => {
    if(tiposDireccionesList.length===0)
    {
      dispatch(getRegisterTiposDireccionesList());
    }
  }, [tiposDireccionesList]);

  return (
    <div className="page-heading justify-content-sm-between align-items-sm-center">
        <h2 className="title">{title}</h2>
        <MantenedorTiposDireccionesInfo payload={payload} tiposDireccionesList={tiposDireccionesList}/>
        <MantenedorTiposDireccionesListado tiposDireccionesList={tiposDireccionesList}/>
    </div>
  )
};

export default MantenedorTiposDireccionesForm;