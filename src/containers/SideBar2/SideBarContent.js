import React from 'react';
import {useDispatch} from 'react-redux';
import {emptyDataInitUsers} from 'modules/usuarios/Actions';
import CustomScrollbars from 'util/CustomScrollbars';
import Navigation from "../../components/Navigation";




const SideBarContent = () => {
  const dispatch = useDispatch();
  const emptyReducer=(name)=>{
      if(name==='mantenedor-usuarios'){
        dispatch(emptyDataInitUsers());
      }
  }


  let GestionComercialGLobal=[
    {
      name: 'label.registroContactos',
      type: 'item',
      link: '/app/gcg_registrocontactos'
    },
    {
      name: 'label.propuestaComercial',
      type: 'item',
      link: '/app/propuestaComercial'
    },
    {
      name: 'label.clientes',
      type: 'item',
      link: '/app/mantenedor-clientes'
    },
    {
      name: 'label.gestionDespachoComercial',
      type: 'item',
      link: '/app/gestion-despacho-comercial',
      onclick:()=>{emptyReducer('gestion-despacho-comercial')}
    },
    /*{
      name: 'label.proveedores',
      type: 'item',
      link: '/app/proveedores'
    },    */      
  ];

  const user=JSON.parse(localStorage.getItem('userSession'));
  const userRol=user.usuario.fk_rol;

  if(userRol==3){
    GestionComercialGLobal=[
      {
        name: 'label.clientes',
        type: 'item',
        link: '/app/mantenedor-clientes'
      },
      /*{
        name: 'label.proveedores',
        type: 'item',
        link: '/app/proveedores'
      },    */      
    ];
  }

    const allMenus=[
      
     /* {
        id:2,
        name: 'label.cargaContenedores',
        type: 'item',
        //icon: 'device-hub',
        link: '/app/carga-contenedores',
        onclick:()=>{emptyReducer('carga-contenedores')}
      },*/
      {
        id:3,
        name: 'label.cargaContenedores',
        type: 'item',
        //icon: 'device-hub',
        type: 'collapse',
        children:[
          {
            name: 'label.mantenedorContenedores',
            type: 'item',
            link: '/app/mantenedor-contenedores',
            onclick:()=>{emptyReducer('mantenedor-contenedores')}
          },
          {
            name: 'label.consolidadoContenedores',
            type: 'item',
            link: '/app/gestion-consolidado-contenedores',
            onclick:()=>{emptyReducer('gestion-consolidado-contenedores')}
          },
         /* {
          name: 'label.cargaContenedores',
          type: 'item',
          //icon: 'device-hub',
          link: '/app/carga-contenedores',
          onclick:()=>{emptyReducer('carga-contenedores')}
          }*/
        ]
      },
      {
        id:5,
        name: 'label.recepcion',
        type: 'item',
        //icon: 'account-circle',
        link: '/app/recepcion',
        onclick:()=>{emptyReducer('recepcion')}
      },
      {
        id:6,
        name: 'label.trackingManualVisor',//GESTION DE CARGA PARA CHINA
        type: 'item',
        //icon: 'account-circle',
        link: '/app/tracking-manual-visor',
        onclick:()=>{emptyReducer('tracking-manual-visor')}
      },
      {
        id:15,
        name: 'label.mantenedores',
        //icon: 'google-maps',
        type: 'collapse',
        children: [
          /******/
          {
            id:4,
            name: 'label.usuarios',
            type: 'item',
            link: '/app/mantenedor-usuarios',
            onclick:()=>{emptyReducer('mantenedor-usuarios')}
          },
          {
            id:7,
            name: 'label.roles',
            type: 'item',
            link: '/app/mantenedor-roles'
          },
          {
            id:9,
            name: 'label.logistica',
            type: 'collapse',
            children: [
              {
                name: 'label.empresas',
                type: 'item',
                link: '/app/empresas'
              },
              {
                name: 'label.bodegas',
                type: 'item',
                link: '/app/bodegas'
              },  
              {
                name: 'label.bodegasUbicaciones',
                type: 'item',
                link: '/app/bodegasubicaciones'
              },                            
              {
                name: 'label.naves',
                type: 'item',
                link: '/app/mantenedor-naves'
              },
              {
                name: 'label.puertos',
                type: 'item',
                link: '/app/mantenedor-puertos'
              },
              {
                name: 'label.equiposTipos',
                type: 'item',
                link: '/app/mantenedor-equipostipos'
              },
              {
                name: 'label.equiposMarcas',
                type: 'item',
                link: '/app/mantenedor-equiposmarcas'
              },
              {
                name: 'label.equiposModelos',
                type: 'item',
                link: '/app/mantenedor-equiposmodelos'
              },
              {
                name: 'label.equipos',
                type: 'item',
                link: '/app/mantenedor-equipos'
              },
            ]
          },
          {
            id:8,
            name: 'label.geoReferencias',
            type: 'collapse',
            children: [
              {
                name: 'label.paises',
                type: 'item',
                link: '/app/mantenedor-paises'
              },
              {
                name: 'label.regiones',
                type: 'item',
                link: '/app/mantenedor-regiones'
              },
              {
                name: 'label.comunas',
                type: 'item',
                link: '/app/mantenedor-comunas'
              },
              {
                name: 'label.tiposDirecciones',
                type: 'item',
                link: '/app/mantenedor-tiposdirecciones'
              },
              {
                name: 'label.zonasTarifarias',
                type: 'item',
                link: '/app/zonastarifarias'
              },
            ]
          },
          {
            id:12,
            name: 'label.inventario',
            //icon: 'google-maps',
            type: 'collapse',
            children: [
              {
                name: 'label.familiasArancelariasProductos',
                type: 'item',
                link: '/app/mantenedor-familiasarancelariasproductos'
              },
              {
                name: 'label.subFamiliasArancelariasProductos',
                type: 'item',
                link: '/app/mantenedor-subfamiliasarancelariasproductos'
              },
              {
                name: 'label.familiasComercialesProductos',
                type: 'item',
                link: '/app/mantenedor-familiascomercialesproductos'
              },
              {
                name: 'label.subFamiliasComercialesProductos',
                type: 'item',
                link: '/app/mantenedor-subfamiliascomercialesproductos'
              },
            ]
          },
          {
            id:11,
            name: 'label.comerciales',
            //icon: 'google-maps',
            type: 'collapse',
            children: [
              {
                name: 'label.formasDePago',
                type: 'item',
                link: '/app/mantenedor-formaspago'
              },
              {
                name: 'label.giros',
                type: 'item',
                link: '/app/mantenedor-giros'
              },
              {
                name: 'label.tiposContactos',
                type: 'item',
                link: '/app/contactosTipos'
              },
            ]
          },     
          {
            id:10,
            name: 'label.economicos',
            //icon: 'google-maps',
            type: 'collapse',
            children: [
              {
                name: 'label.bancos',
                type: 'item',
                link: '/app/mantenedor-bancos'
              },
              {
                name: 'label.cuentasBancarias',
                type: 'item',
                link: '/app/mantenedor-cuentasbancarias'
              },
              {
                name: 'label.monedas',
                type: 'item',
                link: '/app/mantenedor-monedas'
              },
              {
                name: 'label.impuestos',
                type: 'item',
                link: '/app/mantenedor-impuestos'
              },
            ]
          },
          /******/
        ]
      },
      {
        id:13,
        name: 'label.gestionComercial',
        //icon: 'google-maps',
        type: 'collapse',
        children: GestionComercialGLobal
      },
      {
        id:14,
        name: 'label.consolidados',
        type: 'item',
        //icon: 'device-hub',
        link: '/app/gestion-consolidados',
        onclick:()=>{emptyReducer('gestion-consolidados')}
       // onclick:()=>{emptyReducer('mantenedor-contenedores')}
      },
      {
        id:15,
        name: 'label.viajes',
        type: 'item',
        //icon: 'device-hub',
        link: '/app/gestion-viajes',
        //onclick:()=>{emptyReducer('gestion-consolidados')}
       // onclick:()=>{emptyReducer('mantenedor-contenedores')}
      },
      {
        id:16,
        name: 'label.lineasNavieras',
        type: 'item',
        link: '/app/lineas-navieras',
        //onclick:()=>{emptyReducer('mantenedor-usuarios')}
      },
     /* {
        id:17,
        name: 'label.consolidadoContenedores',
        type: 'item',
        link: '/app/gestion-consolidado-contenedores',
        //onclick:()=>{emptyReducer('mantenedor-usuarios')}
      },*/
      {
        id:18,
        name: 'label.recepcionPuerto',
        type: 'item',
        link: '/app/recepcion-puerto',
        //onclick:()=>{emptyReducer('mantenedor-usuarios')}
      },
      {
        id:19,
        name: 'label.gestionDeCargas',
        type: 'item',
        link: '/app/gestion-cargas',
        //onclick:()=>{emptyReducer('mantenedor-usuarios')}
      },
      {
        id:20,
        name: 'label.clientes',
        //icon: 'google-maps',
        type: 'collapse',
        children: [
          {
            name: 'label.perfilCliente',
            type: 'item',
            link: '/app/cli_perfilclienter'
          },
          {
            name: 'label.seguimientoServicios',
            type: 'item',
            link: '/app/cli_seguimientoservicios'
          },          
        ]
      },
      {
        id:21,
        name: 'label.planificacionDesconsolidado',
        type: 'item',
        link: '/app/planificacion-desconsolidado',
        onclick:()=>{emptyReducer('planificacion-desconsolidado')}
      },
      {
        id:22,
        name: 'label.reportes',
        //icon: 'google-maps',
        type: 'collapse',
        children: [
          {
            name: 'label.clientesNuevos',
            type: 'item',
            link: '/app/reporte-clientesnuevos'
          },
          {
            name: 'label.clientesInfoComercial',
            type: 'item',
            link: '/app/reporte-clientesinformacioncomercial'
          },
        ]
      }, 
      {
        id:23,
        name: 'label.recepcionCarga',
        type: 'item',
        link: '/app/recepcion-carga',
        onclick:()=>{emptyReducer('recepcion-carga')}
      },   
      {
        id:24,
        name: 'label.ordenesTransporte',
        type: 'item',
        link: '/app/ordenes-transporte'
      },
      {
        id:25,
        name: 'label.kardex',
        type: 'item',
        link: '/app/kardex'
      },
      {
        id:26,
        name: 'label.facturacion',
        //icon: 'google-maps',
        type: 'collapse',
        children: [
          {
            name: 'label.cargarFacturas',
            type: 'item',
            link: '/app/fact_cargarfacturas'
          },
          {
            name: 'label.reportefacturacion',
            type: 'item',
            link: '/app/fact_reportefacturacion'
          },
        ]
      }
    ];

  const rolPermissions={
    1:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20,21,22,23,24,25,26],
    2:[13,14,22],
    3:[1,2,3,5,6,13,19],
    4:[20],
    5:[1,2],
    6:[1,2],
    7:[1,2,22],
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
      <CustomScrollbars className=" scrollbar side-bar">
        <Navigation menuItems={navigationMenus}/>
      </CustomScrollbars>
    );
  };

export default SideBarContent;
