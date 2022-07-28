import React, {string} from 'react'
import {
  Button,
  IconButton
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const MainTitleBack = ({
  title,
  nameButton,
  onClick
}) => {
  return (
    <div className="app-title justify-space-between mb-4">
        <div className='align-item-center'>
          <IconButton 
            aria-label="back" 
            size="medium" 
            onClick={onClick}
          >
            <ArrowBackIcon />
          </IconButton>

          <h1 className="font-weight-700 m-0">{title}</h1>
        </div>

        {
          nameButton &&
          <Button
            variant="outlined"
            size="medium"
            color="primary"
            className="app-button"
          >
            {nameButton}
          </Button>
        }
      </div>
  )
}

MainTitleBack.prototype = {
  title: string,
  nameButton: string
}

MainTitleBack.defaultProps = {
  title: 'Título principal',
}

export default MainTitleBack