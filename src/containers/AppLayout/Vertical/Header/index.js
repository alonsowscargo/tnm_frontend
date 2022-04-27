import React, {useState} from "react";
import {Link, withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {COLLAPSED_DRAWER, FIXED_DRAWER} from "constants/ActionTypes";
import {switchLanguage, toggleCollapsedNav} from "actions/Setting";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import {
    IconButton,
    Menu,
    MenuItem,
    makeStyles,
    Avatar,
    Divider,
    Typography,
    ListItem,
    ListItemText,
    ListItemAvatar,
    ListItemIcon,
    AppBar,
    Toolbar,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    appBar: {
        background: "#fff",
        boxShadow: "none",
        clipPath: "ellipse(70% 90% at 50% 10%)"
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
    const dispatch = useDispatch();
    const {drawerType, locale, navCollapsed} = useSelector(({settings}) => settings);
    const [langSwitcher, setLangSwitcher] = useState(false);
    const [mailNotification, setMailNotification] = useState(false);
    const [appNotification, setAppNotification] = useState(false);
    const [searchBox, setSearchBox] = useState(false);
    const [apps, setApps] = useState(false);
    const [searchText, setSearchText] = useState('');

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

    const updateSearchText = (evt) => {
        setSearchText(evt.target.value);
    };

    const onSwitchLanguage = (lang) => {
        dispatch(switchLanguage(lang))
    };

    const drawerStyle = drawerType.includes(FIXED_DRAWER) ? "d-block d-xl-none" : drawerType.includes(COLLAPSED_DRAWER) ? "d-block" : "d-none";


    // dropdown ejecutivo
    const [anchorEl, setAnchorEl] = useState(null);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar 
            // className="app-main-header"
            className={classes.appBar} 
            position="static"
        >
            <Toolbar className="app-toolbar" disableGutters={false}>

                <IconButton className={`jr-menu-icon mr-3 d-block`} aria-label="Menu"
                            onClick={onToggleCollapsedNav} color="secondary">
                    <span className="menu-icon"/>
                </IconButton>


                <Link className={`app-logo mr-2 d-sm-block ${classes.title}`} to="/app/inicio">
                    <img src={require("assets/images/LogoTnm.png")} alt="Transporte nuevo mundo" title="Transporte nuevo mundo"/>
                </Link>

                <IconButton
                    data-tour="uno"
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                    className="app-link-nav"
                >
                    <Avatar>A</Avatar>
                    <ArrowDropDownIcon />
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
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>A</Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Usuario" className="pr-2" secondary="Alonso Trina" />
                    </ListItem>

                    <Divider className="mt-2" />

                    <MenuItem component={Link} to="#" onClick={handleClose}>
                        <ListItemIcon>
                            <SettingsIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit">Configuración</Typography>
                    </MenuItem>

                    <MenuItem component={Link} to="#" onClick={handleClose}>
                        <ListItemIcon>
                            <ExitToAppIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit">Salir</Typography>
                    </MenuItem>
                </Menu>
                {/* <div className="ellipse-shape"/> */}
            </Toolbar>
        </AppBar>
    );
};


export default withRouter(Index);
