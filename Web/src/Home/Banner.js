/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-01-21 23:59:01
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-02-04 22:28:42
 */
import React from "react";
import PropTypes from "prop-types";
import * as x from "../x";
import { Button } from "antd";
import moment from "moment";
import TweenOne from "rc-tween-one";

const WIDTH =
  (x.UI.MAIN_WIDTH -
    x.UI.MAIN_INTERVAL -
    x.UI.SLIDER_WIDTH -
    16 -
    x.UI.NIU_WIDTH -
    8) /
  10;
class Banner extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.timer = null;
    this.banners = [];
    this.isCouldPlayBanners = true;
    this.state = {
      datas: [],
    };
  }

  async initDatas() {
    this.banners = await x.HTTP.get(
      x.SERVICE.SERVER + x.SERVICE.API.SELECT_BANNERS + "?deleted=0"
    );

    for (let i = 0; i < this.banners.length; i++) {
      this.banners[i].active = false;
    }
    this.banners[4].active = true;
    this.setState({
      datas: this.banners,
    });
  }

  componentDidMount() {
    this.initDatas();
    this.timer = setInterval(() => {
      if (this.isCouldPlayBanners && this.banners.length > 0) {
        let index = this.state.datas.findIndex((item) => item.active);
        this.updateActive((index + 1) % this.state.datas.length);
      }
    }, 3888);
  }

  updateActive(index) {
    for (let i = 0; i < this.state.datas.length; i++) {
      this.state.datas[i].active = i == index;
    }
    this.setState({
      datas: this.state.datas,
    });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  loadItems() {
    let array = [];
    for (let i = 0; i < this.state.datas.length; i++) {
      let item = this.state.datas[i];
      let image = "http://www.cctv3.net/cctv/" + item.image;
      array.push(
        item.active ? (
          <a
            key={i}
            onMouseLeave={() => {
              this.isCouldPlayBanners = true;
            }}
            style={{
              height: WIDTH * 3,
              width: WIDTH * 5,
              backgroundImage: `url(${image})`,
              backgroundSize: `${WIDTH * 5}px ${WIDTH * 3}px`,
              flexDirection: "column",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.38)",
                flexDirection: "column",
                display: "flex",
                padding: `4px 8px`,
              }}
            >
              <div style={{ fontSize: 16, color: "white" }}>{item.title}</div>
              <div
                style={{
                  marginTop: 4,
                  marginBottom: 4,
                  height: 1,
                  backgroundColor: "white",
                }}
              ></div>
              <div style={{ fontSize: 12, color: "white" }}>{item.message}</div>
            </div>
          </a>
        ) : (
          <div
            key={i}
            onMouseEnter={() => {
              this.isCouldPlayBanners = false;
              this.updateActive(i);
            }}
            onMouseLeave={() => {
              this.isCouldPlayBanners = true;
            }}
            style={{
              height: WIDTH * 3,
              width: WIDTH,
              backgroundImage: `url(${image})`,
              backgroundSize: `${WIDTH}px ${WIDTH * 3}px auto contain`,
              flexDirection: "column",
            }}
          >
            <div
              style={{
                backdropFilter: `blur(1px)`,
                height: WIDTH * 3,
                width: WIDTH,
                backgroundColor: "rgba(0, 0, 0, 0.38)",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: 14,
                  color: "white",
                  textAlign: "center",
                }}
              >
                {item.name}
              </div>
            </div>
          </div>
        )
      );
    }
    return array;
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: WIDTH * 3,
          width: WIDTH * 10,
        }}
      >
        {this.loadItems()}
      </div>
    );
  }
}

export default Banner;
