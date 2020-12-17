import React from "react";
import axios from "axios";
import "./login.css";

class table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tableContent: [],
    };
  }

  componentDidMount() {
    // Simple GET request using axios
    axios
      .get("https://pure-cliffs-73224.herokuapp.com/api/sensors/v2/")
      .then((response) =>
        this.setState({ tableContent: response.data.sensor })
      );
  }

  render() {
    const { tableContent } = this.state;
    return (
      <div class="container">
        <h5 class="container" style={{textAlign:'center'}}>Sensor Data</h5>
        <div class="row" style={{position:'static'}}>
          {this.state.tableContent.map((sensor) => (
            <>
              <div class="col-12" style={{ border: "1px", position:'static' }}>
                <ul class="cal ">
                  <li class="calen-title">ID</li>
                  <li class="" style={{ minHeight: "40px" }}>
                    {" "}
                    {sensor.id}
                  </li>
                </ul>

                <ul class="cal ">
                  <li class="calen-title">Name</li>
                  <li class="" style={{ minHeight: "40px" }}>
                    {" "}
                    {sensor.Name}
                  </li>
                </ul>
                <ul class="cal ">
                  <li class="calen-title">PH level</li>
                  <li class="" style={{ minHeight: "40px" }}>
                    {" "}
                    {sensor.phSensor}
                  </li>
                </ul>
                <ul class="cal ">
                  <li class="calen-title">Oxygen level</li>
                  <li class="" style={{ minHeight: "40px" }}>
                    {" "}
                    {sensor.oxygenSensor}
                  </li>
                </ul>

                <ul class="cal ">
                  <li class="calen-title">
                    Temperature level in degree celicious
                  </li>
                  <li class="" style={{ minHeight: "40px" }}>
                    {" "}
                    {sensor.temperatureSensor}
                  </li>
                </ul>

                <ul class="cal ">
                  <li class="calen-title">Date</li>
                  <li class="" style={{ minHeight: "40px" }}>
                    {" "}
                    {sensor.createdAt}
                  </li>
                </ul>
              </div>
            </>
          ))}
        </div>
      </div>
    );
  }
}

export default table;
