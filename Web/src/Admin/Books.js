/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-01-21 23:59:01
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-02-02 22:34:44
 */
import React from "react";
import PropTypes from "prop-types";
import { Input, Button } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as x from "../x";
import { withRouter } from "react-router";

class Books extends React.Component {
  static propTypes = {
    onMenuPress: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      datas: [],
    };
  }

  componentDidMount() {}

  loadBooks() {
    let array = [];
    for (let i = 0; i < this.state.datas.length; i++) {
      let item = this.state.datas[i];
      array.push(
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            padding: "1px 4px",
            background: "#f0f0f0",
          }}
        >
          <div style={{ fontSize: 14, color: "black" }}>{item.name}</div>
        </div>
      );
    }
    return array;
  }

  render() {
    return (
      <div
        style={{
          flexDirection: "column",
          display: "flex",
          height: 120,
          backgroundColor: "green",
        }}
      ></div>
    );
  }
}

export default Books;
