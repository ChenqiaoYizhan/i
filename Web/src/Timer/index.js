/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-24 19:10:10
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
            width: (x.UI.MAIN_WIDTH - x.UI.SLIDER_WIDTH - x.UI.MAIN_INTERVAL) / x.UI.TIMER_COLUMNS - 8,
            backgroundColor: "white",
            borderRadius: 8,
            padding: 4,
            margin: 4,
            boxShadow: "0 0 4px 2px rgba(0, 0, 0, 0.24)",
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
        }}
      >
        <Masonry
          onImagesLoaded={this.handleImagesLoaded}
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