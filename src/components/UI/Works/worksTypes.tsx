import React, { ReactNode } from "react";
import { BatteryFull, Research, Chat } from "./WorkIcons";

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
    role: "Applied Researcher",
    company: "LINKS Foundation",
    link: "https://linksfoundation.com/en/",
    from: "01-2023",
    to: "02-2024",
    description: [
      <p>
        Applied researcher in the field of Psychology & AI, for the creation of
        softwares that foster pro-enviromental behaviours, using applications.
      </p>,
      <p>
        Participation in many winning European Projects (HORIZON) proposals.
      </p>,
    ],
    icon: <Research />,
  },
  {
    role: "ALEXA Developer",
    company: "Vocalime",
    link: "https://www.vocalime.com/",
    from: "08-2022",
    to: "10-2022",
    description: [
      <p>
        Developer Alexa skills for an Amazon sub-contractor company, as part of
        a technical internship.
      </p>,
      <p>
        Tasks: conversational designer, API, Jovo framework contributions...
      </p>,
    ],
    icon: <Chat />,
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
    icon: <Chat />,
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
    ],
    icon: <BatteryFull />,
  },
];
