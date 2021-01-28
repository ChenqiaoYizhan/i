/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-01-26 23:50:58
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-28 21:44:24
 */
import { color } from "echarts";
import React from "react";
import CanvasDraw from "react-canvas-draw";
import Discuss from "../Disscuss";
import * as x from "../x";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.signCanvas = null;
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div
        style={{
          backgroundColor: "white",
          flexDirection: "column",
          display: "flex",
        }}
      >
        <Discuss
          onConfirmPress={(data) => {
            console.log(data);
          }}
        />
      </div>
    );
  }
}
