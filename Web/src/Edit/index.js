/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-01-21 23:59:01
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-02-04 10:19:09
 */
import React from "react";
import PropTypes, { array } from "prop-types";
import * as x from "../x";
import { withRouter } from "react-router-dom";
import moment from "moment";
import { Checkbox, Input, message } from "antd";
import Editor from "../Editor";
import { Base64 } from "js-base64";

const { TextArea } = Input;

class Edit extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.nameInput = null;
    this.titleInput = null;
    this.messageInput = null;
    this.imageInput = null;
    this.html = "";
    this.keys = [];
    this.state = {
      index: 0,
      books: [],
    };
  }

  componentDidMount() {
    x.HTTP.get(
      x.SERVICE.SERVER + x.SERVICE.API.SELECT_BOOKS + "?deleted=0"
    ).then((json) => {
      this.setState({
        books: Array.from(json, (_, i) => ({
          label: json[i].title,
          value: json[i].id,
        })),
      });
    });
  }

  send() {
    let body = {
      keys: this.keys,
      article: {
        id: null,
        name: this.nameInput.input.value,
        title: this.titleInput.input.value,
        message: this.messageInput.input.value,
        image: this.imageInput.input.value,
        html: this.html,
        look: 0,
        love: 0,
        time: x.TIME.format(moment()),
        deleted: 1
      },
    };
    x.HTTP.post(
      x.SERVICE.SERVER + x.SERVICE.API.INSERT_ARTICLE,
      body
    ).then((json) => {});
  }

  render() {
    return (
      <div
        style={{
          flexDirection: "column",
          display: "flex",
          backgroundColor: "white",
          boxShadow: x.UI.BOX_SHADOW,
          borderRadius: 8,
          padding: 8,
        }}
      >
        <Input
          ref={(nameInput) => (this.nameInput = nameInput)}
          addonBefore="伪静态 http://www.cctv3.net/articles/"
          addonAfter=".com"
        />
        <div style={{ height: 8 }} />
        <Input
          ref={(titleInput) => (this.titleInput = titleInput)}
          addonBefore="标题"
        />
        <div style={{ height: 8 }} />
        <Input
          ref={(messageInput) => (this.messageInput = messageInput)}
          addonBefore="描述"
        />
        <div style={{ height: 8 }} />
        <Input
          ref={(imageInput) => (this.imageInput = imageInput)}
          addonBefore="预览"
        />
        <div style={{ height: 8 }} />
        <Checkbox.Group
          options={this.state.books}
          defaultValue={[]}
          onChange={(e) => {
            x.CONSOLE.i(e);
            this.keys = e;
          }}
        />
        <div style={{ height: 8 }} />
        <Editor
          height={320}
          onConfirmPress={(html) => {
            this.html = html;
            this.send();
          }}
        />
      </div>
    );
  }
}

export default withRouter(Edit);
