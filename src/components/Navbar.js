import React, { useState } from "react";
import * as faIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff " }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <faIcons.FaBars onClick={showSidebar} />
          </Link>
          <div class="row">
            <div class="col-8">
              <p style={{ color: "white"}}>SMART FISH FARMING</p>
            </div>

            <div class="col-4">
              <FaIcons.FaFish class="logo" style={{ color: "white" }} />
            </div>
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "navbar-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <GiIcons.GiCancel />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
