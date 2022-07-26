import React from "react";

//types
import { Work, works } from "./worksTypes";

//components
import WorkCard from "./WorkCard/WorkCard";

//styles
import Styles from "./works.module.css";

const Works = () => {
  return (
    <div className={Styles.works}>
      {works.map((work: Work) => {
        return <WorkCard key={work.company} work={work} />;
      })}
    </div>
  );
};

export default Works;
