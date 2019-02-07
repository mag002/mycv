import React from "react";
import aboutCss from "./About.module.css";

const SocialIcon = props => {
  return (
    <a href={props.link} className={aboutCss.socialIcon}>
      <i className={"fa fa-" + props.type} />
    </a>
  );
};
const about = props => {
  return (
    <section id={props.about.title} className={aboutCss.about}>
      <h1>
        {props.about.lastname} <span>{props.about.firstname}</span>
      </h1>
      <h4>
        {props.about.address} <br /> {props.about.phone} -
        <span>{props.about.email}</span>
      </h4>
      <p>{props.about.additional}</p>
      <div className="social">
        <SocialIcon link={props.about.social.facebook} type="facebook" />
        <SocialIcon link={props.about.social.insta} type="instagram" />
        <SocialIcon link={props.about.social.youtube} type="youtube" />
      </div>
    </section>
  );
};

export default about;
