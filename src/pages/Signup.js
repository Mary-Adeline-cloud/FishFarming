import React, { Component } from "react";
import axios from "axios";

class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    location: "",
  };

  onfirstnameChange = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };

  onlastnameChange = (e) => {
    this.setState({
      lastName: e.target.value,
    });
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
  onlocationChange = (e) => {
    this.setState({
      location: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      location: this.state.location,
      
    };
    axios
      .post("https://pure-cliffs-73224.herokuapp.com/api/user/v2/", data)
      .then((res) => console.log(res))
      .catch((err) => {
        alert("Error in creating an account: " + err);
      });
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
            <h5 style={{ textAlign: "center" }}>Register</h5>
          </div>
        </div>
        <form
          className="post"
          onSubmit={this.handleSubmit}
          style={{ marginLeft: "22px" }}
        >
          <p style={{ color: "#060b26", textAlign: "center" }}>
            SMART FISH FARMING
          </p>
          <input
            placeholder="first-name"
            type="text"
            value={this.state.firstName}
            onChange={this.onfirstnameChange}
            required
          />
          <input
            type="text"
            placeholder="last-name"
            value={this.state.lastName}
            onChange={this.onlastnameChange}
            required
          />
          <input
            type="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.onemailChange}
            required
          />

          <input
            placeholder="password"
            type="password"
            type={this.state.hidden ? "password" : "text"}
            value={this.state.password}
            onChange={this.onpasswordChange}
            required
          />
          <input type="checkbox" onClick={this.toggleShow} />
          <p>Show Password</p>

          <input
            type="text"
            placeholder="location"
            value={this.state.location}
            onChange={this.onlocationChange}
            required
          />
          <div class="row">
          <input
            type="submit"
            value="Register"
            onClick={this.onSubmitHandler}
          />
          </div>

          
        </form>
      </div>
    );
  }
}

export default Signup;
