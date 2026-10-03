const projects = [
  {
    id: "meetmind",
    number: "01",
    title: "MeetMind",
    shortTitle: "AI Meeting Assistant",
    category: "AI / FULL-STACK",
    featured: true,

    description:
      "An AI-powered meeting assistant designed to capture, understand, and organize meeting information.",

    problem:
      "Important meeting information can become scattered across recordings, notes, decisions, and follow-up tasks.",

    idea: "I explored how an AI-powered workspace could bring meeting capture, transcription, summaries, decisions, action items, deadlines, and attachments into one workflow.",

    systemIntro:
      "A connected workflow between meeting input, application logic, data, and intelligent processing.",

    systemFlow: [
      "Meeting",
      "AI Processing",
      "Structured Information",
      "Follow-up",
    ],

    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Authentication",
      "AI Integration",
    ],

    features: [
      "Meeting capture",
      "Recording and transcription",
      "AI summaries",
      "Key points",
      "Decisions",
      "Action items",
      "Deadlines",
      "Google Meet AI notetaker",
      "Attachments",
      "Personalized dashboard",
    ],

    challenges: [
      {
        title: "Connecting multiple layers",
        description:
          "The project required thinking about the frontend, backend, database, authentication, APIs, and AI workflow as parts of one system.",
      },
      {
        title: "Designing an intelligent workflow",
        description:
          "The challenge was turning meeting information into structured outputs that could actually support follow-up work.",
      },
      {
        title: "Building a complete product flow",
        description:
          "Individual features needed to work together as one coherent product experience.",
      },
    ],

    solutions: [
      {
        title: "Structured application layers",
        description:
          "I separated frontend responsibilities from backend responsibilities and organized the application around API-based workflows.",
      },
      {
        title: "Structured AI output",
        description:
          "The AI workflow was organized around summaries, key points, decisions, action items, and deadlines.",
      },
      {
        title: "Iterative development",
        description:
          "I tested different parts of the application step by step and refined the workflow as the system developed.",
      },
    ],

    learning:
      "Building MeetMind helped me understand how interfaces, backend systems, data, authentication, APIs, and AI-powered workflows can work together.",

    nextExperiment:
      "Explore how meeting intelligence can become more reliable, contextual, and useful across different types of meetings.",

    visualType: "meeting-system",

    githubUrl: "",
    demoUrl: "",
  },

  {
    id: "pollyglot",
    number: "02",
    title: "PollyGlot",
    shortTitle: "AI Translation App",
    category: "AI / REACT",
    featured: false,

    description:
      "A modern translation application exploring language interaction, API integration, and asynchronous workflows.",

    problem:
      "Translation interfaces need to make language selection, user input, and generated results feel simple and immediate.",

    idea: "I explored a focused translation workflow where users can select languages, provide text, and receive translated results through an API.",

    systemIntro:
      "A simple interaction between user input, language selection, API communication, and generated translation.",

    systemFlow: ["Input", "Language", "Translation API", "Result"],

    technologies: ["React", "JavaScript", "APIs", "Asynchronous Requests"],

    features: [
      "English translation",
      "Dari translation",
      "Pashto translation",
      "Language selection",
      "Text input",
      "Dynamic results",
    ],

    challenges: [
      {
        title: "Managing asynchronous requests",
        description:
          "The interface needed to handle API communication while keeping the user experience clear and responsive.",
      },
      {
        title: "Designing a focused interaction",
        description:
          "The translation workflow needed to remain simple despite having multiple language and input states.",
      },
    ],

    solutions: [
      {
        title: "Clear interaction flow",
        description:
          "The interface was organized around a straightforward input, language selection, request, and result workflow.",
      },
      {
        title: "React state management",
        description:
          "Application state was used to connect user input, language choices, requests, and generated results.",
      },
    ],

    learning:
      "PollyGlot gave me practical experience working with APIs, asynchronous requests, React state, user input, and translation workflows.",

    nextExperiment:
      "Explore richer multilingual experiences and more thoughtful interactions around language and communication.",

    visualType: "language-system",

    githubUrl: "",
    demoUrl: "",
  },

  {
    id: "vibe",
    number: "03",
    title: "VIBE",
    shortTitle: "Music Discovery Platform",
    category: "WEB / GROUP PROJECT",
    featured: false,

    description:
      "A group-built music discovery experience focused on exploring artists, discovering music, and organizing favorites.",

    problem:
      "Music discovery becomes more engaging when searching, filtering, artist exploration, favorites, and playlists are connected into one experience.",

    idea: "I worked with a group to connect music discovery, artist exploration, and personal organization into a single web experience.",

    systemIntro:
      "A discovery workflow connecting search, exploration, artist information, and browser-based personal collections.",

    systemFlow: ["Discover", "Explore", "Save", "Organize"],

    technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],

    features: [
      "Music discovery",
      "Search",
      "Filtering",
      "Sorting",
      "Artist pages",
      "Favorites",
      "Playlists",
      "LocalStorage",
    ],

    challenges: [
      {
        title: "Connecting multiple user flows",
        description:
          "Search, filtering, artist exploration, favorites, and playlists needed to feel like parts of the same product.",
      },
      {
        title: "Working as a group",
        description:
          "The project required coordinating different parts of the experience while keeping the overall product consistent.",
      },
    ],

    solutions: [
      {
        title: "Connected navigation",
        description:
          "The project was structured around clear paths between discovery, artist pages, and personal collections.",
      },
      {
        title: "Browser-based persistence",
        description:
          "LocalStorage was used to preserve favorites and playlists across sessions.",
      },
    ],

    learning:
      "Working on VIBE gave me experience building an interactive product as part of a group and thinking about how multiple user flows connect together.",

    nextExperiment:
      "Explore richer discovery systems and more expressive ways of connecting music, artists, and personal taste.",

    visualType: "sound-system",

    githubUrl: "",
    demoUrl: "",
  },

  {
    id: "ai-study-planner",
    number: "04",
    title: "AI Study Planner",
    shortTitle: "Intelligent Learning Workflow",
    category: "AI / CONCEPT",
    featured: false,

    description:
      "An AI-oriented study planning concept exploring how intelligent tools could support structured learning workflows.",

    problem:
      "Learning can involve many goals, tasks, resources, and deadlines that are difficult to organize into a clear workflow.",

    idea: "I explored how intelligent planning could help structure study activities around goals, tasks, and learning priorities.",

    systemIntro:
      "A planning concept connecting goals, priorities, tasks, and intelligent assistance.",

    systemFlow: ["Goal", "Plan", "Prioritize", "Learn"],

    technologies: ["AI Integration", "Web Development"],

    features: [
      "Study planning",
      "Learning workflows",
      "Task organization",
      "AI-assisted planning",
    ],

    challenges: [
      {
        title: "Turning goals into structure",
        description:
          "A useful study planner needs to translate broad learning goals into a clearer sequence of activities.",
      },
      {
        title: "Balancing intelligence and control",
        description:
          "An intelligent planning experience should assist the learner without removing their ability to make decisions.",
      },
    ],

    solutions: [
      {
        title: "Structured planning",
        description:
          "The concept organizes learning around goals, tasks, priorities, and workflows.",
      },
      {
        title: "AI as an assistant",
        description:
          "The concept treats AI as a support layer for planning rather than as a replacement for the learner.",
      },
    ],

    learning:
      "This concept reflects my interest in exploring how AI can be applied to everyday learning and productivity.",

    nextExperiment:
      "Explore how adaptive planning could respond to changing goals, progress, and learning patterns.",

    visualType: "planning-system",

    githubUrl: "",
    demoUrl: "",
  },
];

export default projects;
