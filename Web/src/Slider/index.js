/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-23 16:52:00
 */

import React from "react";
import PropTypes from "prop-types";
import Slider_i_background from "../images/Slider_i_background.jpg";
import * as x from "../x";
import Header from "./Header";
import BookCloud from "./BookCloud";

const DATAS = [
  {
    image: require("../images/Slider_home.png"),
    text: "首页",
    page: "",
    id: "home",
  },
  {
    image: require("../images/Slider_book.png"),
    text: "分类",
    page: "",
    id: "book",
  },
  { image: require("../images/Slider_i.png"), text: "关于", page: "", id: "i" },
  {
    image: require("../images/Slider_web.png"),
    text: "工具",
    page: "",
    id: "web",
  },
  {
    image: require("../images/Slider_timer.png"),
    text: "时光",
    page: "",
    id: "timer",
  },
  {
    image: require("../images/Slider_paster.png"),
    text: "留言",
    page: "",
    id: "paster",
  },
];

class Slider extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div
        style={{
          flexDirection: "column",
          display: "flex",
        }}
      >
        <Header />
        <div style={{ height: 8 }} />
      </div>
    );
  }
}

export default Slider;
