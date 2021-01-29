/*
 * @Descripttion:React 16.13.1 2020/05/21
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-30 01:58:05
 */
import React from "react";
import Main from "./Main";
import Editor from "./Editor";
import MovePasterDemo from "./Demo/MovePasterDemo";
import Home from "./Home";
import Pasters from "./Pasters";
import Timer from "./Timer";
import Book from "./Book";
import Webs from "./Webs";
import Reader from "./Reader";
import CanvasPadDemo from "./Demo/CanvasPadDemo";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Test from "./Demo/Test";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              path="/"
              component={() => (
                <Main>
                  <Route path="/Home" exact component={() => <Home />} />
                  <Route path="/Book" component={() => <Book />} />
                  <Route path="/Pasters" component={() => <Pasters />} />
                  <Route path="/Timer" component={() => <Timer />} />
                  <Route path="/Webs" component={() => <Webs />} />
                  <Route path="/About" component={() => <Home />} />
                  <Route path="/Reader/:id" component={() => <Reader />} />
                  <Route
                    // 以后测试页面统一添加前缀 /Demo/PageName
                    path="/Demo"
                    component={() => (
                      <div>
                        <Route
                          path="/Demo/MovePasterDemo"
                          component={() => <MovePasterDemo />}
                        />
                        <Route
                          path="/Demo/CanvasPadDemo"
                          component={() => <CanvasPadDemo />}
                        />
                        <Route path="/Demo/Test" component={() => <Test />} />
                      </div>
                    )}
                  />
                </Main>
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
