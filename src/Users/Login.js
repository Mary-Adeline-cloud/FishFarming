import React, { Component } from "react";
import axios from "axios";
import {Redirect } from "react-router-dom";
import auth, {authenticate, isAuth} from "../pages/auth";


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

    if(this.state.email && this.state.password){
    const data = {
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post("https://pure-cliffs-73224.herokuapp.com/api/login/v2/", data)
      .then((res) => authenticate(res, () =>{
        this.setState({
          email: '',
          password:''
        })
      }))
       
    
      alert(
        "Login successful" 
      )
      
      .catch((err) => {
        this.setState({
          email:'',
          password:''
        })
        alert(
          `invalid Email or Password! Try again. The error type is : ${err}`
        );
      });
  }};
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
        <form  
        
        // onSubmit={this.handleSubmit}
        //once a user clicks on the button
        onSubmit={() => {
              auth.login(() => {
                this.props.history.push("./Dashboard");
              });
            }}
            
            >
          <p style={{ color: "#060b26", textAlign: "center" }}>
            SMART FISH FARMING
          </p>
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
                id="lname"
                type={this.state.hidden ? "password" : "text"}
                value={this.state.password}
                onChange={this.onpasswordChange}
                placeholder="Your password."
                required
              />
              <input type="checkbox" onClick={this.toggleShow} />
              <p>Show Password</p>
            </div>
          </div>
          <div class="row">
            <input type="submit" value="Login"  />
          </div>
          
        </form>
        
      </div>
    );
  }
}

export default Login;

