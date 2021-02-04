/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-01-21 23:59:01
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-02-04 11:54:13
 */
import React from "react";
import PropTypes from "prop-types";
import * as x from "../x";
import { Button } from "antd";
import moment from "moment";

var selectPasters = require("../datas/selectPasters.json");

class List extends React.Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
    };
  }

  componentDidMount() {
    this.setState({
      datas: selectPasters.slice(0, 10),
    });
  }

  loadIconText(image, text) {
    return (
      <div
        style={{ flexDirection: "row", alignItems: "center", display: "flex" }}
      >
        <img src={image} style={{ height: 16, width: 16 }} />
        <div style={{ width: 4 }} />
        <div style={{ fontSize: 12, color: "black" }}>{text}</div>
      </div>
    );
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
            backgroundColor: "white",
            boxShadow: x.UI.BOX_SHADOW,
            borderRadius: 8,
            marginBottom: i == this.state.datas.length - 1 ? 0 : 8,
            padding: 8,
          }}
        >
          <div style={{ display: "flex" }}>
            <img
              src={require('../images/Article_default.jpg')}
              style={{
                height: 135,
                width: 240,
                borderTopLeftRadius: 8,
                borderBottomLeftRadius: 8,
              }}
            />
            <div style={{ width: 8 }} />
            <div
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
                display: "flex",
                flex: 1,
              }}
            >
              <div
                style={{ flexDirection: "column", display: "flex", flex: 1 }}
              >
                <div style={{ fontSize: 18, color: "black" }}>
                  React + Spring Boot 重构博客后的第一篇文章 ( Hello World )
                </div>
                <div style={{ height: 1, background: "#f0f0f0", margin: 4 }} />
                <div style={{ fontSize: 14, color: "grey", flexWrap: "wrap" }}>
                  {item.message}
                </div>
              </div>
              <div
                style={{
                  flexDirection: "row",
                  alignItems: "flex-end",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    display: "flex",
                    flex: 1,
                  }}
                >
                  {this.loadIconText(
                    require("../images/List_date.png"),
                    moment().format("YYYY-MM-DD HH:mm:ss")
                  )}
                  <div style={{ width: 16 }} />
                  {this.loadIconText(
                    require("../images/List_see.png"),
                    parseInt(Math.random() * 100)
                  )}
                  <div style={{ width: 16 }} />
                  {this.loadIconText(
                    require("../images/List_discuss.png"),
                    parseInt(Math.random() * 100)
                  )}
                </div>
                <Button
                  type="primary"
                  onClick={() => {
                    // window.open(`../Reader/${Math.random()}`, "_blank");
                  }}
                >
                  阅读全文
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return array;
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {this.loadItems()}
      </div>
    );
  }
}

export default List;
