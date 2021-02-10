/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-01-21 23:59:01
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-02-03 00:00:27
 */
import React from "react";
import PropTypes from "prop-types";
import * as x from "../x";
import Banner from "./Banner";
import List from "./List";
import { withRouter } from "react-router-dom";
import moment from "moment";
class Home extends React.Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  componentDidMount() {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            backgroundColor: "white",
            boxShadow: x.UI.BOX_SHADOW,
            borderRadius: 8,
            padding: 8,
          }}
        >
          <div
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              display: "flex",
            }}
          >
            <img
              src={require("../images/Anli_want.gif")}
              style={{ height: 88, width: 88 }}
            />
            <div style={{ width: 4 }} />
            <div style={{ fontSize: 18, color: "black" }}>墙裂推荐</div>
          </div>
          <div
            style={{
              flexDirection: "row",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Banner />
          </div>
        </div>
        <div style={{ height: 12 }} />
        <List />
      </div>
    );
  }
}

export default withRouter(Home);
