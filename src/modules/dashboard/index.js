import React, { useState } from "react";
import { UserData } from './Data'
import { dataTable } from './dataTable'
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CardBarChart from '../../components/Cards/CarBarChart/Index'
import CardLink from '../../components/Cards/CardLink/Index'
import CardIcon from "components/Cards/CardIcon/Index";
import CardMenu from "../../components/Cards/CardMenu/Index";
import MaterialTable from 'material-table';

import {
  makeStyles,
} from "@material-ui/core";


const useStyles = makeStyles({
  icon: {
    fontSize: 38,
  }
});


const columns = [
  // { title: "id", field: "liq", },
  { title: "Cli. Desp", field: "cliente_despacho"},
  { title: "Contenedor", field: "contenedor", cellStyle: { width: 300 } },
  { title: "Tipo", field: "tipo", cellStyle: { width: 50 }},
  { title: "Nave", field: "nave", cellStyle: { width: 300 } },
  { title: "Eta", field: "eta", width: 'min-content'},
  { title: "Referencia", field: "referencia",  cellStyle: { width: 300 }},
  { title: "Servicio", field: "servicio" },
  // { title: "Eta", field: "servicio" },
  { title: "Retiro", field: "retiro" },
  { title: "Fecha Hora", field: "fecha_hora", },
    // render: (data) => {

    //   data.fecha_hora ? 'nada'
    // },
]


// id: '15315',
// cliente_despacho:'Vanni',
// contenedor: 'TCLU940702-1 OC 59158 (1) // 56096 (3) // 58801 (6)',
// tipo: '24/03/2022',
// nave: '24/03/2022',
// eta:'22/03/2022',
// referencia: 'TCLU940702-1 OC 59158 (1) // 56096 (3) // 58801 (6)',
// servicio: '680000',
// retiro: '20284',
// fecha_hora: '20284',
// //   hora:'22/03/2022',


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


  const [prueba, setPrueba] = useState(false)

  const clickPrueba = () => {
    setPrueba(true)
  }

//   const [visible, setVisible] = useState({
//     detalle: false,
//     pagos: true,
//     cotizacion: true,
// })

//   // mostar componente
//   const handleChange = (newValue) => {
//     switch (newValue) {
//         case 1:
//             setVisible({
//                 detalle: false,
//                 pagos: true,
//                 cotizacion: true
//             });
//             break;
//         case 2:
//             setVisible({
//                 detalle: true,
//                 pagos: false,
//                 cotizacion: true
//             });
//             break;
//         case 3:
//             setVisible({
//                 detalle: true,
//                 pagos: true,
//                 cotizacion: false
//             });
//             break;
//     }
// };


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
            toLink="/app/seguimiento-servicio"
          />
        </div>

        <div className="col-3">
          <CardIcon
            subtitle="Resumen"
            title="Servicios en transito"
            classBorder="app-border-success app-hover"
            // handleClick={namefuction}
            icon={<GetAppOutlinedIcon className={`icon-color-success ${classes.icon}`} />}
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
              { name: 'Email', icon: <DashboardIcon fontSize="small" />, toLink: "" },
              { name: 'Télefono', icon: <AccountCircleIcon fontSize="small" />, toLink: "#" },
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



        {/* <div className="col-12">
        <div className='app-tags bg-ligh mb-4'>
                <div className="app-buttons">
                    <Button
                        className={`button button-small ${visible.detalle === false ? 'button-danger' : 'button-gray'}`}
                        onClick={(e) => handleChange(1)}
                    >
                        Detalle logístico
                    </Button>

                    <Button
                        className={`button button-small mx-2 ${visible.pagos === false ? 'button-danger' : 'button-gray'}`}
                        onClick={(e) => handleChange(2)}
                    >
                        Pagos
                    </Button>

                    <Button
                            className={`button button-small ${visible.cotizacion === false ? 'button-danger' : 'button-gray'}`}
                            onClick={(e) => handleChange(3)}
                        >
                            Cotización vigente
                    </Button>
                </div>
            </div>

            <div className='border my-4'></div>

            <div hidden={visible.detalle}>
                2
            </div>

            <div hidden={visible.pagos}>
                3
            </div>

            <div hidden={visible.cotizacion}>
                4
            </div>
        </div> */}


        <div className="col-6">
          <CardIcon
            subtitle="Retiro"
            title="Sin horario de retiro"
            classBorder="app-border-primary app-hover"
            // handleClick={namefuction}
            icon={<GetAppOutlinedIcon className={`icon-color-primary ${classes.icon}`} />}
          />
        </div>

        <div className="col-6">
          {/* <CardButton
            title="Retirado y/con horario"
            subtitle="Retiro"
            nameButton="Ver detalle"
            classBorder="app-border-default"
          // colorBotton="secondary"
          /> */}

          <CardIcon
            subtitle="Retiro"
            title="Retirado y/con horario"
            classBorder="app-border-purple app-hover"
            handleClick={clickPrueba}
            icon={<GetAppOutlinedIcon className={`icon-color-purple ${classes.icon}`} />}
          />
        </div>

        {
          prueba &&
          <div className="col-12 mt-3">
            <div className="app-table">
              {/* <Button>uno</Button> */}
              <div className="app-table-sticky">
                <MaterialTable
                  title="Retiro con horario"
                  columns={columns}
                  data={dataTable}
                  options={{
                    exportButton: false,
                    filtering: false,
                    search: false,
                    paging: false,
                    maxBodyHeight: '40vh',
                  }}
                  localization={{
                    body: {
                      emptyDataSourceMessage: <h6 style={{ textAlign: 'center', margin: '0' }}>No jajaja</h6>
                    }
                  }}
                />
              </div>
            </div>
          </div>
        }

        {/* <div className="col-12 mt-3 mb-5">
        <Card>

          <CardContent className="pt-0">

          Selelcion un tipo d eretiro

          </CardContent>
        </Card>
        </div>  */}

        {/* <div className="col-12">
          <div className="app-table">

            <MaterialTable
              title="Retiro sin horario"
              columns={columns}
              data={dataTable}
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
        </div> */}

        {/* <div className="col-12 mt-3 mb-5">
        <Card>

          <CardContent className="pt-0">

          <div className="app-table">

              <MaterialTable
                title="Retiro sin horario"
                columns={columns}
                data={dataTable}
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
        </div> */}
      </div>


      <div className="row mt-5">
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
