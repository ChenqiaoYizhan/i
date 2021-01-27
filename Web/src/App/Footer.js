/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-01-21 23:59:01
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-27 01:22:46
 */
import React from "react";
import PropTypes from "prop-types";
import { Input, Button } from "antd";

import * as x from "../x";

class Footer extends React.Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let item = this.props.item;
    return (
      <div
        style={{
          width: x.UI.MAIN_WIDTH,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "white",
          justifyContent: "center",
          width: "100%",
          padding: 12,
        }}
      >
        <div style={{ fontSize: 14, color: "black" }}>
          陈桥驿站已经萌萌哒运行了 1024天
        </div>
        <div style={{ height: 8 }} />
        <div style={{ fontSize: 14, color: "grey" }}>
          百度云提供云计算和加速服务 阿里云提供域名解析服务
        </div>
      </div>
    );
  }
}

export default Footer;
