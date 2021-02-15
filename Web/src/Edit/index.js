/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-01-21 23:59:01
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-02-04 22:14:39
 */
import React from "react";
import PropTypes, { array } from "prop-types";
import * as x from "../x";
import { withRouter } from "react-router-dom";
import moment from "moment";
import { Checkbox, Input, message, Spin } from "antd";
import Editor from "../Editor";

class Edit extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.nameInput = null;
    this.titleInput = null;
    this.messageInput = null;
    this.imageInput = null;
    this.initArticle = null; // 初始化网络请求后的article，如果为空则为新增，否则则为修改
    this.state = {
      isSendingArticle: false,
      books: [],
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
    let allBooks = await x.HTTP.get(
      x.SERVICE.SERVER + x.SERVICE.API.SELECT_BOOKS + "?deleted=0"
    );
    // console.log("Books", allBooks);
    let selectArticle = await x.HTTP.get(
      x.SERVICE.SERVER +
        x.SERVICE.API.SELECT_ARTICLE +
        `?id=${x.RegExp.getParamByParesingQueryString(
          window.location.search,
          "id"
        )}`
    );
    let article = selectArticle.article;
    let articleBooks = selectArticle.books;
    // console.log(Array.from(articleBooks, (_, i) => articleBooks[i].book));
    let booksDatas = [];
    for (let i = 0; i < allBooks.length; i++) {
      let item = allBooks[i];
      booksDatas[i] = {
        select: articleBooks.findIndex((it) => it.book == item.id) >= 0,
        data: item,
      };
    }
    this.setState({
      selecBooksKeys: Array.from(articleBooks, (_, i) => articleBooks[i].book),
      books: booksDatas,
    });
    if (article == null) {
    } else {
      this.initArticle = article;
      this.nameInput.setValue(article.name);
      this.titleInput.setValue(article.title);
      this.messageInput.setValue(article.message);
      this.imageInput.setValue(article.image);
      this.setState({
        html: article.html,
      });
    }
  }

  async send() {
    this.setState({
      isSendingArticle: true,
    });
    let keys = JSON.parse(JSON.stringify(this.state.books));
    keys = keys.filter((item) => item.select).map((item) => item.data.id);
    let body = {
      keys: keys,
      article: {
        id: this.initArticle == null ? null : this.initArticle.id,
        name: this.nameInput.input.value,
        title: this.titleInput.input.value,
        message: this.messageInput.input.value,
        image: this.imageInput.input.value,
        html: this.state.html,
        nLook: 0,
        nLove: 0,
        timeCreate: x.TIME.format(moment()),
        timeUpdate: x.TIME.format(moment()),
        deleted: 0,
      },
    };
    let result = await x.HTTP.post(
      x.SERVICE.SERVER +
        (this.initArticle == null
          ? x.SERVICE.API.INSERT_ARTICLE
          : x.SERVICE.API.UPDATE_ARTICLE),
      body
    );
    this.setState({
      isSendingArticle: false,
    });
  }

  loadBooks() {
    let array = [];
    for (let i = 0; i < this.state.books.length; i++) {
      let item = this.state.books[i];
      array.push(
        <a
          key={i}
          onClick={() => {
            this.state.books[i].select = !this.state.books[i].select;
            this.setState({
              books: this.state.books,
            });
          }}
          style={{
            flexDirection: "row",
            alignItems: "center",
            display: "flex",
            margin: "4px 6px",
          }}
        >
          <div style={{ color: item.select ? "black" : "grey", fontSize: 14 }}>
            {item.data.title}
          </div>
          <div style={{ width: 2 }} />
          <img
            src={
              item.select
                ? require("../images/Book_select_yes.png")
                : require("../images/Book_select_no.png")
            }
            style={{ height: 16, width: 16 }}
          />
        </a>
      );
    }
    return array;
  }

  render() {
    return (
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
        <Input
          ref={(nameInput) => (this.nameInput = nameInput)}
          addonBefore="伪静态 http://www.cctv3.net/articles/"
          addonAfter=".com"
        />
        <div style={{ height: 8 }} />
        <Input
          ref={(titleInput) => (this.titleInput = titleInput)}
          addonBefore="标题"
        />
        <div style={{ height: 8 }} />
        <Input
          ref={(messageInput) => (this.messageInput = messageInput)}
          addonBefore="描述"
        />
        <div style={{ height: 8 }} />
        <Input
          ref={(imageInput) => (this.imageInput = imageInput)}
          addonBefore="预览"
        />
        <div style={{ height: 8 }} />
        <div
          style={{
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "wrap",
            display: "flex",
          }}
        >
          {this.loadBooks()}
        </div>
        <div style={{ height: 8 }} />
        <Spin spinning={this.state.isSendingArticle}>
          <Editor
            height={320}
            defaultHTML={this.state.html}
            onConfirmPress={(html) => {
              this.state.html = html;
              this.send();
            }}
          />
        </Spin>
      </div>
    );
  }
}

export default withRouter(Edit);