import React from "react";
import "./App.css";
import Categories from "./components/Categories/Categories";
import { BrowserRouter } from "react-router-dom";
// import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <div className="container">
          <Categories />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
