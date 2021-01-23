/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-23 18:35:41
 */

import React from "react";
import PropTypes from "prop-types";
import Slider_i_background from "../images/Slider_i_background.jpg";
import * as x from "../x";
import Header from "./Header";
import BookCloud from "./BookCloud";
class Slider extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div
        style={{
          flexDirection: "column",
          display: "flex",
        }}
      >
        <Header />
        <div style={{ height: 8 }} />
      </div>
    );
  }
}

export default Slider;
