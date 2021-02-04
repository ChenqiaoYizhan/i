/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-01-21 23:59:01
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-02-04 22:53:06
 */
import React from "react";
import PropTypes from "prop-types";
import * as x from "../x";
import { withRouter } from "react-router-dom";
import Discuss from "../Disscuss";
import Discusses from "../Disscuss/Discusses";
import article from "./article.css";

class Article extends React.Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  async initDatas() {
    let result = await x.HTTP.get(
      x.SERVICE.SERVER +
        x.SERVICE.API.SELECT_ARTICLE +
        `?id=${this.props.match.params.id}`
    );
    this.setState({
      text: result.article.html,
    });
  }

  componentDidMount() {
    this.initDatas();
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          boxShadow: x.UI.BOX_SHADOW,
          borderRadius: 8,
          backgroundColor: "white",
          padding: 8,
        }}
      >
        <div
          style={{ padding: 8 }}
          dangerouslySetInnerHTML={{ __html: this.state.text }}
        />
        <Discuss
          width={x.UI.MAIN_WIDTH - x.UI.SLIDER_WIDTH - x.UI.MAIN_INTERVAL - 16}
          onConfirmPress={() => {}}
        />
        <div style={{ height: 12 }} />
        <Discusses />
      </div>
    );
  }
}

export default withRouter(Article);
