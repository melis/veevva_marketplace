import { useEffect } from "react";
import "./App.css";
import Categoryes from "./components/Categoryes/Categoryes";
// import Header from "./components/Header/Header";

function App() {
  return (
    <div className="main">
      <div className="container">
        <Categoryes />
      </div>
    </div>
  );
}

export default App;
