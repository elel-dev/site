import React, { ReactNode } from "react";
import { BatteryFull, Servers, Research } from "./WorkIcons";

// type Description = [string, string, string];

export interface Work {
  role: string;
  company: string;
  link: string;
  from: string;
  to: string;
  description: JSX.Element[];
  icon: ReactNode;
}

const linkStyle = {
  borderBottom: "1px solid var(--clr-gruv-gray)",
  fontStyle: "italic",
};

export const works: Work[] = [
  {
    role: "Visiting student",
    company: "MIT",
    link: "https://cci.mit.edu/",
    from: "09-2022",
    to: "03-2023",
    description: [
      <p>
        During my master the degree, I've been in contact with the{" "}
        <a
          style={linkStyle}
          target="_blank"
          rel="noopener noreferrer"
          href="https://cci.mit.edu/"
        >
          Center for Collective Intelligence
        </a>{" "}
        of the Massachusetts Institute of Technology.
      </p>,
      <p>
        Developing the next version of{" "}
        <a
          style={linkStyle}
          target="_blank"
          rel="noopener noreferrer"
          href="https://cci.mit.edu/minglr/"
        >
          Minglr
        </a>{" "}
        , for my final thesis project: a videoconferencing platform enriched
        with artificial intelligence modules.
      </p>,
    ],
    icon: <Research />,
  },
  {
    role: "Backend & AI developer",
    company: "NANOVERSE HQ",
    link: "https://www.nanopass.io/",
    from: "01-2022",
    to: "07-2022",
    description: [
      <p>
        Developed the first modular and upgradable{" "}
        <a
          style={linkStyle}
          target="_blank"
          rel="noopener noreferrer"
          href="https://projectnanopass.medium.com/phase-ii-litepaper-2fc4fd9f806"
        >
          GPT
        </a>{" "}
        like virtual assistant (Alexa), uniquely customizable, in the blockchain
        ecosystem.
      </p>,
      <p>
        Coded the core API, target of thousands of concurrent users on public
        demo launch.
      </p>,
    ],
    icon: <Servers />,
  },
  {
    role: "Fullstack Developer",
    company: "University of Florence",
    link: "https://www.forlilpsi.unifi.it/vp-328-virthulab-virtual-human-dynamics-laboratory.html",
    from: "09-2018",
    to: "01-2022",
    description: [
      <p>Mutiple-year research grant as a young academic promise.</p>,
      <p>
        Development of web and mobile apps that bring together AI and
        psychology.
      </p>,
      <p>
        Collaboration with big institutional and private clients (see{" "}
        <a style={linkStyle} href="#projects">
          projects
        </a>{" "}
        ).
      </p>,
    ],
    icon: <BatteryFull />,
  },
];
