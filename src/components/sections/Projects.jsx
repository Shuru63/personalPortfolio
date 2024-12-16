import React, { useState } from "react";
import { projects } from "../../data/constants";
import ProjectCard from "../cards/ProjectCard";
import "../StyleSection/Project.css";

const Projects = () => {
  const [toggle, setToggle] = useState("all");

  return (
    <div className="container" id="Projects">
      <div className="wrapper">
        <div className="title">Projects</div>
        <div
          className="desc"
          style={{
            marginBottom: "40px",
          }}
        >
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </div>

        <div className="toggle-button-group">
          <div
            className={`toggle-button ${toggle === "all" ? "active" : ""}`}
            onClick={() => setToggle("all")}
          >
            ALL
          </div>
          <div className="divider" />
          <div
            className={`toggle-button ${toggle === "web app" ? "active" : ""}`}
            onClick={() => setToggle("web app")}
          >
            WEB APP"S
          </div>
          <div className="divider" />
          <div
            className={`toggle-button ${toggle === "android app" ? "active" : ""}`}
            onClick={() => setToggle("UI/UX Design")}
          >
            UI/UX Design
          </div>
          <div className="divider" />
          <div
            className={`toggle-button ${
              toggle === "machine learning" ? "active" : ""
            }`}
            onClick={() => setToggle("AI application")}
          >
            AI application
          </div>
        </div>

        <div className="card-container">
          {toggle === "all" &&
            projects.map((project) => <ProjectCard project={project} />)}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
