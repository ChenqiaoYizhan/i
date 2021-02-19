/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-02-03 12:36:21
 */

import React from "react";
import * as x from "../x";
import moment from "moment";
import PaintPad from "./PaintPad";
import Group from "./Group";
import { Input, Button } from "antd";
class IID extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.timer = null;
    this.idInput = null;
    this.passwordInput = null;
    this.state = {
      time: moment().format("YYYY-MM-DD HH:mm:ss"),
      iid: Array.from({ length: 32 }, (_, i) => 8).join(""),
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        time: moment().format("YYYY-MM-DD HH:mm:ss"),
        iid: x.MD5.dealWithSunyupeng(Math.random()),
      });
    }, 6666);
    let saveID = localStorage.getItem("id");
    let savePassword = localStorage.getItem("password");
    if (x.RegExp.isEmpty(saveID) || x.RegExp.isEmpty(savePassword)) {
    } else {
      this.idInput.setValue(saveID);
      this.passwordInput.setValue(savePassword);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer, function () {});
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
          alignItems: "center",
          padding: 8,
        }}
      >
        <Group
          text="小小工具箱"
          image={require("../images/Slider_tools.png")}
        />
        <div style={{ fontSize: 14, color: "black" }}>UUID 生成器</div>
        <div style={{ color: "grey", fontSize: 12 }}>{this.state.time}</div>
        <div style={{ color: "grey", fontSize: 12 }}>{this.state.iid}</div>
        <div style={{ height: 16 }} />
        <div style={{ fontSize: 14, color: "black" }}>账号授权</div>
        <Input addonBefore="账号" ref={(idInput) => (this.idInput = idInput)} />
        <div style={{ height: 4 }} />
        <Input
          addonBefore="密码"
          ref={(passwordInput) => (this.passwordInput = passwordInput)}
        />
        <div style={{ height: 4 }} />
        <Button
          type="primary"
          style={{ width: x.UI.SLIDER_WIDTH - 16, borderRadius: 4 }}
          onClick={() => {
            let id = this.idInput.input.value;
            let password = this.passwordInput.input.value;
            if (x.RegExp.isEmpty(id) || x.RegExp.isEmpty(password)) {
            } else {
              localStorage.setItem("id", id);
              localStorage.setItem("password", password);
            }
          }}
        >
          授权
        </Button>
        <div style={{ height: 16 }} />
        <div style={{ fontSize: 14, color: "black" }}>颜色渐进工具</div>
        <PaintPad onChange={() => {}} />
      </div>
    );
  }
}

export default IID;
