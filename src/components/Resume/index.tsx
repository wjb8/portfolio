import React from "react";
import { ResumeProps } from "../../../types/types";

const Resume = (props: ResumeProps) => {
  return (
    <div className="resume-container">
      <h2>Education</h2>
      {props.data.education.map((education, index) => (
        <div key={index}>
          <h3>{education.school}</h3>
          <p>
            {education.degree} in {education.fieldOfStudy}
          </p>
          <p>
            {education.startDate} - {education.endDate}
          </p>
        </div>
      ))}

      <h2>Work Experience</h2>
      {props.data.workExperience.map((work, index) => (
        <div key={index}>
          <h3>{work.company}</h3>
          <p>{work.position}</p>
          <p>
            {work.startDate} - {work.endDate}
          </p>
          <ul>
            {work.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}

      <h2>Skills</h2>
      <ul>
        {props.data.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Resume;
