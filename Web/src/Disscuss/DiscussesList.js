/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-01-28 19:13:28
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-02-06 00:37:37
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
import { Button, Modal } from "antd";
import moment from "moment";
import DiscussForm from "./DiscussForm";

const OS = [
  { name: "Windows 8.1", image: require("../images/Device_windows.png") },
  { name: "macOS 10.15.7", image: require("../images/Device_mac.png") },
  { name: "Linux ", image: require("../images/Device_linux.png") },
  { name: "iOS 14.3", image: require("../images/Device_iOS.png") },
  { name: "Android 7.1.1", image: require("../images/Device_android.png") },
];

class DiscussList extends React.Component {
  static propTypes = {
    onReplyPress: PropTypes.func,
    onCancel: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      datas: [],
      isShowModal: false,
    };
  }

  async initDatas() {
    let result = await x.HTTP.get(
      x.SERVICE.SERVER +
        x.SERVICE.API.SELECT_DISCUSSES +
        `?article=${this.props.article}`
    );
    let parents = result.filter((item) => item.parent == 0);
    // console.log("Parent", parents);
    let array = [];
    for (let i = 0; i < parents.length; i++) {
      let parent = parents[i];
      let children = result.filter((item) => item.parent == parent.id);
      // console.log(i, children);
      array.push({ parent: parent, children: children });
    }
    // console.log("Parent and Children", array);
    this.setState({
      datas: array,
    });
  }

  componentDidMount() {
    this.initDatas();
  }

  loadTags(text) {
    return (
      <div
        style={{
          height: 14,
          paddingLeft: 4,
          paddingRight: 4,
          borderRadius: 2,
          backgroundColor: "#" + x.MD5.dealWithSunyupeng(text).substring(0, 6),
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

  loadChildren(children) {
    let array = [];
    for (let i = 0; i < children.length; i++) {
      let item = children[i];
      array.push(
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            marginBottom: i == children.length - 1 ? 0 : 8,
          }}
          key={i}
        >
          {this.loadItem(item, false)}
        </div>
      );
    }
    return array;
  }

  loadItem(item, isParent) {
    let index = parseInt(Math.random() * OS.length);
    // console.log(item, `http://q1.qlogo.cn/g?b=qq&nk=${item.qq}&s=100`);
    let os = x.RegExp.getOS(item.userAgent);
    return (
      <div style={{ flexDirection: "row", display: "flex" }}>
        <img
          src={`http://q1.qlogo.cn/g?b=qq&nk=${item.qq}&s=100`}
          style={{
            height: 52,
            width: 52,
            marginLeft: isParent ? 0 : 64,
            borderRadius: 26,
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
              <div style={{ fontSize: 16, color: "#1790fc" }}>{item.name}</div>
              <div style={{ width: 12 }} />
              <img
                style={{
                  height: 14,
                  width: 14,
                }}
                src={os.image}
              />
              <div style={{ width: 4 }} />
              {this.loadTags(os.name)}
              <div style={{ width: 12 }} />
              {this.loadTags(x.RegExp.getBrowser(item.userAgent))}
              <div style={{ width: 12 }} />
              {this.loadTags(item.ip)}
            </div>
            <div
              style={{
                flexDirection: "row",
                alignItems: "center",
                display: "flex",
              }}
            >
              <div style={{ fontSize: 12, color: "grey" }}>
                {x.TIME.fromNow(moment(item.time))}
              </div>
              <div style={{ width: 8 }} />
              <a
                style={{ fontSize: 14, color: "blue" }}
                onClick={() => {
                  this.props.onReplyPress(isParent ? item.id : item.parent);
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
            {x.RegExp.isBase64Image(item.content) ? (
              <img
                style={{
                  width:
                    (x.UI.MAIN_WIDTH - x.UI.MAIN_INTERVAL - x.UI.SLIDER_WIDTH) *
                    0.618,
                  height: "auto",
                }}
                src={item.content}
              />
            ) : (
              <div dangerouslySetInnerHTML={{ __html: item.content }} />
            )}
          </div>
        </div>
      </div>
    );
  }

  loadItems() {
    let array = [];
    for (let i = 0; i < this.state.datas.length; i++) {
      let item = this.state.datas[i];
      let parent = item.parent;
      array.push(
        <div
          key={i}
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
            {this.loadItem(parent, true)}
            {item.children.length == 0 ? null : (
              <div style={{ flexDirection: "column", display: "flex" }}>
                <div style={{ height: 12 }} />
                {this.loadChildren(item.children)}
              </div>
            )}
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
          backgroundColor: "white",
          flexDirection: "column",
          display: "flex",
        }}
      >
        {this.loadItems()}
        <Modal
          title="请选择回复方式进行回复 ( 推荐奢华涂鸦模式 )"
          visible={this.state.isShowModal}
          footer={null}
          onCancel={() => {
            this.props.onCancel();
            this.setState({
              isShowModal: false,
            });
          }}
          centered={true}
          destroyOnClose={true}
          zIndex={x.UI.ZINDEX.DIALOG}
          width={x.UI.MAIN_WIDTH - x.UI.SLIDER_WIDTH + 32}
        >
          <DiscussForm
            isHideTiaodou={true}
            width={
              x.UI.MAIN_WIDTH - 16 - x.UI.SLIDER_WIDTH - x.UI.MAIN_INTERVAL
            }
            onConfirmPress={(body) => {
              this.props.onConfirmPress(body);
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

export default DiscussList;
