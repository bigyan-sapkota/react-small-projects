import React from "react";
import ProjectBox from "../Containers/ProjectBox";
import { Link } from "react-router-dom";
import { cat, age, excuse, todo } from "../assets/image";

const Home = () => {
  return (
    <div>
      <h1 className="">My Projects</h1>
      <br />
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

        <Link to="/todolist">
          <ProjectBox
            title="Todo List"
            image={todo}
            description="Your TodoList with different features like creating a task, deleting a task"
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
