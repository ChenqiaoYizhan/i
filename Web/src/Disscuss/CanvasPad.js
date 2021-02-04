/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-01-28 19:13:28
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-02-04 23:05:18
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

const COLORS = x.UI.COLORS;

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

class CanvasPad extends React.Component {
  static propTypes = {
    onConfirmPress: PropTypes.func,
    width: PropTypes.number,
  };
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
          canvasHeight={this.props.height}
        />
        <div style={{ height: 8, background: "#f0f0f0" }} />
        <Button
          type="primary"
          onClick={() => {
            this.props.onConfirmPress(
              this.signCanvas.canvasContainer.childNodes[1].toDataURL()
            );
          }}
        >
          保存
        </Button>
      </div>
    );
  }
}

export default CanvasPad;