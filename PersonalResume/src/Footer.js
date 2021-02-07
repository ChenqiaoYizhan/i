/*
 * @Descripttion: 模拟器大小设置为A4的大小: 2100x2970 DPI=480
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-12-31 19:57:29
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-08 15:23:51
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  loadDescription(div, img) {
    return (
      <div
        style={{
          flexDirection: "row",
          alignItems: "center",
          display: "flex",
        }}
      >
        <div style={{ fontSize: 14, color: "white" }}>{div}</div>
        <div style={{ width: 8 }} />
        <img source={img} style={{ height: 16, width: 16 }} />
      </div>
    );
  }

  render() {
    return (
      <div
        style={{
          height: 32,
          backgroundColor: "black",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          display: "flex",
          paddingHorizontal: 16,
        }}
      >
        {this.loadDescription(
          "Edited by VS Code",
          require("./footer_vs_code.png")
        )}
        {this.loadDescription(
          "Powered by React Native",
          require("./footer_react_native.png")
        )}
        {this.loadDescription("Ran in Nox Player", require("./footer_nox.png"))}
      </div>
    );
  }
}

export default Footer;
