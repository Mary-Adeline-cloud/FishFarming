import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { Link } from "react-router-dom";
import Footer from "./Footer"

function Help() {
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
          <h5 style={{ textAlign: "center" }}>Help box</h5>
        </div>
      </div>
      <div class="row">
        <div
          class="col-sm-8"
          style={{ backgroundColor: "white", position: "static" }}
        >
          <div class="card " style={{ position: "static" }}>
            <div class="card-body">
              <h5 class="card-title">We are here to support you</h5>
              <p class="card-text">
                Send a stipend to get help right away. The desk team is ready to
                assist you anytime you face any challenge while using our
                system. Send a stipend in a form aside or contact us on
                <br />
                <strong>
                  <Link to="#" className="menu-bars">
                    <AiIcons.AiFillPhone />
                  </Link>
                  +250788443388
                  <br />
                  <Link to="#" className="menu-bars">
                    <AiIcons.AiOutlineMail />
                  </Link>
                  info@rarico.com
                </strong>
              </p>
              <a
                href="/Dashboard"
                class="btn btn-primary"
                style={{
                  backgroundColor: "blue",
                  width: "200px",
                  marginLeft: "15px",
                }}
              >
                Go back
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1" style={{ color: "black" }}>
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              ></input>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1" style={{ color: "black" }}>
                Write your issue
              </label>
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
              style={{ backgroundColor: "blue" }}
            >
              Send Help Stipend
            </button>
          </form>
        </div>
      </div>
     <Footer/>
    </div>
  );
}

export default Help;
