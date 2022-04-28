import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom"
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import SystemUpdateAltOutlinedIcon from '@material-ui/icons/SystemUpdateAltOutlined';
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DashboardIcon from '@material-ui/icons/Dashboard';


import { 
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  makeStyles,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    // minWidth: 275,
    marginTop:"48px",
    marginBottom:"48px"
    // border:"solid 1px rgba(0, 0, 0, 0.54)"
  },
  title: {
    fontSize: 12,
    margin:0
  },
  pos: {
    marginBottom: 12,
  },
  icon:{
    fontSize:38,
  }
});

// import userPng from "../../assets/images/warning.png";
// import Loading from "components/loading/Loading";

const Dashboard = () => {
  const classes = useStyles();

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

              <GetAppOutlinedIcon className={`icon-color-success ${classes.icon}`}/>
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
      {/* <Button variant="contained" color="primary">
        Primary
      </Button>

      <Button variant="contained" color="secondary">
        Secondary
      </Button> */}
    </>
  )
};

export default Dashboard;
