/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-23 00:31:26
 */

import React from "react";
import PropTypes from "prop-types";
import * as x from "../x";
var echarts = require("echarts");

class BookCloud extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var myChart = echarts.init(document.getElementById("main"));
    let keys = [
      "考研",
      "数据结构",
      "算法",
      "设计模式",
      "Android",
      "小程序",
      "编程语言 ( Java/C/C++ )",
      "HTML ( JS/CSS )",
      "软件工程",
      "高等数学",
      "线程代数",
      "计算机网络",
      "操作系统",
      "面试",
      "运维 / 数据库",
      "ReactNative",
      "杂七杂八",
    ];
    let array = [];
    for (let i = 0; i < keys.length; i++) {
      array.push({
        name: keys[i],
        value: parseInt(Math.random() * 19 + 1),
        children: [], // 如果子类，里面也是递归 {name: '', value: ''}的形式
      });
    }
    let option = {
      series: [
        {
          type: "treemap",
          data: array,
        },
      ],
    };
    // 绘制图表
    myChart.setOption(option);
  }

  loadHeader() {}

  render() {
    return (
      <div
        id="main"
        style={{
          flexDirection: "column",
          alignItems: "center",
          display: "flex",
          backgroundColor: "white",
          borderRadius: 8,
          height: x.UI.SLIDER_WIDTH,
          width: x.UI.SLIDER_WIDTH,
          boxShadow: "0 0 4px 2px rgba(0, 0, 0, 0.24)", // 前两个参数偏移量 第三个参数抬起来的高度 第四个参数 阴影扩散的大小
        }}
      ></div>
    );
  }
}

export default BookCloud;
