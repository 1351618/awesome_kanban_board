import React from "react"
import "./App.css"
import Header from "./header/header"
import Footer from "./footer/footer";
import Main from "./main/main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer/>
    </div>
  );
}

export default App;
