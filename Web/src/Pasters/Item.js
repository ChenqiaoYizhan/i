/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-23 22:21:37
 */
import React from "react";

const requireContext = require.context("../images", true, /^\.\/.*\.gif$/);
const images = requireContext.keys().map(requireContext);

// 尺寸 235 × 68
class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // console.log(images);
  }

  loadPasters() {}

  render() {
    let item = this.props.item;
    let index = item.index;
    let color = item.color;
    return (
      <div
        style={{ flexDirection: "column" }}
        draggable={true}
        onMouseDown={(e) => {
          this.props.onPress();
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
            height: 68,
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
          <div style={{ fontSize: 12, color: color }}>陈桥驿站</div>
        </div>
      </div>
    );
  }
}

export default Item;
