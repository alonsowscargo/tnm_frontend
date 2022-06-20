// import React from "react";
// import {withRouter} from "react-router-dom";
// import {useSelector} from "react-redux";
// import Header from "./Header/index";
// import Nav from "./Nav/index";
// import SideBar from "containers/SideBar/index";
// import SideBar2 from "containers/SideBar2/index";
// import Tour from "components/Tour/index";
// import {COLLAPSED_DRAWER, FIXED_DRAWER} from "constants/ActionTypes";
// import {isIOS, isMobile} from "react-device-detect";
// import { useParams } from "react-router";
// import { Link } from "react-router-dom"
// import {NavLink} from "react-router-dom";
// import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
// import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
// import FolderOutlinedIcon from '@material-ui/icons/FolderOutlined';
// import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
// import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
// import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';
// import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
// import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
// /* alonso */
// import Cabecera from "./cabecera/Caberera";
// // import SideBar from "./sideBar/SideBar";


import React from "react";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Header/index";
import Nav from "./Nav/index";
import SideBar from "../../SideBar/index";
// import SideBar2 from "containers/SideBar2/index";
import { COLLAPSED_DRAWER, FIXED_DRAWER } from "constants/ActionTypes";
import { isIOS, isMobile } from "react-device-detect";
import {NavLink} from "react-router-dom";
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import FolderOutlinedIcon from '@material-ui/icons/FolderOutlined';
import { useParams } from "react-router";
// import CreateUser from "../../../modules/atrina/registro_empresa/CreateUser"

/* alonso */
import Cabecera from "./cabecera/Caberera";




const Vertical = (props) => {

    const {drawerType} = useSelector(({settings}) => settings);
    const drawerStyle = drawerType.includes(FIXED_DRAWER) ? "fixed-drawer" : drawerType.includes(COLLAPSED_DRAWER) ? "collapsible-drawer" : "mini-drawer";
    const {location} = useSelector(({router}) => router);
    //set default height and overflow for iOS mobile Safari 10+ support.

    /********************/
    // if (isIOS && isMobile) {
    //     document.body.classList.add("ios-mobile-view-height");
    // } else if (document.body.classList.contains("ios-mobile-view-height")) {
    //     document.body.classList.remove("ios-mobile-view-height");
    // }
    
    document.body.classList.add("ios-mobile-view-height");

    

    return (
        <React.Fragment>
            {/*AQUI COMIENZAS A METER TU CODIGO*/}
            {location && ( location.pathname==='/app/atrina-seguimiento' 
                            || location.pathname==='/app/atrina-perfil' 
                            || location.pathname==='/app/atrina-recepcion' 
                            || location.pathname==='/app/atrina-content-info '
                            || location.pathname==='/app/atrina-gestion' 
                            || location.pathname==='/app/atrina-loading' 
                            || location.pathname==='/app/recepcion' 
                            || location.pathname==='/app/cli_seguimientoservicios' 
                            || location.pathname==='/app/atrina-procesodocumental' 
                            || location.pathname==='/app/proceso-documental' 
                            || location.pathname==='/app/atrina-cotizador'
                        ) ?
                <div className={`app-container new-template ${drawerStyle}`}>
                    {/* <Tour/> */}
                    {/* <SideBar2 /> */}
                    
                    <div className="app-main-container">

                        
                        <main className="app-main-content-wrapper">
                        <Nav /> 
                            {/* <Cabecera /> */}
                            {
                                location.pathname==='/app/atrina-seguimiento' ?
                                (
                                    <Cabecera
                                    titulo1='seguimiento'
                                    titulo2=' '
                                    class=''
                                    />

                                )
                                :
                                ''
                            }

{
                                location.pathname==='/app/cli_seguimientoservicios' ?
                                (
                                    <Cabecera
                                    titulo1='seguimiento'
                                    titulo2=' '
                                    class=''
                                    />

                                )
                                :
                                ''
                            }

                            {
                                location.pathname==='/app/atrina-perfil' ?
                                (
                                    <Cabecera
                                    titulo1='Usuario'
                                    titulo2=''
                                    />

                                )
                                :
                                ''
                            }

                            {
                                location.pathname==='/app/atrina-cotizador'?
                                ''
                                :
                                ''
                            }

                            {
                                location.pathname==='/app/atrina-recepcion' ?
                                ''
                                :
                                ''
                            }

                            {
                                location.pathname==='/app/recepcion' ?
                                ''
                                :
                                ''
                            }

{
                                location.pathname==='/app/atrina-loading' ?
                                ''
                                :
                                ''
                            }
                            


                            <div className="app-main-content template">
                                {props.children}
                            </div>
                        </main>
                    </div>
                </div>
                :
                <div className={`app-container ${drawerStyle}`}>
                    {/* <Tour/> */}

                    <SideBar/>
                    <div className="app-main-container">
                        <div className="app-header" style={{backgroundColor:'red !important'}}>
                            <Header/>
                        </div>

                        <main className="app-main-content-wrapper container-fluid">

                            <div className="justify-space-between mt-5"> 
                                <div className="app-user">
                                    {/* <AccountCircleOutlinedIcon /> */}
                                    <div>
                                        <h3 className="m-0">Bienvenido(a)</h3>
                                        <h4 className="m-0">Alonso Trina</h4>
                                    </div>
                                </div>

                                <ul className="app-nav">
                                    <li className="app-link"><NavLink to={"/app/inicio"}  activeClassName="selected" exact={true}><AppsOutlinedIcon/>DashBoard</NavLink></li>
                                    <li className="app-link"><NavLink to={"/app/reportes"}  activeClassName="selected" exact={true}><BarChartOutlinedIcon/>Reportes</NavLink></li>
                                    <li className="app-link"><NavLink to={"/app/documentacion"}  activeClassName="selected" exact={true}><FolderOutlinedIcon/> Documentación</NavLink></li>
                                    <li className="app-link"><NavLink to={"/app/facturacion"} activeClassName="selected" exact={true}><MonetizationOnOutlinedIcon/>Facturación</NavLink></li>
                                </ul>
                            </div>

                            <div className="app-main-content my-5">
                                {props.children}
                            </div>
                            {/* <Footer/> */}
                        </main>
                    </div>
                </div>
            }
        </React.Fragment>
    );
};

export default withRouter(Vertical);
