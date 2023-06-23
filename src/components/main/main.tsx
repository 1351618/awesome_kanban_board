import React from "react"
import "./main.css"
import Backlog from "./Backlog/backlog";
import { addToLog } from '../../redux/actions';
import { useDispatch } from 'react-redux';


interface MainBlockProps {
  title: string;
  content: React.ReactNode;
  blockNumber: string;
  blocSubmit: string;
}

function MainBlock({ title, content, blockNumber, blocSubmit }: MainBlockProps) {
  const dispatch = useDispatch();

  const handleClickAdd = () => {
    const cardData = `Button-clicked ${blockNumber}`; // Данные, которые  отправить в хранилище
    // console.log(cardData); // Вывод в консоль проверка
    dispatch(addToLog(cardData)); // Отправка данных в хранилище через функцию действия addCard
  };

  const handleClickSubmit = () => {
    const cardData = `Button-clicked ${blocSubmit}`; // Данные, которые  отправить в хранилище
    // console.log(cardData); // Вывод в консоль проверка
    dispatch(addToLog(cardData)); // Отправка данных в хранилище через функцию действия addCard
  };

  return (
    <div className="main__block">
      <p className="main__block-title">{title}</p>
      <div className="main__block-content">{content}</div>
      <input className="main__block-input" type="text" placeholder=" "/>
      <button className="main__block-button_add" onClick={handleClickAdd}>+ Add card</button>
      <button className="main__block-button_submit" onClick={handleClickSubmit}>Submit</button>
    </div>
  );
}

function Main() {
  return (
    <div className="main">
      <div className="main-content">
      <MainBlock 
        title="Backlog" 
        content={<Backlog />} 
        blockNumber={"Backlog_Add"} 
        blocSubmit={"Backlog_Submit"}/>
      <MainBlock 
        title="Ready" 
        content={<Backlog />} 
        blockNumber={"Ready_Add"} 
        blocSubmit={"Ready_Submit"}/>
      <MainBlock 
        title="In Progress" 
        content={<Backlog />} 
        blockNumber={"In_Progress_Add"} 
        blocSubmit={"In_Progress_Submit"}/>
      <MainBlock 
        title="Finished" 
        content={<Backlog />} 
        blockNumber={"Finished_Add"} 
        blocSubmit={"Finished_Submit"}/>
    </div>
    </div>
  );
}

export default Main;