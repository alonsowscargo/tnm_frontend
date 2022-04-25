import React,{useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MantenedorCuentasBancariasInfo from 'components/MantenedorCuentasBancariasInfo';
import MantenedorCuentasBancariasListado from 'components/MantenedorCuentasBancariasListado';

import { getRegisterCuentasBancariasList } from 'actions/CuentasBancariasMaintainer';
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

const MantenedorCuentasBancariasForm = ({title, match}) => {

  const path = match.path.substr(1);
  const subPath = path.split('/');

  const classes = useStyles();
  const theme = useTheme();
  
  const {loader, payload, cuentasBancariasList} = useSelector(({cuentasBancariasMaintainer}) => cuentasBancariasMaintainer);
  
  const dispatch = useDispatch();
  useEffect(() => {
    if(cuentasBancariasList.length===0)
    {
      dispatch(getRegisterCuentasBancariasList());
    }
  }, []);

  return (
    <div className="page-heading justify-content-sm-between align-items-sm-center">
        <h2 className="title">{title}</h2>
        <MantenedorCuentasBancariasInfo payload={payload} cuentasBancariasList={cuentasBancariasList}/>
        <MantenedorCuentasBancariasListado cuentasBancariasList={cuentasBancariasList}/>
    </div>
  )
};

export default MantenedorCuentasBancariasForm;