/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-02-04 23:08:11
 */
import React from "react";
import E from "wangeditor";
import hljs from "highlight.js";
import { Button } from "antd";
import PropTypes from "prop-types";
import * as x from "./x";

const FACE_URL = "http://www.cctv3.net/facebook";
class Editor extends React.Component {
  static propTypes = {
    // menus: PropTypes.array, // 不配置则默认显示所有
    height: PropTypes.number.isRequired,
    onConfirmPress: PropTypes.func.isRequired,
    defaultHTML: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.editor = null;
    this.html = "";
    this.state = {};
  }

  componentDidMount() {
    let that = this;
    this.editor = new E("#editDiv");
    this.editor.config.height =
      this.props.height == undefined ? 256 : this.props.height;
    // 配置代码高亮
    this.editor.highlight = hljs;
    // 配置表情
    this.editor.config.emotions = [
      {
        title: "QQ",
        type: "image", // emoji / image
        content: Array.from({ length: 120 }, (_, i) => ({
          alt: i,
          src: `${FACE_URL}/${i + 1}@QQ.gif`,
        })),
      },
      {
        title: "我是一颗小虎牙",
        type: "image", // emoji / image
        content: Array.from({ length: 39 }, (_, i) => ({
          alt: i,
          src: `${FACE_URL}/${i + 1}@Huya.png`,
        })),
      },
    ];
    // 显示颜色
    this.editor.config.colors = x.UI.COLORS.map((item) => item.value);
    // 设置显示的菜单项
    if (this.props.menus !== undefined) {
      this.editor.config.menus = this.props.menus;
    } else {
    }
    this.editor.config.onchange = function (newHTML) {
      that.html = newHTML;
    };
    /**一定要创建 */
    this.editor.create();
  }
  
  componentWillReceiveProps(nextProps) {
    x.CONSOLE.e(nextProps.defaultHTML);
    this.editor.txt.html(
      x.RegExp.isEmpty(nextProps.defaultHTML) ? "" : nextProps.defaultHTML
    );
  }

  componentWillUnmount() {
    this.editor.destroy();
  }

  render() {
    return (
      <div style={{ flexDirection: "column", display: "flex" }}>
        <div id="editDiv" />
        <div style={{ height: 4 }} />
        <Button
          style={{ flex: 1 }}
          type="primary"
          onClick={() => {
            this.props.onConfirmPress(this.html);
            console.log(this.html);
          }}
        >
          保存
        </Button>
      </div>
    );
  }
}

export default Editor;
