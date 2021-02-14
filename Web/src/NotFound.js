/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-02-04 22:50:41
 */
import React from "react";
import Slider from "./Slider";
import Menu from "./Menu";
import * as x from "./x";
import Danmus from "./Danmus";
import Home from "./Home";
import Footer from "./App/Footer";

import { Link, withRouter } from "react-router-dom";

class NotFound extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: <Home />,
      menu: { text: "首页" },
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          display: "flex",
          backgroundColor: "white",
          borderRadius: 8,
          boxShadow: x.UI.BOX_SHADOW,
          padding: 16,
        }}
      >
        <div style={{ flexDirection: "column", display: "flex" }}>
          <div style={{ fontSize: 88, color: "black" }}>404</div>
          <div
            style={{
              flexDirection: "row",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div style={{ fontSize: 24, color: "grey" }}>
              貌似这篇文章找不到啊 老铁
            </div>
            <img src={require("./images/Baidu_angry.png")} />
          </div>
        </div>
        <div>
          <img src={require("./images/404.gif")} />
        </div>
      </div>
    );
  }
}

export default withRouter(NotFound);
