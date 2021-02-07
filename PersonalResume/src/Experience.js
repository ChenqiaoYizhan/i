/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-02 09:42:08
 */

import React, { Component } from "react";
import Group from "./Group";

import * as datas from "./data";
var experiences = datas.i.experience;
var colors = datas.colors;
var messageParentIndex = 0;

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  loadParent(message) {
    let array = [];
    for (let i = 0; i < message.length; i++) {
      let item = message[i];
      array.push(
        <div
          key={item.key}
          style={{
            flexDirection: "column",
            display: "flex",
          }}
        >
          <div
            style={{
              flexDirection: "row",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div
              style={{
                height: 6,
                width: 6,
                borderRadius: 3,
                backgroundColor: colors[messageParentIndex].value,
              }}
            />
            <div style={{ width: 4 }} />
            <div style={{ fontSize: 16, color: "black" }}>{item.name}</div>
          </div>
          {this.loadChildren(item.value)}
          {i == message.length - 1 ? null : <div style={{ height: 8 }} />}
        </div>
      );
    }
    messageParentIndex++;
    return array;
  }

  loadChildren(values) {
    let array = [];
    for (let i = 0; i < values.length; i++) {
      let item = values[i];
      array.push(
        <div key={item}>
          <div
            style={{
              fontSize: 16,
              color: "grey",
              marginVertical: i == values.length - 1 ? 0 : 1,
            }}
          >{`${i + 1}. ${item}`}</div>
        </div>
      );
    }
    return array;
  }

  loadWorks() {
    let array = [];
    colors.sort((a, b) => Math.random() - 0.5);
    messageParentIndex = 0;
    for (let i = 0; i < experiences.length; i++) {
      let item = experiences[i];
      array.push(
        <div key={i} style={{ flexDirection: "column", display: "flex" }}>
          <div
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ fontSize: 18, color: "black" }}>{item.comany}</div>
            <div
              style={{
                flexDirection: "row",
                alignItems: "center",
                display: "flex",
              }}
            >
              <div style={{ fontSize: 14, color: "grey" }}>
                {item.start + " - " + item.end}
              </div>
            </div>
          </div>
          <div style={{ height: 8 }} />
          {this.loadParent(item.message)}
          {i == experiences.length - 1 ? null : (
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
        <Group img={require("./group_experience.png")} title="工作经历" />
        <div style={{ height: 8 }} />
        {this.loadWorks()}
      </div>
    );
  }
}

export default Experience;
