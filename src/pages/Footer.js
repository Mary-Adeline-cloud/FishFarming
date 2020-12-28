import React from "react";
import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";

class Footer  extends React.Component{
    state = {  }
    render() { 
        return (  

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


        );
    }
}
 
export default Footer ;