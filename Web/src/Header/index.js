/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-01-21 23:59:01
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-24 17:41:28
 */
import React from "react";
import PropTypes from "prop-types";
import { Input, Button } from "antd";

import * as x from "../x";

class Header extends React.Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let item = this.props.item;
    return (
      <div
        style={{
          width: x.UI.MAIN_WIDTH,
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 8,
          padding: 8,
          boxShadow: "0 0 4px 2px rgba(0, 0, 0, 0.24)",
        }}
      >
        <div style={{ fontSize: 18, color: "black" }}>
          {item.text}
        </div>
      </div>
    );
  }
}

export default Header;
