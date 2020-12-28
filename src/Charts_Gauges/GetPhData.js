import React from "react";
import axios from "axios";
import Thermometer from "react-thermometer-component";

class GetPhData extends React.Component {
  state = {
    sensor: {},
    asyncData: {},
  };
  getDetailUser() {
    axios
      .get("https://pure-cliffs-73224.herokuapp.com/api/sensor/v2/529")
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
        <label for="data">PH details</label>

        <div>
          {sensor &&
            Object.keys(sensor).map((item) => (
              <>
                <p>Value is: {sensor[item].phSensor}</p>

                <Thermometer
                  theme="dark"
                  value={sensor[item].phSensor}
                  max="14"
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
export default GetPhData;
