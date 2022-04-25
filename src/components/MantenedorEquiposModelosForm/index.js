import React,{useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MantenedorEquiposModelosInfo from 'components/MantenedorEquiposModelosInfo';
import MantenedorEquiposModelosListado from 'components/MantenedorEquiposModelosListado';

import { getRegisterEquiposModelosList } from 'actions/EquiposModelosMaintainer';
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

const MantenedorEquiposModelosForm = ({title, match}) => {

  const path = match.path.substr(1);
  const subPath = path.split('/');

  const classes = useStyles();
  const theme = useTheme();
  
  const {loader, payload, equiposModelosList} = useSelector(({equiposModelosMaintainer}) => equiposModelosMaintainer);
  
  const dispatch = useDispatch();
  useEffect(() => {
    if(equiposModelosList.length===0)
    {
      dispatch(getRegisterEquiposModelosList());
    }
  }, []);

  return (
    <div className="page-heading justify-content-sm-between align-items-sm-center">
        <h2 className="title">{title}</h2>
        <MantenedorEquiposModelosInfo payload={payload} equiposModelosList={equiposModelosList}/>
        <MantenedorEquiposModelosListado equiposModelosList={equiposModelosList}/>
    </div>
  )
};

export default MantenedorEquiposModelosForm;