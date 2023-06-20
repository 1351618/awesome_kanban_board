import React from "react"
import "./App.css"
import Header from "./ts/header/header"
import Footer from "./ts/footer/footer";
import Main from "./ts/main/main";

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
