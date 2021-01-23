/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-01-21 23:59:01
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-23 21:04:17
 */
import React from "react";
import PropTypes from "prop-types";
import * as x from "../x";
import { Carousel } from "antd";

class Home extends React.Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

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
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            height: ((x.UI.MAIN_WIDTH - 24 - x.UI.SLIDER_WIDTH) ) / 3,
            width: x.UI.MAIN_WIDTH - 24 - x.UI.SLIDER_WIDTH,
          }}
        >
          <Carousel autoplay>{this.loadBanners()}</Carousel>
        </div>
      </div>
    );
  }
}

export default Home;
