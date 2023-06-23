// backlog.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Backlog() {
  const initialData = [
    {
      id: "Backlog123456",
      data: {
        title: "text8988",
        content: "888 999 000",
      },
    },
    {
      id: "Backlog123000",
      data: {
        title: "text5344",
        content: "888 999 000",
      },
    },
  ];

  const navigate = useNavigate();

  const handleClickContent = (id: string, title: string) => {
    console.log(`Clicked on title: ${title}`);
    navigate(`/${id}`);
  };

  return (
    <div className="backlog">
      {initialData.length === 0 ? (
        <p>No items in the backlog</p>
      ) : (
        initialData.map((item) => (
          <div key={item.id} className="content_item">
            <button
              onClick={() => handleClickContent(item.id, item.data.title)}
              className="title_button"
            >
              {item.data.title}
            </button>
            <div>Content: {item.data.content}</div>
          </div>
        ))
      )}
    </div>
  );
}

export default Backlog;