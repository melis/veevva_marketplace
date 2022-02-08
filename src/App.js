import { useEffect } from "react";
import "./App.css";
import Categories from "./components/Categories/Categories";
// import Header from "./components/Header/Header";

function App() {
  return (
    <div className="main">
      <div className="container">
        <Categories />
      </div>
    </div>
  );
}

export default App;
