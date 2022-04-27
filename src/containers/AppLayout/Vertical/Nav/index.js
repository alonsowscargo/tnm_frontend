import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { COLLAPSED_DRAWER, FIXED_DRAWER } from "constants/ActionTypes";
import { switchLanguage, toggleCollapsedNav } from "actions/Setting";
import {userSignOut} from 'actions/Auth';
import {useHistory} from 'react-router-dom';
import IntlMessages from "util/IntlMessages";
import LanguageSwitcher from "components/LanguageSwitcher/index";

// nuevo template
// import logo from '../../../../assets/images/LogoTnm.png'
import './nav.scss'
// import { Button } from 'reactstrap';


import {
    IconButton,
    makeStyles,
    Hidden,
    AppBar,
    Toolbar,
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    appBar: {
        background: "transparent",
        boxShadow: "none",
    },
    title: {
        flexGrow: 1,
    },
    inline: {
        display: 'block',
    },
    inlineActive: {
        display: 'block',
        opacity: "0.4"
    },
    appDropdown: {
        "& a":{
            color:"rgba(0, 0, 0, 0.87)"
        },

        "& .MuiListItemIcon-root": {
            minWidth: "auto",
            margin: "0",
        },
        "& .MuiPaper-root": {
            width: "264px",
        },
        "& .MuiTypography-overline": {
            lineHeight: "18px"
        },
        "& .MuiListItem-root": {

            "&:hover": {
                background: "#F9F9F9"
            },
            "&:first-child": {
                background: "#fff"
            }
        }
    },
    icon: {
        fontSize: "28px",
        "@media screen and (max-width: 576px)": {
            fontSize: "36px",
        }
    },
}));

const Index = (props) => {
    const classes = useStyles();
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
        <AppBar
            className={classes.appBar} 
            position="static"
        >
            <Toolbar className={colorChange ? 'app-toolbar nav colorChange' : 'app-toolbar nav'}>
                {/* <IconButton className="jr-menu-icon mr-2 d-block" aria-label="Menu"
                    onClick={onToggleCollapsedNav} color="secondary">
                    <span className="menu-icon icon-nav" />
                </IconButton> */}

                <Link className="app-logo logoWs mr-2 d-none d-sm-block" to="/">
                    {/* <img src={logo} alt="" draggable="false" /> */}
                    <img src={require("assets/images/LogoTnm.png")} alt="Jambo" title="Jambo"/>
                </Link>

                
                {/* <div className="ellipse-shape" /> */}
            </Toolbar>
        </AppBar>
    );
};


export default withRouter(Index);
