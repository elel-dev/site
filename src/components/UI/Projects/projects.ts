export interface Project {
  name: string;
  description: string;
  stack: string[];
  githubLink: string;
  liveLink: string;
  imgPath: string;
  featured: boolean;
}

export const projectsList: Project[] = [
  {
    name: "W.A.F.E.R.",
    description:
      "Agile and innovative platform for the analysis of facial expressions and ocular activity (eye gaze), for the detection of the emotional experience, with the possibility of versatile application and background execution. Currently in the validation phase, it will be used in parallel with traditional data collections and for specific custom applications",
    stack: [
      "TypeScript",
      "TensorflowJs",
      "MediaPipe",
      "WebPack",
      "Ridge Regression",
    ],
    githubLink: "https://github.com/elel-dev/wafer",
    liveLink: "",
    imgPath: "/images/projects/wafer.jpg",
    featured: true,
  },
  {
    name: "M.I.I.T.",
    description:
      "Videoconferencing platform enriched with artificial intelligence modules, for detecting the emotional experience of the participants; online station for psychosocial data mining and the innovative testing of collective intelligence (CI) emersion in small groups online interaction and problem solving activities. Current modules: gaze, facial expression, speech, activity.",
    stack: [
      "TypeScript",
      "React",
      "Express",
      "MongoDB",
      "WebSockets",
      "WebRTC",
      "TensorflowJS",
    ],
    githubLink: "https://github.com/elel-dev/miit",
    liveLink: "",
    imgPath: "/images/projects/miit.jpg",
    featured: true,
  },
  {
    name: "VIM-ASTRO",
    description:
      "A [n]vim syntax plugin for .astro files. When there's no LSP installed, a syntax highlighting plugin enables Vim to show parts of the text in another font or color. Those parts can be specific keywords or text matching a pattern.",
    stack: ["Vim", "Neovim", "vim-plug", "vimscripts"],
    githubLink: "https://github.com/elel-dev/vim-astro-syntax",
    liveLink: "",
    imgPath: "/images/projects/vimastro.jpg",
    featured: true,
  },
  {
    name: "CARDIODIARIO",
    description:
      "In collaboration with the cardiology department of Careggi and Meyer hospitals of Florence, a mobile app platform for facilitating the therapeutic transition of cardiomyopathic patients, with automatic testing with scoring components and NLP for sentiment analysis.",
    stack: ["React", "React Native", "Express", "PostgreSQL"],
    githubLink: "https://github.com/elel-dev/cardiodiario",
    liveLink: "",
    imgPath: "/images/projects/cardio.jpg",
    featured: true,
  },
  {
    name: "NANOVERSE AGENTS",
    description:
      "Developed the first modular and upgradable GPT like virtual assistant (Alexa), uniquely customizable, in the blockchain ecosystem. Coded the core API, target of thousands of concurrent users on public demo launch. Word embedding for intent recognition to HF transformers (chat) and inhouse/external api actions, sentiment analysis & profanity filter.",
    stack: [
      "PyTorch",
      "TensorflowJS",
      "AWS Lambda",
      "Word Embeddings",
      "Levenshtein Distance",
      "HF Transformers",
    ],
    githubLink: "https://github.com/elel-dev/agents",
    liveLink: "",
    imgPath: "/images/projects/nano.jpg",
    featured: true,
  },
  {
    name: "INCIT-EV",
    description:
      "Demonstrate an innovative set of charging infrastructures, technologies and its associated business models. Developed a DSS tool to support decision makers design and evaluate scenarios of charging infrastructure deployment using cost-benefit analysis (CBA) approach.",
    stack: [
      "Python",
      "FastAPI",
      "MongoDb",
      "PostgreSQL",
      "DockerRegistry",
      "Linux on-prem",
    ],
    githubLink: "https://www.incit-ev.eu/",
    liveLink: "https://www.incit-ev.eu/",
    imgPath: "/images/projects/incitev.jpg",
    featured: true,
  },
  {
    name: "OK",
    description:
      "Developed PubSub services for the real time monitor of energy and fueling transactions.  Increased delivery latency health by 50%, by tweaking EF db calls performance.  CI/CD pipelines maintainer; DataDog team for better observability.",
    stack: ["ASPNET", "PostgreSQL", "Kubernetes", "Datadog", "ArgoCD"],
    githubLink: "https://www.ok.dk/",
    liveLink: "https://www.ok.dk/",
    imgPath: "/images/projects/ok.jpg",
    featured: true,
  },
];
