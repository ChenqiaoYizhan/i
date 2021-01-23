/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-01-21 23:59:01
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-23 22:29:41
 */
import React from "react";
import PropTypes from "prop-types";
import { Input, Button } from "antd";

import * as x from "../x";

const DATAS = [
  {
    image: require("../images/Slider_home.png"),
    text: "首页",
    page: "",
    id: "home",
  },
  {
    image: require("../images/Slider_book.png"),
    text: "归档",
    page: "",
    id: "book",
  },
  {
    image: require("../images/Slider_paster.png"),
    text: "留言",
    page: "",
    id: "paster",
  },
  {
    image: require("../images/Slider_timer.png"),
    text: "时光",
    page: "",
    id: "timer",
  },
  {
    image: require("../images/Slider_web.png"),
    text: "工具",
    page: "",
    id: "web",
  },
  { image: require("../images/Slider_i.png"), text: "关于", page: "", id: "i" },
];
class Menu extends React.Component {
  static propTypes = {
    onMenuPress: PropTypes.func,
  };
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  loadItems() {
    let array = [];
    for (let i = 0; i < DATAS.length; i++) {
      let item = DATAS[i];
      array.push(
        <a
          onClick={() => {
            this.setState({
              index: i,
            });
            this.props.onMenuPress(item);
          }}
          key={i}
          style={{
            marginLeft: 12,
            marginRight: 12,
            flexDirection: "row",
            alignItems: "center",
            display: "flex",
          }}
        >
          {this.state.index == i ? (
            <img
              src={require("../images/Menu_you_know.png")}
              style={{ height: 21, width: 25 }}
            />
          ) : (
            <img src={item.image} style={{ height: 24, width: 24 }} />
          )}
          <div style={{ width: 4 }} />
          <div
            style={{
              fontSize: 18,
              color: this.state.index == i ? "#25a2fd" : "black",
            }}
          >
            {item.text}
          </div>
        </a>
      );
    }
    return array;
  }

  render() {
    return (
      <div
        style={{
          width: x.UI.MAIN_WIDTH,
          display: "flex",
          height: 64,
          alignItems: "center",
          display: "flex",
          backgroundColor: "white",
        }}
      >
        <img
          src={require("../images/Menu_logo.png")}
          style={{ height: "100%", width: "auto" }}
        />
        <div
          style={{
            flexDirection: "row",
            alignItems: "center",
            display: "flex",
          }}
        >
          {this.loadItems()}
        </div>
        <div
          style={{
            flex: 1,
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Input
            style={{ borderTopLeftRadius: 16, borderBottomLeftRadius: 16 }}
            placeholder="请输入关键字"
          />
          <div style={{ width: 2 }} />
          <Button
            type="primary"
            style={{ borderTopRightRadius: 16, borderBottomRightRadius: 16 }}
          >
            搜索
          </Button>
        </div>
      </div>
    );
  }
}

export default Menu;
