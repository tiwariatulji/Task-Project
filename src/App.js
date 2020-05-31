import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Home"
import Login from "./Login"
import Profile from "./Profile"

class App extends Component {

  render() {

    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/home"} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login 
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  Profile
                </Link>
              </li>
            </div>
          </nav>
          <div className="container mt-3">
            <Switch>
              <Route exact path= "/home" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path ="/Profile" component={Profile}/>
            </Switch>
          </div>
        </div>
        <button>Logout</button>
      </Router>
      
    );
  }
}

export default App;
