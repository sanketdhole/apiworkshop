import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Recruiter from "./Components/Pages/Recruiter";
import User from "./Components/Pages/User";
import JobCreator from "./Components/Pages/JobCreator";
import JobSearch from "./Components/Pages/JobSearch";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/recruiter-login" component={Recruiter}></Route>
          <Route path="/user-login" component={User}></Route>
          <Route path="/create-job" exact component={JobCreator}></Route>
          <Route path="/search-jobs" component={JobSearch}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
