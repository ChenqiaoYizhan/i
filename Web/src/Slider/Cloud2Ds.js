/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-31 19:49:27
 */

import React from "react";
import PropTypes from "prop-types";
import * as x from "../x";
import Cloud2DItem from "./Cloud2DItem";
import Group from "./Group";
import moment from "moment";

class Cloud2Ds extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.isCloud2dShowOnAppPage = true;
    this.state = {
      datas: [],
    };
  }

  componentDidMount() {
    let keys = [
      "考研",
      "数据结构",
      "算法",
      "设计模式",
      "Android",
      "小程序",
      "C/C++",
      "Java",
      "HTML/CSS/JavaScript",
      "软件工程",
      "高等数学",
      "线程代数",
      "计算机网络",
      "操作系统",
      "面试",
      "运维(MySQL/Linux)",
      "React Native",
      "杂七杂八",
    ];
    let that = this;
    let index = 0;
    setInterval(function () {
      let datasCopy = JSON.parse(JSON.stringify(that.state.datas));
      if (that.isCloud2dShowOnAppPage) {
        index++;
        let key = keys[index % keys.length];
        datasCopy.push({
          id: index,
          text: keys[index % keys.length],
          color: x.UI.randomColor(),
          show: true,
          x:
            parseInt(
              (x.UI.SLIDER_WIDTH - key.length * 12 - 16) * Math.random()
            ) + 4,
          y: x.UI.SLIDER_WIDTH - 32,
          time: Math.random() * 1588 + 6666,
        });
        // console.log(datasCopy);
        that.setState({
          datas: datasCopy,
        });
      } else {
      }
    }, 1000);
    document.addEventListener("mouseleave", function () {
      that.state.datas = [];
      that.setState({
        datas: []
      })
      that.isCloud2dShowOnAppPage = false;
    });
    document.addEventListener("mouseenter", function () {
      that.isCloud2dShowOnAppPage = true;
    });
  }

  componentWillUnmount() {
    document.removeEventListener("mouseleave", function () {});
    document.removeEventListener("mouseenter", function () {});
  }

  loadCloud2Ds() {
    let array = [];
    for (let i = 0; i < this.state.datas.length; i++) {
      let item = this.state.datas[i];
      array.push(
        <Cloud2DItem
          key={i}
          item={item}
          onClick={() => {}}
          onDismiss={() => {
            let datasCopy = JSON.parse(JSON.stringify(this.state.datas));
            datasCopy[i].show = false;
            this.setState({
              datas: datasCopy,
            });
          }}
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
          display: "flex",
          backgroundColor: "white",
          borderRadius: 8,
          boxShadow: x.UI.BOX_SHADOW,
        }}
      >
        <Group text="文章分类" image={require("../images/Slider_cloud.png")} />
        <div
          style={{
            position: "relative",
            height: x.UI.SLIDER_WIDTH,
            width: x.UI.SLIDER_WIDTH,
          }}
        >
          {this.loadCloud2Ds()}
        </div>
      </div>
    );
  }
}

export default Cloud2Ds;
