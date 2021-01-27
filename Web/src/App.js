/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-27 22:18:46
 */
import React from "react";
import Main from "./Main";
import Editor from "./Editor";
import Home from "./Home";
import Pasters from "./Pasters";
import Timer from "./Timer";
import Webs from "./Webs";
import Reader from "./Reader";
import { BrowserRouter, Switch, Route } from "react-router-dom";

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
            <Route path="/Edit">
              <Editor />
            </Route>
            <Route
              path="/"
              component={() => (
                <Main>
                  <Route path="/Home" component={() => <Home />} />
                  <Route path="/Book" component={() => <Home />} />
                  <Route path="/Pasters" component={() => <Pasters />} />
                  <Route path="/Timer" component={() => <Timer />} />
                  <Route path="/Webs" component={() => <Webs />} />
                  <Route path="/About" component={() => <Home />} />
                  <Route path="/Reader/:id" component={() => <Reader />} />
                </Main>
              )}
            ></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
