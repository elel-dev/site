import React, { ReactNode } from "react";
import { GiJuggler, GiServerRack } from "react-icons/gi";

type Description = [string, string, string];

export interface Work {
  role: string;
  company: string;
  link: string;
  from: string;
  to: string;
  description: Description;
  icon: ReactNode;
}

export const works: Work[] = [
  {
    role: "Fullstack developer",
    company: "MIT",
    link: "https://cci.mit.edu/",
    from: "09-2022",
    to: "03-2023",
    description: [
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    ],
    icon: <GiJuggler />, 
  },
  {
    role: "Backend & AI developer",
    company: "NANOVERSE HQ",
    link: "https://www.nanopass.io/",
    from: "01-2022",
    to: "07-2022",
    description: [
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    ],
    icon: <GiServerRack />, 
  },
  {
    role: "Fullstack Developer",
    company: "University of Florence",
    link: "https://www.forlilpsi.unifi.it/vp-328-virthulab-virtual-human-dynamics-laboratory.html",
    from: "09-2018",
    to: "01-2022",
    description: [
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    ],
    icon: <GiJuggler />, 
  },
];
