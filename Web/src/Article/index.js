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
import moment from "moment";
import Tags from "../Tags";
import "./article.css";
class Article extends React.Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.discussParent = 0;
    this.state = {
      article: {
        id: "",
        name: "",
        title: "",
        message: "",
        image: "",
        html: "",
        nLook: 0,
        nLove: 0,
        timeCreate: moment().format("YYYY-MM-DD HH:mm:ss"),
        timeUpdate: moment().format("YYYY-MM-DD HH:mm:ss"),
        deleted: 0,
      },
      isInsertingArticle: false,
      books: [],
    };
  }

  async initDatas() {
    let result = await x.HTTP.get(
      x.SERVICE.SERVER +
        x.SERVICE.API.SELECT_ARTICLE +
        `?id=${this.props.match.params.id}`
    );
    result.article.html = x.RegExp.formatEditorCode2PrismCode(
      x.RegExp.filterClassEleImg(result.article.html)
    );
    this.setState({
      article: result.article,
      books: result.books,
    });
  }

  async updateArticleN(look, love) {
    await x.HTTP.post(x.SERVICE.SERVER + x.SERVICE.API.UPDATE_ARTICLE_N, {
      article: this.props.match.params.id,
      nLook: look,
      nLove: love,
    });
  }

  componentDidMount() {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
    this.initDatas();
    this.updateArticleN(1, 0);
  }

  loadTimeTags(text, time, color) {
    return (
      <div
        style={{
          justifyItems: "center",
          alignItems: "center",
          display: "flex",
          padding: "1px 4px",
          flexDirection: "row",
          borderRadius: 8,
          backgroundColor:
            x.UI.COLORS[x.UI.COLORS.findIndex((item) => item.name == color)]
              .value,
        }}
      >
        <img
          src={require("../images/Home_calendar.png")}
          style={{ width: 16, height: 16 }}
        />
        <div style={{ width: 4 }} />
        <div style={{ color: "white", fontSize: 12 }}>{`${text}: ${time}`}</div>
      </div>
    );
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
          style={{
            flexDirection: "column",
            display: "flex",
            padding: "0px 8px",
          }}
        >
          <div
            style={{
              flexDirection: "row",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div style={{ fontSize: 24, color: "black", textAlign: "center" }}>
              {this.state.article.title}
            </div>
          </div>
          <div style={{ height: 4 }} />
          <div
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div
              style={{ fontSize: 14, color: "grey" }}
            >{`Pseudo static: http://www.cctv3.net/${this.state.article.name}.html`}</div>
            <div
              style={{
                flexDirection: "row",
                alignItems: "center",
                display: "flex",
              }}
            >
              {this.loadTimeTags(
                "创建于",
                this.state.article.timeCreate,
                "green"
              )}
              <div style={{ width: 8 }} />
              {this.loadTimeTags(
                "修改于",
                this.state.article.timeUpdate,
                "orange"
              )}
            </div>
          </div>
        </div>
        <div style={{ height: 8 }} />
        <div style={{ height: 1, backgroundColor: "#f0f0f0" }} />
        <div
          style={{ padding: 8 }}
          dangerouslySetInnerHTML={{
            __html: this.state.article.html,
          }}
        />
        <Discuss article={this.props.match.params.id} />
      </div>
    );
  }
}

export default withRouter(Article);
