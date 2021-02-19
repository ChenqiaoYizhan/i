/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-30 20:21:07
 */

import React from "react";
import PropTypes from "prop-types";
import TweenOne from "rc-tween-one";
import { Input, Slider } from "antd";
import * as x from "../x";
import tinycolor from "tinycolor2";

class PaintPad extends React.Component {
  static propTypes = {
  };

  constructor(props) {
    super(props);
    this.fromInput = null;
    this.state = {
      to: "#a0e75a",
    };
  }

  render() {
    return (
      <div style={{ flexDirection: "column", display: "flex" }}>
        <Input
          ref={(fromInput) => (this.fromInput = fromInput)}
          defaultValue={"#a0e75a"}
          addonBefore="Initial Color"
        />
        <Slider
          tipFormatter={(value) => {
            return `${parseFloat(value) / 100} ${this.state.to}`;
          }}
          style={{ margin: 4 }}
          onChange={(value) => {
            let color = tinycolor(this.fromInput.input.value)
              .setAlpha(parseFloat(value / 100))
              .toRgbString();
            this.setState({
              to: color,
            });
          }}
        />
        <div
          style={{
            height: 28,
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            backgroundColor: this.state.to,
          }}
        >
          <div style={{ fontSize: 14, color: "white", textAlign: "center" }}>
            {this.state.to}
          </div>
        </div>
      </div>
    );
  }
}

export default PaintPad;
