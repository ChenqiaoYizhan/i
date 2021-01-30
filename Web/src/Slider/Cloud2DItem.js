/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-30 20:21:07
 */

import React from "react";
import PropTypes from "prop-types";
import TweenOne from "rc-tween-one";

import * as x from "../x";
class Cloud2DItem extends React.Component {
  static propTypes = {
    onDismiss: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let item = this.props.item;
    return item.show ? (
      <TweenOne
        animation={{
          y: item.y * -1,
          duration: item.time,
          onComplete: () => {
            this.props.onDismiss(item);
          },
        }}
        moment={0}
        paused={false}
        style={{ left: item.x, position: "absolute", bottom: 0 }}
      >
        <a
          onClick={() => {}}
          style={{
            backgroundColor: item.color,
            borderRadius: 4,
            paddingLeft: 4,
            paddingRight: 4,
            paddingTop: 1,
            paddingBottom: 1,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <div style={{ fontSize: 12, color: "white" }}>{item.text}</div>
        </a>
      </TweenOne>
    ) : null;
  }
}

export default Cloud2DItem;
