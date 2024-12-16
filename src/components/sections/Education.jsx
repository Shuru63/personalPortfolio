import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { education } from "../../data/constants";
import EducationCard from "../cards/EducationCard";
import EarthCanvas from "../canvas/Earth";
import "../StyleSection/Education.css"; 
const Education = () => {
  return (
    <div className="education-container" id="Education">
      <div className="education-wrapper">
        <h1 className="education-title">Education</h1>
        <p className="education-desc">
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </p>
        <VerticalTimeline>
          {education.map((education, index) => (
            <EducationCard key={`education-${index}`} education={education} />
          ))}
        </VerticalTimeline>
        <EarthCanvas />
      </div>
    </div>
  );
};

export default Education;
