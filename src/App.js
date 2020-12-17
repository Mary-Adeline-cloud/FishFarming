import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from "./pages/User";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Help from "./pages/Help";
import Search from "./pages/Search";
import ResetPassword from "./pages/ResetPassword";
import map from "./pages/map";
import DataView from "./pages/DataView";
import gauge from "./pages/gauge";
import post from "./pages/post"
import LineChart from "./pages/LineChart";
import postRequest from "./pages/postRequest";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={User} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/signup" component={Signup} />
          <Route path="/help" component={Help} />
          <Route path="/Search" component={Search} />
          <Route path="/ResetPassword" component={ResetPassword} />
          <Route path="/map" component={map} />
          <Route path="/DataView" component={DataView} />
          <Route path="/gauge" component={gauge} />
          <Route path="/post" component={post} />
          <Route path="/LineChart" component={LineChart} />
          <Route path="/postRequest" component={postRequest} />
          <Route path="/AboutUs" component={AboutUs} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
