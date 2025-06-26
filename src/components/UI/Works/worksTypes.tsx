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
    role: "Backend+AI developer",
    company: "SHAPE",
    link: "https://shape.dk",
    from: "11-2023",
    to: "current",
    description: [
      <p>
        Worked on a different selection of clients, focusing mainly on:
      </p>,
      <p>
        PubSub services for the real time monitor of energy and fueling transactions,
         CI/CD pipelines maintainer; DataDog team for better observability.
      </p>,
      <p>
        AI chatbot implementations, with complex RAG and function tools setup.
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
    role: "Backend+WEB3 Developer",
    company: "NANOVERSE HQ",
    link: "https://opensea.io/collection/nano-agents",
    from: "10-2021",
    to: "01-2023",
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
        customizable virtual assistant in the blockchain ecosystem.
      </p>,
      <p>
        Coded the core API, target of thousands of concurrent users on public
        demo launch.
      </p>,
      <p>
        Coded Agents' <a
          style={linkStyle}
          target="_blank"
          rel="noopener noreferrer"
          href="https://etherscan.io/address/0x6dcd514e73653fdb8dc46b6e77538bb3069a7e0f#code"
        >smart contract</a>, pushing to adopt ERC-721A which was a big thing in 2021.
      </p>,
    ],
    icon: <Servers />,
  },
  {
    role: "ALEXA Developer",
    company: "Vocalime",
    link: "https://www.vocalime.com/",
    from: "01-2022",
    to: "03-2022",
    description: [
      <p>Developed Alexa skills for an Amazon sub-contractor company.</p>,
      <p>
        Tasks: conversational designer, API, Jovo framework contributions...
      </p>,
    ],
    icon: <Chat />,
  },
  {
    role: "Fullstack+AI Developer",
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
      <p>
        Contributed to many AI scientific papers, like:{" "}
        <a
          style={linkStyle}
          target="_blank"
          rel="noopener noreferrer"
          href="https://flore.unifi.it/bitstream/2158/1349311/1/conference_101719_ebin.pdf"
        >
          wafer-et
        </a>, one {" "}
        <a
          style={linkStyle}
          target="_blank"
          rel="noopener noreferrer"
          href="https://ieeexplore.ieee.org/abstract/document/10584158"
        >
          application of it
        </a>, {" "}
        <a
          style={linkStyle}
          target="_blank"
          rel="noopener noreferrer"
          href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10477992"
        >
          fer comparisons
        </a>, {" "}
        <a
          style={linkStyle}
          target="_blank"
          rel="noopener noreferrer"
          href="https://flore.unifi.it/bitstream/2158/1349314/1/Eye-tracking_correlates_of_the_Implicit_Association_Test%20%281%29.pdf"
        >
          iat
        </a>.
      </p>
    ],
    icon: <BatteryFull />,
  },
];
