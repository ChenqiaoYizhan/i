/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-01-22 19:13:43
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-29 23:51:59
 */
import md5 from "blueimp-md5";

export const UI = {
  SLIDER_WIDTH: 256, // Slider宽度
  MAIN_WIDTH: 1158, // 整体宽度，左右两边留白
  MAIN_INTERVAL: 16, // 左右两栏的宽度
  DANMU_HEIGHT: 24, // 弹幕高度
  MENU_HEIGHT: 64, // 导航栏高度
  ZINDEX: {
    // 浮层优先级
    MENU: 100,
    DANMU: 99,
  },
  TIMER_COLUMNS: 3,
  randomColor: function () {
    let s = "";
    let array = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ];
    for (let i = 0; i < 6; i++) {
      s += array[parseInt(Math.random() * array.length)] + "";
    }
    return "#" + s;
  },
};

export const MD5 = {
  dealWithSunyupeng: function (s) {
    // s: year=2021&month=01&day=27
    // Blueimp-md5  c39599ecc7f5a9cc0659ac2191101dd2
    // Apache-Codec c39599ecc7f5a9cc0659ac2191101dd2
    return md5(`Sun Yupeng(${s})`);
  },
};

export const DANMU = {
  SPEED: 1, // 弹幕速度 x轴的位移距离 这里就不控制间隔了，直接采用1s/24HZ = 41.66ms刷新一次 推荐: 2
  INTERVAL: { min: 2021, max: 6666 }, // 弹幕间隔，毫秒 推荐: 2000-4000
};
