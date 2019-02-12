import React from "react";
import navbarCss from "./Navbar.module.css";
import avatar from "../img/ashark.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faInfo,
  faBriefcase,
  faHeart,
  faCode
} from "@fortawesome/free-solid-svg-icons";
library.add(fab, faInfo, faBriefcase, faHeart, faCode);
const NavAvatar = () => {
  return <img src={avatar} alt="avatar" title="Shark" />;
};

const Item = props => {
  return (
    <li>
      <a href={"#" + props.content}>
        {" "}
        <FontAwesomeIcon icon={props.icon} />
        <span>{props.content}</span>
      </a>
    </li>
  );
};
const NavbarList = props => {
  return (
    <ul>
      <Item content={props.state.about.title} icon="info" />
      <Item content={props.state.experience.title} icon="briefcase" />

      <Item content={props.state.skills.title} icon="code" />
      <Item content={props.state.interest.title} icon="heart" />
    </ul>
  );
};
const navbar = props => {
  return (
    <nav className={navbarCss.nav}>
      <div className={navbarCss.container}>
        <NavAvatar />
        <NavbarList state={props.state} />
      </div>
    </nav>
  );
};

export default navbar;
