import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { userSignOut } from 'actions/Auth';
import { useHistory } from 'react-router-dom';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Link, withRouter } from "react-router-dom";
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';



import {
    IconButton,
    Menu,
    MenuItem,
    Avatar,
    Divider,
    Typography,
    ListItem,
    ListItemText,
    ListItemAvatar,
    ListItemIcon,
} from "@material-ui/core";


const UserInfo = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [anchorE1, setAnchorE1] = useState(null);
    const [open, setOpen] = useState(false);

    const handleClick = event => {
        setOpen(true);
        setAnchorE1(event.currentTarget);
    };

    const handleRequestClose = () => {
        setOpen(false);
    };
    return (
        <div className="user-profile d-flex flex-row align-items-center">
            <IconButton
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className="app-link-nav"
            >
                <Avatar className="app-avatar">
                    {JSON.parse(localStorage.getItem('userSession')).usuario.nombre.slice(0, 1)}
                </Avatar>
                <ArrowDropDownIcon />
            </IconButton>

            <Menu
                id="simple-menu"
                anchorEl={anchorE1}
                open={open}
                onClose={handleRequestClose}
                className="app-dropdown"
                variant="selectedMenu"
            >
                <ListItem className="app-user">
                    <ListItemAvatar>
                        <Avatar className="app-avatar">{JSON.parse(localStorage.getItem('userSession')).usuario.nombre.slice(0, 1)}</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="¡Hola!" className="text-capitalize pr-2" secondary={`${JSON.parse(localStorage.getItem('userSession')).usuario.nombre}  ${JSON.parse(localStorage.getItem('userSession')).usuario.apellidos}`} />
                </ListItem>

                <Divider className="mt-2" />

                <MenuItem component={Link} to="#" onClick={handleRequestClose}>
                    <ListItemIcon>
                        <SettingsIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit">Configuración</Typography>
                </MenuItem>

                <MenuItem
                    onClick={() => {
                        handleRequestClose();
                        dispatch(userSignOut());
                    }}
                >
                    <ListItemIcon>
                        <ExitToAppIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit">Salir</Typography>
                </MenuItem>
            </Menu>
        </div>
    );
};

export default UserInfo;


