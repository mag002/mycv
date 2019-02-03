import React from "react";
import "./Navbar.css";
import avatar from "../img/ashark.png";

const NavAvatar = () => {
  return <img src={avatar} alt="avatar" title="Shark" />;
};

const Item = props => {
  return (
    <li>
      <a href={"#" + props.point}>{props.content}</a>
    </li>
  );
};
const NavbarList = props => {
  return (
    <ul>
      <Item content="About" point="about" />
      <Item content="Experience" point="exp" />
      <Item content="Interest" point="int" />
      <Item content="Skills" point="skills" />
    </ul>
  );
};
const navbar = props => {
  return (
    <nav>
      <div className="container">
        <NavAvatar />
        <NavbarList />
      </div>
    </nav>
  );
};

export default navbar;
