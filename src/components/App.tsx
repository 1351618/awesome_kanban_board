import React from 'react';
import "./App.css"
import { Route, Routes } from 'react-router-dom';
import Header from "./header/header";
import Footer from "./footer/footer";
import Main from "./main/main";
import TaskDetailPage from './task_detail_page/task_detail_page';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/awesome_kanban_board" element={<Main />} />
        <Route path="/:id" element={<TaskDetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;