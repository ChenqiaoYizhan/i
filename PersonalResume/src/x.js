import tinycolor from 'tinycolor2';

export const UI = {
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
  BOX_SHADOW: `0 0 8px 2px ${tinycolor("#1790fc")
    .setAlpha(0.18)
    .toRgbString()}`,
  COLORS: [
    { title: "基佬紫", name: "purple", value: "#dc27b0" },
    { title: "闷骚红", name: "red", value: "#ff5b35" },
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