import React from "react";
import axios from "axios";
import Thermometer from "react-thermometer-component";

class GetOxygenData extends React.Component {
  state = {
    sensor: {},
    asyncData: {},

  };
  getDetailUser() {
    axios
      .get("https://pure-cliffs-73224.herokuapp.com/api/sensor/v2/345")
      .then((response) => {
        console.log(response.data.data.foundSensor);
        this.setState({
          sensor: response.data.data,
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
        <input
          type="radio"
          value="data"
          onClick={this.getDetailUser.bind(this, 1)}
        />
        <label for="data">Oxygen details(mg/L)</label>

        <div>
          {sensor &&
            Object.keys(sensor).map((item) => (
              <>
              <p>Value is: {sensor[item].oxygenSensor}</p>
             
               <Thermometer
                  theme="light"
                  value={sensor[item].oxygenSensor}
                  max="15"
                  steps="3"
                //   format="°C"
                  size="normal"
                  height="200"
                />
              </>
            ))}
        </div>
      </div>
    );
  }
}
export default GetOxygenData;
