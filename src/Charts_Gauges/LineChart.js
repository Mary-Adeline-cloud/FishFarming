import React, { Component } from 'react';
import axios from 'axios'
import Chart from "./Chart"

class LineChart extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentDidMount() {
    this.getChartData();
  }

  getChartData() {
    axios.get("https://pure-cliffs-73224.herokuapp.com/api/sensors/v2").then(res => {
        const sensor = res.data;
        let labels = sensor.chartData;
        let data = sensor.chartData;
    //     sensor.forEach(element => {
    //     labels.push(element.labels);
    //     data.push(element.data);
    // });

    console.log(sensor)
     this.setState({
       chartData: {
         labels:labels,
         datasets: [
           {
             label: "PH levels",
             data: data,
             backgroundColor: [
               "rgba(255, 99, 132, 0.6)",
               "rgba(54, 162, 235, 0.6)",
               "rgba(255, 99, 132, 0.6)"
             ],
           }
         ]
       }
     });
   });
 }
 render(){

    return (
      <div>
      {Object.keys(this.state.chartData).length &&
        <Chart
          data={this.state.chartData.phSensor}
          
        />
      }
      </div>
    );

}     
}

export default LineChart;


























// import React from 'react'

// import { Line } from 'react-chartjs-2'

// function LineChart() {
//     const data = {
//         labels: ['00am', '00:30', '01am', '01:30', '02am', '02:30', '03am', '03:30', '04am', '04:30', '05am', '05:30','06am', '06:30', '07am','07:30', '08am', '08:30', '09am', '09:30', '10am', '10:30','11am', '11:30', '12am','12:30', '13pm', '13:30', '14pm', '14:30', '15pm', '15:30','16pm', '16:30', '17pm','17:30', '18pm', '18:30', '19pm', '19:30', '20pm', '20:30','21pm', '21:30', '22pm', '22:30', '23pm', '23:30'],
//         datasets: [
//             {
//                 label: 'PH ',
//                 data: [11, 9, 8, 9, 7, 8, 6, 4, 5, 6, 11, 9, 8, 9, 7, 8, 6, 4, 5, 6, 11, 9, 8, 9, 7, 8, 6, 4, 5, 6, 11, 9, 8, 9, 7, 8, 6, 4, 5, 6, 11, 9, 8, 9, 7, 8, 6, 4],
//                 borderColor: ['rgba(161, 181, 13)'],
//                 //  backgroundColor: ['rgba(77, 118, 189'],
//                 //  pointBackgroundColor: 'rgba(50, 58, 168)',
//                 //  pointBord000000erColor: 'rgba(255, 206, 86, 0.2)',
//                  fill: false
                 
//             },
//             {
//                 label: 'Temperature (c)',
//                 data: [12, 15, 17, 16, 21, 24, 26, 29, 31, 30, 12, 15, 17, 16, 21, 24, 26, 29, 31, 30, 11, 9, 8, 9, 7, 8, 6, 4, 5, 6, 12, 15, 17, 16, 21, 24, 26, 29, 31, 30, 12, 15, 17, 16, 21, 24, 26, 29],
//                  borderColor: ['rgba(55, 149, 166)'],
//                 //  backgroundColor: ['rgba(149, 41, 166'],
//                 //  pointBackgroundColor: 'rgba(74, 35, 43)',
//                 //  pointBorderColor: 'rgba(54, 162, 235, 0.2)',
//                 borderwidth: 3,
//                  fill: false
//             },
//             {
//                 label: 'Oxygen (mg/l)',
//                 data: [1, 4, 6, 9, 7, 8, 6, 4, 5, 6, 6, 4, 3, 2.3, 3.2, 5, 4, 4, 5, 4, 1, 5.2, 2, 5, 4, 2, 3, 5, 3, 5, 1, 4, 6, 6, 4, 3, 4, 4, 1, 5, 6, 4, 3, 3, 4, 2, 4, 3],
//                  borderColor: ['rgba(189, 55, 99)'],
//                 //  backgroundColor: ['rgba(214, 41, 41'],
//                 //  pointBackgroundColor: 'rgba(74, 35, 43)',
//                 //  pointBorderColor: 'rgba(54, 162, 235, 0.2)',
//                 borderwidth: 10,
//                  fill: false
//             }
//         ]
//     }
//     const options = {
//         title: {
//             display: true,
//             text: 'PH, Oxygen and Temperature'
//         },
//         scales: {
//             xAxes:[
//                 {
//                 gridLines: {
//                     display: false,
                  
//                 }
//                   },

//             ],
//             yAxes: [
//                 {
//                     ticks: {
//                       min: 0,
//                       max: 40,
//                       stepSize: 1  
//                     },
//                     gridLines: {
//                         display: true,
//                     }
//                 }
//             ]
//         }
//     }
//     return <Line data={data} options={options} />
// }

// export default LineChart
