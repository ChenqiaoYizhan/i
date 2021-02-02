/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-02-01 20:11:53
 */
import React from "react";
import Editor from "./Editor";
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
      if (that.isDanmusShowOnAppPage) {
        // console.log("Danmus page appeared, danmus array is changing");
        let datasCopy = JSON.parse(JSON.stringify(that.state.datas));
        index++;
        datasCopy.push({
          id: index,
          latex: DATAS[parseInt(DATAS.length * Math.random())],
          qq: parseInt(Math.random() * 119) + 1,
          show: true,
          y: parseInt(
            Math.random() * (document.body.clientHeight - x.UI.MENU_HEIGHT) +
              x.UI.MENU_HEIGHT
          ),
          time: parseInt(Math.random() * 1688) + 16888,
        });
        that.setState({
          datas: datasCopy,
        });
      } else {
        // console.log("Danmus page dismissed or sizeof datas > 20, danmus array was not bean changed");
      }
    }, 2888);
    document.addEventListener("mouseleave", function () {
      that.state.datas = [];
      that.setState({
        datas: []
      })
      that.isDanmusShowOnAppPage = false;
    });
    document.addEventListener("mouseenter", function () {
      that.isDanmusShowOnAppPage = true;
    });
  }

  componentWillUnmount() {
    // console.log("Danmus page state: onRecycle()");
    this.state.datas = [];
    this.setState({
      datas: [],
    });
    document.removeEventListener("mouseenter", function () {});
    document.removeEventListener("mouseleave", function () {});
    clearInterval(this.timer);
  }

  loadDamus() {
    let array = [];
    for (let i = 0; i < this.state.datas.length; i++) {
      let item = this.state.datas[i];
      array.push(
        <DanmuItem
          key={item.id}
          item={item}
          onDismiss={(item) => {
            // console.log("Danmu item dismissed", item);
            let index = this.state.datas.findIndex((it) => it.id == item.id);
            this.state.datas[index].show = false;
            this.setState({
              datas: this.state.datas,
            });
          }}
        />
      );
    }
    return array;
  }

  render() {
    return <div>{this.loadDamus()}</div>;
  }
}

export default Danmus;
