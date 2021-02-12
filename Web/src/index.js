/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-02-05 23:38:19
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import moment from "moment";
import "antd/dist/antd.css"; // 默认的HTML是没有样式的，比如 pre code等标签，官网给的示例配置文件
import * as x from "./x";
import "./app.css";
class Web extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    moment.locale("zh-CN", x.MOMENT_CONFIG);
  }

  render() {
    return <App />;
  }
}

ReactDOM.render(<Web />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
