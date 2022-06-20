import React from 'react'
import {
  TextField,
  InputLabel
} from '@material-ui/core';

const Field = ({ label, type, placeholder, onChange, name, value, fullWidth, validations, handleBlur, className }) => {
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
      // size="small"
      />
    </>
  )
}

export default Field