import {Doughnut} from "react-chartjs-2"
import {Chart, ArcElement, Tooltip, Legend} from 'chart.js'
import './Chart.css'
import React from 'react'

const MainChart = ({tokens}) => {
    Chart.register(ArcElement, Tooltip, Legend);
    let border_colors = []
    let data_labels = []
    let data_money = []
    let colors = []

    tokens.map((elem) => {
        data_labels.push(elem.contract_ticker_symbol)
        data_money.push((elem.balance / Math.pow(10, elem.contract_decimals)).toFixed(2))
        const color = get_rand_color()
        colors.push(color[0])
        border_colors.push(color[1])
    })

    function get_rand_color(){
        var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
        while(color.length < 6) {
            color = "0" + color;
        }
        const res = ["#99" + color, "#CC" + color]
        return res
    }


    function getData(data_labels, data_money, colors, border_colors) {
        return {
            labels: data_labels,  
            datasets: [
                {
                    data: data_money,
                    backgroundColor: colors,
                    borderColor: border_colors,
                    borderWidth: 1
                }
            ],
        }
    }
    console.log(`Labels: ${data_labels} Money: ${data_money} Colors: ${colors} Border: ${border_colors}`)
  return (
    <div className="chart__wrapper">
        <Doughnut data={getData(data_labels, data_money, colors, border_colors)} />
    </div>
  )
}

export default MainChart