/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-24 15:23:22
 */

import React from "react";
import PropTypes from "prop-types";
import * as x from "../x";
import moment from "moment";

class Doge extends React.Component {
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
          flexDirection: "column",
          alignItems: "center",
          display: "flex",
          backgroundColor: "white",
          borderRadius: 8,
          padding: 8,
          boxShadow: "0 0 4px 2px rgba(0, 0, 0, 0.24)", // 前两个参数偏移量 第三个参数抬起来的高度 第四个参数 阴影扩散的大小
        }}
      >
        <img
          src={require("../images/Doge_food.jpg")}
          style={{ height: 128, width: 128 }}
        />
        <div style={{ height: 4 }} />
        <div style={{ fontSize: 14, color: "black" }}>
          {`单身狗、吃狗粮的第${moment().diff(moment("2018-07-29"), "day")}天`}
        </div>
      </div>
    );
  }
}

export default Doge;
