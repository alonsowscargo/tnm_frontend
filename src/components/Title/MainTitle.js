import React, {string} from 'react'
import {
  Button
} from '@material-ui/core';

const MainTitle = ({
  title,
  nameButton
}) => {
  return (
    <div className="app-title justify-space-between mb-4">
        <h1 className="font-weight-700 m-0">{title}</h1>
        {
          nameButton &&
          <Button
            variant="outlined"
            size="medium"
            //startIcon={<BsPlus />}
            color="primary"
            className="app-button"
          >
            {nameButton}
          </Button>
        }
      </div>
  )
}

MainTitle.prototype = {
  title: string,
  nameButton: string
}

MainTitle.defaultProps = {
  title: 'Título principal',
}

export default MainTitle