import React from "react";
import contentCss from "../Content/Content.module.css";
import skillsCss from "./Skills.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faCoffee);
const MainSkill = props => {
  return (
    <div className={skillsCss.main_skills}>
      <h3>Main skills</h3>
      <MainSkillIcon icon={props.main.html.name} />
      <MainSkillIcon icon={props.main.css.name} />
      <MainSkillIcon icon={props.main.sass.name} />
      <MainSkillIcon icon={props.main.javascript.name} />
      <MainSkillIcon icon={props.main.npm.name} />
      <MainSkillIcon icon={props.main.nodejs.name} />
      <MainSkillIcon icon={props.main.react.name} />
    </div>
  );
};
const MainSkillIcon = props => {
  return <FontAwesomeIcon icon={["fab", props.icon]} />;
};

const SubSkill = props => {
  return (
    <div className={skillsCss.sub_skills}>
      <h3>Sub skills</h3>
      <ul>
        <li>My Sub Languages And Tools: {props.sub.all}</li>
        <li>Languages: {props.sub.language}</li>
        <li>Softskill: {props.sub.softskill}</li>
      </ul>
    </div>
  );
};
const skills = props => {
  return (
    <section id={props.id} className={skillsCss.skills}>
      <h1 className={contentCss.title}>{props.skills.title}</h1>
      {/* <FontAwesomeIcon icon={["fab", "js-square"]} /> */}
      <MainSkill main={props.skills.main} />
      <SubSkill sub={props.skills.sub} />
    </section>
  );
};

export default skills;
