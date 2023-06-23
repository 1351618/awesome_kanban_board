// backlog.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { defaultData, backlogData } from '../../../../redux/data_components/backlog_data';
import { addToLog } from '../../../../redux/actions';
import { useDispatch } from 'react-redux';
import "../block.css"


function Backlog() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickAdd = () => {
    const cardData = `Button-clicked Backlog_Add`; 
    dispatch(addToLog(cardData)); 
  };

  const handleClickSubmit = () => {
    const cardData = `Button-clicked Backlog_Submit`; 
    dispatch(addToLog(cardData)); 
  };


  

  const handleClickContent = (id: string, title: string) => {
    console.log(`Clicked on title: ${title}`);
    navigate(`/${id}`);
  };

  return (
      <div className="block">
      <p className="block-title">Backlog</p>
      <div className="block-content">
      {backlogData.length === 0 ? (
        <p>No items in the backlog</p>
      ) : (
        backlogData.map((item) => (
          <div key={item.id} className="content_item">
            <button
              onClick={() => handleClickContent(item.id, item.data.title)}
              className="title_button"
            >
              {item.data.title}
            </button>
          </div>
        ))
      )}
      </div>
      <input className="block-input" type="text" placeholder=" "/>
      <button className="block-button_add" onClick={handleClickAdd} >+ Add card</button>
      <button className="block-button_submit" onClick={handleClickSubmit}>Submit</button>
    </div>
  );
}

export default Backlog;