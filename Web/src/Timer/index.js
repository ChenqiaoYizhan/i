/*
 * @Descripttion:
  1.图片处理:
    截图: QQ发送小号，一般不作处理
    照片: QQ发送小号，然后用PS处理为 888*666大小的图片，另存为图片质量选8
  2.命名规则:
    如果只有一张图片，就不要编号了，直接 Name-MM-dd.jpg/png
    如果多张图片，编号 Name-MM-dd-n.jpg/png
    原图:
    Name-MM-dd-n-Didiao.jpg/png
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-31 11:07:49
 */

import React from "react";
import PropTypes, { string } from "prop-types";
import { Timeline, Carousel } from "antd";
import Masonry from "react-masonry-component";
import * as x from "../x";
import tinycolor from "tinycolor2";

const CDN = x.SERVICE.CDN + "Timer/";
const ITEM_WIDTH =
  (x.UI.MAIN_WIDTH - x.UI.SLIDER_WIDTH - x.UI.MAIN_INTERVAL - 12) /
    x.UI.TIMER_COLUMNS -
  8;
class Timer extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      datas: [],
    };
  }

  componentDidMount() {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
    this.initDatas();
  }

  async initDatas() {
    let result = await x.HTTP.get(
      x.SERVICE.SERVER + x.SERVICE.API.SELECT_TIMERS + "?deleted=0"
    );
    this.setState({
      datas: result,
    });
  }

  loadItems() {
    let array = [];
    for (let i = 0; i < this.state.datas.length; i++) {
      let item = this.state.datas[i];
      // 2::jpg::Zhifubao-0211 两张 图片格式 图片名
      let strings = item.images.split(/::/);
      array.push(
        <div
          key={i}
          style={{
            flexDirection: "column",
            display: "flex",
            width: ITEM_WIDTH,
            backgroundColor: "white",
            borderRadius: 8,
            margin: "6px 4px",
            boxShadow: x.UI.BOX_SHADOW,
            position: "relative",
          }}
        >
          <div
            style={{
              flexDirection: "column",
              display: "flex",
              padding: 4,
            }}
          >
            <div
              style={{
                fontSize: 14,
                color: tinycolor(0, 0, 0, 0.88).toRgbString(),
              }}
            >
              {item.title}
            </div>
            <div style={{ fontSize: 12, color: "grey" }}>{item.message}</div>
          </div>
          {this.loadBanners(strings)}
          <div
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              borderBottomRightRadius: 8,
              borderTopLeftRadius: 8,
              backgroundColor:
                x.UI.COLORS[parseInt(Math.random() * x.UI.COLORS.length)].value,
              padding: "1px 2px",
            }}
          >
            <div style={{ fontSize: 12, color: "white" }}>{item.time}</div>
          </div>
        </div>
      );
    }
    return array;
  }

  loadBanners(strings) {
    let n = parseInt(strings[0]);
    let after = strings[1];
    let name = strings[2];
    return n == 1 ? (
      <img
        src={CDN + name + "." + after}
        style={{
          width: ITEM_WIDTH,
          height: "auto",
          borderBottomRightRadius: 8,
          borderBottomLeftRadius: 8,
        }}
      />
    ) : (
      <Carousel autoplay>{this.loadImages(n, after, name)}</Carousel>
    );
  }

  loadImages(n, after, name) {
    let array = [];
    for (let i = 0; i < n; i++) {
      array.push(
        <div key={i} style={{ position: "relative" }}>
          <img
            src={CDN + `${name}-${i + 1}.${after}`}
            style={{
              width: ITEM_WIDTH,
              height: "auto",
              borderBottomRightRadius: 8,
              borderBottomLeftRadius: 8,
            }}
          />
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
          backgroundColor: "white",
          boxShadow: x.UI.BOX_SHADOW,
          borderRadius: 8,
          padding: 8,
        }}
      >
        <Masonry
          onImagesLoaded={() => {}}
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
