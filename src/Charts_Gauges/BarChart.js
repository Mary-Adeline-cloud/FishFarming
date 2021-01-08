import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Bar} from 'react-chartjs-2'

function BarChart() {
    const url="https://pure-cliffs-73224.herokuapp.com/api/sensors/v2/"
    const [receiveIndividualSensor, setReceiveIndividualSensor] =
    useState(
        {
            loading:false,
            data:'null',
            error:false
        }
    );
    let chartData= [];

    useEffect(() => {
        setReceiveIndividualSensor({
           loading: false,
           data: null,
           error:false 
        })

        axios.get(url)
        .then (response => {
            setReceiveIndividualSensor({
              loading: false,
              data: response.data.sensor,
              error: false
            })
          })
          .catch(() => {
            setReceiveIndividualSensor({
                loading: false,
                data: null,
                error: true
            })
        })
       
    }, [url])

    console.log(receiveIndividualSensor);
    if(receiveIndividualSensor){
     chartData= receiveIndividualSensor.data.sensor.map(receiveData=>
        (
            <>
             data={receiveData.sensor}
            </>
        )
        )  
    }
    const data = {
        labels: ['00am', '00:30', '01am', '01:30', '02am', '02:30', '03am', '03:30', '04am', '04:30', '05am', '05:30','06am', '06:30', '07am','07:30', '08am', '08:30', '09am', '09:30', '10am', '10:30','11am', '11:30', '12am','12:30', '13pm', '13:30', '14pm', '14:30', '15pm', '15:30','16pm', '16:30', '17pm','17:30', '18pm', '18:30', '19pm', '19:30', '20pm', '20:30','21pm', '21:30', '22pm', '22:30', '23pm', '23:30'],
        datasets: [
            {
                label: 'PH ',
                data: [data],
                borderColor: 'rgba(93, 255, 5)',
                backgroundColor: 'rgba(93, 255, 5)',
                pointBackgroundColor: 'rgba(93, 255, 5)',
                pointBorderColor: 'rgba(93, 255, 5)'
            },
            {
                label: 'Temperature (c)',
                data: [],
                borderColor: 'rgba(62, 79, 184)',
                backgroundColor: 'rgba(62, 79, 184)',
                pointBorderColor: 'rgba(62, 79, 184)',
            },
            {
                label: 'Oxygen (mg/l)',
                data: [],
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