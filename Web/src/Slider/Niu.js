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
import { Carousel } from "antd";
import * as x from "../x";

class Niu extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      datas: [],
    };
  }

  loadImages() {
    let array = [];
    for (let i = 0; i < 3; i++) {
      array.push(
        <div key={i}>
          <img
            src={x.SERVICE.CDN + `niu/${i + 1}.jpg`}
            style={{
              height: "auto",
              width: x.UI.SLIDER_WIDTH,
              borderRadius: 24,
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
          flexDirection: "column",
          alignItems: "center",
          display: "flex",
          borderRadius: 24,
          boxShadow: x.UI.BOX_SHADOW,
        }}
      >
        <div style={{ width: x.UI.SLIDER_WIDTH }}>
          <Carousel autoplay>{this.loadImages()}</Carousel>
        </div>
      </div>
    );
  }
}

export default Niu;
