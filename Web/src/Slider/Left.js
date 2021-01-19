/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-20 01:06:09
 */
import React from "react";

class Left extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div
        style={{
          background: "green",
          width: this.props.width,
          height: document.body.clientHeight,
          position: "fixed",
          top: 0,
        }}
      >
        呵呵
      </div>
    );
  }
}

export default Left;
