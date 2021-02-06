/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-01-21 23:59:01
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-02-04 23:22:53
 */
import React from "react";
import PropTypes from "prop-types";
import * as x from "../x";
import { Button } from "antd";
import moment from "moment";

class List extends React.Component {
  static propTypes = {
    string: PropTypes.string.isRequired, // :: 为分隔符
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  loadTags(booksString) {
    if (x.RegExp.isEmpty(booksString)) {
      return null;
    } else {
      let array = [];
      let books = booksString.split(/::/);
      for (let i = 0; i < books.length; i++) {
        let color = x.UI.randomColor();
        array.push(
          <div
            key={i}
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              borderRadius: 2,
              marginRight: i == books.length - 1 ? 0 : 4,
              backgroundColor: color,
            }}
          >
            <div style={{ fontSize: 12, color: "white", margin: "1px 4px" }}>
              {books[i]}
            </div>
          </div>
        );
      }
      return array;
    }
  }

  render() {
    return (
      <div
        style={{
          flexDirection: "row",
          alignItems: "center",
          display: "flex",
        }}
      >
        {this.loadTags(this.props.string)}
      </div>
    );
  }
}

export default List;
