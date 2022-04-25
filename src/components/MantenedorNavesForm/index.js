import React,{useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MantenedorNavesInfo from 'components/MantenedorNavesInfo';
import MantenedorNavesListado from 'components/MantenedorNavesListado';

import { getRegisterNavesList } from 'actions/NavesMaintainer';
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

const MantenedorNavesForm = ({title, match}) => {

  const path = match.path.substr(1);
  const subPath = path.split('/');

  const classes = useStyles();
  const theme = useTheme();
  
  const {loader, payload, navesList} = useSelector(({navesMaintainer}) => navesMaintainer);
  
  const dispatch = useDispatch();
  useEffect(() => {
    if(navesList.length===0)
    {
      dispatch(getRegisterNavesList());
    }
  }, [navesList]);

  return (
    <div className="page-heading justify-content-sm-between align-items-sm-center">
        <h2 className="title">{title}</h2>
        <MantenedorNavesInfo payload={payload} navesList={navesList}/>
        <MantenedorNavesListado navesList={navesList}/>
    </div>
  )
};

export default MantenedorNavesForm;