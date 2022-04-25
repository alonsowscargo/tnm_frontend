import React,{useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MantenedorEquiposTiposInfo from 'components/MantenedorEquiposTiposInfo';
import MantenedorEquiposTiposListado from 'components/MantenedorEquiposTiposListado';

import { getRegisterEquiposTiposList } from 'actions/EquiposTiposMaintainer';
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

const MantenedorEquiposTiposForm = ({title, match}) => {

  const path = match.path.substr(1);
  const subPath = path.split('/');

  const classes = useStyles();
  const theme = useTheme();
  
  const {loader, payload, equiposTiposList} = useSelector(({equiposTiposMaintainer}) => equiposTiposMaintainer);
  
  const dispatch = useDispatch();
  useEffect(() => {
    if(equiposTiposList.length===0)
    {
      dispatch(getRegisterEquiposTiposList());
    }
  }, [equiposTiposList]);

  return (
    <div className="page-heading justify-content-sm-between align-items-sm-center">
        <h2 className="title">{title}</h2>
        <MantenedorEquiposTiposInfo payload={payload} equiposTiposList={equiposTiposList}/>
        <MantenedorEquiposTiposListado equiposTiposList={equiposTiposList}/>
    </div>
  )
};

export default MantenedorEquiposTiposForm;