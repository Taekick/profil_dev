import React from "react";
import skills from "../services/skills.json";
const Skills = () => {
  let content = skills.map((tech) => {
    const technology = Object.keys(tech)[0];

    return (
      <li>
        {tech[technology].tech.map((item) => {
          return <>{item.techName} / </>;
        })}
      </li>
    );
  });

  return (
    <>
      <ul>{content} </ul>
    </>
  );
};

export default Skills;
