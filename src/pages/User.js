import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    }
    // else {
    //   button = <LoginButton onClick={this.handleLoginClick} />;
    // }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function UserGreeting(props) {
  return (
    <>
      {/* <Router>
        <Switch>
          <Route path="/" component={Login} exact />
        </Switch>
      </Router> */}
    </>
  );
}

function GuestGreeting(props) {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Login} exact />
        </Switch>
      </Router>
      
      {/* <Router>
        <Switch>
          <Route path="/" component={Signup} exact />
        </Switch>
      </Router> */}
    </>
  );
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  }
}

// function LoginButton(props) {
//   return (
//     <button
//       onClick={props.onClick}
//       type="button"
//       class="btn btn-dark"
//       style={{ marginLeft: "50%" }}
//     >
//       Login
//     </button>
//   );
// }

function LogoutButton(props) {
  return (
    <button
      type="button"
      class="btn btn-dark"
      onClick={props.onClick}
      style={{ marginLeft: "200px" }}
    >
      Logout
    </button>
  );
}

ReactDOM.render(<User />, document.getElementById("root"));

export default User;
