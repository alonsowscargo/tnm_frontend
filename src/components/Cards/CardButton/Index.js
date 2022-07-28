import React, { string } from 'react'
import {
  Card,
  CardContent,
  Typography,
  Button
} from "@material-ui/core";

const CardButton = ({ title, subtitle, nameButton, classBorder, handleClick, colorBotton }) => {
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

CardButton.prototype = {
  title: string,
  subtitle: string,
  nameButton: string,
  classBorder: string,
  colorBotton: string
}

CardButton.defaultProps = {
  title: "Título",
  subtitle: "Sub título",
  nameButton: "button",
  classBorder: "app-border-default",
}

export default CardButton