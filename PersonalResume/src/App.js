/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";

import Basic from "./Basic";
import University from "./University";
import Skill from "./Skill";
import Experience from "./Experience";
import Project from "./Project";
import Footer from "./Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div
        style={{
          flexDirection: "column",
          display: "flex",
          flex: 1,
          padding: 16,
        }}
      >
        <div style={{ flex: 1 }}>
          <div style={{ flexDirection: "column" }}>
            <Basic />
            <div style={{ height: 2 }} />
            <University />
            <div style={{ height: 8 }} />
            <Skill />
            <div style={{ height: 8 }} />
            <Experience />
            <div style={{ height: 8 }} />
            <Project />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
