import React from 'react';
import "./App.css"
import { Route, Routes } from 'react-router-dom';
import Header from "./header/header";
import Footer from "./footer/footer";
import Main from "./main/main";
import TaskDetailPage from './task_detail_page/task_detail_page';

function App() {
  return (
      <Routes>
        <Route path="/" element={
          <div className="App">
            <Header />
            <Main />
            <Footer />
          </div>} />
        <Route path="/:id" element={
        <div className="App">
          <Header />
          <TaskDetailPage />
          <Footer />
        </div>} />
      </Routes>

  );
}

export default App;