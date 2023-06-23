import React from "react"
import "./main.css"
import Backlog from "./block/Backlog/backlog";

function Main() {
  return (
    <div className="main">
      <div className="main-content">
        <Backlog />
        <Backlog />
        <Backlog />
        <Backlog />
      </div>
    </div>
  );
}

export default Main;