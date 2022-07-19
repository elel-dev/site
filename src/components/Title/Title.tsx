import React from "react";
import GruvText from "../UI/GruvText/GruvText";

//styles
import Styles from "./title.module.css";

const Title = () => {
  return (
    <section className={Styles.header}>
      <h1 className={Styles.title}>
        <GruvText text="ELEL" divider={1} startFrom={1} />
      </h1>
      <h3 className={Styles.subTtile}>FULL-STACK DEVELOPER</h3>
    </section>
  );
};

export default Title;
