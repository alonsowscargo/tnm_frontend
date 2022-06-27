import React, {string, number} from 'react'
import { Bar } from "react-chartjs-2";
import {
  Card,
  CardContent,
} from "@material-ui/core";

const CarBarChart = ({chartData, title, description, height}) => {
  return (
    <Card>
      <CardContent className="pb-0">
        <h2>{title}</h2>
        <h3>{description}</h3>
      </CardContent>

      <CardContent>
        <Bar data={chartData} height={height}/>
      </CardContent>
    </Card>
  )
}


CarBarChart.prototype = {
  title: string,
  description: string,
  chartData: string,
  height: number
}

CarBarChart.defaultProps = {
  title: 'Título gráfico',
}



export default CarBarChart