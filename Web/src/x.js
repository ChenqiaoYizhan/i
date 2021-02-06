/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-01-22 19:13:43
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-02-05 23:32:48
 */
import { notification } from "antd";
import md5 from "blueimp-md5";
import moment from "moment";

var tinycolor = require("tinycolor2");

export const UI = {
  SLIDER_WIDTH: 256, // Slider宽度
  MAIN_WIDTH: 1158, // 整体宽度，左右两边留白
  MAIN_INTERVAL: 16, // 左右两栏的宽度
  DANMU_HEIGHT: 24, // 弹幕高度
  MENU_HEIGHT: 64, // 导航栏高度
  ZINDEX: {
    // 浮层优先级
    MENU: 666666,
    DANMU: 666665,
    DIALOG: 666664,
  },
  TIMER_COLUMNS: 3,
  randomColor: function () {
    let s = "";
    let array = Array.from({ length: 10 }, (_, i) => i + "").concat(
      Array.from({ length: 6 }, (_, i) => String.fromCharCode(i + 65))
    );
    // console.log(array)
    for (let i = 0; i < 6; i++) {
      s += array[parseInt(Math.random() * array.length)] + "";
    }
    return "#" + s;
  },
  BOX_SHADOW: `0 0 4px 2px ${tinycolor("#1790fc")
    .setAlpha(0.18)
    .toRgbString()}`,
  COLORS: [
    { title: "基佬紫", name: "purple", value: "#dc27b0" },
    { title: "闷骚红", name: "red", value: "#ff5252" },
    { title: "天空蓝", name: "blue", value: "#4481ff" },
    { title: "荷花粉", name: "pink", value: "#ff4081" },
    { title: "深邃蓝", name: "indigo", value: "#3f51b5" },
    { title: "水墨绿", name: "teal", value: "#009688" },
    { title: "香蕉黄", name: "amber", value: "#ffc107" },
    { title: "苹果绿", name: "green", value: "#4caf50" },
    { title: "活力橙", name: "orange", value: "#ff9800" },
    { title: "咖啡棕", name: "brown", value: "#795548" },
  ],
};

export const MD5 = {
  dealWithSunyupeng: function (s) {
    // s: year=2021&month=01&day=27
    // Blueimp-md5  c39599ecc7f5a9cc0659ac2191101dd2
    // Apache-Codec c39599ecc7f5a9cc0659ac2191101dd2
    return md5(`Sun Yupeng(${s})`);
  },
};

// Console
export const CONSOLE = {
  w: function (text) {
    console.log("%c" + TIME.format(moment()), "color: #ff9800", text);
  },
  e: function (text) {
    console.log("%c" + TIME.format(moment()), "color: #ff5252", text);
  },
  i: function (text) {
    console.log("%c" + TIME.format(moment()), "color: #4caf50", text);
  },
  d: function (text) {
    console.log("%c" + TIME.format(moment()), "color: #4481ff", text);
  },
};

// Server API
export const SERVICE = {
  SERVER: "http://localhost:8080/",
  // SERVER: "http://127.0.0.1:8080/Service/",
  API: {
    SELECT_BOOKS: "selectBooks.action",
    SELECT_BANNERS: "selectBanners.action",
    INSERT_ARTICLE: "insertArticle.action",
    INSERT_BOOOKS: "insertBooks.action",
    SELECT_ARTICLE: "selectArticle.action",
    UPDATE_ARTICLE: "updateArticle.action",
    INSERT_DISCUSS: "insertDiscuss.action",
    SELECT_DISCUSSES: "selectDiscusses.action",
    SELECT_COUNT: "selectCount.action",
  },
};

