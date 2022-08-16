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
      "Express",
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
];
