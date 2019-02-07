import React from "react";
import "./Exp.css";
const experience = props => {
  return (
    <section id={props.id}>
      <h2 className="title">{props.experience.title}</h2>
    </section>
  );
};

export default experience;
