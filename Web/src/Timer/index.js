/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-31 11:07:49
 */

import React from "react";
import PropTypes from "prop-types";
import { Timeline, Carousel } from "antd";
import Masonry from "react-masonry-component";
import * as x from "../x";
import tinycolor from "tinycolor2";

const CDN = "http://www.cctv3.net/timer/";
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
      let images = item.images.split(/::/);
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
          {this.loadBanners(
            // Didiao的照片都隐藏，自己知道就行了 →_→
            // 如果以后上传别的截图或者旅游照片，就不D加idiao了
            item.images.split(/::/).filter((it) => it.indexOf("Didiao") < 0)
          )}
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

  loadBanners(images) {
    let CDN = "http://www.cctv3.net/timer/";
    return images.length == 1 ? (
      <img
        src={CDN + images[0]}
        style={{
          width: ITEM_WIDTH,
          height: "auto",
          borderBottomRightRadius: 8,
          borderBottomLeftRadius: 8,
        }}
      />
    ) : (
      <Carousel autoplay>
        {this.loadImages(images)}
      </Carousel>
    );
  }

  loadImages(images) {
    let array = [];
    for (let i = 0; i < images.length; i++) {
      array.push(
        <div key={i} style={{ position: "relative" }}>
          <img
            src={CDN + images[i]}
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
