/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-02-03 16:47:13
 */

import React, { Component } from "react";
import Group from "./Group";
import * as datas from "./data";
var tinycolor = require("tinycolor2");

var colors = datas.colors;
var projects = datas.i.project;

class Poject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  loadTags(values, index) {
    let array = [];
    for (let i = 0; i < values.length; i++) {
      array.push(
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginHorizontal: 2,
            borderRadius: 4,
            borderWidth: 1,
            borderColor: colors[index].value,
            paddingHorizontal: 4,
          }}
          key={i}
        >
          <div style={{ fontSize: 14, color: colors[index].value }}>
            {values[i]}
          </div>
        </div>
      );
    }
    return array;
  }

  loadProjects() {
    let array = [];
    colors.sort((a, b) => Math.random() - 0.5);
    for (let i = 0; i < projects.length; i++) {
      let item = projects[i];
      array.push(
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            shadowColor: `0 0 4px 2px ${tinycolor("#1790fc")}`,
          }}
          key={i}
        >
          <div
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            <div style={{ fontSize: 16, color: "black" }}>{item.title}</div>
            <div
              style={{
                flexDirection: "row",
                alignItems: "center",
                display: "flex",
              }}
            >
              {this.loadTags(item.tag, i)}
            </div>
          </div>
          <div style={{ height: 6 }} />
          <div style={{ fontSize: 14, color: "grey" }}>{item.message}</div>
          {i == projects.length - 1 ? null : (
            <div
              style={{
                height: 1,
                marginVertical: 8,
                backgroundColor: "#f0f0f0",
              }}
            />
          )}
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
        <Group image={require("./group_project.png")} title="项目经历" />
        <div style={{ height: 8 }} />
        {this.loadProjects()}
      </div>
    );
  }
}

export default Poject;
