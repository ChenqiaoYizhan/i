/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-30 01:15:13
 */

import React from "react";
import PropTypes from "prop-types";
import * as x from "../x";

class Group extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div
        style={{
          flexDirection: "row",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          height: 32,
        }}
      >
        <img src={this.props.image} style={{ height: 18, width: 18 }} />
        <div style={{ width: 4 }} />
        <div style={{ fontSize: 16, color: "black" }}>{this.props.text}</div>
      </div>
    );
  }
}

export default Group;
