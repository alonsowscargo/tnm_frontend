import React, {string} from 'react'
import {
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";

const CardIcon = ({ title, subtitle, classBorder, icon, handleClick}) => {

  return (
    <Card className={`app-card app-hover ${classBorder}`}  onClick={handleClick}>
      <CardContent className="justify-space-between py-4">
        <div>
          <Typography variant="body2" component="p" color="textSecondary">
            {subtitle}
          </Typography>

          <Typography variant="h6" component="h6">
            {title}
          </Typography>
        </div>

        {icon}
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
}

export default CardIcon