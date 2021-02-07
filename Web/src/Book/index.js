/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-01-21 23:59:01
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-29 01:46:12
 */
import React from "react";
import PropTypes from "prop-types";
import { Input, Button, Tag } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as x from "../x";
import moment from "moment";
import Tags from "../Tags";
class Book extends React.Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
    };
  }

  componentDidMount() {
    this.initDatas();
  }

  async initDatas() {
    let result = await x.HTTP.get(
      x.SERVICE.SERVER +
        x.SERVICE.API.SELECT_ARTICLES_GROUP_BY_MONTH +
        "?deleted=0"
    );
    let months = result.months;
    let articles = result.articles;
    let array = [];
    for (let i = 0; i < months.length; i++) {
      let children = articles.filter((item) => item.month == months[i]);
      array.push({ month: months[i], articles: children });
    }
    this.setState({
      datas: array,
    });
  }

  loadItems() {
    let array = [];
    for (let i = 0; i < this.state.datas.length; i++) {
      let item = this.state.datas[i];
      array.push(
        <div key={i} style={{ flexDirection: "column", display: "flex" }}>
          <div
            style={{
              flexDirection: "row",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: x.UI.randomColor(),
              }}
            />
            <div style={{ width: 4 }} />
            <div style={{ fontSize: 18, color: "#1790fc" }}>{item.month}</div>
          </div>
          <div
            style={{ flexDirection: "column", marginLeft: 36, display: "flex" }}
          >
            {this.loadArticles(item.articles)}
          </div>
        </div>
      );
    }
    return array;
  }

  loadArticles(articles) {
    let array = [];
    for (let i = 0; i < articles.length; i++) {
      let item = articles[i];
      array.push(
        <div
          key={i}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            display: "flex",
          }}
        >
          <div
            style={{
              flexDirection: "row",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div
              style={{
                width: 4,
                height: 4,
                borderRadius: 2,
                backgroundColor: x.UI.randomColor(),
              }}
            />
            <div style={{ width: 4 }} />
            <div style={{ fontSize: 16, color: "grey" }}>
              {moment(item.time).format("MM-DD")}
            </div>
            <div style={{ width: 12 }} />
            <div style={{ fontSize: 16, color: "rgba(0, 0, 0, 0.88)" }}>
              {item.title}
            </div>
          </div>
          <Tags string={item.books} borderStyle='line' />
        </div>
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
          borderRadius: 8,
          boxShadow: x.UI.BOX_SHADOW,
          padding: 8,
        }}
      >
        {this.loadItems()}
      </div>
    );
  }
}

export default Book;
