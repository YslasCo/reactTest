import React, { Component } from "react";
import logo from "./logo.svg";
import { Navbar, Button } from "react-bootstrap";
import "./App.css";
import HelloWorld from "./Components/helloWorld";
import DateReturn from "./Components/dateReturn";
import "whatwg-fetch";
import Series from "./Containers/Series/container.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://www.deftones.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deftones Site Link
          </a>
          <HelloWorld />
          <DateReturn />
          {/* <p>The length of series array - {this.state.series.length}</p> */}
          <Series />
        </header>
      </div>
    );
  }
}
export default App;
