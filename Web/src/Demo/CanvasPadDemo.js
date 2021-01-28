/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-01-26 23:50:58
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-28 21:57:54
 */
import { color } from "echarts";
import React from "react";
import CanvasDraw from "react-canvas-draw";
import * as x from "../x";
import PropTypes from "prop-types";

const COLORS = [
  { title: "基佬紫", name: "purple", value: "#dc27b0" },
  { title: "闷骚红", name: "red", value: "#ff5252" },
  { title: "天空蓝", name: "blue", value: "#4481ff" },
  { title: "荷花粉", name: "pink", value: "#ff4081" },
  { title: "深邃蓝", name: "indigo", value: "#3f51b5" },
  { title: "水墨绿", name: "teal", value: "#009688" },
  { title: "香蕉黄", name: "amber", value: "#ffc107" },
  { title: "苹果绿", name: "green", value: "#4caf50" },
  { title: "活力橙", name: "orange", value: "#ff9800" },
  { title: "咖啡棕", name: "brown", value: "#795548" },
];

const WIDTH = ["细", "中", "宽"];

const TOOLS = [
  {
    id: "undo",
    image: require("../images/iPad_undo.png"),
    name: "撤销",
  },
  {
    id: "clear",
    image: require("../images/iPad_clear.png"),
    name: "清除",
  },
];

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.signCanvas = null;
    this.state = {
      pencile: {
        width: 2,
        color: "#795548",
      },
    };
  }

  componentDidMount() {}

  loadColors() {
    let array = [];
    for (let i = 0; i < COLORS.length; i++) {
      let item = COLORS[i];
      array.push(
        <a
          onClick={() => {
            this.state.pencile.color = item.value;
            this.setState({
              pencile: this.state.pencile,
            });
          }}
          key={i}
          style={{
            borderRadius: item.value == this.state.pencile.color ? 12 : 8,
            backgroundColor: item.value,
            height: item.value == this.state.pencile.color ? 24 : 16,
            width: item.value == this.state.pencile.color ? 24 : 16,
          }}
        ></a>
      );
    }
    return array;
  }

  loadWidths() {
    let array = [];
    for (let i = 0; i < 3; i++) {
      array.push(
        <a
          onClick={() => {
            this.state.pencile.width = parseInt(Math.pow(2, i));
            this.setState({
              pencile: this.state.pencile,
            });
          }}
          key={i}
          style={{
            fontSize: 14,
            color:
              parseInt(this.state.pencile.width / 2) == i
                ? this.state.pencile.color
                : "grey",
          }}
        >
          {WIDTH[i]}
        </a>
      );
    }
    return array;
  }

  laodTools() {
    let array = [];
    for (let i = 0; i < TOOLS.length; i++) {
      let item = TOOLS[i];
      array.push(
        <a
          onClick={() => {
            switch (item.id) {
              case "undo":
                this.signCanvas.undo();
                break;

              case "clear":
                this.signCanvas.clear();
                break;
              default:
                break;
            }
          }}
          key={i}
          style={{
            flexDirection: "row",
            alignItems: "center",
            display: "flex",
          }}
        >
          <img src={item.image} style={{ height: 16, width: 16 }} />
        </a>
      );
    }
    return array;
  }

  loadGroup(title, views, flex) {
    return (
      <div
        style={{
          marginLeft: 12,
          marginRight: 12,
          flexDirection: "row",
          alignItems: "center",
          display: "flex",
          flex: flex,
        }}
      >
        <div style={{ fontSize: 14, color: "black" }}>{`${title}:`}</div>
        <div style={{ width: 12 }} />
        <div
          style={{
            flexDirection: "row",
            alignItems: "center",
            display: "flex",
            justifyContent: "space-around",
            flex: 1,
          }}
        >
          {views}
        </div>
      </div>
    );
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
        <div
          style={{
            flexDirection: "row",
            alignItems: "center",
            display: "flex",
            height: 36,
          }}
        >
          {this.loadGroup("画笔颜色", this.loadColors(), 3)}
          <div style={{ height: 24, width: 1, backgroundColor: "#f0f0f0" }} />
          {this.loadGroup("笔尖粗细", this.loadWidths(), 1)}
          <div style={{ height: 24, width: 1, backgroundColor: "#f0f0f0" }} />
          {this.loadGroup("画板操作", this.laodTools(), 1)}
        </div>
        <div style={{ height: 1, backgroundColor: "#f0f0f0", width: "100%" }} />
        <CanvasDraw
          ref={(signCanvas) => (this.signCanvas = signCanvas)}
          brushColor={this.state.pencile.color}
          brushRadius={this.state.pencile.width}
          lazyRadius={0}
          canvasWidth={
            this.props.width == undefined
              ? x.UI.MAIN_WIDTH - x.UI.MAIN_INTERVAL - x.UI.SLIDER_WIDTH
              : this.props.width
          }
          onChange={() => {
            console.log(
              this.signCanvas.canvasContainer.childNodes[1].toDataURL()
            );
          }}
          canvasHeight={256}
        />
      </div>
    );
  }
}
