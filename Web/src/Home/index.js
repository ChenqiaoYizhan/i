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
import Niu from "./Niu";
class Home extends React.Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      html: "",
    };
  }

  componentDidMount() {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
    this.initDatas();
  }

  async initDatas() {
    let result = await x.HTTP.get(
      x.SERVICE.SERVER + x.SERVICE.API.SELECT_ARTICLE + `?id=${x.ARTICLES.HOME}`
    );
    this.setState({
      html: x.RegExp.filterClassEleImg(result.article.html),
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
            borderTopLeftRadius: 18,
            borderTopRightRadius: 18,
            padding: 8,
          }}
        >
          <div
            style={{
              flexDirection: "row",
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Niu />
            <div
              style={{
                flex: 1,
                flexDirection: "column",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <div
                style={{
                  flexDirection: "row",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    flex: 1,
                    flexDirection: "column",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <div
                    style={{ paddingTop: 8, paddingLeft: 12 }}
                    dangerouslySetInnerHTML={{
                      __html: this.state.html,
                    }}
                  />
                </div>
                <img
                  src={require("../images/Anli_want.gif")}
                  style={{ height: 88, width: 88 }}
                />
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
          </div>
        </div>
        <div style={{ height: 12 }} />
        <List />
      </div>
    );
  }
}

export default withRouter(Home);
