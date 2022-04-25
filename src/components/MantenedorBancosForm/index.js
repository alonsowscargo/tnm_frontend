import React,{useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MantenedorBancosInfo from 'components/MantenedorBancosInfo';
import MantenedorBancosListado from 'components/MantenedorBancosListado';

import { getRegisterBancosList } from 'actions/BancosMaintainer';
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

const MantenedorBancosForm = ({title, match}) => {

  const path = match.path.substr(1);
  const subPath = path.split('/');

  const classes = useStyles();
  const theme = useTheme();
  
  const {loader, payload, bancosList} = useSelector(({bancosMaintainer}) => bancosMaintainer);
  
  const dispatch = useDispatch();
  useEffect(() => {
    if(bancosList.length===0)
    {
      dispatch(getRegisterBancosList());
    }
  }, []);

  return (
    <div className="page-heading justify-content-sm-between align-items-sm-center">
        <h2 className="title">{title}</h2>
        <MantenedorBancosInfo payload={payload} bancosList={bancosList}/>
        <MantenedorBancosListado bancosList={bancosList}/>
    </div>
  )
};

export default MantenedorBancosForm;