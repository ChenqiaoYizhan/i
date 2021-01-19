/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-20 00:16:38
 */
import React from "react";
import Editor from "./Editor";
import Reader from './Reader';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  device() {
    // iMac or iPhone
    let userAgent = navigator.userAgent;
    return userAgent.indexOf("Mobile") > 0 ? "iPhone" : "iMac";
  }

  render() {
    return (
      <div style={{ flex: 1, flexDirection: "column" }}>
        <link
          href="http://cdn.bootcss.com/highlight.js/8.0/styles/tomorrow.min.css"
          rel="stylesheet"
        />
        <Reader />
      </div>
    );
  }
}

export default App;
