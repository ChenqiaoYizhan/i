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
    for (let i = 0; i < 9; i++) {
      array.push(
        <div key={i}>
          <img
            src={`http://www.cctv3.net/niu/${i + 1}.jpg`}
            style={{
              height: "auto",
              width: x.UI.NIU_WIDTH,
              borderRadius: 18,
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
          borderRadius: 18,
          boxShadow: x.UI.NIU_WIDTH,
        }}
      >
        <div style={{ width: x.UI.NIU_WIDTH }}>
          <Carousel autoplay>{this.loadImages()}</Carousel>
        </div>
      </div>
    );
  }
}

export default Niu;
