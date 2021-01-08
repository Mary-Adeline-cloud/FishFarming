import React, { useState } from "react";
import * as faIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
import auth from "../pages/auth";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";

function Navbar(props) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "white" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <faIcons.FaBars onClick={showSidebar} />
          </Link>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
          <div className="profile">
            <span>
              <img src="avatar.jpg" class="rounded-circle" />
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                style={{ background: "#060b26" }}
                id="dropdownMenu2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              ></button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <button
                  className="dropdown-item"
                  type="button"
                  // onClick={() => {
                  //   auth.logout(() => {
                  //     console.log(props.history);
                  //     props.history.push("./");
                  //   });
                  // }}
                >
                  {" "}
                  Logout
                </button>
                <button className="dropdown-item" type="button">
                  profile
                </button>
              </div>
            </span>
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
