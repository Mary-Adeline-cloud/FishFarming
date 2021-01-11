import React from "react";
import axios from "axios";
import  DataTable from "./TableData";

class DataView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tableContent: [],

      searchValue: "",
      options: {
        dom: "ade",
      },
    };
    this.dataTableRef = React.createRef();
  }

  onchangeSearch = (e) => {
    const { value } = e.target;
    const searchValue = value;
    this.setState({ searchValue });
    this.dataTableRef.current.search(searchValue);
  };

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
    const { options, searchValue } = this.state;
    return (
      <>
        {tableContent.length > 0 ? (
          <>
            <div className="container">
              <input
                value={searchValue}
                onChange={this.onchangeSearch}
                autoComplete={"off"}
                type="text"
                placeholder="search ..."
              />
              <DataTable
                ref={this.dataTableRef}
                tableContent={tableContent}
                options={options}
              />
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
          </>
        ) : (
          <>
          <LoadingBar/>
          </>
        )}
      </>
    );
  }
}

export default DataView;
