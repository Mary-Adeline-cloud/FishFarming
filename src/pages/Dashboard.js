import React from "react";
import "./styles.css";
import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa";
import "react-datetime/css/react-datetime.css";
import LineChart from "../Charts_Gauges/LineChart";
import BarChart from "../Charts_Gauges/BarChart";
import Footer from "./Footer";
import GetTemperatureData from "../Charts_Gauges/GetTemperatureData";
import GetPhData from "../Charts_Gauges/GetPhData";
import GetOxygenData from "../Charts_Gauges/GetOxygenData";
import auth from "./auth";

function Dashboard(props) {
  return (
    <div className="dashboard">
      <div class="container">
        <div class="row">
         
          <div
            class="col-12"
            style={{
              backgroundColor: "white",
              borderRadius: "15px",
              position: "static",
            }}
          >
            <h5 style={{ textAlign: "center" }}>Dashboard</h5>
            <dt
            style={{textAlign:"end", color:'violet'}}
            onClick={() => {
              auth.logout(() => {
                props.history.push("./");
              });
            }}
          >
            logout
          </dt>
          </div>
        </div>
        <p style={{ color: "white" }}></p>

        <div class="row" style={{ position: "static" }}>
      
          <div class="col-8" style={{ position: "static" }}>
            <div class="card" style={{ width: "15rem", position: "static" }}>
              <div class="card-body">
                <h5 class="card-title">PH sensor</h5>
                <IoIcons.IoMdThermometer />
                <p>
                  pH is a scale used to specify the acidity or basicity of an
                  aqueous solution.{" "}
                </p>
                <GetPhData />
              </div>
            </div>

            <div class="card" style={{ width: "15rem", position: "static" }}>
              <div class="card-body">
                <h5 class="card-title">Temperature</h5>
                <IoIcons.IoMdThermometer />
                <p>
                  Temperature is a physical quantity that expresses hot and cold
                  in a substance.
                </p>
                
                <GetTemperatureData />
              </div>
            </div>

            <div class="card" style={{ width: "15rem", position: "static" }}>
              <div class="card-body">
                <h5 class="card-title">Oxygen level</h5>
                <IoIcons.IoMdThermometer />
                <p>
                  Oxygen is the essential thing for existance in this World.
                  Fishes need oxygen for respiration.
                </p>

                <GetOxygenData />
              </div>
            </div>
          </div>
          <div class="col-4" style={{ backgroundColor: "#ccccff" }}>
            <h5>
              <FaIcons.FaFish />
            </h5>
            <h6>Internet of things(IoT)based device</h6>
            <p>
              Check the status of your device. View the oxygen, temperature and
              PH to sustain aqua life
            </p>
            <div style={{ fontSize: "17px" }}>Current Date:</div>
            <div>
              <label for="country">pond number</label>
            </div>
            <div>
              <select id="country" name="country">
                <option value="australia">1</option>
                <option value="canada">2</option>
                <option value="usa">3</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row">
          <p style={{ color: "white" }}>.</p>
        </div>
        <div class="row">
          <div id="accordion">
            <div class="card" style={{ width: "36rem", position: "static" }}>
              <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Data in Linechart
                  </button>
                </h5>
              </div>

              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div class="card-body">
                  <LineChart />
                </div>
              </div>
            </div>
            <div class="card" style={{ width: "35rem" }}>
              <div class="card-header" id="headingTwo">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Data in BarChart
                  </button>
                </h5>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordion"
              >
                <div class="card-body">
                  <BarChart />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
