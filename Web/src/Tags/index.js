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
import tinycolor from "tinycolor2";

class List extends React.Component {
  static propTypes = {
    string: PropTypes.string.isRequired, // :: 为分隔符
    borderStyle: PropTypes.string.isRequired, // line为线条样式 fill为实心样式
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
        let style;
        let color = x.UI.randomColor();
        let fontColor;
        switch (this.props.borderStyle) {
          case "fill":
            fontColor = 'white';
            style = {
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              borderRadius: '4px',
              padding: '1px 4px',
              margin: '4px',
              backgroundColor: color,
            };
            break;
          case "line":
            fontColor = color;
            style = {
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              borderRadius: '4px',
              padding: '1px 4px',
              margin: '4px',
              border: `1px solid ${tinycolor(color).toRgbString()}`,
            };
          default:
            break;
        }
        array.push(
          <div key={i} style={style}>
            <div style={{ fontSize: 12, color: fontColor }}>
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
