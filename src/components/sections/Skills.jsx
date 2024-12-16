import React from "react";
import { skills } from "../../data/constants";
import { Tilt } from "react-tilt";
import "../StyleSection/Skills.css";

const Skills = () => {
  return (
    <div className="container" id="Skills">
      <div className="wrapper">
        <div className="title">Skills</div>
        <div className="desc">
          Here are some of my skills on which I have been working on for the
          past 3 years.
        </div>

        <div className="skills-container">
          {skills.map((skill, index) => (
            <Tilt key={`skill-${index}`}>
              <div className="skill">
                <div className="skill-title">{skill.title}</div>
                <div className="skill-list">
                  {skill.skills.map((item, index_x) => (
                    <div className="skill-item" key={`skill-x-${index_x}`}>
                      <img src={item.image} alt={item.name} className="skill-image" />
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
