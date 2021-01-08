import React from "react";
import axios from "axios";
import Thermometer from "react-thermometer-component";


const url = "https://pure-cliffs-73224.herokuapp.com/api/sensor/v2/521";

class GetTemperatureData extends React.Component {
  state = {
    sensor: {},
  };
  componentDidMount() {
    axios
      //retrieving one sensor data
      .get(url)
      .then((response) => {
        //displaying results on the UI
        console.log(response.data.data);
        this.setState({
          sensor: response.data.data.foundSensor,
        });
      })
      .catch((err) => {
        alert("Error get sensor detail: " + err);
      });
  }

  render() {
    const { sensor } = this.state;

    return (
      <div>
        {
          <>
            <Thermometer
              theme="light"
              value={sensor.temperatureSensor}
              max="100"
              steps="3"
              format="°C"
              size="normal"
              height="200"
            />
          </>
        }
      </div>
    );
  }
}
export default GetTemperatureData;
