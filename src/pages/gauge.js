// import React from "react";
// import axios from "axios";

// class gauge extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       totalReactPackages:[],
//     };
//   }

//   componentDidMount() {
  
//     axios
//       .get("https://pure-cliffs-73224.herokuapp.com/api/sensor/v2/1")
//       .then((response) =>
//         this.setState({ totalReactPackages: response.data})
//       );
//   }

//   render() {
    
//     return (
//       <div className="card text-center m-3">
//         <h5 className="card-header">Simple GET Request</h5>
//         <div className="card-body">
//           <ul>
//             {this.state.totalReactPackages.map((sensor) => (
//               <li>{sensor.id}</li>
//             ))}
            
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }

// export default gauge;

// // import React from "react";
// // import axios from "axios";
// // import "./login.css";
// // import RadialGauge from "react-canvas-gauges";

// // class gauge extends React.Component {
// //   constructor(props) {
// //     super(props);

// //     this.state = {
// //       tableContent: [],
// //     };
// //   }

// //   componentDidMount() {
// //     // Simple GET request using axios
// //     axios

// //       .get("https://pure-cliffs-73224.herokuapp.com/api/sensors/v2/")
// //       // .get("https://pure-cliffs-73224.herokuapp.com/api/sensor/v2/537/")
// //       // .post("https://pure-cliffs-73224.herokuapp.com/api/user/login/v2/")
// //       // .post("https://pure-cliffs-73224.herokuapp.com/api/login/v2/")
// //       // .get("https://pure-cliffs-73224.herokuapp.com/api/sensors/v2/")
// //       .then((response) =>
// //         this.setState({ tableContent: response.data.sensor })
// //       );
// //   }

// //   render() {
// //     const { tableContent } = this.state;
// //     return (
// //       <div class="container">
// //         <h5  style={{ textAlign: "center" }}>
// //           Sensor Data
// //         </h5>
// //         <div class="row" style={{ position: "static" }}>
// //           {this.state.tableContent.map((sensor) => (
// //             <>
// //               <div class="col-12" style={{ border: "1px", position: "static" }}>
// //                 <RadialGauge
// //                   units="°C"
// //                   title="Temperature"
// //                   value={sensor.id}
// //                   minValue={0}
// //                   maxValue={50}
// //                   majorTicks={[
// //                     "0",
// //                     "5",
// //                     "15",
// //                     "20",
// //                     "25",
// //                     "30",
// //                     "35",
// //                     "40",
// //                     "45",
// //                     "50",
// //                   ]}
// //                   minorTicks={2}
// //                 ></RadialGauge>
// //               </div>
// //             </>
// //           ))}
// //         </div>
// //       </div>
// //     );
// //   }
// // }

// // export default gauge;

// // import React from 'react';

// // import axios from 'axios';

// // export default class PersonList extends React.Component {
// //   state = {
// //     tableContent: []
// //   }

// //   componentDidMount() {
// //     axios
// //     .get("https://pure-cliffs-73224.herokuapp.com/api/sensor/v2/1")
// //     .then((response) =>
// //       this.setState({ tableContent: response.data})
// //     );
// //   }

// //   render() {
// //     const { tableContent } = this.state;
// //     return (
// //       <ul>
// //         { this.state.tableContent.map(sensor => <li>{sensor.id}</li>)}
// //       </ul>
// //     )
// //   }
// // }
