/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-30 01:30:41
 */

import React from "react";
import PropTypes from "prop-types";
import * as x from "../x";

class Cloud2DItem extends React.Component {
  static propTypes = {
    height: PropTypes.number,
    width: PropTypes.number.isRequired,
    onDismiss: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      cloud: {
        x: parseInt(
          Math.random() *
            (this.props.width - this.props.item.text.length * 12 - 16) +
            4
        ),
        y: 0,
        opacity: 1,
      },
    };
  }

  componentDidMount() {
    let bottom = parseInt((Math.random() * this.props.height) / 9.9);
    let that = this;
    let timer = setInterval(function () {
      bottom += 1;
      if (bottom >= that.props.height - 32) {
        that.props.onDismiss();
        clearInterval(timer);
      } else {
        that.state.cloud.y = bottom;
        that.state.cloud.opacity = parseFloat(
          (that.props.height - that.state.cloud.y) / that.props.height
        );
        that.setState({
          cloud: that.state.cloud,
        });
      }
    }, 100);
  }

  render() {
    let item = this.props.item;
    return (
      <a
        onClick={() => {}}
        style={{
          position: "absolute",
          backgroundColor: item.color,
          borderRadius: 4,
          paddingLeft: 4,
          paddingRight: 4,
          paddingTop: 1,
          paddingBottom: 1,
          bottom: this.state.cloud.y,
          left: this.state.cloud.x,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          opacity: this.state.cloud.opacity,
        }}
      >
        <div style={{ fontSize: 12, color: "white" }}>{item.text}</div>
      </a>
    );
  }
}

export default Cloud2DItem;
