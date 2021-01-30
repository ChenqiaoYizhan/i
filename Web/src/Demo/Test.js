/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-01-26 23:50:58
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-30 11:13:38
 */
/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-01-26 23:50:58
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-29 19:30:08
 */
import { color } from "echarts";
import React from "react";
import CanvasDraw from "react-canvas-draw";
import * as x from "../x";
import PropTypes from "prop-types";
import TweenOne from "rc-tween-one";
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.animation = [
      {
        
      }
    ];
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
        <TweenOne
          animation={{x: 600, duration: 2000}}
          moment={0}
          paused={false}
          style={{
            height: 200,
            width: 200,
            backgroundColor: "blue",
          }}
        />
      </div>
    );
  }
}
