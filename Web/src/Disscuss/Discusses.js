/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-01-28 19:13:28
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-30 21:00:18
 */
/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-01-26 23:50:58
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-28 17:20:29
 */
import { color } from "echarts";
import React from "react";
import CanvasDraw from "react-canvas-draw";
import * as x from "../x";
import PropTypes from "prop-types";
import { Button } from "antd";
import Item from "./Item";

var selectPasters = require("../datas/selectPasters.json");

class Discusses extends React.Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.signCanvas = null;
    this.state = {
      datas: []
    };
  }

  componentDidMount() {
    this.setState({
      datas: selectPasters.splice(0, 10),
    });
  }

  loadDiscusses() {
    let array = [];
    for (let i = 0; i < this.state.datas.length; i++) {
      let item = this.state.datas[i];
      array.push(<Item key={i} item={item} onReplyPress={() => {

      }} />);
    }
    return array;
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: "white",
          flexDirection: "column",
          display: "flex",
        }}
      >
        {this.loadDiscusses()}
      </div>
    );
  }
}

export default Discusses;
