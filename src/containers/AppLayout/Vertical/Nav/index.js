import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem,ButtonDropdown } from "reactstrap";
import { COLLAPSED_DRAWER, FIXED_DRAWER } from "constants/ActionTypes";
import { switchLanguage, toggleCollapsedNav } from "actions/Setting";
import {userSignOut} from 'actions/Auth';
import {useHistory} from 'react-router-dom';
import IntlMessages from "util/IntlMessages";
import LanguageSwitcher from "components/LanguageSwitcher/index";

// nuevo template
import logoWsCargo from './logoWsCargo.svg'
import './nav.scss'
import { Button } from 'reactstrap';

const Index = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { drawerType, locale, navCollapsed } = useSelector(({ settings }) => settings);
    const [langSwitcher, setLangSwitcher] = useState(false);
    const [mailNotification, setMailNotification] = useState(false);
    const [appNotification, setAppNotification] = useState(false);
    const [searchBox, setSearchBox] = useState(false);
    const [apps, setApps] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [na, setNavBar] = useState(false);
    
    const onAppNotificationSelect = () => {
        setAppNotification(!appNotification)
    };

    const onMailNotificationSelect = () => {
        setMailNotification(!mailNotification)
    };
    const onLangSwitcherSelect = (event) => {
        setLangSwitcher(!langSwitcher);
    };

    const onSearchBoxSelect = () => {
        setSearchBox(!searchBox)
    };
    const onAppsSelect = () => {
        setApps(!apps)
    };

    const handleRequestClose = () => {
        setSearchBox(false);
        setLangSwitcher(false);
        setMailNotification(false);
        setSearchBox(false);
        setApps(false);
    };

    const onToggleCollapsedNav = (e) => {
        const val = !navCollapsed;
        dispatch(toggleCollapsedNav(val));
    };

    // dropdown user
    const [dropdownUserOpen, setDropdownUserOpen] = useState(false);
    const openUser = () => setDropdownUserOpen(prevState => !prevState);

    // dropdown idioma
    const [dropdownLanguage, setLanguageOpen] = useState(false);
    const openLanguage = () => setLanguageOpen(!dropdownLanguage);
    
    const updateSearchText = (evt) => {
        setSearchText(evt.target.value);
    };

    const onSwitchLanguage = (lang) => {
        dispatch(switchLanguage(lang))
    };

    const drawerStyle = drawerType.includes(FIXED_DRAWER) ? "d-block d-xl-none" : drawerType.includes(COLLAPSED_DRAWER) ? "d-block" : "d-none";

    // const changBackground = () => {
    //     console.log(window.scrollY);
    //     if(window.scrollY === 100 ){
    //         setNavBar(true)
    //     } else {
    //         setNavBar(false)
    //     }
    
    // }

    // window.addEventListener('scroll', changBackground);
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
        if(window.scrollY >= 70){
        setColorchange(true);
        }
        else{
        setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    return (
        // className={ na ? 'app-toolbar na active' : 'app-toolbar na'}
        <AppBar className="app-main-header lop" position="static">
            <Toolbar className={colorChange ? 'app-toolbar nav colorChange' : 'app-toolbar nav'}>
                <IconButton className="jr-menu-icon mr-2 d-block" aria-label="Menu"
                    onClick={onToggleCollapsedNav} color="secondary">
                    <span className="menu-icon icon-nav" />
                </IconButton>

                <Link className="app-logo logoWs mr-2 d-none d-sm-block" to="/">
                    <img src={logoWsCargo} alt="" draggable="false" />
                    {/* <img src={require("assets/images/wscargologo_old.png")} alt="Jambo" title="Jambo"/> */}
                </Link>

                {/* nav right */}
                <ul className="header-notifications list-inline ml-auto d-flex align-items-center">
                    <li className="no-mobile">
                        <Button>
                            <i className="zmdi zmdi-whatsapp"></i> 
                            Ejecutivo
                        </Button>{' '}
                    </li>

                    <li className="no-mobile">
                        <ButtonDropdown isOpen={dropdownLanguage} toggle={openLanguage}>
                            <DropdownToggle caret>
                                <i className="zmdi zmdi-translate"></i>
                                Idioma
                            </DropdownToggle>
                            <DropdownMenu right className="w-50">
                                <LanguageSwitcher switchLanguage={onSwitchLanguage}
                                                  handleRequestClose={handleRequestClose}/>
                            </DropdownMenu>
                        </ButtonDropdown>
                    </li>
                    
                    <li>
                        <Dropdown isOpen={dropdownUserOpen} toggle={openUser}>
                            <DropdownToggle caret>
                                <i className="zmdi zmdi-account-circle"></i>
                                <div className="no-mobile">User</div>
                            </DropdownToggle>
                            <DropdownMenu right>
                                {/*<DropdownItem >Perfil</DropdownItem>*/}
                                <DropdownItem onClick={()=>{
                                history.push(`/app/configuracion`);
                                }}><IntlMessages id="popup.setting"/></DropdownItem>
                                <DropdownItem onClick={() => {
                                    dispatch(userSignOut())
                                }}><IntlMessages id="popup.logout"/></DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </li>
                </ul>

                <div className="ellipse-shape" />
            </Toolbar>
        </AppBar>
    );
};


export default withRouter(Index);
