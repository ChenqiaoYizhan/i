/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-23 00:31:04
 */

import React from "react";
import PropTypes from "prop-types";
import * as x from "../x";

class Header extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  loadCount(n, name) {
    return (
      <div
        style={{
          flexDirection: "column",
          alignItems: "center",
          display: "flex",
          flex: 1,
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: 18, color: "black" }}>{n}</div>
        <div style={{ fontSize: 12, color: "grey" }}>{name}</div>
      </div>
    );
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
        <div
          style={{
            height: 120,
            width: x.UI.SLIDER_WIDTH,
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            display: "flex",
          }}
        >
          <img
            src={require("../images/Slider_i_background.jpg")}
            style={{
              height: 120,
              width: x.UI.SLIDER_WIDTH,
              position: "absolute",
            }}
          />
          <img
            src={require("../images/i.jpg")}
            style={{ height: 64, width: 64, borderRadius: 32, zIndex: 1 }}
          />
        </div>
        <div style={{ height: 8 }} />
        <div style={{ fontSize: 18, color: "black" }}>陈桥驿站</div>
        <div
          style={{
            height: 1,
            backgroundColor: "#f0f0f0",
            margin: 4,
            width: "50%",
          }}
        />
        <div style={{ height: 4 }} />
        <div style={{ fontSize: 12, color: "grey", textAlign: "center" }}>
          勤俭自持，习劳习苦，可以处乐，可以处约，此君子也。
        </div>
        <div style={{ height: 4 }} />
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            width: "100%",
            alignItems: "center",
          }}
        >
          {this.loadCount("99", "文章数")}
          <div style={{ height: 16, width: 1, backgroundColor: "#f0f0f0" }} />
          {this.loadCount("99", "评论数")}
        </div>
      </div>
    );
  }
}

export default Header;
