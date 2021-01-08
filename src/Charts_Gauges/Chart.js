import React from "react";
import { Line } from "react-chartjs-2";

const Chart = ({ data }) => {
  
  console.log(data);

  return <Line data={data} options={{ responsive: true, height: '600px', width: "600px" }} />;
};

export default Chart;




// import React from "react";
// import axios from "axios";
// import Thermometer from "react-thermometer-component";

// class GetTemperatureData extends React.Component {
//   state = {
//     sensor: {},
//     asyncData: {},
//   };
//   getDetailUser() {
//     axios
//       .get("https://pure-cliffs-73224.herokuapp.com/api/sensor/v2/529")
//       .then((response) => {
//         console.log(response.data.data.foundSensor);
//         this.setState({
//           sensor: response.data.data,
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
//         <input
//           type="radio"
//           value="data"
//           onClick={this.getDetailUser.bind(this, 1)}
//         />
//         <label for="data"> °C details</label>

//         <div>
//           {sensor &&
//             Object.keys(sensor).map((item) => (
//               <>
//                 <Thermometer
//                   theme="light"
//                   value={sensor[item].temperatureSensor}
//                   max="100"
//                   steps="3"
//                   format="°C"
//                   size="normal"
//                   height="200"
//                 />
//                  <div class="card">
//                   <p>value is: {sensor[item].temperatureSensor}</p>
//                   <p>Date: {sensor[item].createdAt} </p>
//                 </div>
//               </>
//             ))}
//         </div>
//       </div>
//     );
//   }
// }
// export default GetTemperatureData;
