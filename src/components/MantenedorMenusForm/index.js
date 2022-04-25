import React,{useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MantenedorMenusInfo from 'components/MantenedorMenusInfo';
import MantenedorMenusListado from 'components/MantenedorMenusListado';

import { getRegisterMenuList } from 'actions/MenuMaintainer';
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

const MantenedorMenusForm = ({title, match}) => {

  const path = match.path.substr(1);
  const subPath = path.split('/');

  const classes = useStyles();
  const theme = useTheme();

  const {loader, payload, menuList} = useSelector(({menuMaintainer}) => menuMaintainer);

  const dispatch = useDispatch();
  useEffect(() => {
    if(menuList.length===0)
    {
      dispatch(getRegisterMenuList());
    }
  }, [menuList]);

  return (
    <div className="page-heading justify-content-sm-between align-items-sm-center">
        <h2 className="title">{title}</h2>
        <MantenedorMenusInfo payload={payload} menuList={menuList}/>
        <MantenedorMenusListado menuList={menuList}/>
    </div>
  )
};

export default MantenedorMenusForm;