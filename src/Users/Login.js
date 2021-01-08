import React from "react";
import axios from "axios";
class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: { Email: "", Password: "" },
    };
  }

  onChangeField = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState((prevState) => {
      prevState.fields[name] = value;
      return {
        fields: prevState.fields,
      };
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (event) {
      const data = {
        fields: this.state.fields,
      };
      axios
        .post("https://pure-cliffs-73224.herokuapp.com/api/login/v2/", data)
        .then((res) => {
          console.log(res.data);
          this.props.history.push('/Dashboard');
          this.setState({
              //  {
           //   auth.login(() => {
           //     this.props.history.push("./Dashboard");
           //   });
          // }}
            fields: "",
          });
          alert("Login successful");
        })

        .catch((err) => {
          this.props.history.push('/');
          this.setState({
            fields: "",
          });
          alert(
            `invalid Email or Password! Try again. The error type is : ${err}`
          );
        });
    }
  };


  render() {
    const { Email, Password } = this.state.fields;
    return (
      <>
        <div className="container">
          <div class="row">
            <div
              class="col-12"
              style={{
                backgroundColor: "white",
                borderRadius: "15px",
                position: "static",
              }}
            >
              <p style={{ textAlign: "center" }}>LOGIN HERE</p>
            </div>
          </div>

          <form onSubmit={this.handleSubmit}>
            <div className="form-row">
              <div className="col-25">
                <label htmlFor="Email">Email:</label>
              </div>
              <div className="col-75">
                <input
                  type="email"
                  class="form-control mb-2"
                  id="Email"
                  name="Email"
                  value={this.state.Email}
                  onChange={this.onChangeField}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-25">
                <label htmlFor="Email">Password:</label>
              </div>

              <div className="col-75">
                <input
                  type="password"
                  class="form-control mb-2"
                  id="Password"
                  name="Password"
                  value={this.state.Password}
                  onChange={this.onChangeField}
                />
              </div>
            </div>
            <div className="form-row">
              <input type="submit" value="Login" />
            </div>
            <div class="bottom-container">
           <div class="row">
             <div class="col">
               <a href="/Signup" class="btn btn-outline-primary">
                 Sign up
               </a>
             </div>
             <div class="col">
               <a href="#" class="btn btn-outline-primary">
                Forgot password?
               </a>
            </div>
           </div>
           </div>
          </form>
        </div>
      </>
    );
  }
}
export default Login;

// import React, { Component } from "react";
// import axios from "axios";
// import { Redirect } from "react-router-dom";
// import auth from "../pages/auth";

// class Login extends Component {
//   state = {
//     email: "",
//     password: "",
//   };

//   onemailChange = (e) => {
//     this.setState({
//       email: e.target.value,
//     });
//   };
//   onpasswordChange = (e) => {
//     this.setState({
//       password: e.target.value,
//     });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     if (this.state.email && this.state.password) {
//       const data = {
//         email: this.state.email,
//         password: this.state.password,
//       };
//       axios
//         .post("https://pure-cliffs-73224.herokuapp.com/api/login/v2/", data)
//         .then((res) => {
//             this.setState({
//               email: "",
//               password: "",
//             });
//           })

//       alert("Login successful").catch((err) => {
//         this.setState({
//           email: "",
//           password: "",
//         });
//         alert(
//           `invalid Email or Password! Try again. The error type is : ${err}`
//         );
//       });
//     }
//   };
//   constructor(props) {
//     super(props);
//     this.state = {
//       hidden: true,
//       password: "",
//     };
//     this.handlePasswordChange = this.handlePasswordChange.bind(this);
//     this.toggleShow = this.toggleShow.bind(this);
//   }
//   handlePasswordChange(e) {
//     this.setState({ password: e.target.value });
//   }
//   toggleShow() {
//     this.setState({ hidden: !this.state.hidden });
//   }
//   componentDidMount() {
//     if (this.props.password) {
//       this.setState({ password: this.props.password });
//     }
//   }

//   render() {
//     return (
//       <div class="container">
//         <div class="row">
//           <div
//             class="col-12"
//             style={{
//               backgroundColor: "white",
//               borderRadius: "15px",
//               position: "static",
//             }}
//           >
//             <p style={{ textAlign: "center" }}>LOGIN HERE</p>
//           </div>
//         </div>
//         <form
//           onSubmit={this.handleSubmit}

//           // onSubmit={() => {
//           //   auth.login(() => {
//           //     this.props.history.push("./Dashboard");
//           //   });
//           // }}

//         >
//           <div class="form-row">
//             <div class="col-25">
//               <label
//                 style={{ position: "static" }}
//                 className="col-sm-2 col-form-label col-form-label-sm"
//               >
//                 Email:
//               </label>
//             </div>
//             <div className="col-75">
//               <input
//                 class="form-control mb-2"
//                 value={this.state.email}
//                 onChange={this.onemailChange}
//                 placeholder="Your email..."
//                 required
//               />
//             </div>
//           </div>
//           <div class="form-row">
//             <div class="col-25">
//               <label
//                 style={{ position: "static" }}
//                 className="col-sm-2 col-form-label col-form-label-sm"
//               >
//                 Password:
//               </label>
//             </div>
//             <div class="col-75">
//               <input
//                 id="lname"
//                 class="form-control mb-2"
//                 type={this.state.hidden ? "password" : "text"}
//                 value={this.state.password}
//                 onChange={this.onpasswordChange}
//                 placeholder="Your password."
//                 required
//               />
//               <input type="checkbox" onClick={this.toggleShow} />
//               <p>Show Password</p>
//             </div>
//           </div>
//           <div class="form-row">
//             <input type="submit" value="Login" />
//           </div>
//         </form>
//         <div class="bottom-container">
//           <div class="row">
//             <div class="col">
//               <a href="/Signup" class="btn btn-outline-primary">
//                 Sign up
//               </a>
//             </div>
//             <div class="col">
//               <a href="#" class="btn btn-outline-primary">
//                 Forgot password?
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Login;
