/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-01-26 23:50:58
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-27 02:23:55
 */
import React from "react";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let niuArray = [
      -6.85,
      4.84,
      3.02,
      3.74,
      0.18,
      1.31,
      -0.67,
      2.8,
      -0.99,
      0.22,
      3.72,
      1.15,
      -1.45,
      2.21,
      1.82,
      1.68,
      1.03,
      -4.66,
      0.73,
      -5.7,
    ];
    let xiongArray = [
      -1.96,
      -0.39,
      2.54,
      -0.16,
      -0.74,
      -1.09,
      -1.34,
      1.43,
      -1.57,
      -0.75,
      -1.89,
      -5.76,
      1.08,
      -2.69,
      1.84,
      -0.72,
      1.71,
      -1.19,
      -0.17,
      4.08,
    ];
    // this.withoutOperation(100000, xiongArray);
    // this.withOperation(100000, xiongArray);
    // 假设净值是一元
    // base为份数
    this.withoutOperation(10000, xiongArray);
    this.withOperation(10000, xiongArray);
    this.withoutOperation(10000, niuArray);
    this.withOperation(10000, niuArray);
  }

  withoutOperation(base, array) {
    // 不加仓也不减仓
    let inCang = base;
    let price = 1;
    for (let i = 0; i < array.length; i++) {
      let rate = 1 + parseFloat(array[i] / 100);
      price = price * rate;
      console.log(`第${i + 1}天`, array[i], rate);
      console.log(
        "仓内: " + (inCang * price).toFixed(2),
        "仓外: " + 0,
        "总资产: " + (parseInt(inCang) + 0) * price.toFixed(2)
      );
    }
  }

  lastIndex(array, n) {
    for (let i = n - 1; i > 0; i--) {
      if (array[i] > 0) {
        return n - i;
      }
    }
    return 1;
  }

  withOperation(base, array) {
    // 适当的加减仓 ( 不计算手续费 )
    // 变化的是净值 操作的是份数
    // inCang 是场内份数
    // outCang 是口袋的钱
    let inCang = base;
    let outCang = 0;
    let price = 1;
    for (let i = 0; i < array.length; i++) {
      let rate = 1 + parseFloat((array[i] - 0.5) / 100);
      price = rate * price;
      console.log(`第${i + 1}天`, "涨幅: " + array[i], "净值: " + price);
      console.log(
        "操作前",
        "仓内: " + (inCang * price).toFixed(2),
        "仓外: " + outCang.toFixed(2),
        "总资产: " + (inCang * price + outCang).toFixed(2)
      );
      if (array[i] < 0) {
        let days = this.lastIndex(array, i);
        console.log(array.slice(0, i), `连续跌了${days}天`);
        inCang += parseFloat((100 * Math.pow(2, days)) / price);
        outCang -= 100 * Math.pow(2, days);
      } else {
        let quit;
        switch (parseInt(array[i])) {
          case 0:
          case 1:
            break;
          case 2:
            quit = inCang * 0.2;
            inCang = inCang - quit;
            outCang = outCang + quit * price;
            break;

          default:
            quit = inCang * 0.3;
            inCang = inCang - quit;
            outCang = outCang + quit * price;
            break;
        }
      }
      console.log(
        "操作后",
        "仓内: " + (inCang * price).toFixed(2),
        "仓外: " + outCang.toFixed(2),
        "总资产: " + (inCang * price + outCang).toFixed(2)
      );
    }
  }

  render() {
    return <div />;
  }
}
