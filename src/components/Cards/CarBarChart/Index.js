import React, { string, number } from 'react'
import { Bar } from "react-chartjs-2";
import {
  Card,
  CardContent,
} from "@material-ui/core";

const CarBarChart = ({ chartData, title, description, height }) => {
  return (
    <Card>
      <CardContent className="pb-0">
        <h2>{title}</h2>
        <h3>{description}</h3>
      </CardContent>

      <CardContent>
        <Bar
          data={chartData}
          height={height}
          options={{
            legend: {
              labels: {
                fontSize: 10,
                fontStyle: 'bold'
              }
            },
            scales: {
              yAxes: [{
                ticks: {
                  fontSize: 12,
                  beginAtZero: false,
                  min: 0,
                  stepSize: 10,
                }
              }],
              xAxes: [{
                gridLines: {
                  display: false
                },

                ticks: {
                  fontSize: 10,
                  stepSize: 13,
                  beginAtZero: false,
                  autoSkip: false,
                  maxRotation: 45,
                  minRotation: 45,
                  fontStyle: 'bold'
                }
              }],
            }
          }}
        />
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