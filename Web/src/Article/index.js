/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-01-21 23:59:01
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-31 00:41:16
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
      text: `<h2 id="ytjvl">前言</h2><blockquote><p>天下滔滔，祸乱未已。吏治人心，毫无更改。军政战事，日崇虚伪。非得二三君子，倡之以诚朴，道之以廉耻。则江河日下，不知所届，若自习勤劳，犹可稍求一心之安。</p></blockquote><p><b>1995年</b>属猪<img class="eleImg" src="http://www.cctv3.net/facebook/43@QQ.gif" alt="[42]" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;">的，2018年毕业于<b>聊城大学 · 软件工程</b>专业，目前在深圳市 · 南山区，做React Native开发，月薪<b>18K</b>。技术学的比较杂，SSH、Spring Boot、Redis都懂点，目前专注于React Native和原生Android开发。</p><p><span style="font-size: 1em; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;">喜欢看中央电视台一些节目: 等着我 开讲啦 今日说法 百家讲坛</span><br></p><p>喜欢读的书: 曾国藩家书</p><p>喜欢的历史: 明末清初</p><p>喜欢的大学: 聊城大学 (&nbsp;<img class="eleImg" src="http://www.cctv3.net/facebook/14@QQ.gif" alt="[13]" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;">母校<span style="font-size: 1em; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;">&nbsp;) 西安交通大学 贵州大学 江南大学&nbsp;</span></p><h3 id="r92zd">职业</h3><p>不知不觉，毕业两年多了，弹指一挥间啊，其实到现在我也无论如何没想到今天会成为一名前端狗<img class="eleImg" src="http://www.cctv3.net/facebook/100@QQ.gif" alt="[99]" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;"><span style="font-size: 1em; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;">。因为在大学的时候我一直视艺术如粪土，而且当时都是jQuery直接操作DOM，AJAX弄起来也很麻烦，当时也不懂flex布局，各种框架layUI easyUI Bootstrap用起来也很麻烦。所以把Android和Java作为主线发展。</span></p><p>然后很长时间没有关注前端的技术，然后2015年到2017年React已经发展成熟了<img class="eleImg" src="http://www.cctv3.net/facebook/27@QQ.gif" alt="[26]" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;"><span style="font-size: 1em; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;">。</span></p><p>2017年9月份，大四实习的时候接触了React Native，当时一个月一千五百块钱的工资，但是</p><p>1. 我本身就喜欢移动开发</p><p>2. 当时我感觉React Native应该是将来跨端开发的一个趋势，百度资料不是很多，会的人也就不多。</p><p>所以实习到了第二年的一月份，起码把React Native基本技术学到手了。后来知道React写Web，也就有了今天这个博客的诞生。</p><h3 id="lxmqn">考研</h3><p>初步计划30岁之前还是以技术的积累为主，过了三十岁准备考研，去<font color="#c24f4a">公立高等学校当老师，一般会去B区的学校，去祖国需要的地方去。把我所学的，所经历的都传授给渴望知识的大山的孩子们。</font></p><h2 id="ftkmt">博客</h2><p>从毕业到现在经历了三次改版</p><table border="0" width="100%" cellpadding="0" cellspacing="0"><tbody><tr><th>时间</th><th>网站结构</th><th>废除原因</th></tr><tr><td>2018.06-2018.10</td><td>HTML&amp;SSH</td><td>1. Copy的别人的静态页面，改的JSP Servlet，CSS合并麻烦，样式出问题了无法定位</td></tr><tr><td>2018.10-2020.12</td><td>HTML&amp;PHP</td><td>用的框架typecho，使用的付费模板，问题基本差不多<br>1. 样式出问题了不太好定位<br>2. 自己想写新的页面或者组件，PHP又不熟，写进去又和原来的样式有很多冲突<br>3. Markdown没法实现富文本，这样儿我的丰富情感就没发在文章中表达<img class="eleImg" src="http://www.cctv3.net/facebook/16@Huya.png" alt="[15]"><br>4. 之前用Markdown写的文章，质量也不是很高，灌水内容据多<img class="eleImg" src="http://www.cctv3.net/facebook/103@QQ.gif" alt="[102]"></td></tr><tr><td>2020.12-至今</td><td>React&amp;Spring Boot</td><td><img class="eleImg" src="http://www.cctv3.net/facebook/14@QQ.gif" alt="[13]">暂时还没想着废除，除非再来一门新的前端技术</td></tr></tbody></table><h2 id="bqxz9">最近一年的计划</h2><ul class="w-e-todo"><li><span contenteditable="false"><input type="checkbox"></span><strike>1. 复习高等数、线性代数、数据结构、算法、计算机网络、操作系统这几门专业课</strike></li></ul><ul class="w-e-todo"><li><span contenteditable="false"><input type="checkbox"></span>2. 高级Android framework层的一些研究</li></ul><ul class="w-e-todo"><li><span contenteditable="false"><input type="checkbox"></span>3. 高级Web开发的一些研究</li></ul><ul class="w-e-todo"><li><span contenteditable="false"><input type="checkbox" checked=""></span>4. 攒钱<img class="eleImg" src="http://www.cctv3.net/facebook/111@QQ.gif" alt="[110]" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;"></li></ul><p>但是由于要换工作，所以最近一个月以梳理Web前端整个结构和Android的结构为主。</p><p>说起来这也是我现在感觉遗憾的地方，就是大学的时候，这些专业课基础知识掌握的并不扎实，虽然不太影响平时应用的开发，但是确实对于高级开发一些底层的东西就显得知识储备不足了，所以复习这些专业课，既可以准备考研，也可以提升技术。我感觉弄懂一个通讯协议，一个算法远比在CSDN漫无目的瞎逛强一百倍。</p><table border="0" width="100%" cellpadding="0" cellspacing="0"><tbody><tr><th><br></th><th>计划</th><th>进度</th></tr><tr><td>高等数学</td><td>1. 浙江大学 · 苏德矿的微积分视频<br>2. 燎原高数 · 卷子<br>3. 印刷的辅导资料<br>4. 考研真题</td><td><br></td></tr><tr><td>线性代数</td><td>1. 电子科技大学 · 黄廷祝线性代数视频<br>2. 燎原高数 · 卷子<br></td><td>1. 线性代数视频<br>2. 燎原高数 · 卷子<br>&nbsp; &nbsp;· 行列式、矩阵及其运算、矩阵初等变换与线性方程组 ( 2021.01 )</td></tr><tr><td>数据结构和算法</td><td>1. 上海交通大学 · 俞勇数据结构视频<br>2. 算法导论 · 第四版<br>3. 数据结构考研试题精析 1800 题<br>4. OJ 刷题Accept200题</td><td></td></tr><tr><td>计算机网络</td><td>1. 杭州电子科技大学 · 王相林计算机网络视频<br>2. 计算机网络 · 自顶向下方法</td><td></td></tr><tr><td>操作系统</td><td>1. 哈尔滨工业大学 · 孙志岗操作系统视频</td><td></td></tr></tbody></table><h2 id="k3vhc">愿望</h2><ul class="w-e-todo"><li><span contenteditable="false"><input type="checkbox"></span>1. 爸爸妈妈身体健康，能一年带他们出去旅游一次，逢年多节常回家看看</li></ul><ul class="w-e-todo"><li><span contenteditable="false"><input type="checkbox"></span>2. 考研 ( 意向: 西安交通大学 &gt; 北京航空航天大学 &gt; 东北大学 &gt; 江南大学 &gt; 贵州大学 )</li></ul><ul class="w-e-todo"><li><span contenteditable="false"><input type="checkbox"></span>3. 30岁之前能进一线大厂</li></ul><ul class="w-e-todo"><li><span contenteditable="false"><input type="checkbox"></span>4. 30以后去西部教书育人</li></ul><ul class="w-e-todo"><li><span contenteditable="false"><input type="checkbox"></span>5. 伟大的心理学家佛洛依德曾经说过，每个人生来都是孤独的，所以他们渴望与人沟通与交流，所以要找一个能相互欣赏、相互包容、执手偕老的另一半<img class="eleImg" src="http://www.cctv3.net/facebook/10@QQ.gif" alt="[9]"></li></ul>`,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 0 4px 2px rgba(0, 0, 0, 0.24)",
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
