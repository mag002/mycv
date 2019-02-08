import React from "react";
import expCss from "./Exp.module.css";
import contentCss from "../Content/Content.module.css";

const JobDetail = props => {
  return (
    <div className={expCss.job}>
      <aside className={expCss.job_content}>
        <h3 className={expCss.job_position}>{props.job.position}</h3>
        <h3 className={expCss.job_company}>{props.job.company}</h3>
        <p className={expCss.job_detail}>{props.job.detail}</p>
      </aside>
      <aside className={expCss.job_date}>{props.job.time}</aside>
    </div>
  );
};
const Experience = props => {
  return (
    <section id={props.id} className={expCss.experience}>
      <h1 className={contentCss.title}>{props.experience.title}</h1>
      <JobDetail job={props.experience.exp2} />
      <JobDetail job={props.experience.exp1} />
    </section>
  );
};

export default Experience;
