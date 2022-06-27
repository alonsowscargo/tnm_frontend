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

// import userPng from "../../assets/images/warning.png";
// import Loading from "components/loading/Loading";

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
          <Card className="app-card app-border-danger py-4">
            <CardContent className="justify-space-between py-0">
              <div>
                <Typography variant="body2" component="p" color="textSecondary">
                  Servicios
                </Typography>

                <Typography variant="h6" component="h6">
                  Con problemas
                </Typography>
              </div>

              <Typography variant="h3" component="h6" className="text-danger">
                0
              </Typography>
            </CardContent>
          </Card>
        </div>

        <div className="col-3">
          <Card className="app-card app-border-success py-4">
            <CardContent className="justify-space-between py-0">
              <div>
                <Typography variant="body2" component="p" color="textSecondary">
                  Seguimientos
                </Typography>
                <Typography variant="h6" component="h6">
                  Servicios para hoy
                </Typography>
              </div>

              <Typography variant="h3" component="h6" className="text-success">
                10
              </Typography>
            </CardContent>
          </Card>
        </div>

        <div className="col-3">
          <Card className="app-card app-border-success py-4">
            <CardContent className="justify-space-between py-0">
              <div>
                <Typography variant="body2" component="p" color="textSecondary">
                  Resumen
                </Typography>
                <Typography variant="h6" component="h6">
                  Servicios en transito
                </Typography>
              </div>

              <GetAppOutlinedIcon className={`icon-color-success ${classes.icon}`} />
            </CardContent>
          </Card>
        </div>

        <div className="col-3">
          <Card className="app-card app-border-default py-4">

            <CardContent className="justify-space-between py-0">
              <div>
                <Typography variant="body2" component="p" color="textSecondary">
                  Ejecutivo
                </Typography>
                <Typography variant="h6" component="h6">
                  Lilian Arguedas
                </Typography>
              </div>


              <IconButton
                data-tour="uno"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className="app-link-nav ml-3"
              >
                <MoreVertIcon />
              </IconButton>


              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className="app-dropdown"
                variant="selectedMenu"
              >
                <MenuItem component={Link} to="/app/atrina-dashboard" onClick={handleClose}>
                  <ListItemIcon>
                    <DashboardIcon fontSize="small" />
                  </ListItemIcon>
                  <Typography variant="inherit">Home</Typography>
                </MenuItem>


                <MenuItem component={Link} to="/app/atrina-usuario" onClick={handleClose}>
                  <ListItemIcon>
                    <AccountCircleIcon fontSize="small" />
                  </ListItemIcon>
                  <Typography variant="inherit">Usuario</Typography>
                </MenuItem>
              </Menu>

            </CardContent>
          </Card>
        </div>
      </div>


      <div className="row">
        {/* <div className="col-6 mt-5">
          <div className="app-graficos">
            <h3>Programación de presentaciones</h3> 
            <BarChart chartData={userData} />
          </div>
        </div> */}

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
          {/* <Card className="app-card app-border-success py-4">
            <CardContent className="justify-space-between py-0">
              <div>
                <Typography variant="body2" component="p" color="textSecondary">
                  Retiro
                </Typography>
                <Typography variant="h6" component="h6">
                  Retirado y/con horario
                </Typography>
              </div>

              <Typography variant="h3" component="h6" className="text-success">
                10
              </Typography>
            </CardContent>
          </Card> */}
          {/* <Card>
            <CardContent>
              <Button
                variant="outlined"
                // size="small"
                startIcon={<BsEnvelope />}
                color="primary"
                className="mr-2"
              // onClick={handleClickOpen}
              >
                Retirado y/con horario
              </Button>
            </CardContent>
          </Card> */}
        </div>

        <div className="col-12 mt-3 mb-5">
        <Card>
          {/* <CardContent>
            <h2>Retiro</h2>
            <h3>Seleciona el tipo de retiro</h3>
            <Button
              variant="outlined"
              // size="small"
              startIcon={<BsEnvelope />}
              color="secondary"
              className="mr-2"
            // onClick={handleClickOpen}
            >
              Retiro sin horario
            </Button>
            <Button
              variant="outlined"
              // size="small"
              startIcon={<BsEnvelope />}
              color="primary"
              className="mr-2"
            // onClick={handleClickOpen}
            >
              Retirado y/con horario
            </Button>
          </CardContent> */}

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
