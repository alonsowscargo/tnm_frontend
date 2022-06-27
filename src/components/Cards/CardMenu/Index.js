import React, { string } from 'react'
import { Link } from "react-router-dom"

import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon
} from "@material-ui/core";

import MoreVertIcon from '@material-ui/icons/MoreVert';


const CardIcon = ({ title, subtitle, classBorder, icon, handleClick, open, handleClose, option=[]}) => {

  return (
    <Card className={`app-card ${classBorder}`}>
      <CardContent className="justify-space-between py-4">
        <div>
          <Typography variant="body2" component="p" color="textSecondary">
            {subtitle}
          </Typography>

          <Typography variant="h6" component="h6">
            {title}
          </Typography>
        </div>

        <IconButton
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          className="app-link-nav ml-3"
        >
          {icon}
        </IconButton>


        <Menu
          id="simple-menu"
          anchorEl={open}
          keepMounted
          open={Boolean(open)}
          onClose={handleClose}
          className="app-dropdown"
          variant="selectedMenu"
        >

          {
            option.map((item, index) => (
              <MenuItem 
                component={Link} 
                to={item.toLink} 
                onClick={handleClose}
                key={index}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <Typography variant="inherit">{item.name}</Typography>
              </MenuItem>
            ))
          }
        </Menu>
      </CardContent>
    </Card>
  )
}

CardIcon.prototype = {
  title: string,
  subtitle: string,
  classBorder: string,
  icon: string
}

CardIcon.defaultProps = {
  title: "Título",
  subtitle: "Sub título",
  classBorder: "app-border-default",
  icon: <MoreVertIcon />
}

export default CardIcon