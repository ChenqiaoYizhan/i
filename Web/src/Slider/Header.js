/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-31 11:08:47
 */

import React from "react";
import PropTypes from "prop-types";
import * as x from "../x";

class Header extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      datas: [],
    };
  }

  loadCounts() {
    let array = [];
    for (let i = 0; i < this.state.datas.length; i++) {
      let item = this.state.datas[i];
      array.push(
        <div
          key={i}
          style={{
            flexDirection: "column",
            alignItems: "center",
            display: "flex",
            flex: 1,
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: 16, color: "black" }}>{item.name}</div>
          <div style={{ fontSize: 12, color: "grey" }}>{item.value}</div>
        </div>
      );
    }
    return array;
  }

  async initDatas() {
    let result = await x.HTTP.get(x.SERVICE.SERVER + x.SERVICE.API.SELECT_COUNT);
    this.setState({
      datas: result,
    });
  }

  componentDidMount() {
    this.initDatas();
  }

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
          boxShadow: x.UI.BOX_SHADOW,
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
          {this.loadCounts()}
        </div>
      </div>
    );
  }
}

export default Header;
