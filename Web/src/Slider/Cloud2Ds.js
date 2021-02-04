/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-02-03 21:24:21
 */

import React from "react";
import PropTypes from "prop-types";
import * as x from "../x";
import Cloud2DItem from "./Cloud2DItem";
import Group from "./Group";
import moment from "moment";

class Cloud2Ds extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.isCloud2dShowOnAppPage = true;
    this.books = [];
    this.state = {
      datas: [],
    };
  }

  componentDidMount() {
    x.HTTP.get(
      x.SERVICE.SERVER + x.SERVICE.API.SELECT_BOOKS + "?deleted=0"
    ).then((json) => {
      this.books = json;
    });
    let index = 0;
    setInterval(() => {
      let datasCopy = JSON.parse(JSON.stringify(this.state.datas));
      if (this.isCloud2dShowOnAppPage && this.books.length > 0) {
        index++;
        let item = this.books[index % this.books.length];
        datasCopy.push({
          id: index,
          text: this.books[index % this.books.length].title,
          color: x.UI.randomColor(),
          show: true,
          x:
            parseInt(
              (x.UI.SLIDER_WIDTH - item.title.length * 12 - 16) * Math.random()
            ) + 4,
          y: x.UI.SLIDER_WIDTH - 32,
          time: Math.random() * 1588 + 6666,
        });
        // console.log(datasCopy);
        this.setState({
          datas: datasCopy,
        });
      } else {
      }
    }, 1000);
    document.addEventListener("mouseleave", () => {
      this.state.datas = [];
      this.setState({
        datas: [],
      });
      this.isCloud2dShowOnAppPage = false;
    });
    document.addEventListener("mouseenter", () => {
      this.isCloud2dShowOnAppPage = true;
    });
  }
  
  componentWillUnmount() {
    document.removeEventListener("mouseleave", function () {});
    document.removeEventListener("mouseenter", function () {});
  }

  loadCloud2Ds() {
    let array = [];
    for (let i = 0; i < this.state.datas.length; i++) {
      let item = this.state.datas[i];
      array.push(
        <Cloud2DItem
          key={i}
          item={item}
          onClick={() => {}}
          onDismiss={() => {
            let datasCopy = JSON.parse(JSON.stringify(this.state.datas));
            datasCopy[i].show = false;
            this.setState({
              datas: datasCopy,
            });
          }}
        />
      );
    }
    return array;
  }

  render() {
    return (
      <div
        style={{
          flexDirection: "column",
          display: "flex",
          backgroundColor: "white",
          borderRadius: 8,
          boxShadow: x.UI.BOX_SHADOW,
        }}
      >
        <Group text="文章分类" image={require("../images/Slider_cloud.png")} />
        <div
          style={{
            position: "relative",
            height: x.UI.SLIDER_WIDTH,
            width: x.UI.SLIDER_WIDTH,
          }}
        >
          {this.loadCloud2Ds()}
        </div>
      </div>
    );
  }
}

export default Cloud2Ds;