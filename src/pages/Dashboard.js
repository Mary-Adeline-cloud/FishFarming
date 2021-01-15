import React from "react";
import "./styles.css"
import * as IoIcons from "react-icons/io";
//import * as BsIcons from "react-icons/bs";
import GetTemperatureData from "../Charts_Gauges/GetTemperatureData";
import GetPhData from "../Charts_Gauges/GetPhData";
import GetOxygenData from "../Charts_Gauges/GetOxygenData";
import GetDate from "../Charts_Gauges/GetDate";
import LineChart from "../Charts_Gauges/LineChart";
import Footer from "./Footer"
import PostSampleData from "../Charts_Gauges/PostSampleData";


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
        <div className="col-sm-4" style={{ position: 'static' }}>
          <div class="card" style={{ width: '20rem', position: 'static' }}>
            <IoIcons.IoMdThermometer />
            <div class="card-body"  >
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
        </div>

        <div className="col-sm-4">
          <div class="card" style={{ width: '20rem' }}>
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
        </div>

        <div className="col-sm-4">
          <div class="card" style={{ width: '20rem' }} >
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
        </div>
      </div>
      <div className="row">
      <div class="col-12"
          style={{
            backgroundColor: "white",
            position: "static",
            maxWidth:'100%'
          }}
        >
          <h5 style={{ textAlign: "center" }}>View Data</h5>

        <PostSampleData />
        </div> 
      </div>
      <div className="row">
        <div className="col-12">
        <LineChart />
        </div>
        
      </div>

      <Footer />
    </div>
  );
}

export default Dashboard;
