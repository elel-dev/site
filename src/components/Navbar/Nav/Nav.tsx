import React from 'react'

//components
import Cv from "./Cv/Cv";
//styles
import Styles from "./nav.module.css";

const Nav = () => {
  return (
    <nav className={Styles.nav}>
      <a>MENU</a>
      <a>ABOUT</a>
      <a>EXPERIENCE</a>
      <a>WORK</a>
      <a>CONTACT</a>
      <Cv />
    </nav>
  )
}

export default Nav;
