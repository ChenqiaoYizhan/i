/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-01-28 19:13:28
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-31 11:06:47
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
import { Drawer, Modal } from "antd";
import Discuss from ".";

var selectPasters = require("../datas/selectPasters.json");

const OS = [
  { name: "Windows 8.1", image: require("../images/Device_windows.png") },
  { name: "macOS 10.15.7", image: require("../images/Device_mac.png") },
  { name: "Linux ", image: require("../images/Device_linux.png") },
  { name: "iOS 14.3", image: require("../images/Device_iOS.png") },
  { name: "Android 7.1.1", image: require("../images/Device_android.png") },
];

class List extends React.Component {
  static propTypes = {
    onReplyPress: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      datas: [],
      isShowModal: false,
    };
  }

  componentDidMount() {
    this.setState({
      datas: selectPasters,
    });
  }

  loadTags(text) {
    return (
      <div
        style={{
          height: 14,
          paddingLeft: 4,
          paddingRight: 4,
          borderRadius: 2,
          backgroundColor: x.UI.randomColor(),
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <div
          style={{ fontSize: 12, color: "white", WebkitTextSizeAdjust: "none" }}
        >
          {text}
        </div>
      </div>
    );
  }

  loadChildren(n) {
    let array = [];
    for (let i = 0; i < n; i++) {
      array.push(
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            marginBottom: i == n - 1 ? 0 : 8,
          }}
          key={i}
        >
          {this.loadItem(false)}
        </div>
      );
    }
    return array;
  }

  loadItem(isParent) {
    let item = this.props.item;
    let index = parseInt(Math.random() * OS.length);
    return (
      <div style={{ flexDirection: "row", display: "flex" }}>
        <img
          src={require("../images/i.jpg")}
          style={{
            height: 56,
            width: 56,
            marginLeft: isParent ? 0 : 68,
            borderRadius: 28,
            boxShadow: x.UI.BOX_SHADOW,
          }}
        />
        <div style={{ width: 12 }} />
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            flex: 1,
          }}
        >
          <div
            style={{
              flexDirection: "row",
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                flexDirection: "row",
                alignItems: "center",
                display: "flex",
              }}
            >
              <div style={{ fontSize: 14, color: "black" }}>陈桥驿站</div>
              <div style={{ width: 12 }} />

              <img
                style={{
                  height: 14,
                  width: 14,
                }}
                src={OS[index].image}
              />

              <div style={{ width: 4 }} />
              {this.loadTags(OS[index].name)}
              <div style={{ width: 12 }} />
              {this.loadTags("Google浏览器")}
              <div style={{ width: 12 }} />
              {this.loadTags("192.168.0.1")}
            </div>
            <div
              style={{
                flexDirection: "row",
                alignItems: "center",
                display: "flex",
              }}
            >
              <div style={{ fontSize: 12, color: "grey" }}>
                {`${parseInt(Math.random() * 100)}天`}
              </div>
              <div style={{ width: 8 }} />
              <a
                style={{ fontSize: 14, color: "blue" }}
                onClick={() => {
                  this.setState({
                    isShowModal: true,
                  });
                }}
              >
                回复
              </a>
            </div>
          </div>
          <div style={{ height: 4 }} />
          <div
            style={{
              backgroundColor: "#f2f6fc",
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              padding: 8,
            }}
          >
            <div style={{ fontSize: 14, color: "black" }}>
              {
                selectPasters[parseInt(Math.random() * selectPasters.length)]
                  .message
              }
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    let n = parseInt(Math.random() * 5);
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
            flexDirection: "column",
            display: "flex",
            padding: 12,
            borderRadius: 8,
            marginTop: 4,
            marginBottom: 4,
            boxShadow: x.UI.BOX_SHADOW,
          }}
        >
          {this.loadItem(true)}
          {n == 0 ? null : (
            <div style={{ flexDirection: "column", display: "flex" }}>
              <div style={{ height: 12 }} />
              {this.loadChildren(n)}
            </div>
          )}
        </div>
        <Modal
          title="请选择回复方式进行回复 ( 推荐奢华涂鸦模式 )"
          visible={this.state.isShowModal}
          footer={null}
          onCancel={() => {
            this.setState({
              isShowModal: false,
            });
          }}
          centered
          width={x.UI.MAIN_WIDTH - x.UI.SLIDER_WIDTH + 32}
        >
          <Discuss
            width={x.UI.MAIN_WIDTH - 16 - x.UI.SLIDER_WIDTH}
            onConfirmPress={() => {
              this.setState({
                isShowModal: false,
              });
            }}
          />
        </Modal>
      </div>
    );
  }
}

export default List;
