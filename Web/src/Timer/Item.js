/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-21 23:55:54
 */

import React from "react";

import BackgroundImage from "../images/Slider_Background.jpg";
import PropTypes from "prop-types";
import { Timeline } from "antd";

const NOTE = `<p><img class="eleImg" src="http://www.cctv3.net/facebook/97@QQ.gif" alt="[96]" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;">毕业两年半了，博客也两岁了。之前是Typecho搭建的博客，花钱买的别人的模板，但是维护起来很麻烦。一是因为我想扩展页面，但是不知道独立页面怎么嵌套进去<img class="eleImg" src="http://www.cctv3.net/facebook/27@QQ.gif" alt="[26]" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;"><span style="font-size: 1em; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;">，二就是他的php代码里面套的HTML，然后样式style.css将近一万行</span><img class="eleImg" src="http://www.cctv3.net/facebook/36@QQ.gif" alt="[35]" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;"><span style="font-size: 1em; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;">，最后就是之前写的博客质量确实也真不咋地，后面的还行，前两年写的也就入门儿水平</span><img class="eleImg" src="http://www.cctv3.net/facebook/16@QQ.gif" alt="[15]" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;"><span style="font-size: 1em; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;">。博客N次想改版，改成我自己喜欢的样式。</span></p><p><img class="eleImg" src="http://www.cctv3.net/facebook/15@QQ.gif" alt="[14]">我理想中的博客要求很简单<br></p><p><img class="eleImg" src="http://www.cctv3.net/facebook/16@Huya.png" alt="[15]">总而言之，言而总之吧。就在今天，我做出了一个重要的决定，用Spring Boot + React重写一套。<br></p>`;
class Item extends React.Component {
  static propTypes = {
    item: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    let item = this.props.item;
    return (
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          margin: 8,
        }}
      >
        <img
          src={require("../images/Chat_border.png")}
          style={{ height: 16, width: 16, marginTop: 8, marginRight: -4 }}
        />
        <div
          style={{
            flex: 1,
            borderRadius: 8,
            border: "1px solid #25a2fd",
            borderWidth: 1,
            padding: 8,
            backgroundColor: "#fafbfc",
          }}
          dangerouslySetInnerHTML={{ __html: NOTE }}
        />
      </div>
    );
  }
}

export default Item;
