import React from "react";

//types
import { Project, projectsList } from "../projects";

//components
import FeaturedCard from "./FeaturedCard/FeaturedCard";

//styles
import Styles from "./featured.module.css";

const FeaturedWorks = () => {
  return (
    <div className={Styles.featured}>
      {projectsList.map((project: Project, index: number) => {
        if (!project.featured) return;
        return (
          <FeaturedCard key={project.name} index={index} project={project} />
        );
      })}
    </div>
  );
};

export default FeaturedWorks;
