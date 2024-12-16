import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../../data/constants";
import ExperienceCard from "../cards/ExperienceCard";
import "../StyleSection/Experience.css"; // Import the external CSS file

const Experience = () => {
  return (
    <div className="experience-container" id="Experience">
      <div className="experience-wrapper">
        <h1 className="experience-title">Experience</h1>
        <p className="experience-desc">
          My work experience as a software engineer and working on different
          companies and projects.
        </p>

        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
