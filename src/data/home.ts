const HeroSection = {
  profile: `Software Developer & Passionate Learner.`,
  imgs: [{ src: "/img/home/my_image_1.jpg", alt: "My image 1" }],
};

const ProjSkillSection = {
  projects: [
    {
      name: "Library Management System",
      desc: "The LMS is a lorem ipsum",
      src: "/img/placeholder.jpg",
    },
    {
      name: "Errand Tracking System",
      desc: "The ETS is a lorem ipsum",
      src: "/img/placeholder1.jpg",
    },
    {
      name: "Errand Tracking System",
      desc: "The ETS is a lorem ipsum",
      src: "/img/placeholder1.jpg",
    },
    {
      name: "Library Management System",
      desc: "The LMS is a lorem ipsum",
      src: "/img/placeholder.jpg",
    },
  ],
  skills: [
    {
      name: "Programming Languages",
      details: [
        { name: "Python", tooltip: "Most I have recently used" },
        { name: "Java", tooltip: "First main language" },
        {
          name: "JavaScript",
          tooltip: "I've recently used due to web development",
        },
      ],
    },
    {
      name: "Frameworks",
      details: [
        { name: "Django", tooltip: "First major project build with Django" },
        { name: "Next.js", tooltip: "Organizational and personal works" },
        {
          name: "React.js/Node.js",
          tooltip: "Only as hobby and not as experienced",
        },
      ],
    },
    {
      name: "Programming Fields",
      details: [
        {
          name: "Software Development",
          tooltip:
            "Project Scoping, System Architecture, Code Architecture, APIs, etc.",
        },
        {
          name: "Full-stack Web Development",
          tooltip: "Developing web-based applications",
        },
        {
          name: "Data Science",
          tooltip: "Data Analytics and Data Visualization Techniques",
        },
        {
          name: "Machine Learning",
          tooltip: "Trained models using TensorFlow/Keras during Undergraduate Thesis",
        },
      ],
    },
    {
      name: "Workflow",
      details: [
        { name: "GitHub", tooltip: "My Code Repositories" },
        {
          name: "Docker",
          tooltip: "Development without local installation in personal device",
        },
        {
          name: "Obsidian.md",
          tooltip: "Note-taking app I utilize with GitHub",
        },
      ],
    },
    {
      name: "Soft Skills",
      details: [
        { name: "Analytical and Critical Thinking", tooltip: "" },
        { name: "Strong Communication", tooltip: "" },
        { name: "People Management", tooltip: "" },
        { name: "Fluent in English and Filipino", tooltip: "" },
      ],
    },
  ],
};

export { HeroSection, ProjSkillSection };
