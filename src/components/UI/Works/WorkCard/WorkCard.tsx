import React from "react";

//styles
import Styles from "./workCard.module.css";

//types
import { Work } from "../worksTypes";

interface Props {
  work: Work;
}

const Works: React.FC<Props> = ({ work }) => {
  const { role, company, link, description, to, from, icon } = work;
  return (
    <article className={Styles.card}>
      <div className={Styles.icon}>
        {icon}
      </div>
      <h2>{role}</h2>
      <div className={Styles.address}>
        <a target="_blank" rel="noopener noreferrer" href={link}>
          {company}
        </a>
        <p className={Styles.divider}>-</p>
        <p className={Styles.dates}>
          <span>{from}</span> - <span>{to}</span>
        </p>
      </div>
      <ul className={Styles.description}>
        {description.map((desc: string) => {
          return <li key={desc}>{desc}</li>;
        })}
      </ul>
    </article>
  );
};

export default Works;
