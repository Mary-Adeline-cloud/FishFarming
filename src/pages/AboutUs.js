import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { Link } from "react-router-dom";


export default class AboutUs extends React.Component {
  state = {};

  render() {
    return (
        <>
      
        <div class="jumbotron text-center" style={{ marginBottom: "0", background:"	 #ccccff", position:'static' }}>
        <FaIcons.FaFish class="logo" style={{ color: "black" }} />
          <h1>SMART FISH Farming</h1>
          <p>HOME WELLNESS</p>
        </div>

        <div class="container">
          <div class="row" style={{position:"static"}}>
            <div class="col-sm-4" style={{position:"static"}}>
              <h2>About Us</h2>
              <h5>What we do!:</h5>
              <div class="fakeimg"><img src="fish.png" style={{width:"300px", height:"200px"}}/></div>
              <p>
                Some text about me in culpa qui officia deserunt mollit anim..
              </p>
              <h3>Some Links</h3>
              <p>Lorem ipsum dolor sit ame.</p>
              <ul class="nav nav-pills nav-stacked">
                <li class="active">
                  <a href="#">Link 1</a>
                </li>
                
                <li>
                  <a href="#">Link 2</a>
                </li>
                <li>
                  <a href="#">Link 3</a>
                </li>
              </ul>
              <hr class="hidden-sm hidden-md hidden-lg" />
            </div>
            <div class="col-sm-8">
              <h2>TITLE HEADING</h2>
              <h5>Title description, Dec 7, 2017</h5>
              <div class="fakeimg">Fake Image</div>
              <p>Some text..</p>
              <p>
                Sunt in culpa qui officia deserunt mollit anim id est laborum
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco.
              </p>
              <br />
              <h2>TITLE HEADING</h2>
              <h5>Title description, Sep 2, 2017</h5>
              <div class="fakeimg">Fake Image</div>
              <p>Some text..</p>
              <p>
                Sunt in culpa qui officia deserunt mollit anim id est laborum
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco.
              </p>
            </div>
          </div>
        </div>
        <div class="container">
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
      </>
    );
  }
}