// Time
export const TIME = {
  // 今天是今年的第几天
  TODAY_IN_THIS_YEAR:
    Math.ceil(
      (new Date() - new Date(new Date().getFullYear().toString())) /
        (24 * 60 * 60 * 1000)
    ) + 1,
  // 服务器返回的时间距今多久了
  fromNow: function (date) {
    return moment(date, "YYYY-MM-DD HH:mm:ss").fromNow();
  },
  format: function (date) {
    return date.format("YYYY-MM-DD HH:mm:ss");
  },
};

// HTTP请求
// GET
export const HTTP = {
  get: async function (url) {
    let web = await fetch(url);
    let json = await web.json();
    CONSOLE.d(url);
    CONSOLE.i(json);
    return json;
  },
  post: async function (url, body) {
    let web = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    let json = await web.json();
    CONSOLE.i(json);
    CONSOLE.d(url);
    CONSOLE.w(body);
    return json;
  },
};

export const RegExp = {
  isEmpty: function (string) {
    return string == null || string == undefined || string.trim() == "";
  },
  isQQ: function (string) {
    if (/\d{5,11}$/.test(string)) {
      return true;
    } else {
      notification.open(NOTIFICATIONS.errorQQ);
      return false;
    }
  },
  isName: function (string) {
    if (string.length >= 1 && string.length <= 16) {
      return true;
    } else {
      notification.open(NOTIFICATIONS.errorName);
      return false;
    }
  },
  isWeb: function (string) {
    if (
      /^((https|http|ftp|rtsp|mms){0,1}(:\/\/){0,1})www\.(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/i.test(
        string
      )
    ) {
      return true;
    } else {
      notification.open(NOTIFICATIONS.errorWeb);
      return false;
    }
  },
  isDiscussContent: function (string) {
    if (string.length >= 1) {
      return true;
    } else {
      notification.open(NOTIFICATIONS.errorDiscussContent);
      return false;
    }
  },
  isBase64Image(string) {
    return /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*?)\s*$/i.test(
      string
    );
  },
  getBrowser(userAgent) {
    let userAgents = [
      { regex: /.*rv\:.*/, name: "Microsoft Edge" },
      { regex: /MSIE\s([^\s|;]+)/i, name: "Microsoft Internet Explorer" },
      { regex: /FireFox\/([^\s]+)/i, name: "Firefox" },
      { regex: /Maxthon([\d]*)\/([^\s]+)/i, name: "Aoyou" },
      { regex: /#SE 2([a-zA-Z0-9.]+)#i/, name: "Sougou" },
      { regex: /#360([a-zA-Z0-9.]+)#i/, name: "360" },
      { regex: /Edge([\d]*)\/([^\s]+)/i, name: "Microsoft Edge" },
      { regex: /UC/i, name: "UC web" },
      { regex: /OPR/i, name: "Opera" },
      { regex: /MicroMesseng/i, name: "Wechat" },
      { regex: /WeiBo/i, name: "Weibo" },
      { regex: /QQ/i, name: "QQ" },
      { regex: /QQBrowser\/([^\s]+)/i, name: "QQ" },
      { regex: /BAIDU/i, name: "Baidu" },
      { regex: /LBBROWSER/i, name: "Liebao" },
      { regex: /TheWorld/i, name: "The window of world" },
      { regex: /UBrowser/i, name: "UC web" },
      { regex: /2345Explorer/i, name: "2345" },
      { regex: /Opera[\s|\/]([^\s]+)/i, name: "Opera" },
      { regex: /Chrome([\d]*)\/([^\s]+)/i, name: "Google Chrome" },
      { regex: /safari\/([^\s]+)/i, name: "Apple safar" },
    ];
    let index = userAgents.findIndex((item) => item.regex.test(userAgent));
    return index < 0 ? "菜" : `${userAgents[index].name} 浏览器`;
  },
  getOS(userAgent) {
    let userAgents = [
      {
        regex: /win/i,
        name: "Windows",
        image: require("./images/Device_windows.png"),
      },
      {
        regex: /android/i,
        name: "Android",
        image: require("./images/Device_android.png"),
      },
      {
        regex: /ubuntu/i,
        name: "Ubuntu",
        image: require("./images/Device_linux.png"),
      },
      {
        regex: /linux/i,
        name: "Linux",
        image: require("./images/Device_linux.png"),
      },
      {
        regex: /iPhone/i,
        name: "iPhone",
        image: require("./images/Device_iOS.png"),
      },
      {
        regex: /iPad/i,
        name: "iPad",
        image: require("./images/Device_iOS.png"),
      },
      {
        regex: /mac/i,
        name: "Mac OS",
        image: require("./images/Device_iOS.png"),
      },
    ];
    let index = userAgents.findIndex((item) => item.regex.test(userAgent));
    return index < 0 ? null : userAgents[index];
  },
};

export const NOTIFICATIONS = {
  errorQQ: {
    style: { borderRadius: 4, borderWidth: 1, borderColor: "red" },
    message: "操作失败 -_-||",
    description: "QQ号貌似不对吧，别逗我了 →_→",
    onClick: () => {},
  },
  errorName: {
    message: "操作失败 -_-||",
    description: "昵称貌似不对吧，别逗我了 →_→",
    onClick: () => {},
  },
  errorWeb: {
    message: "操作失败 -_-||",
    description: "网站地址貌似是不太正常，别逗我了 →_→",
    onClick: () => {},
  },
  errorDiscussContent: {
    message: "操作失败 -_-||",
    description: "涂鸦模式和文字模式都没用，别逗我了 →_→",
    onClick: () => {},
  },
};

export const MOMENT_CONFIG = {
  months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
    "_"
  ),
  monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
  weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
  weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
  weekdaysMin: "日_一_二_三_四_五_六".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "YYYY-MM-DD",
    LL: "YYYY年MM月DD日",
    LLL: "YYYY年MM月DD日Ah点mm分",
    LLLL: "YYYY年MM月DD日ddddAh点mm分",
    l: "YYYY-M-D",
    ll: "YYYY年M月D日",
    lll: "YYYY年M月D日 HH:mm",
    llll: "YYYY年M月D日dddd HH:mm",
  },
  meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
  meridiemHour: function (hour, meridiem) {
    if (hour === 12) {
      hour = 0;
    }
    if (meridiem === "凌晨" || meridiem === "早上" || meridiem === "上午") {
      return hour;
    } else if (meridiem === "下午" || meridiem === "晚上") {
      return hour + 12;
    } else {
      // '中午'
      return hour >= 11 ? hour : hour + 12;
    }
  },
  meridiem: function (hour, minute, isLower) {
    const hm = hour * 100 + minute;
    return hm < 600
      ? "凌晨"
      : hm < 900
      ? "早上"
      : hm < 1130
      ? "上午"
      : hm < 1230
      ? "中午"
      : hm < 1800
      ? "下午"
      : "晚上";
  },
  calendar: {
    sameDay: "[今天]LT",
    nextDay: "[明天]LT",
    nextWeek: "[下]ddddLT",
    lastDay: "[昨天]LT",
    lastWeek: "[上]ddddLT",
    sameElse: "L",
  },
  dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
  ordinal: function (number, period) {
    switch (period) {
      case "d":
      case "D":
      case "DDD":
        return number + "日";
      case "M":
        return number + "月";
      case "w":
      case "W":
        return number + "周";
      default:
        return number;
    }
  },
  relativeTime: {
    future: "%s内",
    past: "%s前",
    s: "几秒",
    ss: "%d秒",
    m: "1分钟",
    mm: "%d分钟",
    h: "1小时",
    hh: "%d小时",
    d: "1天",
    dd: "%d天",
    M: "1个月",
    MM: "%d个月",
    y: "1年",
    yy: "%d年",
  },
  week: {
    // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
    dow: 1, // Monday is the first day of the week.
    doy: 4, // The week that contains Jan 4th is the first week of the year.
  },
};
