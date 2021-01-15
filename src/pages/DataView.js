import * as React from 'react';
import axios from "axios";
import { DataGrid } from '@material-ui/data-grid';
//import LoadingBarProgress from './LoadingBar';

class DataView extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      tableContent: [],
    };
  }

  componentDidMount() {
    // Simple GET request using axios
    axios
      .get("https://pure-cliffs-73224.herokuapp.com/api/descend/v2/")
      .then((response) => {
        console.log(response.data.data);
        this.setState({ tableContent: response.data.data.sensorByOrder });
      });
  }

  render() {
    const { tableContent } = this.state;

    return (
      <>
       
        {tableContent.length > 0 ? (
          <>
            <div className="container">

              <table style={{ width: "100%" }}>
              <tr>
                                    <th>id</th>
                                    <th>Name</th>
                                    <th>PH sensor</th>
                                    <th>Dissolved O</th>
                                    <th>Temperature</th>
                                </tr>

                {tableContent.map((row) => (
                  
                  <tr>
                    <td>{row.id}</td>
                    <td>{row.Name}</td>
                    <td>{row.phSensor}</td>
                    <td>{row.oxygenSensor}</td>
                    <td>{row.temperatureSensor}</td>
                  </tr>
                ))}
              </table>
            </div>
               
          {/* <DataGrid  pageSize={5} checkboxSelection /> */}
        

        
          </>
          
        ) : (
            <>
              {/* <LoadingBarProgress/> */}
            </>
          )}
      </>
    );
  }
}

export default DataView;
