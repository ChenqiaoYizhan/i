/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-01-26 23:50:58
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-29 19:30:08
 */
import { color } from "echarts";
import React from "react";
import CanvasDraw from "react-canvas-draw";
import * as x from "../x";
import PropTypes from "prop-types";
import { DragDropContext, Draggable } from "react-beautiful-dnd";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div
        style={{
          backgroundColor: "white",
          flexDirection: "column",
          display: "flex",
        }}
      >
        <DragDropContext
          style={{ height: 500, width: 500, backgroundColor: "blue" }}
        >
          <Draggable
            style={{ height: 100, width: 100, backgroundColor: "red" }}
          />
        </DragDropContext>
      </div>
    );
  }
}
