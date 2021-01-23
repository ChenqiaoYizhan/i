/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-23 16:49:43
 */
import React from "react";
import Editor from "./Editor";
import Reader from "./Reader";
import Slider from "./Slider";
import Pasters from "./Pasters";
import Timer from "./Timer";
import Menu from "./Menu";
import * as x from "./x";

class DanmuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      math: { x: 0, y: parseInt(Math.random() * document.body.scrollHeight) },
    };
  }

  componentDidMount() {
    let that = this;
    let timer = setInterval(function () {
      if (that.state.math.x < document.body.clientWidth) {
        that.setState({
          math: {
            x: that.state.math.x + x.DANMU.SPEED,
            y: that.state.math.y,
          },
        });
      } else {
        that.props.onDismiss(that.props.item.id);
        clearInterval(timer);
      }
    }, 42);
  }

  render() {
    let latextHost = `http://sciencesoft.at/image/latexurl/image.png?dpi=${x.UI.SLIDER_WIDTH}&src=`;
    let qq = "http://www.cctv3.net/facebook/" + this.props.item.qq + "@QQ.gif";
    return (
      <div
        style={{
          position: "absolute",
          top: this.state.math.y,
          left: this.state.math.x,
          flexDirection: "row",
          alignItems: "center",
          display: "flex",
          backgroundColor: "white",
          borderRadius: x.UI.DANMU_HEIGHT / 2,
          padding: 2,
          boxShadow: "0 0 4px 2px rgba(0, 0, 0, 0.24)",
        }}
      >
        <img
          src={qq}
          style={{ height: x.UI.DANMU_HEIGHT, width: x.UI.DANMU_HEIGHT }}
        />
        <img
          src={latextHost + this.props.item.latex}
          style={{
            width: "auto",
            height: x.UI.DANMU_HEIGHT,
            borderRadius: x.UI.DANMU_HEIGHT / 2,
          }}
        />
      </div>
    );
  }
}

export default DanmuItem;
