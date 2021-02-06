/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-31 11:07:49
 */

import React from "react";
import PropTypes from "prop-types";
import { Timeline } from "antd";
import Masonry from "react-masonry-component";
import * as x from "../x";

var selectPasters = require("../datas/selectPasters.json");
class Timer extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      datas: [],
    };
  }

  componentDidMount() {
    this.setState({
      datas: selectPasters,
    });
  }

  loadItems() {
    let array = [];
    for (let i = 0; i < this.state.datas.length; i++) {
      let item = this.state.datas[i];
      array.push(
        <div
          key={i}
          style={{
            flexDirection: "column",
            display: "flex",
            width:
              (x.UI.MAIN_WIDTH - x.UI.SLIDER_WIDTH - x.UI.MAIN_INTERVAL + 8) /
                x.UI.TIMER_COLUMNS -
              8,
            backgroundColor: "white",
            borderRadius: 8,
            padding: 4,
            margin: "6px 4px",
            boxShadow: x.UI.BOX_SHADOW,
          }}
        >
          <div
            style={{
              flexDirection: "row",
              alignItems: "center",
              display: "flex",
            }}
          >
            <img
              src={require("../images/i.jpg")}
              style={{ height: 36, width: 36, borderRadius: 18 }}
            />
            <div style={{ width: 4 }} />
            <div
              style={{
                justifyContent: "space-around",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ color: "black", fontSize: 14 }}>陈桥驿站</div>
              <div style={{ fontSize: 12, color: "grey" }}>{item.time}</div>
            </div>
          </div>
          <div style={{ fontSize: 12, color: "grey" }}>{item.message}</div>
        </div>
      );
    }
    return array;
  }

  render() {
    return (
      <div
        style={{
          flex: 1,
          flexDirection: "column",
          display: "flex",
          marginLeft: -4,
          marginRight: -4,
        }}
      >
        <Masonry
          onImagesLoaded={() => {}}
          onLayoutComplete={(laidOutItems) => {}}
          onRemoveComplete={(removedItems) => {}}
        >
          {this.loadItems()}
        </Masonry>
      </div>
    );
  }
}

export default Timer;