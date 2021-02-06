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
import DiscussForm from "./DiscussForm";
import DiscussList from "./DiscussesList";
import { Spin } from "antd";
class Discuss extends React.Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.discussParent = 0;
    this.state = {
      text: "",
      isInsertingArticle: false,
    };
  }

  componentDidMount() {
  }

  async send(body) {
    this.setState({
      isInsertingArticle: true,
    });
    body.article = parseInt(this.props.article);
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
        <Spin spinning={this.state.isInsertingArticle}>
          <DiscussForm
            width={
              x.UI.MAIN_WIDTH - x.UI.SLIDER_WIDTH - x.UI.MAIN_INTERVAL - 32
            }
            onConfirmPress={(body) => {
              body.parent = this.discussParent;
              this.send(body);
            }}
          />
        </Spin>
        <div style={{ height: 12 }} />
        <DiscussList
          article={this.props.article}
          onReplyPress={(parent) => {
            this.discussParent = parent;
          }}
          onConfirmPress={(body) => {
            body.parent = this.discussParent;
            this.send(body);
          }}
          onCancel={() => {
            this.discussParent = 0;
          }}
        />
      </div>
    );
  }
}

export default withRouter(Discuss);
