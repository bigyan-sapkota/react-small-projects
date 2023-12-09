import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import AgePredictor from "../AgePredictor/AgePredictor";
import ExcuseGenerator from "../ExcuseGenerator/ExcuseGenerator";
import CatFactGenerator from "../CatFactGenerator/CatFactGenerator";
import ProjectBox from "../Containers/ProjectBox";
import { age, cat, excuse } from "../assets/image";

const SmallProjects = () => {
  return (
    <section className="max-w-screen-lg mx-auto py-10">
      <h1 className="text-3xl font-bold">My Projects:</h1>
      <br />
      <Router>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Link to="/catfact" className="link">
            <ProjectBox
              title="Cat Fact"
              image={cat}
              description="Discover fascinating and amusing facts about our feline friends with a simple click"
            />
          </Link>

          <Link to="/agepredictor">
            <ProjectBox
              title="Age Predictor"
              image={age}
              description="Explore the intriguing world of age prediction by entering names and guessing ages."
            />
          </Link>

          <Link to="/excusegenerator">
            <ProjectBox
              title="Excuse Generator"
              image={excuse}
              description="Craft amusing and creative excuses with just a click. Impress your friends with your wit and humor!"
            />
          </Link>
        </div>

        <Routes>
          <Route path="/catfact" element={<CatFactGenerator />} />
          <Route path="/agepredictor" element={<AgePredictor />} />
          <Route path="/excusegenerator" element={<ExcuseGenerator />} />
        </Routes>
      </Router>
    </section>
  );
};

export default SmallProjects;
