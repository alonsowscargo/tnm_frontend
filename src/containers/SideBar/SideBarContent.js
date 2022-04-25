
import React from 'react';
import {useDispatch} from 'react-redux';
import {emptyDataInitUsers} from 'modules/usuarios/Actions';

import {emptyDataInitRoles} from 'modules/roles/Actions';
import {emptyDataInitEmpresas} from 'modules/empresas/Actions';
import CustomScrollbars from 'util/CustomScrollbars';
import Navigation from "../../components/Navigation";




const SideBarContent = () => {
  const dispatch = useDispatch();
  const emptyReducer=(name)=>{
      if(name==='mantenedor-usuarios'){
        dispatch(emptyDataInitUsers());
      }else if(name==='mantenedor-roles'){
        dispatch(emptyDataInitRoles());
      }else if(name==='empresas'){
        dispatch(emptyDataInitEmpresas());
      } 
  }

  const user=JSON.parse(localStorage.getItem('userSession'));
  const userRol=user.usuario.fk_rol;

  const allMenus=[
      {
        id:1,
        name: 'label.mantenedores',
        //icon: 'google-maps',
        type: 'collapse',
        children: [
          /******/
          {
            id:2,
            name: 'label.usuarios',
            type: 'item',
            link: '/app/mantenedor-usuarios',
            onclick:()=>{emptyReducer('mantenedor-usuarios')}
          }
            ]
          
      }
    ];

  const rolPermissions={
    1:[1],
    8:[1],
    2:[1],
    3:[1],
    4:[1],
    5:[1],
    6:[1],
    7:[1],
    10:[1],
    11:[1]
  };

  let permissionsFiltered=[];

  allMenus.map(function(item){
    const find=rolPermissions[userRol].find(x=>x===item.id);
    if(find){
      permissionsFiltered.push(item);
    }
  })


    const navigationMenus = [
      {
        name: 'label.menuPrincipal',
        type: 'section',
        children: permissionsFiltered
      },
    ];

    return (
      <CustomScrollbars className=" scrollbar">
        <Navigation menuItems={navigationMenus}/>
      </CustomScrollbars>
    );
  };

export default SideBarContent;
