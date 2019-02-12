import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faCheckSquare, faCoffee);

const skills = props => {
  return (
    <section id={props.id}>
      <FontAwesomeIcon icon={["fab", "js-square"]} />
    </section>
  );
};

export default skills;
