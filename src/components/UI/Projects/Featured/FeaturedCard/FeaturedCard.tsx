import React from "react";

//styles
import Styles from "./featuredCard.module.css";

//types
import { Project } from "../../projects";
interface Props {
  project: Project;
  index: number;
}

const FeaturedCard: React.FC<Props> = ({ project, index }) => {
  const { stack, description, name, imgPath, liveLink } = project;

  const isLeftView = index % 2 !== 0;

  const imgStyle = `${Styles.img} ${isLeftView ? Styles.left : Styles.right}`;
  const textStyle = `${Styles.text} ${isLeftView ? Styles.right : Styles.left}`;

  return (
    <article className={Styles.card}>
      <a href={liveLink} className={imgStyle}>
        <img src={imgPath} alt={imgPath.slice[-1]} />
      </a>
      <div className={textStyle}>
        <p className={`aqua ${Styles.featured}`}>Featured project</p>
        <h2>{name}</h2>
        <p className={Styles.description}>{description}</p>
        <div className={Styles.stack}>
          {stack.map((stack) => {
            return <p key={stack}>{stack}</p>;
          })}
        </div>
        <div className={Styles.links}></div>
      </div>
    </article>
  );
};

export default FeaturedCard;
