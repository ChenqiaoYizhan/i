/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-08 15:23:25
 */
import React, { Component } from "react";

var datas = require("./data");
var basic = datas.default.basic;

class Line extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  loadConnects() {
    let connect = [
      { image: require("./basic_blog.png"), value: basic.blog },
      { image: require("./basic_mobile.png"), value: basic.wechat },
      { image: require("./basic_email.png"), value: basic.email },
      { image: require("./basic_qq.png"), value: basic.qq },
    ];
    let array = [];
    for (let i = 0; i < connect.length; i++) {
      array.push(
        <div
          key={i}
          style={{
            flexDirection: "row",
            alignItems: "center",
            display: "flex",
          }}
        >
          <div style={{ fontSize: 14, color: "grey" }}>{connect[i].value}</div>
          <div style={{ width: 8 }} />
          <img src={connect[i].image} style={{ height: 16, width: 16 }} />
        </div>
      );
    }
    return array;
  }
  
  render() {
    return <div style={{ height: 1, backgroundColor: "#f0f0f0" }} />;
  }
}

export default Line;
