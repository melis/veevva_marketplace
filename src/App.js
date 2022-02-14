import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Filter from "./components/Filter/Filter";
import Products from "./components/Products/Products";

function App() {
  return (
    <BrowserRouter>
      <div className="main__inners">
        <Filter />
        <Products />
      </div>
    </BrowserRouter>
  );
}

export default App;
