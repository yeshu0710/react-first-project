import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2OLV8gVdW-IkyxbZSABop_l48eoNS3U_fZskhyHGZszJ0q7I3EQ" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            learn
          </a>
          <a className="App-link" href="https://www.google.com" target="_blank">
            {" "}
            google.com
          </a>
          <div>
            <h1>he</h1>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
