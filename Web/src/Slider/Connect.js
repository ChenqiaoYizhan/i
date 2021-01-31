/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-31 11:07:12
 */

import React from "react";
import PropTypes from "prop-types";
import * as x from "../x";
import Group from './Group';

const DATAS = [
  { id: 1, name: "i@cctv.net", image: require("../images/Connect_email.png") },
  { id: 2, name: "429884848", image: require("../images/Connect_qq.png") },
  {
    id: 3,
    name: "广东省 深圳市 南山区",
    image: require("../images/Connect_location.png"),
  },
];

class Connect extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  loadItems() {
    let array = [];
    for (let i = 0; i < DATAS.length; i++) {
      let item = DATAS[i];
      array.push(
        <div
          key={i}
          style={{
            flexDirection: "row",
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <img src={item.image} style={{ height: 16, width: 16 }} />
          <div style={{ fontSize: 12, color: "grey" }}>{item.name}</div>
        </div>
      );
    }
    return array;
  }

  componentDidMount() {}

  render() {
    return (
      <div
        style={{
          flexDirection: "column",
          display: "flex",
          backgroundColor: "white",
          borderRadius: 8,
          padding: 8,
          boxShadow: x.UI.BOX_SHADOW,// 前两个参数偏移量 第三个参数抬起来的高度 第四个参数 阴影扩散的大小
        }}
      >
        <Group text='联系方式' image={require('../images/Slider_connect.png')} />
        {this.loadItems()}
      </div>
    );
  }
}

export default Connect;
