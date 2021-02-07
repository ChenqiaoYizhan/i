/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-04 00:25:06
 */

import React, { Component } from "react";
import Group from "./Group";

import * as datas from "./data";
var skills = datas.i.skill;
var colors = datas.colors;

class Skill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  loadTags(values) {
    let array = [];
    for (let i = 0; i < values.length; i++) {
      let item = values[i];
      array.push(
        <div
          style={{
            borderRadius: 4,
            padding: 2,
            backgroundColor: colors[i].value,
            margin: 4,
            justifyContent: "center",
            paddingHorizontal: 4,
            alignItems: "center",
            display: "flex",
          }}
          key={item}
        >
          <div style={{ fontSize: 14, color: "white" }}>{item}</div>
        </div>
      );
    }
    return array;
  }

  loadSkills() {
    let array = [];
    for (let i = 0; i < skills.length; i++) {
      let item = skills[i];
      colors.sort((a, b) => Math.random() - 0.5);
      array.push(
        <div
          style={{ flexDirection: "column", display: "flex" }}
          key={item.key}
        >
          <div style={{ fontSize: 16, color: "black" }}>{item.key}</div>
          <div
            style={{ flexDirection: "row", display: "flex", flexWrap: "wrap" }}
          >
            {this.loadTags(item.value)}
          </div>
          <div style={{ height: i == skills.length - 1 ? 0 : 4 }} />
        </div>
      );
    }
    return array;
  }

  render() {
    return (
      <div
        style={{
          flexDirection: "column",
          display: "flex",
          backgroundColor: "white",
          padding: 8,
          borderRadius: 8,
        }}
      >
        <Group image={require("./group_skill.png").default} title="技能标签" />
        <div style={{ height: 4 }} />
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              flexDirection: "column",
              justifyContent: "space-around",
              display: "flex",
            }}
          >
            {this.loadSkills()}
          </div>
        </div>
      </div>
    );
  }
}

export default Skill;
