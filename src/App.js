import React from "react";
import "./App.css";
import Categories from "./components/Categories/Categories";
import { BrowserRouter } from "react-router-dom";
import Bestsellers from "./components/Bestsellers/Bestsellers";
import Topsellers from "./components/Topsellers/Topsellers";
import NewProducts from "./components/NewProducts/NewProducts";
// import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <div className="container">
          <Categories />
          <Bestsellers />
          <Topsellers />
          <NewProducts />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
