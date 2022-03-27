import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} ></Route>
      <Route path="/home" element={<Home />} ></Route>
    </Routes>
  );
}

export default App;
