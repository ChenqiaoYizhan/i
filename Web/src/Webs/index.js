/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-01-21 23:59:01
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-23 23:46:46
 */
import React from "react";
import PropTypes from "prop-types";
import { Input, Button } from "antd";

import * as x from "../x";

const DATAS = [
  {
    id: 1,
    title: "数据结构与算法",
    message: "",
    children: [
      { id: "", title: "LibreOJ", message: "NOIP刷题", web: "https://loj.ac/" },
    ],
  },
  {
    id: 2,
    title: "白嫖 ( 部分资源也花钱的哦 )",
    message: "不是我给你吹，白嫖这方面我从来就没输给过谁。",
    children: [
      {
        id: "",
        title: "看影客",
        message: "Chrome F12抓包找.m3u8",
        web: "http://www.kanyingke.com/",
      },
      {
        id: "",
        title: "黑盒",
        message: "MP3免费下载",
        web: "http://www.heibox.cn/",
      },
      {
        id: "",
        title: "MyFreeMP3",
        message: "MP3免费下载",
        web: "http://tool.liumingye.cn/music/?page=searchPage",
      },
    ],
  },
  {
    id: 3,
    title: "开发与辅助设计",
    message: "",
    children: [
      {
        id: "",
        title: "爱莫助手",
        message: "手机投屏到电脑 ( Mac版 )",
        web: "http://web.airmore.cn/",
      },
      {
        id: "",
        title: "Maven",
        message: "Maven自助下载",
        web: "https://mvnrepository.com/",
      },
      {
        id: "",
        title: "高德地图",
        message: "高德地图WEB版开发文档",
        web: "https://lbs.amap.com/api/jsapi-v2/example/3d/map3d",
      },
      {
        id: "",
        title: "365编辑器",
        message: "微信公众号文章编辑工具",
        web: "https://www.365editor.com/",
      },
      {
        id: "",
        title: "爱莫助手",
        message: "手机投屏到电脑 ( Mac版 )",
        web: "http://web.airmore.cn/",
      },
      {
        id: "",
        title: "Maven",
        message: "Maven自助下载",
        web: "https://mvnrepository.com/",
      },
    ],
  },
  { id: 4, title: "微信公众号文章摘选", message: "", children: [] },
];

class Webs extends React.Component {
  static propTypes = {
    onItemPress: PropTypes.func,
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  loadItems() {
    let array = [];
    for (let i = 0; i < DATAS.length; i++) {
      let item = DATAS[i];
      array.push(
        <div key={i} style={{ flexDirection: "column", display: "flex" }}>
          {this.loadParent(item.title, item.message)}
          <div
            style={{ flexDirection: "row", flexWrap: "wrap", display: "flex" }}
          >
            {this.loadChildren(item.children)}
          </div>
          <div style={{ height: i == DATAS.length - 1 ? 0 : 16 }} />
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
          <div style={{ width: 4, backgroundColor: "grey", height: 18 }} />
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
        <div
          key={i}
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
            padding: 2,
            margin: 2,
            borderRadius: 4,
            width: (x.UI.MAIN_WIDTH - x.UI.SLIDER_WIDTH - 36) / 3,
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
        </div>
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
        }}
      >
        {this.loadItems()}
      </div>
    );
  }
}

export default Webs;
