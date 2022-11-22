import React, { useState } from "react";
import { UserData } from './Data'
import { useHistory } from "react-router-dom";
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import DateRangeIcon from '@material-ui/icons/DateRange';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CardBarChart from '../../components/Cards/CarBarChart/Index'
import CardLink from '../../components/Cards/CardLink/Index'
import CardIcon from "components/Cards/CardIcon/Index";
import CardMenu from "../../components/Cards/CardMenu/Index";
import Tabla from './components/TableRetiro'
import Cargando from 'components/loading/Loading'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import {
  makeStyles,
} from "@material-ui/core";


const useStyles = makeStyles({
  icon: {
    fontSize: 38,
  }
});





const Dashboard = () => {
  const classes = useStyles();
  const history = useHistory();
  const [visible, setVisible] = useState({
    contenedores_sin_horario: false,
    contenedores_alacenados: false,
  });
  const [anchorEl, setAnchorEl] = useState(null);
  const [loading, setLoading] = useState(false)

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: "prueba 1",
      data: UserData.map((data) => data.userGain),
      backgroundColor: [
        "#D8D8D8",
        "#D8D8D8",
        "#D8D8D8",
        "#D8D8D8",
        "#D8D8D8",
      ],
      borderColor: "black",
      borderWidth: 2,
    },
    {
      label: "prueba 2",
      data: UserData.map((data) => data.userLost),
      backgroundColor: [
        "#FE2317",
        "#FE2317",
        "#FE2317",
        "#FE2317",
        "#FE2317",
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
        "#D8D8D8",
        "#D8D8D8",
        "#D8D8D8",
        "#D8D8D8",
        "#D8D8D8",
      ],
      borderColor: "black",
      borderWidth: 2,
    },
    {
      label: "prueba 2",
      data: UserData.map((data) => data.userLost),
      backgroundColor: [
        "#FE2317",
        "#FE2317",
        "#FE2317",
        "#FE2317",
        "#FE2317",
      ],
      borderColor: "black",
      borderWidth: 2,
    }, {
      label: "prueba 3",
      data: UserData.map((data) => data.year),
      backgroundColor: [
        "#D8D8D8",
        "#D8D8D8",
        "#D8D8D8",
        "#D8D8D8",
        "#D8D8D8",
      ],
      borderColor: "black",
      borderWidth: 2,
    }
    ]
  })

  // Funcion para despegar contenido del ejecutivo
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  // Funcion para mostrar los servicios con y sin horario de retiro
  const clickContenedoresAlacenados = () => {
    setVisible({
      contenedores_sin_horario: false,
      contenedores_alacenados: true,
    })
    setLoading(true)
    setTimeout(() => setLoading(false), 5000)
  }

  const handleContenodreSinRetiro = () => {
    setVisible({
      contenedores_sin_horario: true,
      contenedores_alacenados: false,
    })
    setLoading(true)
    setTimeout(() => setLoading(false), 5000)
  }

  const handleDedirectTo = () => {
    history.push("/app/control-servicio-cliente");
  };


  return (
    <>

      <Swiper
        slidesPerView={2}
        navigation={true}
        breakpoints={{
          992: {
            slidesPerView: 3,
            spaceBetween: 15
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CardLink
            subtitle="Seguimientos"
            title="Servicios del día"
            classBorder="app-border-success app-hover"
            colorText="text-color-success"
            data="10"
          // toLink="/app/seguimiento-servicio"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CardLink
            subtitle="Servicios"
            title="Con problemas"
            classBorder="app-border-danger app-hover"
            colorText="text-color-danger"
            data="0"
            toLink="/app/servicios-con-problemas"
          />
        </SwiperSlide>


        <SwiperSlide>
          <CardIcon
            subtitle="Registra"
            title="Tus días libres"
            classBorder="app-border-primary app-hover"
            handleClick={handleDedirectTo}
            icon={<DateRangeIcon className={`icon-color-primary ${classes.icon}`} />}
          />
        </SwiperSlide>

        <SwiperSlide>
          <CardIcon
            subtitle="Resumen"
            title="Servicios en transito"
            classBorder="app-border-warning app-hover"
            // handleClick={namefuction}
            icon={<GetAppOutlinedIcon className={`icon-color-warning ${classes.icon}`} />}
          />
        </SwiperSlide>

        <SwiperSlide>
          <CardMenu
            subtitle="Ejecutivo"
            title="Lilian Arguedas"
            classBorder="app-border-default app-hover mr-5"
            icon={<MoreVertIcon />}
            open={anchorEl}
            handleClick={handleClick}
            handleClose={handleClose}
            option={[
              { name: 'Email', icon: <DashboardIcon fontSize="small" />, toLink: "" },
              { name: 'Télefono', icon: <AccountCircleIcon fontSize="small" />, toLink: "#" },
            ]}
          />
        </SwiperSlide>
      </Swiper>


      <div className="row">
        <div className="col-12 my-5">
          <CardBarChart
            title="Programación de presentación en clientes"
            chartData={userData}
            height={80}
          />
        </div>

        {/* card para consultar los servicios sin horario de retiro */}
        <div className="col-6">
          <CardIcon
            subtitle="Contenedores"
            title="Sin horarios de retiro en puerto"
            classBorder="app-border-primary app-hover"
            handleClick={handleContenodreSinRetiro}
            icon={<GetAppOutlinedIcon className={`icon-color-primary ${classes.icon}`} />}
          />
        </div>

        {/* card para consultar los servicios con contenedores almacenados */}
        <div className="col-6">
          <CardIcon
            subtitle="Stock"
            title="Contenedores almacenados"
            classBorder="app-border-purple app-hover"
            handleClick={clickContenedoresAlacenados}
            icon={<GetAppOutlinedIcon className={`icon-color-purple ${classes.icon}`} />}
          />
        </div>



        {
          // tabla con contenedores almacenados
          visible.contenedores_alacenados &&
          <div className="col-12">
            <div className="app-table mt-4">
              <div className="app-table-sticky">
                <Tabla titleTable="Stock Contenedores almacenados" />
              </div>
            </div>
          </div>
        }

        {
          // tabla con contenedores sin horario de retiro
          visible.contenedores_sin_horario &&
          <div className="col-12">
            <div className="app-table mt-4">
              <div className="app-table-sticky">
                <Tabla titleTable="Contenedores sin horarios de retiro en puerto" />
              </div>
            </div>
          </div>
        }
      </div>


      <div className="row mt-5">
        <div className="col-6">
          <CardBarChart
            title="Retiros por nave"
            description=" "
            chartData={userData2}
            height={120}
          />
        </div>

        <div className="col-6">
          <CardBarChart
            title="Retiros de puerto"
            description=""
            // description="Por tipo de servicio (cat: Impo, Expo, Otros)."
            chartData={userData2}
            height={120}
          />
        </div>
      </div>


      {loading && <Cargando />}



    </>
  )
};

export default Dashboard;
