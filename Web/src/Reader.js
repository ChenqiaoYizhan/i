/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-28 21:43:55
 */
import React from "react";
import Editor from "./Editor";
import "./reader.css";
import * as x from "./x";
import { withRouter } from "react-router-dom";
import Discuss from "./Disscuss";

const DEFAULT_ARTICLE = `
<p><img class="eleImg" src="http://www.cctv3.net/facebook/97@QQ.gif" alt="[96]" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;">毕业两年半了，博客也两岁了。之前是Typecho搭建的博客，花钱买的别人的模板，但是维护起来很麻烦。一是因为我想扩展页面，但是不知道独立页面怎么嵌套进去<img class="eleImg" src="http://www.cctv3.net/facebook/27@QQ.gif" alt="[26]" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;"><span style="font-size: 1em; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;">，二就是他的php代码里面套的HTML，然后样式style.css将近一万行</span><img class="eleImg" src="http://www.cctv3.net/facebook/36@QQ.gif" alt="[35]" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;"><span style="font-size: 1em; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;">，最后就是之前写的博客质量确实也真不咋地，后面的还行，前两年写的也就入门儿水平</span><img class="eleImg" src="http://www.cctv3.net/facebook/16@QQ.gif" alt="[15]" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;"><span style="font-size: 1em; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;">。博客N次想改版，改成我自己喜欢的样式。</span></p><p><img class="eleImg" src="http://www.cctv3.net/facebook/15@QQ.gif" alt="[14]">我理想中的博客要求很简单<br></p><pre type="JavaScript"><code><span class="hljs-number">1</span>. 可以自己自由布局，我想要俩个边栏，就两个边栏，想要三个就三个</code><code>2. 可以像现在这样儿，富文本编辑文章，添加上我喜欢的QQ表情或者虎牙的表情，表达起来更加形象生动</code><code>3. 可以自己添加独立页面的扩展，我好多次都想做一个时间轴的页面，但是React会写，php里面套HTML我就不会写了，这就很蛋疼 </code></pre><p><img class="eleImg" src="http://www.cctv3.net/facebook/16@Huya.png" alt="[15]">总而言之，言而总之吧。就在今天，我做出了一个重要的决定，用Spring Boot + React重写一套。<span style="color: rgb(142, 144, 140); background-color: rgb(241, 241, 241); font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace; font-size: 1em;">/*</span><br></p><pre type="JavaScript"><code><span class="hljs-comment"> * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-19 23:49:02
 */</span>
<span class="hljs-keyword">import</span> React <span class="hljs-keyword">from</span> <span class="hljs-string">"react"</span>;
<span class="hljs-keyword">import</span> Editor <span class="hljs-keyword">from</span> <span class="hljs-string">"./Editor"</span>;
<span class="hljs-keyword">import</span> Reader <span class="hljs-keyword">from</span> <span class="hljs-string">'./Reader'</span>;
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">App</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">Component</span> </span>{
  <span class="hljs-function"><span class="hljs-title">constructor</span>(<span class="hljs-params">props</span>)</span> {
    <span class="hljs-built_in">super</span>(props);
    <span class="hljs-built_in">this</span>.state = {};
  }

  <span class="hljs-function"><span class="hljs-title">componentDidMount</span>(<span class="hljs-params"></span>)</span> {
  }

  <span class="hljs-function"><span class="hljs-title">device</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-comment">// iMac or iPhone</span>
    <span class="hljs-keyword">let</span> userAgent = navigator.userAgent;
    <span class="hljs-keyword">return</span> userAgent.indexOf(<span class="hljs-string">"Mobile"</span>) &gt; <span class="hljs-number">0</span> ? <span class="hljs-string">"iPhone"</span> : <span class="hljs-string">"iMac"</span>;
  }

  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> (
      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> <span class="hljs-attr">flex:</span> <span class="hljs-attr">1</span>, <span class="hljs-attr">flexDirection:</span> "<span class="hljs-attr">column</span>" }}&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">link</span>
          <span class="hljs-attr">href</span>=<span class="hljs-string">"http://cdn.bootcss.com/highlight.js/8.0/styles/tomorrow.min.css"</span>
          <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span>
        /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Reader</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
  }
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> App;
</code></pre>`;

class Reader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
  }

  render() {
    return (
      <div
        style={{
          flex: 1,
          flexDirection: "column",
          width: x.UI.MAIN_WIDTH - x.UI.SLIDER_WIDTH - x.UI.MAIN_INTERVAL,
        }}
      >
        <div
          style={{ padding: 32, flex: 1 }}
          dangerouslySetInnerHTML={{ __html: DEFAULT_ARTICLE }}
        />
        <Discuss onConfirmPress={(data) => {
          console.log(data);
        }} />
      </div>
    );
  }
}

export default withRouter(Reader);
