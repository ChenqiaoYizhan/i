/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-01-21 23:59:01
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-27 22:38:58
 */
import React from "react";
import PropTypes from "prop-types";
import * as x from "../x";
import { Carousel } from "antd";
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

  componentDidMount() {
    
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
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* <div
          style={{
            height: (((x.UI.MAIN_WIDTH - 8 - x.UI.SLIDER_WIDTH) / 2) * 9) / 16,
            width: (x.UI.MAIN_WIDTH - 8 - x.UI.SLIDER_WIDTH) / 2,
          }}
        >
          <Carousel autoplay>{this.loadBanners()}</Carousel>
        </div> */}
        <List />
      </div>
    );
  }
}

export default withRouter(Home);
