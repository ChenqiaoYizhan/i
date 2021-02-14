/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-01-26 23:50:58
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-02-05 23:43:12
 */
import { color } from "echarts";
import React from "react";
import CanvasDraw from "react-canvas-draw";
import * as x from "../x";
import { Input } from "antd";
import Editor from "../Editor";
import CanvasPad from "./CanvasPad";
import { Button, notification } from "antd";
import PropTypes from "prop-types";
import moment from "moment";

const HEIGHT_WIDTH_RATE = 4;

const DATAS = [
  {
    key: "text",
    name: "低调的文字模式",
    image: require('../images/Huya_smile.png'),
  },
  {
    key: "paint",
    name: "奢华的涂鸦模式",
    image: require('../images/Huya_you_know.png'),
  },
];

class DiscussForm extends React.Component {
  static propTypes = {
    onConfirmPress: PropTypes.func.isRequired,
    width: PropTypes.number.isRequired,
    isHideTiaodou: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.signCanvas = null;
    this.nameText = null;
    this.emailText = null;
    this.blogText = null;
    this.state = {
      pencile: {
        width: 2,
        color: "#795548",
      },
      tab: 1,
    };
  }

  loadTabs() {
    let array = [];
    for (let i = 0; i < DATAS.length; i++) {
      let item = DATAS[i];
      array.push(
        <a
          key={i}
          onClick={() => {
            this.setState({
              tab: i,
            });
          }}
          style={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            paddingTop: 4,
            padding: 4,
            paddingLeft: 8,
            paddingRight: 8,
            borderTopLeftRadius: i == 0 ? 8 : 0,
            borderTopRightRadius: i == DATAS.length - 1 ? 8 : 0,
            backgroundColor: i == this.state.tab ? "#f24e4e" : "#e3e6ec",
          }}
        >
          <img src={item.image} style={{ height: 24, width: 28 }} />
          <div style={{ width: 2 }} />
          <div
            style={{
              color: i == this.state.tab ? "white" : "grey",
              fontSize: 14,
            }}
          >
            {item.name}
          </div>
        </a>
      );
    }
    return array;
  }

  componentDidMount() {}

  createInsertDiscussBody(content) {
    return {
      id: null,
      article: null,
      parent: 0,
      qq: this.emailText.input.value,
      name: this.nameText.input.value,
      blog: this.blogText.input.value,
      ip: null,
      content: content,
      time: moment().format("YYYY-MM-DD HH:mm:ss"),
      deleted: 0,
    };
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
        {this.props.hasOwnProperty("isHideTiaodou") &&
        this.props.isHideTiaodou ? null : (
          <div
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={require("../images/Discuss_tiaodou.gif")}
              style={{ height: 98, width: 98 }}
            />
            <div style={{ width: 12 }} />
            <div style={{ fontSize: 24, color: "black" }}>评论</div>
          </div>
        )}
        <div
          style={{
            flexDirection: "row",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Input
            addonBefore="昵称 ( 必填 )"
            placeholder="请输入昵称"
            ref={(nameText) => (this.nameText = nameText)}
          />
          <div style={{ width: 8 }} />
          <Input
            ref={(emailText) => (this.emailText = emailText)}
            addonBefore="QQ邮箱 ( 必填 )"
            suffix="@QQ.com"
            placeholder="请输入QQ邮箱"
          />
        </div>
        <div style={{ height: 4 }} />
        <Input
          addonBefore="个人博客主页 ( 选填 )"
          defaultValue="http://"
          ref={(blogText) => (this.blogText = blogText)}
        />
        <div style={{ height: 8 }} />
        <div
          style={{
            flexDirection: "row",
            alignItems: "center",
            display: "flex",
          }}
        >
          <div style={{ flex: 1 }} />
          {this.loadTabs()}
        </div>
        {this.state.tab == 0 ? (
          <Editor
            menus={["emoticon", "foreColor"]} // 不配置则默认显示所有
            width={this.props.width}
            height={this.props.width / HEIGHT_WIDTH_RATE}
            onConfirmPress={(html) => {
              if (
                x.RegExp.isQQ(this.emailText.input.value) &&
                x.RegExp.isName(this.nameText.input.value) &&
                x.RegExp.isDiscussContent(html)
              ) {
                this.props.onConfirmPress(this.createInsertDiscussBody(html));
              }
            }}
          />
        ) : this.state.tab == 1 ? (
          <CanvasPad
            height={this.props.width / HEIGHT_WIDTH_RATE}
            width={this.props.width}
            onConfirmPress={(base64) => {
              if (
                x.RegExp.isQQ(this.emailText.input.value) &&
                x.RegExp.isName(this.nameText.input.value) &&
                x.RegExp.isDiscussContent(base64)
              ) {
                this.props.onConfirmPress(this.createInsertDiscussBody(base64));
              }
            }}
          />
        ) : null}
      </div>
    );
  }
}

export default DiscussForm;
