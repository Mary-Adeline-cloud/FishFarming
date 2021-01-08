import React from "react";
import "./styles.css"
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import GetTemperatureData from "../Charts_Gauges/GetTemperatureData";
import GetPhData from "../Charts_Gauges/GetPhData";
import GetOxygenData from "../Charts_Gauges/GetOxygenData";
import GetDate from "../Charts_Gauges/GetDate";
import GetBatteryData from "../Charts_Gauges/GetBatteryData";
import SampleData from "../Charts_Gauges/SampleData";
import LineChart from "../Charts_Gauges/LineChart";

import Footer from "./Footer"


function Dashboard() {
  return (
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
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4" style={{ position: "static" }}>
          <div class="btn btn-outline-info" style={{ borderRadius: "15px" }}>
            <span>Average °C:</span>
          </div>
        </div>

        <div class="col-sm-4" style={{ position: "static" }}>
          <div class="btn btn-outline-info" style={{ borderRadius: "15px" }}>
            <span>Average ph level:</span>
          </div>
        </div>

        <div class="col-sm-4" style={{ position: "static" }}>
          <div class="btn btn-outline-info" style={{ borderRadius: "15px" }}>
            <span>Average Dissolved O2:</span>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="card" style={{ position: "static", maxWidth:"20rem" }}>
          <IoIcons.IoMdThermometer />
          <div class="card-body">
            <p class="card-title">
              <small>PH </small>
            </p>
            <div class="card-text">
              
              <GetPhData />
            </div>
          </div>
          <div class="card-footer">
            <small class="text-muted">
              <GetDate />
            </small>
          </div>
        </div>
        <div class="card">
          <IoIcons.IoMdThermometer />
          <div class="card-body">
            <p class="card-title">
              <small> °C</small>
            </p>
            <div class="card-text">
              <GetTemperatureData />
            </div>
          </div>
          <div class="card-footer">
            <small class="text-muted">
              <GetDate />
            </small>
          </div>
        </div>
        <div class="card">
          <IoIcons.IoMdThermometer />
          <div class="card-body">
            <p class="card-title">
              <small>DISSOLVED O2</small>
            </p>
            <div class="card-text">
              <GetOxygenData />
            </div>
          </div>
          <div class="card-footer">
            <small class="text-muted">
              <GetDate />
            </small>
          </div>
        </div>

        <div class="card">
          <BsIcons.BsBatteryCharging />
          <div class="card-body" style={{ backgroundColor: "#060b26" }}>
            <p class="card-title">
              <small style={{ color: "white" }}>BATTERY LIFE</small>
            </p>
            <div class="card-text">
              <GetBatteryData />
            </div>
          </div>
          <div class="card-footer">
            <small class="text-muted">
              <GetDate />
            </small>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <SampleData />
        </div>
        <div class="col-6">
          <LineChart />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
