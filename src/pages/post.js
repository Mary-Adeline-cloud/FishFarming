import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "./Chart";


const Post = () => {
  const [chart, setChart] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get(
        `https://pure-cliffs-73224.herokuapp.com/api/sensors/v2/`
      );

      setChart({
        labels: [Object.keys(res.data.sensor)],
        linechart: {
          labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
          datasets: [
            {
              label: "PH(1-14) ",
              data: [11, 9, 8, 9, 7, 8, 6, 4, 5, 6],
              borderColor: ["rgba(255, 206, 86, 0.2)"],
              backgroundColor: ["rgba(39, 163, 54)"],
              pointBackgroundColor: "rgba(50, 58, 168)",
              pointBorderColor: "rgba(255, 206, 86, 0.2)",
              data: Object.values(res.data.sensor.phSensor),
            },
            {
              label: "Temperature (degree celicius)",
              data: [12, 15, 17, 16, 21, 24, 26, 29, 31, 30],
              borderColor: ["rgba(54, 162, 235, 0.2)"],
              backgroundColor: ["rgba(149, 41, 166"],
              pointBackgroundColor: "rgba(50, 58, 168)",
              pointBorderColor: "rgba(54, 162, 235, 0.2)",
              data: Object.values(res.data.sensor.temperatureSensor),
            },
          ],

          options: {
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
        },
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      
      <Chart data={chart} />
    </div>
  );
};

export default Post;
