import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Button, Fade } from "reactstrap";
import "./App.css";
import Users from "./components/Users.js";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Users />
      </div>
    );
  }
}
