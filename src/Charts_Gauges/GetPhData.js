import React from "react";
import axios from "axios";
import Thermometer from "react-thermometer-component";

const url = "https://pure-cliffs-73224.herokuapp.com/api/sensor/v2/512";

class GetPhData extends React.Component {
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
             style={{position:'static'}}
              theme="light"
              value={sensor.phSensor}
              max="14"
              steps="3"
              //format="°C"
              size="normal"
              height="200"
            />
          </>
        }
      </div>
    );
  }
}
export default GetPhData;

// import React from "react";
// import axios from "axios";
// import Thermometer from "react-thermometer-component";

// class GetPhData extends React.Component {
//   state = {
//     sensor: {},
//   };
//   getDetailUser() {
//     axios
//       //retrieving one sensor data
//       .get("https://pure-cliffs-73224.herokuapp.com/api/sensor/v2")
//       .then((response) => {
//         //displaying results on the UI
//         this.setState({
//           sensor: response.data.sensor,
//         });
//       })
//       .catch((err) => {
//         alert("Error get sensor detail: " + err);
//       });
//   }

//   render() {
//     const { sensor } = this.state;

//     return (
//       <div>
//         <div>
//           {
//             <>
//             <span>id:{sensor.id}</span>
//               <Thermometer
//                 theme="light"
//                 value={sensor.phSensor}
//                 max="14"
//                 steps="3"
//                 //   format="°C"
//                 size="normal"
//                 height="200"
//               />
//             </>
//           }
//         </div>
//       </div>
//     );
//   }
// }
// export default GetPhData;
