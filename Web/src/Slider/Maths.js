/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-23 00:57:06
 */

import React from "react";
import PropTypes from "prop-types";
import * as x from "../x";

let DATAS = [
  "\\int{\\frac{dx}{\\sqrt{a^2-x^2}}} = arcsin(\\frac{x}{a})+C",
  "\\int{\\frac{dx}{\\sqrt{a^2-x^2}}} = arcsin(\\frac{x}{a})+C",
  "\\int{\\frac{dx}{\\sqrt{x^2+a^2}}} = ln(x+\\sqrt{x^2+a^2})+C",
  "\\int{\\frac{dx}{\\sqrt{x^2-a^2}}} = ln(x+\\sqrt{x^2-a^2})+C",
  "\\int{\\frac{dx}{x^2+a^2}} = \\frac{1}{a}arctan(\\frac{x}{a})+C",
  "\\int{\\frac{dx}{x^2-a^2}} = \\frac{1}{2a}ln{{\\frac{|x-a|}{|x+a|}}}+C",
  "\\int{tanx}dx=-ln|{cosx}|+C",
  "\\int{cotx}dx=ln|{sinx}|+C",
  "\\int{secx}dx=ln|secx+tanx|+C",
  "\\int{cscx}dx=ln|secx-cotx|+C",
  "\\int{sec^2x}dx=tanx+C",
  "\\int{csc^2x}dx=-cotx+C",
  "V_{X}=\\pi\\int_a^b{f^2(x)}dx",
  "V_{Y}=2\\pi\\int_a^b{xf(x)}dx",
];

class Maths extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      mathView: <div />,
    };
  }

  // http://sciencesoft.at/image/latexurl/image.png?dpi=256&src=\int{\\frac{3x+6}{(x-1)^2(x^2+x+1)}}dx
  componentDidMount() {
    let view = (
      <div style={{ flexDirection: "column", display: "flex" }}>
        {this.loadMaths()}
      </div>
    );
    this.setState({
      // mathView: view,
    });
  }

  loadMaths() {
    let array = [];
    let latextHost = `http://sciencesoft.at/image/latexurl/image.png?dpi=${
      x.UI.SLIDER_WIDTH - 16
    }&src=`;
    DATAS = DATAS.sort((a, b) => a.length - b.length);
    for (let i = 0; i < DATAS.length; i++) {
      console.log(DATAS[i]);
      array.push(
        <img
          key={i}
          src={latextHost + DATAS[i]}
          style={{ width: "100%", height: "auto" }}
        />
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
          backgroundColor: "white",
          borderRadius: 8,
          padding: 8,
          width: x.UI.SLIDER_WIDTH,
          boxShadow: "0 0 4px 2px rgba(0, 0, 0, 0.24)", // 前两个参数偏移量 第三个参数抬起来的高度 第四个参数 阴影扩散的大小
        }}
      >
        {this.state.mathView}
      </div>
    );
  }
}

export default Maths;
