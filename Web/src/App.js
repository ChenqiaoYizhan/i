/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-20 12:54:43
 */
import React from "react";
import Editor from "./Editor";
import Reader from "./Reader";
import Left from "./Slider/Left";
import Pasters from "./Pasters";

const LEFT_WIDTH = 256;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div style={{ flex: 1, flexDirection: "column" }}>
        <Pasters />
        {/* <link
          href="http://cdn.bootcss.com/highlight.js/8.0/styles/tomorrow.min.css"
          rel="stylesheet"
        />
        <div
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            display: "flex",
          }}
        >
          <Left width={LEFT_WIDTH} />
          <div
            style={{ flex: 1, marginLeft: LEFT_WIDTH, marginRight: LEFT_WIDTH }}
          >
            <Reader />
          </div>
          <Left width={LEFT_WIDTH} />
        </div> */}
      </div>
    );
  }
}

export default App;
