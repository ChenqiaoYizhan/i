/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-30 12:34:08
 */
import React from "react";
import * as x from "../x";
import PropTypes from "prop-types";

const requireContext = require.context("../images", true, /^\.\/.*\.gif$/);
const images = requireContext.keys().map(requireContext);
const ALL_PASTERS_COLORS = [
  "#b42648",
  "#63bf22",
  "#96490b",
  "#ea252d",
  "#045384",
  "#fac023",
  "#471162",
  "#666666",
];
class Item extends React.Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    onMoved: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.moveView = null;
    this.state = {
      translateY: parseInt(
        Math.random() * (((x.UI.MAIN_WIDTH - x.UI.SLIDER_WIDTH) * 9) / 16 - 235)
      ),
      translateX: parseInt(
        Math.random() *
          (x.UI.MAIN_WIDTH - x.UI.MAIN_INTERVAL - x.UI.SLIDER_WIDTH - 235)
      ),
    };
  }

  componentDidMount() {
    // console.log(images);
  }

  render() {
    let item = this.props.item;
    let index = item.index;
    let color = ALL_PASTERS_COLORS[index];
    var that = this;
    return (
      <a
        ref={(moveView) => (this.moveView = moveView)}
        onMouseDown={(e) => {
          that.props.onMoved(item);
          var e = e || window.event;
          // 拖拽前
          that.moveView.startX = e.clientX - that.moveView.offsetLeft;
          that.moveView.startY = e.clientY - that.moveView.offsetTop;
          // 鼠标移动
          document.onmousemove = function (e) {
            var e = e || window.event;
            that.moveView.style.left = e.clientX - that.moveView.startX + "px";
            that.moveView.style.top = e.clientY - that.moveView.startY + "px";
          };
          // 鼠标抬起，停止移动
          document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
          };
        }}
        style={{
          position: "absolute",
          left: `${this.state.translateX}px`,
          top: `${this.state.translateY}px`,
          zIndex: item.zIndex,
        }}
      >
        <div
          style={{
            height: 68,
            width: 235,
            backgroundImage: `url(${images[3 * index]})`,
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
            display: "flex",
            paddingLeft: 20,
            paddingRight: 8,
            paddingBottom: 4,
          }}
        >
          <div style={{ fontSize: 12, color: color }}>{`${item.id} 楼`}</div>
          <div style={{ fontSize: 12, color: color }}>{item.time}</div>
        </div>
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            width: 234,
            backgroundImage: `url(${images[3 * index + 1]})`,
            backgroundPositionX: -2,
            paddingLeft: 20,
            paddingRight: 4,
            paddingTop: 4,
            paddingBottom: 4,
          }}
        >
          <div style={{ fontSize: 12, color: color }}>{item.message}</div>
        </div>
        <div
          style={{
            height: 72,
            width: 235,
            backgroundImage: `url(${images[3 * index + 2]})`,
            flexDirection: "row",
            alignItems: "center",
            display: "flex",
            paddingLeft: 20,
            paddingRight: 16,
            paddingBottom: 4,
            justifyContent: "flex-end",
          }}
        >
          <div style={{ fontSize: 12, color: color }}>{item.title}</div>
        </div>
      </a>
    );
  }
}

export default Item;
