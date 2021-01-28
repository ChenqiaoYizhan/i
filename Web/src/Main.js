/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-28 22:38:41
 */
import React from "react";
import Slider from "./Slider";
import Menu from "./Menu";
import * as x from "./x";
import Danmus from "./Danmus";
import Home from "./Home";
import Footer from "./App/Footer";

import { Link, withRouter } from "react-router-dom";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: <Home />,
      menu: { text: "首页" },
    };
  }

  componentDidMount() {
    // console.log(x.MD5.dealWithSunyupeng("year=2021&month=01&day=27"));
    // let strings = ["id", "time", "i", "md5"];
    // strings = strings.sort((a, b) => a.localeCompare(b));
    // console.log(strings);
  }

  render() {
    return (
      <div
        style={{
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          display: "flex",
          backgroundColor: "#f0f0f0",
        }}
      >
        <div
          style={{
            position: "fixed",
            top: 0,
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "white",
            display: "flex",
            zIndex: x.UI.ZINDEX.MENU,
          }}
        >
          <Menu
            onMenuPress={(item) => {
              this.props.history.push({
                pathname: `/${item.id}`,
              });
            }}
          />
        </div>
        <div style={{ height: x.UI.MENU_HEIGHT }} />
        <div style={{ height: 16 }} />
        <div
          style={{
            width: x.UI.MAIN_WIDTH,
            flexDirection: "row",
            display: "flex",
          }}
        >
          <div
            style={{
              width: x.UI.MAIN_WIDTH,
              flexDirection: "column",
            }}
          >
            <div style={{ position: "relative", backgroundColor: "#f0f0f0" }}>
              {this.props.children}
            </div>
          </div>
          <div style={{ width: x.UI.MAIN_INTERVAL }} />
          <div style={{ width: x.UI.SLIDER_WIDTH }}>
            <Slider />
          </div>
        </div>
        <div style={{ zIndex: x.UI.ZINDEX.DANMU }}>
          <Danmus />
        </div>
        <div style={{ height: 8 }} />
        <Footer />
      </div>
    );
  }
}

export default withRouter(Main);
