/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-01-21 23:59:01
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-02-04 23:22:53
 */
import React from "react";
import PropTypes from "prop-types";
import * as x from "../x";
import { Button } from "antd";
import { withRouter } from "react-router";
import moment from "moment";
import Tags from "../Tags";

const images4mao8mao = Array.from(
  { length: 20 },
  (_, i) => x.SERVICE.CDN + `Shupofan/${i + 1}.jpg`
).sort((a, b) => Math.random() - 0.5);
class List extends React.Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
    };
  }

  async initDatas() {
    let result = await x.HTTP.get(
      x.SERVICE.SERVER + x.SERVICE.API.SELECT_HOME_ARTICLES + "?deleted=0"
    );
    this.setState({
      datas: result,
    });
  }

  componentDidMount() {
    this.initDatas();
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
        <a
          key={i}
          onClick={() => {
            window.open(`../Article?id=${item.id}`, "_blank");
            // this.props.history.push({
            //   pathname: `Article?id=${item.id}`,
            // });
          }}
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
          <div style={{ display: "flex", position: "relative" }}>
            <img
              src={
                x.RegExp.isEmpty(item.image)
                  ? images4mao8mao[i % 20]
                  : item.image
              }
              style={{
                height: 135,
                width: 240,
                borderTopLeftRadius: 8,
                borderBottomLeftRadius: 8,
              }}
            />
            <div
              style={{
                justifyItems: "center",
                alignItems: "center",
                display: "flex",
                padding: "1px 4px",
                flexDirection: "row",
                position: "absolute",
                top: 0,
                left: 0,
                borderTopLeftRadius: 8,
                borderBottomRightRadius: 8,
                backgroundColor:
                  x.UI.COLORS[parseInt(x.UI.COLORS.length * Math.random())]
                    .value,
              }}
            >
              <img
                src={require("../images/Home_calendar.png")}
                style={{ width: 16, height: 16 }}
              />
              <div style={{ width: 4 }} />
              <div style={{ color: "white", fontSize: 12 }}>
                {(item.timeUpdate == item.timeCreate
                  ? "创建于: "
                  : "修改于: ") + moment(item.timeUpdate).format("YYYY-MM-DD")}
              </div>
            </div>
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
                <div style={{ fontSize: 18, color: "black" }}>{item.title}</div>
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
                    require("../images/List_look.png"),
                    `${item.nLook} 阅读`
                  )}
                  <div style={{ width: 16 }} />
                  {this.loadIconText(
                    require("../images/List_love.png"),
                    `${item.nLove} 点赞`
                  )}
                </div>
                <Tags string={item.books} borderStyle="fill" />
              </div>
            </div>
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
          display: "flex",
          flexDirection: "column",
        }}
      >
        {this.loadItems()}
      </div>
    );
  }
}

export default withRouter(List);
