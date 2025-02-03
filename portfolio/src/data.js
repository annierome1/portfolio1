export const projects = [
  {
    title: "Glazier Children's Museum",
    subtitle: "Full-Stack Web Application",
    status: "completed",
    category: "Full-Stack",
    github: "https://github.com/annierome1/FINAL_PROJECT",
    description:
    "A full-stack web application created for the Glazier Children's Museum as part of a software engineering project. Our team was assigned a client and challenged to develop a product for them.",
    link: "https://anniecrome1.pythonanywhere.com/",
    technologies: [
      { name: "Django", icon: "SiDjango" },
      { name: "Mysql", icon: "SiMysql" }

    ]
  },

  {
    title: "A Way Home",
    subtitle: "VR Game created with Unity",
    status: "completed",
    category: "3D Development",
    description:
      "This game was created in hopes of eductaing users on the United Nation's Convention of the Right's of the Child through game-based learning.",
    link: "https://leadercop.weebly.com/meet-the-vr-g4c-team.html",
    video: "https://use.vg/kkdnVf",
    technologies: [
      { name: "Unity", icon: "FaUnity" },
      { name: "VR MetaQuest", icon: "FaMeta" }

    ]
  },

  {
    title: "ResuBuild",
    subtitle: "Full-Stack Resume Builder utilizing OpenAI's API",
    status: "completed",
    category: "Full-Stack",
    github: "https://github.com/annierome1/ResuBuild",
    description:
     "Resume Builder provides a real-time preview of your resume as you create it, ensuring a seamless and user-friendly experience. The resume layout is designed based on research into what employers value most—clean, simple, and professional. Additionally, the application integrates OpenAI’s API to automatically generate tailored job descriptions for each role entered. Signup to save your progress!",
    link: "https://resumebuild-prd-9d487f141016.herokuapp.com/",
    technologies: [
      { name: "React", icon: "FaReact" },
      { name: "OpenAI API", icon: "AiOutlineOpenAI"},
      { name: "Node.js", icon: "FaNodeJs"},
      { name: "MongoDB", icon: "SiMongodb"}
     ]

  },

  {
    title: "Portfolio",
    subtitle: "Personal Portfolio Website",
    category: "Personal",
    status: "completed",
    github: "https://github.com/annierome1/portfolio1",
    description:
     "This website that I coded in order to showcase my skills, experiences, and projects.",
     technologies: [
      { name: "React", icon: "FaReact" },
      { name:"TailWind", icon: "RiTailwindCssFill" },
      { name: "Vercel", icon: "IoLogoVercel"}
     ]

  },
  {
    title: "UTampa App",
    subtitle: "Senior Capstone project",
    status: "in-development",
    description: "UTampa is a multifunctional mobile app created for the University of Tampa community. As a senior Capstone project by the Computer Science program, this app will be ready by May 2025. Users can look forward to features like parking monitoring, a centralized news platform, and a range of tools to improve daily campus life.",
    technologies: [
      {name: "Swift", icon: "FaSwift"},
      { name: "AWS", icon: "FaAws"},
      { name: "AzureDevOps", icon: "VscAzureDevops"},

    ]
  },

  {
    title: "SmartBet",
    subtitle: "Machine Learning Parlay Constrcutor",
    category: "Personal",
    status: "in-development",
    description: "I’m developing a probabilistic machine learning model to predict the success rates of NFL sports bets, including parlays and player prop bets. Using a MongoDB database integrated with real-time data from SportsRadar and SportsBetOdds APIs, I analyze historical and game-level stats to provide data-driven insights for betting strategies",
    technologies: [
      { name: "MongoDB", icon: "SiMongodb"},
      { name: "Postman", icon: "SiPostman"},
      { name: ""}
    ]


  },

  {
    id: 1,
    title: "SciFiLi",
    description: "A program that utilizes binary trees, linked lists, and priority queues to create a book library based on books read from a text file",
    category: "School",
    github: "https://github.com/annierome1/SciFILi",
    technologies: [
      {name: "Python", icon: "SiPython"}
    ]
  },

  

  {
    id: 2,
    title: "AI Game Player",
    description: "For my AI/ML class, I was tasked with developing an AI player for the game Prudh. The professor provided us with a GameEngine, Main, and GameRules, and our objective was to create an intelligent agent that would later compete against other students' AI players. I chose to implement both a MiniMax player and an optimized Monte Carlo player.",
    category: "School",
    github: "https://github.com/annierome1/AI_Game_Players",
    technologies: [
      {name: "Python", icon: "SiPython"}
    ]
  },
  {
    id: 3,
    title: "Advanced Data Structures",
    description:"A combination of data structres and algorithms",
    category: "School",
    github: "https://github.com/annierome1/DataStructures",
    technologies: [
      {name: "Java", icon: "FaJava"}
    ]
  },

  {
    title: "Vermont Farm House",
    subtitle: "Unreal Engine Architecture Visualization",
    status: "completed",
    category: "3D Development",
    link: "https://www.dropbox.com/scl/fi/yo0t7w6we9tzs3cm4qqi2/FarmHouse.mp4?rlkey=z4j0wr3looxoqp4g3ddrvbhp0&st=wc14fvbw&dl=0",
    description:
     "This project presents a modern farmhouse set in the heart of New England, a dream house for me. Created using Unreal Engine, with additional design elements created in TwinMotion and Blender,",
     technologies: [
      { name: "Unreal Engine", icon: "SiUnrealengine" },
      { name: "Blender", icon: "SiBlender"}
     ]

  }
];



export const skills = {
  Languages: [
    { name: "JavaScript", level: 70 },
    { name: "Python", level: 90 },
    { name: "Java", level: 70 },
    { name: "Swift", level: 50 },
  ],
  Frontend: [
    { name: "React", level: 80 },
    { name: "HTML", level: 90 },
    { name: "CSS", level: 90 },
  ],
  Backend: [
    { name: "Node.js", level: 50 },
    { name: "MySQL", level: 50},
    { name: "Django", level: 50},
    { name: "PostgreSQL", level: 50 },
    { name: "MongoDB", level: 60 },
  ],
  DevOps: [
    { name: "AWS", level: 50 },
    { name: "AzureDevOps", level: 70 },
    { name: "Git", level: 80 },
  ],
  GameDevelopment: [
    { name: "Unreal Engine", level: 60 },
    { name: "Unity", level: 60 },
    { name: "Blender", level: 30 },
  ],
};

