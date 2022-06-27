import React, { string } from 'react'
import {
  Card,
  CardContent,
  Typography,
  Button
} from "@material-ui/core";

const CardButton = ({ title, subtitle, nameButton, classBorder, handleClick, colorBotton }) => {
  return (
    <Card className={`app-card py-4 ${classBorder}`}>
      <CardContent className="justify-space-between py-0">
        <div>
          <Typography variant="body2" component="p" color="textSecondary">
            {subtitle}
          </Typography>

          <Typography variant="h6" component="h6">
            {title}
          </Typography>
        </div>

        <Button
          variant="outlined"
          color={colorBotton}
          onClick={handleClick}
        >
          {nameButton}
        </Button>
      </CardContent>
    </Card>
  )
}

export default CardButton