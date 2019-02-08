import React from "react";
import navbarCss from "./Navbar.module.css";
import avatar from "../img/ashark.png";

const NavAvatar = () => {
  return <img src={avatar} alt="avatar" title="Shark" />;
};

const Item = props => {
  return (
    <li>
      <a href={"#" + props.content}>
        {" "}
        <i className={"fa fa-" + props.icon} />
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
      <Item content={props.state.interest.title} icon="heart" />
      <Item content={props.state.skills.title} icon="code" />
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
