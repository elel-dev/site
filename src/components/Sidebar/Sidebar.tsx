import React from 'react'

//styles
import Styles from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={Styles.sidebar}>
      <section className={Styles.header}>
        <h1>ELEL</h1>
        <h3>FULL-STACK DEVELOPER</h3>
      </section>
      <section className={Styles.contacts}>
        <h1>LINK</h1>
        <h3>elel.develop@gmail.com</h3>
        <h3>lorenzo.larghi@unifi.it</h3>
      </section>
      <section className={Styles.social}>
        <h1>LINK</h1>
        <h1>LINK</h1>
        <h1>LINK</h1>
        <h1>LINK</h1>
      </section>
    </aside>
  )
}

export default Sidebar;
