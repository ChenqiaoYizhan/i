/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-31 11:06:20
 */
import React from "react";
import Editor from "./Editor";
import Slider from "./Slider";
import Pasters from "./Pasters";
import Timer from "./Timer";
import Menu from "./Home";

import TweenOne from "rc-tween-one";
import * as x from "./x";

class DanmuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    let latextHost = `http://sciencesoft.at/image/latexurl/image.png?dpi=${x.UI.SLIDER_WIDTH}&src=`;
    let qq = "http://www.cctv3.net/facebook/" + this.props.item.qq + "@QQ.gif";
    let item = this.props.item;
    return item.show ? (
      <TweenOne
        animation={{
          x: document.body.clientWidth * -1,
          scale: 0.88,
          duration: item.time,
          onComplete: () => {
            this.props.onDismiss(item);
          },
        }}
        moment={0}
        paused={false}
        style={{ right: 0, position: "absolute", top: item.y }}
      >
        <div
          style={{
            flexDirection: "row",
            alignItems: "center",
            display: "flex",
            backgroundColor: "white",
            borderRadius: x.UI.DANMU_HEIGHT / 2,
            padding: 2,
            boxShadow: x.UI.BOX_SHADOW,
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
      </TweenOne>
    ) : null;
  }
}

export default DanmuItem;
