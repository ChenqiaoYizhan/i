/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-24 19:09:19
 */
import React from "react";
import Item from "./Item";
import Wall from "../images/Paster_wall.gif";
import * as x from "../x";
var selectPasters = require("../datas/selectPasters.json");

class Pasters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
    };
  }

  componentDidMount() {
    let array = [];
    // 保证八种贴纸都显示出来
    // 从第八张往后的贴纸随机显示
    let DATAS = selectPasters.slice(0, 20);
    let all8Pasters = Array.from({ length: 8 }, (_, i) => i)
      .sort((a, b) => Math.random() - 0.5)
      .concat(
        Array.from({ length: DATAS.length - 8 }, (_, i) =>
          parseInt(Math.random() * 8)
        )
      );

    for (let i = 0; i < DATAS.length; i++) {
      let item = DATAS[i];
      array.push({
        id: i,
        title: item.title,
        time: item.time,
        message: item.message,
        index: all8Pasters[i], // 八种卡片选哪张
        lastEditTime: new Date().getTime(),
      });
    }
    this.setState({
      datas: this.sortZindexByLastEditTime(array),
    });
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
          backgroundImage: `url(${Wall})`,
          height: x.UI.PASTER_WALL_HEIGHT,
          width: x.UI.MAIN_WIDTH - x.UI.SLIDER_WIDTH - x.UI.MAIN_INTERVAL,
          position: "relative",
          backgroundColor: "white",
          borderRadius: 8,
          padding: 8,
          minHeight: document.body.clientHeight - x.UI.MENU_HEIGHT - 32,
          boxShadow: "0 0 4px 2px rgba(0, 0, 0, 0.24)",
        }}
      >
        {this.loadPasters()}
      </div>
    );
  }
}

export default Pasters;
