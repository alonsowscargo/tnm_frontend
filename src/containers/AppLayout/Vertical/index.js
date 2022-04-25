import React from "react";
import {withRouter} from "react-router-dom";
import {useSelector} from "react-redux";
import Header from "./Header/index";
import Nav from "./Nav/index";
import SideBar from "containers/SideBar/index";
import SideBar2 from "containers/SideBar2/index";
import Footer from "components/Footer";
import Tour from "components/Tour/index";
import {COLLAPSED_DRAWER, FIXED_DRAWER} from "constants/ActionTypes";
import {isIOS, isMobile} from "react-device-detect";
import { useParams } from "react-router";


/* alonso */
import Cabecera from "./cabecera/Caberera";
// import SideBar from "./sideBar/SideBar";

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
                    <Tour/>
                    <SideBar2 />
                    
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
                    <Tour/>

                    <SideBar/>
                    <div className="app-main-container">
                        <div className="app-header" style={{backgroundColor:'red !important'}}>
                            <Header/>
                        </div>

                        <main className="app-main-content-wrapper">
                            <div className="app-main-content">
                                {props.children}
                            </div>
                            <Footer/>
                        </main>
                    </div>
                </div>
            }
        </React.Fragment>
    );
};

export default withRouter(Vertical);
