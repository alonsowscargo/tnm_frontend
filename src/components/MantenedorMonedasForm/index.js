import React,{useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MantenedorMonedasInfo from 'components/MantenedorMonedasInfo';
import MantenedorMonedasListado from 'components/MantenedorMonedasListado';

import { getRegisterMonedasList } from 'actions/MonedasMaintainer';
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

const MantenedorMonedasForm = ({title, match}) => {

  const path = match.path.substr(1);
  const subPath = path.split('/');

  const classes = useStyles();
  const theme = useTheme();
  
  const {loader, payload, monedasList} = useSelector(({monedasMaintainer}) => monedasMaintainer);
  
  const dispatch = useDispatch();
  useEffect(() => {
    if(monedasList.length===0)
    {
      dispatch(getRegisterMonedasList());
    }
  }, []);

  return (
    <div className="page-heading justify-content-sm-between align-items-sm-center">
        <h2 className="title">{title}</h2>
        <MantenedorMonedasInfo payload={payload} monedasList={monedasList}/>
        <MantenedorMonedasListado monedasList={monedasList}/>
    </div>
  )
};

export default MantenedorMonedasForm;