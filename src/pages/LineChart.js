import React from 'react'

import { Line } from 'react-chartjs-2'

function LineChart() {
    const data = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        datasets: [
            {
                label: 'PH(1-14) ',
                data: [11, 9, 8, 9, 7, 8, 6, 4, 5, 6],
                borderColor: ['rgba(255, 206, 86, 0.2)'],
                backgroundColor: ['rgba(39, 163, 54)'],
                pointBackgroundColor: 'rgba(50, 58, 168)',
                pointBorderColor: 'rgba(255, 206, 86, 0.2)'
            },
            {
                label: 'Temperature (degree celicius)',
                data: [12, 15, 17, 16, 21, 24, 26, 29, 31, 30],
                borderColor: ['rgba(54, 162, 235, 0.2)'],
                backgroundColor: ['rgba(149, 41, 166'],
                pointBackgroundColor: 'rgba(50, 58, 168)',
                pointBorderColor: 'rgba(54, 162, 235, 0.2)'
            },
        ]
    }
    const options = {
        title: {
            display: true,
            text: 'PH and Temperature'
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                      min: 0,
                      max: 40,
                      stepSize: 1  
                    }
                }
            ]
        }
    }
    return <Line data={data} options={options} />
}

export default LineChart
