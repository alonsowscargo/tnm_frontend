import React,{useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MantenedorPaisInfo from 'components/MantenedorPaisInfo';
import MantenedorPaisListado from 'components/MantenedorPaisListado';

import { getRegisterPaisList } from 'actions/PaisMaintainer';
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

const MantenedorPaisForm = ({title, match}) => {

  const path = match.path.substr(1);
  const subPath = path.split('/');

  const classes = useStyles();
  const theme = useTheme();
  
  const {loader, payload, paisList} = useSelector(({paisMaintainer}) => paisMaintainer);
  
  const dispatch = useDispatch();
  useEffect(() => {
    if(paisList.length===0)
    {
      dispatch(getRegisterPaisList());
    }
  }, [paisList]);

  return (
    <div className="page-heading justify-content-sm-between align-items-sm-center">
        <h2 className="title">{title}</h2>
        <MantenedorPaisInfo payload={payload} paisList={paisList}/>
        <MantenedorPaisListado paisList={paisList}/>
    </div>
  )
};

export default MantenedorPaisForm;