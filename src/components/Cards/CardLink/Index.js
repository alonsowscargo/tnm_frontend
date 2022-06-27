import React, {string} from 'react'
// import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";

const CardLink = ({ title, subtitle, data, classBorder,handleClick,colorText}) => {
  return (
    <Card className={`app-card py-4 ${classBorder}`} onClick={handleClick}>
      <CardContent className="justify-space-between py-0">
        <div>
          <Typography variant="body2" component="p" color="textSecondary">
            {subtitle}
          </Typography>

          <Typography variant="h6" component="h6">
            {title}
          </Typography>
        </div>

        <Typography variant="h3" component="h6" className={colorText}>
          {data}
        </Typography>
      </CardContent>
    </Card>
  )
}

CardLink.prototype = {
  title: string,
  subtitle: string,
  classBorder: string,
}

CardLink.defaultProps = {
  title: "Título",
  subtitle: "Sub título",
  classBorder: "app-border-default",
}

export default CardLink