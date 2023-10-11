import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "../Pages/Home";
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "../Pages/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
