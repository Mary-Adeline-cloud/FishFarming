import React from 'react'

import { Bar} from 'react-chartjs-2'

function BarChart() {
    const data = {
        labels: ['00am', '00:30', '01am', '01:30', '02am', '02:30', '03am', '03:30', '04am', '04:30', '05am', '05:30','06am', '06:30', '07am','07:30', '08am', '08:30', '09am', '09:30', '10am', '10:30','11am', '11:30', '12am','12:30', '13pm', '13:30', '14pm', '14:30', '15pm', '15:30','16pm', '16:30', '17pm','17:30', '18pm', '18:30', '19pm', '19:30', '20pm', '20:30','21pm', '21:30', '22pm', '22:30', '23pm', '23:30'],
        datasets: [
            {
                label: 'PH ',
                data: [11, 9, 8, 9, 7, 8, 6, 4, 5, 6, 11, 9, 8, 9, 7, 8, 6, 4, 5, 6, 11, 9, 8, 9, 7, 8, 6, 4, 5, 6, 11, 9, 8, 9, 7, 8, 6, 4, 5, 6, 11, 9, 8, 9, 7, 8, 6, 4],
                borderColor: 'rgba(93, 255, 5)',
                backgroundColor: 'rgba(93, 255, 5)',
                pointBackgroundColor: 'rgba(93, 255, 5)',
                pointBorderColor: 'rgba(93, 255, 5)'
            },
            {
                label: 'Temperature (c)',
                data: [12, 15, 17, 16, 21, 24, 26, 29, 31, 30, 12, 15, 17, 16, 21, 24, 26, 29, 31, 30, 11, 9, 8, 9, 7, 8, 6, 4, 5, 6, 12, 15, 17, 16, 21, 24, 26, 29, 31, 30, 12, 15, 17, 16, 21, 24, 26, 29],
                borderColor: 'rgba(62, 79, 184)',
                backgroundColor: 'rgba(62, 79, 184)',
                pointBorderColor: 'rgba(62, 79, 184)',
            },
            {
                label: 'Oxygen (mg/l)',
                data: [1, 4, 6, 9, 7, 8, 6, 4, 5, 6, 6, 4, 3, 2.3, 3.2, 5, 4, 4, 5, 4, 1, 5.2, 2, 5, 4, 2, 3, 5, 3, 5, 1, 4, 6, 6, 4, 3, 4, 4, 1, 5, 6, 4, 3, 3, 4, 2, 4, 3],
                 borderColor: 'rgba(189, 55, 99)',
                 backgroundColor: 'rgba(189, 55, 99)',
                 pointBackgroundColor: 'rgba(189, 55, 99)',
                 pointBorderColor: 'rgba(189, 55, 99)',  
            }
        ]
    }
    const options = {
        title: {
            display: true,
            text: 'Bar Chart'
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                      min: 0,
                      max: 40,
                      stepSize: 2 
                    }
                }
            ]
        }
    }
    return <Bar data={data} options={options} />
}

export default BarChart