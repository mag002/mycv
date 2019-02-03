import React from "react";
import "./Content.css";
import About from "../About/About";
import Exp from "../Exp/Exp";
import Interest from "../Interest/Interest";
import Skills from "../Skills/Skills";

const content = props => {
  return (
    <section className="content-container">
      <About id="about" about={props.state.about} />
      <Exp id="exp" exp={props.state.exp}/>
      <Interest id="edu" />
      <Skills id="skills" />
    </section>
  );
};

export default content;
