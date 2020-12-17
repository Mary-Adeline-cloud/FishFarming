// import * as React from 'react';
// import * as ReactDOM from 'react-dom';

// import {
//     LinearGauge
// } from '@progress/kendo-react-gauges';

// class LinearGaugeComponent extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             value: 30
//         };
//     }

//     componentDidMount() {
//         setInterval(
//             () => {
//                 this.setState({
//                     value: Math.ceil(Math.random() * 50)
//                 });
//             },
//             1000);
//     }

//     render() {
//         const linearOptions = {
//             pointer: {
//                 value: this.state.value
//             }
//         };

//         return (
//             <LinearGauge {...linearOptions} />
//         );
//     }
// }


// ReactDOM.render(<LinearGaugeComponent />, document.getElementById("root"));

// export default LinearGaugeComponent;