/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-31 11:06:56
 */
import React from "react";
import Item from "./Item";
import Wall from "../images/Paster_wall.gif";
import * as x from "../x";
import Disscuss from "../Disscuss";

class Pasters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
    };
  }

  async intidDatas() {
    let result = await x.HTTP.get(
      x.SERVICE.SERVER +
        x.SERVICE.API.SELECT_DISCUSSES +
        `?article=${x.ARTICLES.PASTERS}`
    );
    // console.log(result);
    let array = JSON.parse(JSON.stringify(result));
    for (let i = 0; i < array.length; i++) {
      let item = result[i];
      array[i].lastEditTime = new Date().getTime();
      array[i].index = parseInt(Math.random() * 8);
    }
    this.setState({
      datas: this.sortZindexByLastEditTime(array),
    });
  }

  componentDidMount() {
    this.intidDatas();
  }

  // 优化zIndex逻辑
  // 按照最后编辑的时间进行排序 时间越靠近的zIndex越高
  sortZindexByLastEditTime(array) {
    let result = [];
    let arrayCopy = JSON.parse(JSON.stringify(array));
    arrayCopy = arrayCopy.sort((a, b) => a.lastEditTime - b.lastEditTime);
    for (let i = 0; i < array.length; i++) {
      let item = array[i];
      item.zIndex = arrayCopy.findIndex((it) => it.id == item.id);
      result.push(item);
    }
    return array;
  }

  loadPasters() {
    let array = [];
    for (let i = 0; i < this.state.datas.length; i++) {
      let item = this.state.datas[i];
      array.push(
        <Item
          key={i}
          item={item}
          onMoved={(it) => {
            let datasCopy = JSON.parse(JSON.stringify(this.state.datas));
            // console.log("Moved datasCopy before", datasCopy);
            datasCopy[i].lastEditTime = new Date().getTime();
            // console.log("Moved datasCopy after", datasCopy);
            this.setState({
              datas: this.sortZindexByLastEditTime(datasCopy),
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
          boxShadow: x.UI.BOX_SHADOW,
          borderRadius: 8,
        }}
      >
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundImage: `url(${Wall})`,
              height: ((x.UI.MAIN_WIDTH - x.UI.SLIDER_WIDTH) * 9) / 16,
              width: x.UI.MAIN_WIDTH - x.UI.SLIDER_WIDTH - x.UI.MAIN_INTERVAL,
              position: "relative",
              backgroundColor: "white",
              borderRadius: 8,
              boxShadow: x.UI.BOX_SHADOW,
            }}
          >
            {this.loadPasters()}
          </div>
        </div>
        <div style={{ height: 8 }} />
        <div style={{ padding: 8 }}>
          <Disscuss
            isHideDiscussList={true}
            article={x.ARTICLES.PASTERS}
            height={(x.UI.MAIN_WIDTH - x.UI.SLIDER_WIDTH - 16) / 4}
            width={
              x.UI.MAIN_WIDTH - x.UI.SLIDER_WIDTH - x.UI.MAIN_INTERVAL - 16
            }
            onConfirmPress={(data) => {
              console.log(data);
            }}
          />
        </div>
      </div>
    );
  }
}

export default Pasters;
