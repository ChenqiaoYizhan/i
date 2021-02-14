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
import moment from "moment";

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
        <div
          style={{
            flexDirection: "row",
            alignItems: "center",
            display: "flex",
          }}
        >
          <div style={{ fontSize: 16, color: "black" }}>
            {`陈桥驿站已经萌萌哒运行了 ${moment().diff(
              moment("2021-02-13 00:00:00"),
              "day"
            )} 天`}
          </div>
          <img
            style={{ height: 24, width: 28 }}
            src={require("../images/Huya_smile.png")}
          />
        </div>
        <div style={{ height: 8 }} />
        <div
          style={{
            flexDirection: "row",
            alignItems: "center",
            display: "flex",
          }}
        >
          <div style={{ fontSize: 14, color: "grey" }}>
            百度云提供云计算和加速服务
          </div>
          <div style={{ width: 12 }} />
          <div style={{ fontSize: 14, color: "grey" }}>
            阿里云提供域名解析服务
          </div>
          <div style={{ width: 12 }} />
          <a href="https://beian.miit.gov.cn/">鲁ICP备18036467号-2</a>
        </div>
      </div>
    );
  }
}

export default Footer;
