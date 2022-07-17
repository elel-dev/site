import React from "react";

//components
import Nav from "./Nav/Nav";
import Theme from "./Theme/Theme";
//styles
import Styles from "./navbar.module.css";

//TODO: needs a bit of refactoring for the dynamic width to be more tolerant
const Navbar = () => {
  return (
    <div className={Styles.navbar}>
      <Theme />
      <Nav />
    </div>
  );
};

export default Navbar;
