import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CV from './components/CV';

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="cv" element={<CV />} />
  </Routes>
  );
}

export default App;
