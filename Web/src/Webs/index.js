/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-01-21 23:59:01
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-29 18:45:51
 */
import React from "react";
import PropTypes from "prop-types";
import { Input, Button } from "antd";

import * as x from "../x";

class Webs extends React.Component {
  static propTypes = {
    onItemPress: PropTypes.func,
  };
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
    };
  }

  async initDatas() {
    let result = await x.HTTP.get(
      x.SERVICE.SERVER + x.SERVICE.API.SELECT_WEBS + "?deleted=0"
    );
    let array = [];
    let parents = result.filter((item) => item.parent == 0);
    for (let i = 0; i < parents.length; i++) {
      let parent = parents[i];
      let children = result.filter((item) => item.parent == parent.id);
      array.push({ parent: parent, children: children });
    }
    this.setState({
      datas: array,
    });
  }

  componentDidMount() {
    this.initDatas();
  }

  loadItems() {
    let array = [];
    for (let i = 0; i < this.state.datas.length; i++) {
      let item = this.state.datas[i];
      let parent = item.parent;
      array.push(
        <div key={i} style={{ flexDirection: "column", display: "flex" }}>
          {this.loadParent(parent.title, parent.message)}
          <div
            style={{ flexDirection: "row", flexWrap: "wrap", display: "flex" }}
          >
            {this.loadChildren(item.children)}
          </div>
          <div style={{ height: i == this.state.datas.length - 1 ? 0 : 16 }} />
        </div>
      );
    }
    return array;
  }

  loadParent(title, message) {
    return (
      <div style={{ flexDirection: "column", display: "flex" }}>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 4,
              backgroundColor: x.UI.randomColor(),
              height: 18,
            }}
          />
          <div style={{ width: 4 }} />
          <div style={{ fontSize: 18, color: "black" }}>{title}</div>
        </div>
        <div style={{ height: 4 }} />
        <div
          style={{
            fontSize: 14,
            color: "grey",
            display: "inline-block",
            display: "-webkit-inline-flex",
            textOverflow: "ellipsis",
            WebkitLineClamp: 1,
          }}
        >
          {message}
        </div>
      </div>
    );
  }
  
  loadChildren(children) {
    let array = [];
    for (let i = 0; i < children.length; i++) {
      let item = children[i];
      array.push(
        <a
          onClick={() => {
            window.open(item.url, "_blank");
          }}
          key={i}
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
            padding: 2,
            margin: 2,
            borderRadius: 4,
            width:
              (x.UI.MAIN_WIDTH - x.UI.SLIDER_WIDTH - x.UI.MAIN_INTERVAL) / 3 -
              9,
            backgroundColor: "#f0f0f0",
          }}
        >
          <img
            src={require("../images/i.jpg")}
            style={{ height: 48, width: 48, borderRadius: 4 }}
          />
          <div style={{ width: 8 }} />
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <div style={{ fontSize: 14, color: "black" }}>{item.title}</div>
            <div style={{ fontSize: 12, color: "grey" }}>{item.message}</div>
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
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          borderRadius: 8,
          padding: 8,
          minHeight: document.body.clientHeight - x.UI.MENU_HEIGHT - 32,
          boxShadow: x.UI.BOX_SHADOW,
        }}
      >
        {this.loadItems()}
      </div>
    );
  }
}

export default Webs;
