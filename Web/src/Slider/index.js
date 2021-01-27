/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-24 20:53:15
 */

import React from "react";
import PropTypes from "prop-types";
import Slider_i_background from "../images/Slider_i_background.jpg";
import * as x from "../x";
import Header from "./Header";
import BookCloud from "./BookCloud";
import Doge from "./Doge";
import Connect from "./Connect";
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
          backgroundColor: '#f0f0f0'
        }}
      >
        <Header />
        <div style={{ height: 8 }} />
        <Connect />
        <div style={{ height: 8 }} />
        <Doge />
      </div>
    );
  }
}

export default Slider;
