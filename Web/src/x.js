/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-01-22 19:13:43
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-23 14:54:46
 */

export const UI = {
  SLIDER_WIDTH: 256, // Slider宽度
  MAIN_WIDTH: 1024, // 整体宽度，左右两边留白
  DANMU_HEIGHT: 24, // 弹幕高度
};

export const DANMU = {
  SPEED: 1, // 弹幕速度 x轴的位移距离 这里就不控制间隔了，直接采用1s/24HZ = 41.66ms刷新一次 推荐: 2
  INTERVAL: { min: 1000, max: 4000 }, // 弹幕间隔，毫秒 推荐: 2000-4000
};
