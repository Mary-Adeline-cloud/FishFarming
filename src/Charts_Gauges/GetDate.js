import React from "react";
import axios from "axios";

class GetDate extends React.Component {
  state = {
    sensor: {},
  };
  getDetailUser() {
    axios
      //retrieving one sensor data
      .get("https://pure-cliffs-73224.herokuapp.com/api/sensor/v2/512")
      .then((response) => {
        console.log(response.data.data);
        //displaying results on the UI
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
            <p>date: {sensor.createdAt} </p>
          </>
        }
      </div>
    );
  }
}
export default GetDate;
