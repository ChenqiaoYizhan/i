/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-20 18:33:00
 */
import React from "react";
import Item from "./Item";
import Wall from "../images/Paster_wall.gif";

const PASTER_WALL_SIZE = {
  HEIGHT: 800,
  WIDTH: 1200,
};
const COLORS = [
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
];
const DATAS = [
  {
    title: "陈桥驿站",
    time: "2020-01-20 13:30:10",
    message: "如果等待可以换来奇迹的话，我宁愿等下去，哪怕一年，抑或一生!",
  },
  {
    title: "陈桥驿站",
    time: "2020-01-20 13:30:10",
    message:
      "听说，世界上最美的相遇是擦肩，最美的誓言是谎言，最美的爱都在昨天，最美的思念是永不相见，最美的是得不到的。",
  },
  {
    title: "陈桥驿站",
    time: "2020-01-20 13:30:10",
    message:
      "时间如溪水般淙淙流淌，总是习惯一个人游走在喧嚣的大街上，看这一个个陌生的脸孔，没有人注意你，一切都如此平静，一切又都那么的混乱，分不清是周围平静而心里混乱，还是心里平静而周围平静。",
  },
  {
    title: "陈桥驿站",
    time: "2020-01-20 13:30:10",
    message:
      "我多么希望，有一个门口。早晨，阳光照在草上。我们站着，扶着自己的门窗，门很低，但太阳是明亮的。草在结它的种子，风在摇它的叶子，我们站着，不说话，就十分美好。",
  },
  {
    title: "陈桥驿站",
    time: "2020-01-20 13:30:10",
    message:
      "我们应该相信，总会有不期而遇的温暖，和生生不息的希望，在不经意间出现在我们的生命里。",
  },
  {
    title: "陈桥驿站",
    time: "2020-01-20 13:30:10",
    message: "我愿能朝着太阳生长，做一个温暖的人，不卑不亢，清澈生活。",
  },
  {
    title: "陈桥驿站",
    time: "2020-01-20 13:30:10",
    message:
      "人生只有走出来的美丽，没有等出来的辉煌;要努力使每一天都开心而有意义,不为别人,为自己。",
  },
  {
    title: "陈桥驿站",
    time: "2020-01-20 13:30:10",
    message:
      "懂得，是心灵的交汇，是一种心语;相知的两个人，在彼此默默无语间，因懂得让心有了贴近，那份柔情有了所系，心有灵犀。",
  },
  {
    title: "陈桥驿站",
    time: "2020-01-20 13:30:10",
    message:
      "怀旧，是因为看不到未来。恋旧，是觉得新人不够好。我们总把对今天的不满和对明天的恐惧，用歌颂昨天的方式来表达。",
  },
  {
    title: "陈桥驿站",
    time: "2020-01-20 13:30:10",
    message:
      "时光，慢慢地走，慢慢地过，在不经意间就串起了流年。总有些追逐会化成云烟，总有些故事会写成诗篇，总有些话语会留下悸动，总有些记忆会美在心间。忘记，是普通人都能做到的事，而我选择不忘记。而爱你，仍是我做过的最好的事。",
  },
  {
    title: "陈桥驿站",
    time: "2020-01-20 13:30:10",
    message:
      "幸福不强求，信任不强求。很多的时候，我们总是很天真，总是遐想于远方的幸福。天真过后，我们才发觉，未来很远，遐想无边，我们曾设计出最完美的人生之路，却很少有过走到的地方。",
  },
  {
    title: "陈桥驿站",
    time: "2020-01-20 13:30:10",
    message: "树在，山在，大地在，岁月在，我在，你还要怎样更好的世界?",
  },
  {
    title: "陈桥驿站",
    time: "2020-01-20 13:30:10",
    message: "半窗疏影，一梦千年，琴歌萧萧笛声怜。",
  },
  {
    title: "陈桥驿站",
    time: "2020-01-20 13:30:10",
    message:
      "借一丝秋风清逸，披一件淡雅素衣，饮一杯雨前清茶，漫步于梨花树下，任白花纷落，温文尔雅，净玉无瑕。",
  },
  {
    title: "陈桥驿站",
    time: "2020-01-20 13:30:10",
    message:
      "所有的结局都已写好，所有的泪水也都已启程，却忽然忘了是怎么样的一个开始，在那个古老的不再回来的夏日，无论我如何地去追索，年轻的你只如云影掠过，而你微笑的面容极浅极淡，逐渐隐没在日落后的群岚，遂翻开那发黄的扉页，命运将它装订得极为拙劣含着泪，我一读再读 却不得不承认，青春是一本太仓促的书。",
  },
  {
    title: "陈桥驿站",
    time: "2020-01-20 13:30:10",
    message:
      "我总是躲在梦与季节的深处，听花与黑夜唱尽梦魇，唱尽繁华，唱断所有记忆的来路。",
  },
  {
    title: "陈桥驿站",
    time: "2020-01-20 13:30:10",
    message:
      "年少时，我们因谁因爱或是只因寂寞而同场起舞;沧桑后，我们何因何故寂寞如初却宁愿形同陌路。",
  },
  {
    title: "陈桥驿站",
    time: "2020-01-20 13:30:10",
    message: "有情不必终老，暗香浮动恰好。",
  },
  {
    title: "陈桥驿站",
    time: "2020-01-20 13:30:10",
    message:
      "原来岁月并不是真的逝去，它只是从我们的眼前消失，却转过来躲在我们的心里，然后再慢慢地来改变我们的容貌。",
  },
];

class Pasters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
    };
  }

  componentDidMount() {
    let index = 0;
    let array = [];
    var that = this;
    let timer = setInterval(function () {
      if (index == DATAS.length - 1) {
        index = 0;
        array = [];
        clearInterval(timer);
      } else {
        let item = DATAS[index];
        array.push({
          id: index + 1,
          title: item.title,
          time: item.time,
          message: item.message,
          zIndex: index,
          index: parseInt(Math.random() * 8),
          color: COLORS[parseInt(COLORS.length * Math.random())].value,
          top: parseInt(Math.random() * (PASTER_WALL_SIZE.HEIGHT - 200)),
          left: parseInt(Math.random() * (PASTER_WALL_SIZE.WIDTH - 250)),
        });
        index++;
        that.setState({
          datas: array,
        });
      }
    }, 256);
  }

  loadPasters() {
    let array = [];
    for (let i = 0; i < this.state.datas.length; i++) {
      let item = this.state.datas[i];
      array.push(
        <div
          key={i}
          style={{
            position: "absolute",
            zIndex: item.zIndex,
            left: item.left,
            top: item.top,
          }}
        >
          <Item
            item={item}
            onPress={() => {
              let datasCopy = this.state.datas;
              for (let j = 0; j < datasCopy.length; j++) {
                datasCopy[j].zIndex = i == j ? 1024 : 0;
              }
              this.setState({
                datas: datasCopy,
              });
            }}
          />
        </div>
      );
    }
    return array;
  }

  render() {
    return (
      <div
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundImage: `url(${Wall})`,
          height: PASTER_WALL_SIZE.HEIGHT,
          width: PASTER_WALL_SIZE.WIDTH,
        }}
      >
        {this.loadPasters()}
      </div>
    );
  }
}

export default Pasters;
