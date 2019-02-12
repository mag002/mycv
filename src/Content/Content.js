import React from "react";
import contentCss from "./Content.module.css";
import About from "../About/About";
import Experience from "../Exp/Exp";
import Interest from "../Interest/Interest";
import Skills from "../Skills/Skills";

const content = props => {
  return (
    <section className={contentCss.contentContainer}>
      <About id={props.state.about.title} about={props.state.about} />
      <Experience
        id={props.state.experience.title}
        experience={props.state.experience}
      />

      <Skills id={props.state.skills.title} />
      <Interest id={props.state.interest.title} />
    </section>
  );
};

export default content;
