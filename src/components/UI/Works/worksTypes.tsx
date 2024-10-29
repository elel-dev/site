import React, { ReactNode } from "react";
import { BatteryFull, Chat, Servers } from "./WorkIcons";

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
    role: "Backend developer",
    company: "SHAPE",
    link: "https://shape.dk",
    from: "11-2023",
    to: "current",
    description: [
      <p>
        Developed PubSub services for the real time monitor of energy and fueling transactions.
      </p>,
      <p>
        Increased delivery latency health by 50%, by tweaking EF db calls performance.
      </p>,
      <p>
        CI/CD pipelines maintainer; DataDog team for better observability.
      </p>,
    ],
    icon: <Servers />,
  },
  {
    role: "Backend developer",
    company: "LINKS Foundation",
    link: "https://linksfoundation.com/en/",
    from: "01-2023",
    to: "11-2023",
    description: [
      <p>
        On-prem Linux system administration and maintainer of different deeptech services.
      </p>,
      <p>
        PM for European project proposals, system design, code reviews, mentorship of junior hires
      </p>,
      <p>
        Secured funding through successful grant application and technical delivery (INCIT-EV).
      </p>,
    ],
    icon: <Servers />,
  },
  {
    role: "ALEXA Developer",
    company: "Vocalime",
    link: "https://www.vocalime.com/",
    from: "08-2022",
    to: "10-2022",
    description: [
      <p>Developed Alexa skills for an Amazon sub-contractor company.</p>,
      <p>
        Tasks: conversational designer, API, Jovo framework contributions...
      </p>,
    ],
    icon: <Chat />,
  },
  {
    role: "Backend Developer",
    company: "NANOVERSE HQ",
    link: "https://opensea.io/collection/nano-agents",
    from: "01-2022",
    to: "07-2022",
    description: [
      <p>
        Developed the first{" "}
        <a
          style={linkStyle}
          target="_blank"
          rel="noopener noreferrer"
          href="https://projectnanopass.medium.com/phase-ii-litepaper-2fc4fd9f806"
        >
          GPT like
        </a>{" "}
        customizable virtual assistant (Alexa) in the blockchain ecosystem.
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
    company: "VirtHuLab",
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
