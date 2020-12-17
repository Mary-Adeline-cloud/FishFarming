import React from "react";
import axios from "axios";

class GetData extends React.Component {
  state = {
    sensor: {},
    asyncData: {},
  };
  getDetailUser() {
    axios
      .get("https://pure-cliffs-73224.herokuapp.com/api/sensor/v2/1")
      .then((response) => {
        console.log(response.data);
        this.setState({
          sensor: response.data
        });
      })
      .catch((err) => {
        alert("Error get sensor detail: " + err);
      });
  }

  render() {
    return (
      <div>
        <button onClick={this.getDetailUser.bind(this,1)}>
          sensor details
        </button>
        <div>
          { this.state.sensor.constructor === Object && (
              <div>    
                <p>id : {this.state.sensor.id}</p>
              </div>
            )}
        </div>
      </div>
    );
  }
}
export default GetData;
