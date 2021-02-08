/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-04 00:18:00
 */
import React from "react";

import * as datas from "./data";
import * as x from "./x";

var basic = datas.i.basic;

class Basic extends React.Component {
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
          <div style={{ fontSize: 14, color: "black" }}>{connect[i].value}</div>
          <div style={{ width: 8 }} />
          <img src={connect[i].img} style={{ height: 16, width: 16 }} />
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
          backgroundColor: "white",
          padding: 8,
          borderRadius: 8,
          boxShadow: x.UI.BOX_SHADOW,
        }}
      >
        <div
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              flexDirection: "row",
              display: "flex",
            }}
          >
            <img
              src={require("./i.jpg")}
              style={{ borderRadius: 32, height: 64, width: 64 }}
            />
            <div style={{ width: 8 }} />
            <div
              style={{
                flexDirection: "column",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <div style={{ fontSize: 24, color: "black" }}>{basic.name}</div>
              <div
                style={{ fontSize: 16, color: "black" }}
              >{`职位意向: ${basic.job}`}</div>
            </div>
          </div>
          <div
            style={{
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "flex-end",
              display: "flex",
            }}
          >
            {this.loadConnects()}
          </div>
        </div>
      </div>
    );
  }
}

export default Basic;
