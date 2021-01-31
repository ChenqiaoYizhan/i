/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-01-22 19:13:43
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-31 16:43:53
 */
import md5 from "blueimp-md5";
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
