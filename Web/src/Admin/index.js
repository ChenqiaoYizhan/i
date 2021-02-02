/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-01-21 23:59:01
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-02-02 22:33:31
 */
import React from "react";
import PropTypes from "prop-types";
import * as x from "../x";
import { withRouter } from "react-router-dom";
import moment from "moment";
import Books from "./Books";
import { Collapse } from "antd";
const { Panel } = Collapse;

const DATAS = [
  { key: "Books", name: "分类管理", page: <Books /> },
  { key: "Articles", name: "文章管理", page: <Books /> },
  { key: "Dicusses", name: "评论管理", page: <Books /> },
  { key: "Webs", name: "网址管理", page: <Books /> },
  { key: "Banners", name: "轮播管理", page: <Books /> },
];
class Admin extends React.Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  componentDidMount() {}

  loadPanels() {
    let array = [];
    for (let i = 0; i < DATAS.length; i++) {
      let item = DATAS[i];
      array.push(
        <Panel header={item.name} key={item.key}>
          {item.page}
        </Panel>
      );
    }
    return array;
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 8,
          backgroundColor: "white",
          borderRadius: 8,
          boxShadow: x.UI.BOX_SHADOW,
        }}
      >
        <Collapse defaultActiveKey={[]} onChange={(key) => {}}>
          {this.loadPanels()}
        </Collapse>
      </div>
    );
  }
}

export default withRouter(Admin);
