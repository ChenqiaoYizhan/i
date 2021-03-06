/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-01-21 23:59:01
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-02-06 00:34:20
 */
import React from "react";
import PropTypes from "prop-types";
import * as x from "../x";
import { withRouter } from "react-router-dom";
import Discuss from "../Disscuss";
import "./about.css";
import Zhifubao from "./Zhifubao";
class About extends React.Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.discussParent = 0;
    this.isShowZhifubao = false;
    this.state = {
      text: "",
      isInsertingArticle: false,
    };
  }

  async initDatas() {
    let result = await x.HTTP.get(
      x.SERVICE.SERVER +
        x.SERVICE.API.SELECT_ARTICLE +
        `?id=${x.ARTICLES.ABOUT}`
    );

    this.setState({
      text: x.RegExp.filterClassEleImg(result.article.html),
    });
  }

  componentDidMount() {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
    this.initDatas();
  }

  async send(body) {
    this.setState({
      isInsertingArticle: true,
    });
    body.article = parseInt(x.ARTICLES.ABOUT);
    let result = x.HTTP.post(
      x.SERVICE.SERVER + x.SERVICE.API.INSERT_DISCUSS,
      body
    );
    this.setState({
      isInsertingArticle: false,
    });
    window.location.reload();
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          boxShadow: x.UI.BOX_SHADOW,
          borderRadius: 8,
          backgroundColor: "white",
          padding: 8,
        }}
      >
        <div
          style={{ padding: 8 }}
          dangerouslySetInnerHTML={{
            __html: this.state.text,
          }}
        />
        {this.isShowZhifubao ? (
          <div
            style={{
              flexDirection: "column",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div style={{ fontSize: 18, color: "black" }}>
              测试 eCharts 折线统计图
            </div>
            <div style={{ height: 8 }} />
            <Zhifubao />
          </div>
        ) : null}
        <Discuss article={x.ARTICLES.ABOUT} />
      </div>
    );
  }
}

export default withRouter(About);
