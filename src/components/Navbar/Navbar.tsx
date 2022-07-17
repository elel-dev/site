import React from "react";

//components
import Nav from "./Nav/Nav";
import Theme from "./Theme/Theme";
//styles
import Styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={Styles.navbar}>
      <Theme />
      <Nav />
    </div>
  );
};

export default Navbar;
