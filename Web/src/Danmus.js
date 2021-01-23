/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-23 01:35:26
 */
import React from "react";
import Editor from "./Editor";
import Reader from "./Reader";
import Slider from "./Slider";
import Pasters from "./Pasters";
import Timer from "./Timer";
import Menu from "./Menu";
import * as x from "./x";
import DanmuItem from "./DanmuItem";

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

class Danmus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
    };
  }

  componentDidMount() {
    let that = this;
    setInterval(function () {
      let datasCopy = JSON.parse(JSON.stringify(that.state.datas));
      datasCopy.push({
        latex: DATAS[parseInt(DATAS.length * Math.random())],
        qq: parseInt(Math.random() * 119) + 1,
      });
      that.setState({
        datas: datasCopy,
      });
    }, parseInt(
      Math.random() * (x.DANMU.INTERVAL.max - x.DANMU.INTERVAL.min) +
        x.DANMU.INTERVAL.min
    ));
  }

  loadDamus() {
    let array = [];
    for (let i = 0; i < this.state.datas.length; i++) {
      let item = this.state.datas[i];
      array.push(<DanmuItem item={item} />);
    }
    return array;
  }

  render() {
    return <div>{this.loadDamus()}</div>;
  }
}

export default Danmus;
