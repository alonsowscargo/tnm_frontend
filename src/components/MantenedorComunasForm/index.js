import React,{useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MantenedorComunasInfo from 'components/MantenedorComunasInfo';
import MantenedorComunasListado from 'components/MantenedorComunasListado';

import { getRegisterPaisList } from 'actions/PaisMaintainer';
import { getRegisterComunasList } from 'actions/ComunasMaintainer';
/* select */

const MantenedorComunasForm = ({title, match}) => {

  const path = match.path.substr(1);
  const subPath = path.split('/');

  const {loader, payload, comunasList} = useSelector(({comunasMaintainer}) => comunasMaintainer);
  const {pais, paisList} = useSelector(({paisMaintainer}) => paisMaintainer);
  const {region, regionList} = useSelector(({regionMaintainer}) => regionMaintainer);

  const dispatch = useDispatch();
  useEffect(() => {
    if(comunasList.length===0)
    {
      dispatch(getRegisterComunasList());
    }

    if(paisList.length===0)
    {
      dispatch(getRegisterPaisList());
    }

  }, []);

  return (
    <div className="page-heading justify-content-sm-between align-items-sm-center">
        <h2 className="title">{title}</h2>
        <MantenedorComunasInfo payload={payload} paisList={paisList} regionList={regionList} comunasList={comunasList}/>
        <MantenedorComunasListado paisList={paisList} regionList={regionList} comunasList={comunasList}/>
    </div>
  )
};

export default MantenedorComunasForm;