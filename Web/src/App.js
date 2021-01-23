/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-23 16:40:38
 */
import React from "react";
import Editor from "./Editor";
import Reader from "./Reader";
import Slider from "./Slider";
import Pasters from "./Pasters";
import Timer from "./Timer";
import Menu from "./Menu";
import * as x from "./x";
import Danmus from "./Danmus";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: <Reader />,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          backgroundColor: "#f0f0f0",
          display: "flex",
        }}
      >
        {/* <Pasters /> */}
        <link
          href="http://cdn.bootcss.com/highlight.js/8.0/styles/tomorrow.min.css"
          rel="stylesheet"
        />
        <div
          style={{
            margin: 16,
            width: x.UI.MAIN_WIDTH,
            flexDirection: "row",
            display: "flex",
          }}
        >
          <div
            style={{
              width: x.UI.MAIN_WIDTH - 8 - x.UI.SLIDER_WIDTH,
              flexDirection: "column",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                borderRadius: 8,
                padding: 8,
                boxShadow: "0 0 4px 2px rgba(0, 0, 0, 0.24)",
              }}
            >
              {this.state.page}
            </div>
          </div>
          <div style={{ width: 8 }} />
          <div style={{ width: x.UI.SLIDER_WIDTH }}>
            {/* <Menu
              onItemPress={(item) => {
                switch (item.id) {
                  case "home":
                    this.state.page = <Reader />;
                    break;
                  case "book":
                    break;
                  case "about":
                    break;
                  case "web":
                    break;
                  case "timer":
                    this.state.page = <Timer />;
                    break;
                  case "paster":
                    this.state.page = <Pasters />;
                    break;
                  default:
                    break;
                }
                this.setState({ page: this.state.page });
              }}
              width={LEFT_WIDTH}
            /> */}
            <Slider />
          </div>
        </div>
        <div style={{ zIndex: 9 }}>
          <Danmus />
        </div>
      </div>
    );
  }
}

export default App;
