/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-01-22 19:13:43
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-02-03 00:01:13
 */
import md5 from "blueimp-md5";
import moment from 'moment';

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
    SELECT_BANNERS: "selectBanners.action"
  },
};

// 正则表达式以及字符串等
export const RegExp = {
  isNull: function (string) {
    return (
      string == undefined ||
      string == "" ||
      string == null ||
      string == "{}" ||
      string == "[]" ||
      string == "Null"
    );
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
    return new Promise(function (resolve, reject) {
      fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          CONSOLE.e(url);
          CONSOLE.i(responseJson);
          resolve(responseJson);
        })
        .catch((error) => {
          CONSOLE.e(error);
        });
    });
  },
  post: async function (url, body) {
    return new Promise(function (resolve, reject) {
      fetch(url, { method: "POST", body: JSON.string(body) })
        .then((response) => response.json())
        .then((responseJson) => {
          CONSOLE.e(url);
          CONSOLE.w(body);
          CONSOLE.i(responseJson);
          resolve(responseJson);
        })
        .catch((error) => {
          CONSOLE.e(error);
        });
    });
  },
};
