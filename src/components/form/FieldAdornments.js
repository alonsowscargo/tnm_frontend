import React from 'react'
import {
  TextField,
  InputLabel,
  makeStyles,
  IconButton, 
  InputAdornment
} from '@material-ui/core';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import AccountCircle from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles((theme) => ({
  iconButtom: {
    padding: 0,
      "&:hover": {
          background: "transparent"
      },
      "& .MuiSvgIcon-root": {
          fontSize: "18px",
      }
  }
}));

const FieldAdornments = ({ label, type, placeholder, onChange, name, value, fullWidth, validations, 
  handleBlur, handleClick,handlePassword, state, typeIcon,  className }) => {
  const classes = useStyles();

  return (
    <>
      { label ? <InputLabel>{label}</InputLabel> : ''}

      <TextField
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        fullWidth={fullWidth}
        onChange={onChange}
        onBlur={handleBlur}
        error={validations && true}
        className={className}
        helperText={
          validations && validations
        }
        InputProps={{
          endAdornment: (
              <InputAdornment position="end">
                {
                  typeIcon === "password" ?
                  <IconButton
                      onClick={handleClick}
                      onMouseDown={handlePassword}
                      className={classes.iconButtom}
                  >
                    { state ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                  : 
                  <IconButton className={classes.iconButtom}
                  >
                    <AccountCircle />
                  </IconButton>
                }
              </InputAdornment>
          )
      }}
      />
    </>
  )
}

export default FieldAdornments