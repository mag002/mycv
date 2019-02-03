import React from "react";
import "./Exp.css"
const exp = props => {
  return (
    <section id={props.id}>
      <h2 className="title">{props.exp.title}</h2>
     
    </section>
  );
};

export default exp;
