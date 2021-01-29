/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-01-21 23:59:01
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-29 01:46:12
 */
import React from "react";
import PropTypes from "prop-types";
import { Input, Button } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as x from "../x";
import monent from "moment";

var selectPasters = require("../datas/selectPasters.json");

class Book extends React.Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
    };
  }

  componentDidMount() {
    this.setState({
      datas: selectPasters.sort((a, b) =>
        monent(a.time).isAfter(monent(b.time)) ? -1 : 1
      ),
    });
  }

  loadYears() {
    let array = [];
    // console.log(years);
    for (let i = 2019; i <= 2022; i++) {
      // console.log(months);
      array.push(
        <div
          key={i}
          style={{
            flexDirection: "column",
            display: "flex",
          }}
        >
          <div style={{ fontSize: 18, color: "black" }}>{i}</div>
          {this.laodMonths(i)}
        </div>
      );
    }
    return array;
  }

  fixZero(n) {
    return n < 10 ? "0" + n : n;
  }

  laodMonths(year) {
    let array = [];
    let datasCopy = JSON.parse(JSON.stringify(this.state.datas));
    // console.log(days);
    for (let i = 1; i <= 12; i++) {
      var days = [];
      if (days.length > 0) {
        array.push(
          <div key={i} style={{ flexDirection: "column", display: "flex" }}>
            <div style={{ fontSize: 16, color: "black" }}>{i}</div>
            {this.loadDays(days)}
          </div>
        );
      }
    }
    return array;
  }

  loadDays(days) {
    let array = [];
    for (let i = 0; i < days.length; i++) {
      array.push(
        <div
          key={i}
          style={{
            flexDirection: "row",
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: 14, color: "grey" }}>{days[i].message}</div>
          <div style={{ fontSize: 14, color: "grey" }}>
            {monent(days[i].time).format("YYYY-MM-DD")}
          </div>
        </div>
      );
    }
    return array;
  }

  render() {
    return (
      <div style={{ flexDirection: "column", display: "flex" }}>
        {this.loadYears()}
      </div>
    );
  }
}

export default Book;
