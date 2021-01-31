/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-01-21 23:59:01
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-31 20:36:05
 */
import React from "react";
import PropTypes from "prop-types";
import * as x from "../x";
import Banner from "./Banner";
import List from "./List";
import { withRouter } from "react-router-dom";

class Home extends React.Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  componentDidMount() {}

  loadBanners() {
    let array = [];
    const host = "http://www.cctv3.net/images/";
    let images = ["ChiJi0201.jpg", "ChiJi0202.jpg"];
    for (let i = 0; i < images.length; i++) {
      array.push(
        <div key={i}>
          <img
            src={host + images[i]}
            style={{
              height: "100%",
              width: "100%",
            }}
          />
        </div>
      );
    }
    return array;
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            backgroundColor: "white",
            boxShadow: x.UI.BOX_SHADOW,
            borderRadius: 8,
            padding: 8,
          }}
        >
          <div
            style={{
              flexDirection: "row",
              alignItems: 'flex-end',
              display: "flex",
            }}
          >
            <img
              src={require("../images/Home_camera.png")}
              style={{ height: 36, width: 36 }}
            />
            <div style={{ width: 4 }} />
            <div style={{ fontSize: 18, color: "black" }}>正能量</div>
          </div>
          <div style={{flexDirection: 'row', justifyContent: 'center', display: 'flex'}}>
          <Banner />
          </div>
        </div>
        <div style={{ height: 12 }} />
        <List />
      </div>
    );
  }
}

export default withRouter(Home);
