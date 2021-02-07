/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-04 12:01:52
 */

import React, { Component } from "react";
import Group from "./Group";

import * as datas from "./data";
var university = datas.i.university;

class University extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
        <Group
          image={require("./group_university.png")}
          title="教育经历"
          div={university.start + " - " + university.end}
        />
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
            <div style={{ fontSize: 16, color: "black" }}>
              {university.name}
            </div>
            <div style={{ fontSize: 14, color: "grey" }}>
              {university.major}
            </div>
          </div>
          <img
            src={require("./university_lcu.jpg")}
            style={{ height: 48, width: 48, borderRadius: 24 }}
          />
        </div>
      </div>
    );
  }
}

export default University;
