/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-01-21 23:59:01
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-02-06 00:34:20
 */
import React from "react";
import PropTypes from "prop-types";
import * as x from "../x";
import { withRouter } from "react-router-dom";
import Discuss from "../Disscuss";
import * as echarts from "echarts";
import "./about.css";

var Zhifubaos = require("../datas/Zhifubao.json");

class Zhifubao extends React.Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var myChart = echarts.init(document.getElementById("Zhifubao"));
    const option = {
      title: {
        text: "",
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["测试折线统计图"],
      },
      grid: {
        left: "3%",
        right: "3%",
        bottom: "3%",
        containLabel: true,
      },
      toolbox: {
        show: true,
        feature: {
          magicType: { show: true, type: ["line", "bar"] },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      calculable: true,
      xAxis: {
        type: "category",
        boundaryGap: true,
        data: Zhifubaos.map((item) => item.date),
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "测试折线统计图",
          type: "line",
          stack: "",
          data: Zhifubaos.map((item) => parseInt(item.property)),
          markPoint: {
            data: [
              { type: "max", name: "" },
              { type: "min", name: "" },
            ],
          },
        },
      ],
    };
    myChart.setOption(option);
  }

  render() {
    let width = 618;
    return <div id="Zhifubao" style={{ width: width, height: width / 2 }} />;
  }
}

export default withRouter(Zhifubao);
