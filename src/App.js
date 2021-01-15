import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Users/Login";
import Dashboard from "./pages/Dashboard";
import Signup from "./Users/Signup";
import Help from "./pages/Help";
import Header from "./components/Header";
import DataView from "./pages/DataView";
import LineChart from "./Charts_Gauges/LineChart";
import BarChart from "./Charts_Gauges/BarChart";
import GetTemperatureData from "./Charts_Gauges/GetTemperatureData";
import GetPhData from "./Charts_Gauges/GetPhData";
import GetOxygenData from "./Charts_Gauges/GetOxygenData";
import AboutUs from "./pages/AboutUs";
import Footer from "./pages/Footer";
import { ProtectedRoute } from "./pages/ProtectedRoute";
import Details from "./pages/Details";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/signup" component={Signup} />
          <ProtectedRoute path="/help" component={Help} />
          <Route path="/DataView" component={DataView} />
          <Route path="/LineChart" component={LineChart} />
          <Route path="/BarChart" component={BarChart} />
          <Route path="/GetTemperatureData" component={GetTemperatureData} />
          <Route path="/GetPhData" component={GetPhData} />
          <Route path="/GetOxygenData" component={GetOxygenData} />
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/Footer" component={Footer} />
          <Route path="/Header" component={Header} />
          <Route path="/Details"  component={Details} />
          
  
          <Route path="***">
            <h1>404 NOT FOUND</h1>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
