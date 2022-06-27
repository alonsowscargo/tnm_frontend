import React, { useState } from "react";
import { Link } from "react-router-dom"
// import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
// import SystemUpdateAltOutlinedIcon from '@material-ui/icons/SystemUpdateAltOutlined';
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DashboardIcon from '@material-ui/icons/Dashboard';
// import BarChart from './components/BarChart'
import CardBarChart from '../../components/Cards/CarBarChart/Index'
import CardButton from '../../components/Cards/CardButton/Index'
import CardLink from '../../components/Cards/CardLink/Index'
import { useHistory } from "react-router";



import { UserData } from './Data'
import { dataTable } from './dataTable'
import MaterialTable from 'material-table';


import {
  // BsFileEarmarkArrowDown,
  BsEnvelope
} from "react-icons/bs";

import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  Button
} from "@material-ui/core";
import CardIcon from "components/Cards/CardIcon/Index";
import CardMenu from "../../components/Cards/CardMenu/Index";

const useStyles = makeStyles({
  root: {
    // minWidth: 275,
    marginTop: "48px",
    marginBottom: "48px"
    // border:"solid 1px rgba(0, 0, 0, 0.54)"
  },
  title: {
    fontSize: 12,
    margin: 0
  },
  pos: {
    marginBottom: 12,
  },
  icon: {
    fontSize: 38,
  }
});


const columns = [
  // { title: "id", field: "liq", },
  { title: "Contenedor", field: "cliente_despacho", },
  { title: "Referencia", field: "envio", },
  // { title: "Servicio", field: "fecha_creacion" },
  // { title: "Contenedor", field: "cliente_despacho", },
  // { title: "Tipo", field: "facturacion_sii", },
  // { title: "Nave", field: "fecha_sii", },
  { title: "Eta", field: "servicio" },
  { title: "Retiro", field: "neto" },
  { title: "Fecha", field: "n_servicios" },
]


const Dashboard = () => {
  const classes = useStyles();

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: "prueba 1",
      data: UserData.map((data) => data.userGain),
      backgroundColor: [
        "rgba(75,192,192,1)",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0",
      ],
      borderColor: "black",
      borderWidth: 2,
    },
    {
      label: "prueba 2",
      data: UserData.map((data) => data.userLost),
      backgroundColor: [
        "rgba(75,192,192,1)",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0",
      ],
      borderColor: "black",
      borderWidth: 2,
    }
    ]
  })


  const [userData2, setUserData2] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: "prueba 1",
      data: UserData.map((data) => data.userGain),
      backgroundColor: [
        "rgba(75,192,192,1)",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0",
      ],
      borderColor: "black",
      borderWidth: 2,
    },
    {
      label: "prueba 2",
      data: UserData.map((data) => data.userLost),
      backgroundColor: [
        "rgba(75,192,192,1)",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0",
      ],
      borderColor: "black",
      borderWidth: 2,
    }, {
      label: "prueba 3",
      data: UserData.map((data) => data.year),
      backgroundColor: [
        "rgba(75,192,192,1)",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0",
      ],
      borderColor: "black",
      borderWidth: 2,
    }
    ]
  })

  // dropdown ejecutivo
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="row">
        <div className="col-3">
          <CardLink
            subtitle="Servicios"
            title="Con problemas"
            classBorder="app-border-danger"
            colorText="text-color-danger"
            data="0"
            toLink="/app/servicios-con-problemas"
          />
        </div>

        <div className="col-3">
          <CardLink
            subtitle="Seguimientos"
            title="Servicios para hoy"
            classBorder="app-border-success"
            colorText="text-color-success"
            data="10"
            toLink="/app/servicios-con-problemas"
          />
        </div>

        <div className="col-3">
          <CardIcon
            subtitle="Resumen"
            title="Servicios en transito"
            classBorder="app-border-success app-hover"
            // handleClick={namefuction}
            icon={ <GetAppOutlinedIcon className={`icon-color-success ${classes.icon}`} />}
          />
        </div>

        <div className="col-3">
          <CardMenu
            subtitle="Ejecutivo"
            title="Lilian Arguedas"
            classBorder="app-border-default app-hover"
            icon={<MoreVertIcon />}
            open={anchorEl}
            handleClick={handleClick}
            handleClose={handleClose}
            option={[
              { name:'Email', icon:<DashboardIcon fontSize="small" />, toLink:""},
              { name:'Télefono', icon:<AccountCircleIcon fontSize="small" />, toLink:"#"},
            ]}
          />
        </div>
      </div>


      <div className="row">
        <div className="col-12 my-5">
          <CardBarChart
            title="Programación de presentaciones"
            chartData={userData}
            height={80}
          />
        </div>

        <div className="col-6">
          <CardButton
            title="Sin horario de retiro" 
            subtitle="Retiro"
            nameButton="Ver detalle"
            classBorder="app-border-danger"
            colorBotton="secondary"
          />
        </div>

        <div className="col-6">
          <CardButton
            title="Retirado y/con horario" 
            subtitle="Retiro"
            nameButton="Ver detalle"
            classBorder="app-border-default"
            // colorBotton="secondary"
          />
        </div>

        <div className="col-12 mt-3 mb-5">
        <Card>

          <CardContent className="pt-0">

          <div className="app-table">

              <MaterialTable
                title="Retiro sin horario"
                columns={columns}
                data={dataTable}
                // onRowClick={(event, rowData, togglePanel) => {
                //   togglePanel();
                // }}
                options={{
                  exportButton: false,
                  filtering: false,
                  search: false,
                  paging: false,
                  detailPanelType: "single",
                  maxBodyHeight: '80vh',
                }}
                localization={{
                  body: {
                    emptyDataSourceMessage: <h6 style={{ textAlign: 'center', margin: '0' }}>No jajaja</h6>
                  }
                }}
              />
          </div> 

          </CardContent>
        </Card>

          {/* <BarChart chartData={userData} /> */}

          {/* <div className="app-table mt-5">
            <div className="app-table-sticky">
              <MaterialTable
                title=""
                columns={columns}
                data={dataTable}
                // onRowClick={(event, rowData, togglePanel) => {
                //   togglePanel();
                // }}
                options={{
                  exportButton: false,
                  filtering: false,
                  search: false,
                  paging: false,
                  detailPanelType: "single",
                  maxBodyHeight: '80vh',
                }}
                localization={{
                  body: {
                    emptyDataSourceMessage: <h6 style={{ textAlign: 'center', margin: '0' }}>No jajaja</h6>
                  }
                }}
              />
            </div>
          </div>  */}
        </div>

      </div>


      <div className="row">
        <div className="col-6">
          <CardBarChart
            title="Presentaciones"
            description="Por tipo de servicio (cat: Impo, Expo, Otros)."
            chartData={userData2}
            height={120}
          />
        </div>

        <div className="col-6">
          <CardBarChart
            title="Retiros"
            description="Por tipo de servicio (cat: Impo, Expo, Otros)."
            chartData={userData2}
            height={120}
          />
        </div>
      </div>
    </>
  )
};

export default Dashboard;
