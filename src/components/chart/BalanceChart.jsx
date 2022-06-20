import {Line} from "react-chartjs-2"
import {Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend,} from 'chart.js'
import './Chart.css'
import React from 'react'

const BalanceChart = () => {

    Chart.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );

      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
      };

  return (
    <div>

    </div>
  )
}

export default BalanceChart