/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-19 23:24:28
 */
import React from "react";
import Editor from "./Editor";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("Device:", this.device());
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
        <Editor
          defaultHTML={""}
          onConfirmPress={(html) => {
            console.log(html);
          }}
          onCancelPress={(html) => {
            console.log(html);
          }}
        />
      </div>
    );
  }
}

export default App;
