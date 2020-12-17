import React, { Component } from "react";
import axios from "axios";
import "./login.css";
import { Link } from "react-router-dom";


class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  onemailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  onpasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post("https://pure-cliffs-73224.herokuapp.com/api/login/v2/", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      password: "",
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }
  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }
  componentDidMount() {
    if (this.props.password) {
      this.setState({ password: this.props.password });
    }
  }

  // onSubmitHandler = (e) => {
  //   e.preventDefault();
  //   this.props.history.push("/Dashboard");
  // };

  render() {
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
            <h5 style={{ textAlign: "center" }}>Login</h5>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
        <p style={{color:'#060b26', textAlign:'center'}}>SMART FISH FARMING</p>
          <div class="row">
            
            <div class="col-25">
              <label for="fname">Email:</label>
            </div>
            <div class="col-75">
              <input
              value={this.state.email}
              onChange={this.onemailChange}
                type="email"
                id="fname"
                value={this.state.email}
                onChange={this.onemailChange}
                placeholder="Your email..."
                required
                
              />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="lname">Password:</label>
            </div>
            <div class="col-75">
              <input
                type="password"
                id="lname"
                type={this.state.hidden ? "password" : "text"}
                value={this.state.password}
                onChange={this.onpasswordChange}
                placeholder="Your password."
                required
              />
            </div>
          </div>
          <div class="row">
    
            <input type="submit" value="Login"  onClick={this.onSubmitHandler} />
          </div>
          <p><a href="" style={{alignContent:"end", textDecoration:"none", color:"#060b26"}}> Forgot Password?</a></p>
        </form>
        <p><a href="/Signup" style={{textAlign:'start', textDecoration:"none", color:"#060b26"}}>Create Account!</a></p>
      </div>
    );
  }
}

export default Login;


