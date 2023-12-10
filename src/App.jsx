import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import CatFactGenerator from "./CatFactGenerator/CatFactGenerator";
import AgePredictor from "./AgePredictor/AgePredictor";
import ExcuseGenerator from "./ExcuseGenerator/ExcuseGenerator";
import Todolist from "./TodoList/TodoList";

const App = () => {
  return (
    <section className="max-w-screen-lg mx-auto py-10">
      <br />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catfact" element={<CatFactGenerator />} />
          <Route path="/agepredictor" element={<AgePredictor />} />
          <Route path="/excusegenerator" element={<ExcuseGenerator />} />
          <Route path="/todolist" element={<Todolist />} />
        </Routes>
      </Router>
    </section>
  );
};

export default App;
