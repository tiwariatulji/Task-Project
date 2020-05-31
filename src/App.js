

import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import Home from "./Home"
import Login from "./Login"
import Profile from "./Profile"

class App extends Component {

  render() {

    return (
      <Router>
        <div>
          <Header />
          <div className="main-block">
            <Sidebar />
            <div className="content-box">
              <Switch>
                <Route exact path= "/home" component={Home} />
                <Route exact path="/" component={Login} />
                <Route exact path ="/profile" component={Profile}/>
              </Switch>
            </div>
          </div>
        </div>
        <button>Logout</button>
      </Router>
      
    );
  }
}

export default App;