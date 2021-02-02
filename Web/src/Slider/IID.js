/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-02-03 00:05:55
 */

import React from "react";
import PropTypes from "prop-types";
import * as x from "../x";
import moment from "moment";
import Group from "./Group";

class IID extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.timer = null;
    this.state = {
      time: moment().format("YYYY-MM-DD HH:mm:ss"),
      iid: Array.from({ length: 32 }, (_, i) => 8).join(""),
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        time: moment().format("YYYY-MM-DD HH:mm:ss"),
        iid: x.MD5.dealWithSunyupeng(Math.random()),
      });
    }, 6666);
  }

  componentWillUnmount() {
    clearInterval(this.timer, function () {});
  }

  render() {
    return (
      <div
        style={{
          flexDirection: "column",
          display: "flex",
          backgroundColor: "white",
          borderRadius: 8,
          boxShadow: x.UI.BOX_SHADOW,
          alignItems: "center",
        }}
      >
        <Group text="便捷测试" image={require("../images/Slider_tools.png")} />
        <div style={{ color: "grey", fontSize: 12 }}>{this.state.time}</div>
        <div style={{ color: "grey", fontSize: 12 }}>{this.state.iid}</div>
      </div>
    );
  }
}

export default IID;