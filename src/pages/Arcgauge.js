import * as React from 'react';
import axios from "axios";
import * as ReactDOM from 'react-dom';
import {
    ArcGauge
} from '@progress/kendo-react-gauges';

class Arcgauge extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 14
        };
    }
    componentDidMount() {
        setInterval(
            () => {
                this.setState({
                    value: Math.ceil(Math.random() )
                });
            },
            1000);
    }


    render() {
        const colors = [
            { from: 0, to: 7, color: 'red' },
            { from: 8, to: 14, color: 'lime' }
        ];

        const arcOptions = {
            value: this.state.value,
            colors
        };

        const arcCenterRenderer = (value, color) => {
            return (<h3 style={{ color: color }}>{value}</h3>);
        };

        return (
            <ArcGauge {...arcOptions} arcCenterRender={arcCenterRenderer} />
        );
    }
}

// ReactDOM.render(
//     <Arcgauge />,
//     document.querySelector('my-app')
// );
export default Arcgauge;