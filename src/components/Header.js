import React from "react";
import "./header.css";
import * as FaIcons from "react-icons/fa";

function Header(){
    return(
        <div className="container-fluid">
            <h5 className="header">SMART FISH FARMING <FaIcons.FaFish class="logo" /> </h5>  
            
        </div>
    )
}
export default Header;