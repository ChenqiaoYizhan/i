/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2020-09-22 15:36:38
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-08 15:23:10
 */
import React from "react";

class Group extends React.Component {
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
        }}
      >
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              flexDirection: "row",
              alignItems: "center",
              display: "flex",
            }}
          >
            <img src={this.props.image} style={{ height: 24, width: 24 }} />
            <div style={{ width: 4 }} />
            <div style={{ fontSize: 18, color: "black", fontWeight: "bold" }}>
              {this.props.title}
            </div>
          </div>
          {this.props.div == undefined ? null : (
            <div style={{ fontSize: 14, color: "grey" }}>{this.props.div}</div>
          )}
        </div>
      </div>
    );
  }
}

export default Group;
