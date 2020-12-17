import React from "react";
import "./login.css";
import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import GaugeChart from "react-gauge-chart";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import LineChart from "./LineChart";


function Dashboard() {
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
                gauge here

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

               {/* {<LinearGaugecomponent/>} */}
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

                <GaugeChart
                  id="gauge-chart6"
                  animate={true}
                  nrOfLevels={15}
                  percent={0.1}
                  needleColor="#345243"
                />
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
            <div style={{ fontSize: "17px" }}>
              Current Date:
              <Datetime />
            </div>
            <div >
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
          <div class="col-8" style={{ position: "static" }}>
            <div className="charts">{<LineChart />}</div>
          </div>
          <div class="col-4">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                ></input>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Write your issue</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="message"
                ></input>
              </div>

              <button
                type="submit"
                class="btn btn-primary"
                style={{ background: "blue" }}
              >
                Send Help Stipend
              </button>
            </form>
          </div>
        </div>

        <div class="row" style={{ backgroundColor: "lightgray" }}>
          <div class="col-sm" style={{ position: "static" }}>
            <ul>
              <dt>
                {" "}
                <a href="/Services" style={{ color: "#060b26" }}>
                  Device status!
                </a>
              </dt>
              <dt>
                <a href="/Signup" style={{ color: "#060b26" }}>
                  New Account
                </a>
              </dt>
              <dt>
                <a href="/Services" style={{ color: "#060b26" }}>
                  reports
                </a>
              </dt>
              <dt>
                <a href="/Dataview" style={{ color: "#060b26" }}>
                  Monthly data
                </a>
              </dt>
            </ul>
          </div>
          <div class="col-sm">
            <ul>
              <dt style={{ color: "#060b26" }}>
                <FaIcons.FaFish class="logo" style={{ color: "black" }} />
              </dt>

              <dt style={{ color: "#060b26" }}>
                <p>Smart fish farming</p>
              </dt>
              <dt style={{ color: "#060b26" }}>
                <p style={{ color: "red", textAlign: "start" }}>"IoT"</p>
              </dt>
              <dt style={{ color: "#060b26" }}>@copyright</dt>
            </ul>
          </div>
          <div class="col-sm">
            <ul>
              <dt style={{ color: "#060b26" }}>
                <Link to="#" className="menu-bars">
                  <AiIcons.AiFillPhone />
                </Link>
                +250788443388
              </dt>
              <dt style={{ color: "#060b26" }}>
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineMail />
                </Link>
                info@fishfarming.com
              </dt>
              <dt style={{ color: "#060b26" }}>
                <Link to="#" className="menu-bars">
                  <IoIcons.IoLogoFacebook />
                </Link>
                Smart Fish Farming 
              </dt>
              <dt style={{ color: "#060b26" }}>
                <Link to="#" className="menu-bars">
                  <IoIcons.IoLogoInstagram />
                </Link>
                SmartFishFarming
              </dt>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
