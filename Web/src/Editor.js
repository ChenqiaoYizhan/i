/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-19 23:22:36
 */
import React from "react";
import E from "wangeditor";
import hljs from "highlight.js";
import { Button } from "antd";

const FACE_URL = "http://www.cctv3.net/facebook";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.editor = null;
    this.html = "";
    this.state = {};
  }

  componentDidMount() {
    let that = this;
    this.editor = new E("#editDiv");
    this.editor.config.height = 512;
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
      // {
      //   title: "emoji",
      //   type: "emoji",
      //   // emoji 表情，content 是一个数组即可
      //   content: "😂 🙄".split(/\s/),
      // },
    ];
    this.editor.config.onchange = function (newHTML) {
      that.html = newHTML;
    };
    /**一定要创建 */
    this.editor.create();
  }

  componentWillUnmount() {
    this.editor.destroy();
  }

  render() {
    return (
      <div style={{ padding: 32 }}>
        <div style={{ flexDirection: "column", display: "flex" }}>
          <div id="editDiv">{this.props.defaultHTML}</div>
          <div style={{ height: 4 }} />
          <div
            style={{
              flexDirection: "row",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Button
              style={{ flex: 1 }}
              type="primary"
              onClick={() => {
                this.props.onConfirmPress(this.html);
              }}
            >
              保存
            </Button>
            <div style={{ width: 4 }} />
            <Button
              type="default"
              onClick={() => {
                this.props.onCancelPress(this.html);
              }}
            >
              取消
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Editor;
