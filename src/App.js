import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Users from "./components/Users";
import User from "./components/User";
//const Users = () => <h2>Users</h2>;
//const Home = () => <h2>Home</h2>;

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/users/current_user" component={User} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
