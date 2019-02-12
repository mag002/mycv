import React from "react";
import propTypes from "prop-types";
import aboutCss from "./About.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faCheckSquare, faCoffee);

const SocialIcon = props => {
  return (
    <a href={props.link} className={aboutCss.socialIcon}>
      <FontAwesomeIcon icon={["fab", props.type]} />
    </a>
  );
};
const About = props => {
  return (
    <section id={props.about.title} className={aboutCss.about}>
      <h1>
        {props.about.lastname} <span>{props.about.firstname}</span>
      </h1>
      <h4>
        {props.about.address} - {props.about.phone} -
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

About.propTypes = {
  about: propTypes.shape({
    title: propTypes.string,
    lastname: propTypes.string,
    firstname: propTypes.string,
    email: propTypes.string,
    additional: propTypes.string,
    social: propTypes.shape({
      facebook: propTypes.string,
      insta: propTypes.string,
      youtube: propTypes.string
    })
  })
};

export default About;
