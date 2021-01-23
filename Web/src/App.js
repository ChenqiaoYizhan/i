/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-23 23:48:33
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
import Home from "./Home";
import Webs from "./Webs";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: <Webs />,
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
          minHeight: document.body.clientHeight,
        }}
      >
        {/* <link
          href="http://cdn.bootcss.com/highlight.js/8.0/styles/tomorrow.min.css"
          rel="stylesheet"
        /> */}
        <div
          style={{
            position: "fixed",
            top: 0,
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "white",
            display: "flex",
            zIndex: x.UI.ZINDEX.MENU,
          }}
        >
          <Menu
            onMenuPress={(item) => {
              let page = <div />;
              switch (item.id) {
                case "paster":
                  page = <Pasters />;
                  break;
                case "home":
                  page = <Home />;
                  break;
                case "book":
                  break;
                case "web":
                  page = <Webs />;
                  break;
                case "timer":
                  page = <Timer />;
                  break;

                default:
                  break;
              }
              this.setState({
                page: page,
              });
            }}
          />
        </div>
        <div style={{ height: x.UI.MENU_HEIGHT }} />
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
              width: x.UI.MAIN_WIDTH,
              flexDirection: "column",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                borderRadius: 8,
                padding: 8,
                minHeight: document.body.clientHeight - x.UI.MENU_HEIGHT - 32,
                boxShadow: "0 0 4px 2px rgba(0, 0, 0, 0.24)",
              }}
            >
              {this.state.page}
            </div>
          </div>
          <div style={{ width: 8 }} />
          <div style={{ width: x.UI.SLIDER_WIDTH }}>
            <Slider />
          </div>
        </div>
        <div style={{ zIndex: x.UI.ZINDEX.DANMU }}>
          <Danmus />
        </div>
      </div>
    );
  }
}

export default App;
