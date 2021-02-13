/*
 * @Descripttion:React 16.13.1 2020/05/21
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-02-04 14:18:50
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
import Article from "./Article";
import CanvasPadDemo from "./Demo/CanvasPadDemo";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Test from "./Demo/Test";
import Admin from "./Admin";
import Edit from "./Edit";
import About from "./About";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // console.log("123456".split(/::/).length)
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              path="/"
              component={() => (
                <Main>
                  <Route
                    path={["/Home", "/"]}
                    exact
                    component={() => <Home />}
                  />
                  <Route path="/Book" component={() => <Book />} />
                  <Route path="/Pasters" component={() => <Pasters />} />
                  <Route path="/Timer" component={() => <Timer />} />
                  <Route path="/Webs" component={() => <Webs />} />
                  <Route path="/About" component={() => <About />} />
                  <Route path="/Admin" component={() => <Admin />} />
                  <Route path="/Article/:id" component={() => <Article />} />
                  <Route path="/DidiaoEdit/:id" component={() => <Edit />} />
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
                  <Route path="/Editor" component={() => <Editor />} />
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
