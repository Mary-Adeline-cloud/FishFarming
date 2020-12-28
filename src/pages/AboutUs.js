import React from "react";
import * as FaIcons from "react-icons/fa";

import Footer from "./Footer";

export default class AboutUs extends React.Component {
  state = {};

  render() {
    return (
      <>
        <div
          class="jumbotron text-center"
          style={{
            marginBottom: "0",
            background: "	 #ccccff",
            position: "static",
          }}
        >
          <FaIcons.FaFish class="logo" style={{ color: "black" }} />
          <h1>Smart Fish Farming</h1>
          <p>AQUA WELLNESS AND FRESHNESS</p>
        </div>

        <div class="container">
          <div class="row" style={{ position: "static" }}>
            <div
              class="col-sm-4"
              style={{ position: "static", background: "white" }}
            >
              <h2 style={{ color: "darkblue" }}>About Us</h2>
              <h5>What we do!:</h5>
              <div class="fakeimg">
                <img class="img-thumbnail" src="fish.png" />
              </div>
              <p style={{ alignContent: "center" }}>
                The areas of Rwanda best suited for cultivation of fish are the
                flat valley bottoms with very gentle slopes, which lend
                themselves to easy construction of ponds. Most existing ponds
                are in such areas. Water supply would not be a constraint.
                Records of air temperatures suggest that in some places the
                temperature of the water may drop below 10° to 12°C for a
                sufficiently long time to cause mortalities of fish of such
                species as Tilapia rendalli, T. mossambica and T. nilotica,
                although the Mission is not aware of any actual incidents of
                this kind. When water temperatures are below 17° to 18°C in
                June, July and August, tilapia will not spawn and growth rates
                will be poor. It will, therefore, have to be accepted that
                fingerlings will not be available for three months in the year
                and the main growing season will be from September to the end of
                May.
              </p>
              <h5>Published News</h5>

              <ul class="nav nav-pills nav-stacked">
                <li class="active">
                  <a href="/DataView">DataView</a>
                </li>
              </ul>
              <hr class="hidden-sm hidden-md hidden-lg" />
            </div>
            <div class="col-sm-8">
              <h2 style={{ color: "darkblue" }}>Let it shine!</h2>
              <h5>We make the impossible possible.Through our mission.</h5>
              <img src="cookedfish.jpg" class="img-fluid" />
              <p>What we aim!</p>
              <p>
                We aim for the efficiency in fish production in Rwanda. Our
                vision is to boost fish products in Rwanda in hands with the
                focus of presenting poverty and children malnutrition.
              </p>
              <br />
              <h2 style={{ color: "darkblue" }}> IoT based devices</h2>
              <h5>No more waiting, you can recieve data now!</h5>
              <img src="sensor.jpg" class="img-fluid" />
              <p>
                IoT based device that can measure water quality and aqua life!
              </p>
              <p>
                The use of temperature sensor, oxygen meter and a ph meter, a
                farmer can detect water quality and take some actions after.
              </p>
            </div>
          </div>
        </div>
        <div class="container">
          <Footer />
        </div>
      </>
    );
  }
}
