import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./task_detail_page.css"

const TaskDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Перейти на предыдущую страницу
  };

  return (
    <div className='task-detail-page'>
      <button className='task-detail-page_button' onClick={handleGoBack}>╳</button>
      <h2>Task name</h2>
      <span>This task has no description</span>
      <div>ID: {id}</div>
    </div>
  );
};

export default TaskDetailPage;