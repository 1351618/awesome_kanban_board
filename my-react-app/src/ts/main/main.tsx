import React from "react"
import "./main.css"
import Backlog from "./Backlog/backlog";


interface MainBlockProps {
  title: string;
  content: React.ReactNode;
}

function MainBlock({ title, content }: MainBlockProps) {
  return (
    <div className="main__block">
      <p className="main__block-title">{title}</p>
      <div className="main__block-content">{content}</div>
      <input className="main__block-input" type="text" placeholder=" "/>
      <button className="main__block-button">+ Add card</button>
    </div>
  );
}

function Main() {
  return (
    <div className="main">
      <MainBlock title="Backlog" content={<Backlog />}/>
      <MainBlock title="Ready" content={<Backlog />}/>
      <MainBlock title="In Progress" content={<Backlog />}/>
      <MainBlock title="Finished" content={<Backlog />}/>
    </div>
  );
}

export default Main;