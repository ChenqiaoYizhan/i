/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-24 13:27:30
 */
import React from "react";
import Editor from "./Editor";
import Reader from "./Reader";
import Slider from "./Slider";
import Pasters from "./Pasters";
import Timer from "./Timer";
import Menu from "./Home";
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
    this.isDanmusShowOnAppPage = true;
    this.timer = null;
    this.state = {
      datas: [],
    };
  }

  componentDidMount() {
    let that = this;
    let index = 0;
    // console.log("Damus page state: onResume()");
    this.timer = setInterval(function () {
      if (that.isDanmusShowOnAppPage && that.state.datas.length < 10) {
        // console.log("Danmus page appeared, danmus array is changing");
        let datasCopy = JSON.parse(JSON.stringify(that.state.datas));
        index++;
        datasCopy.push({
          id: index,
          latex: DATAS[parseInt(DATAS.length * Math.random())],
          qq: parseInt(Math.random() * 119) + 1,
          show: true,
        });
        that.setState({
          datas: datasCopy,
        });
      } else {
        // console.log("Danmus page dismissed, danmus array was not bean changed");
      }
    }, parseInt(
      Math.random() * (x.DANMU.INTERVAL.max - x.DANMU.INTERVAL.min) +
        x.DANMU.INTERVAL.min
    ));
    document.addEventListener("visibilitychange", function () {
      that.isDanmusShowOnAppPage = !document.hidden;
    });
  }

  componentWillUnmount() {
    console.log("Danmus page state: onRecycle()");
    this.state.datas = [];
    this.setState({
      datas: [],
    });
    document.removeEventListener("visibilitychange", function () {
      // console.log("Danmus page removed visibilitychange event");
    });
    clearInterval(this.timer);
  }

  loadDamus() {
    let array = [];
    for (let i = 0; i < this.state.datas.length; i++) {
      let item = this.state.datas[i];
      array.push(
        item.show ? (
          <DanmuItem
            key={item.id}
            item={item}
            onDismiss={(id) => {
              let datasCopy = JSON.parse(JSON.stringify(this.state.datas));
              let position = datasCopy.findIndex((it) => it.id == id);
              datasCopy[position].show = false;
              // console.log(
              //   "Danmus array",
              //   datasCopy.filter((it) => it.show)
              // );
              this.state.datas = datasCopy;
              this.setState({
                datas: datasCopy,
              });
            }}
          />
        ) : null
      );
    }
    return array;
  }

  render() {
    return <div>{this.loadDamus()}</div>;
  }
}

export default Danmus;
