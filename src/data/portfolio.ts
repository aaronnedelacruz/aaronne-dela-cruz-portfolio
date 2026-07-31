import heroBanner from "../assets/hero_banner.png";
import heroBg from "../assets/hero_bg.png";
import aboutImg from "../assets/about_img.png";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";

export const hero = {
  images: {
    background: heroBg,
    banner: heroBanner,
  },

  name: "Aaronne Dela Cruz",

  title: "Full Stack Developer",

  tagline:
    "Building modern web and mobile applications with clean code, intuitive design, and practical solutions.",

  button: {
    text: "View My Work",
    href: "#projects",
  },
};

export const socials = [
  {
    name: "Email",
    icon: "bi bi-envelope-fill",
    href: "mailto:aaronnechristiandelacruz@gmail.com",
  },
  {
    name: "GitHub",
    icon: "bi bi-github",
    href: "https://github.com/aaronnedelacruz",
  },
  {
    name: "LinkedIn",
    icon: "bi bi-linkedin",
    href: "https://linkedin.com/in/aaronne-christian-dela-cruz/",
  },
];

export const about = {
  title: "About Me",

  description: [
    "I am a BS Information Technology graduate with hands-on experience in full-stack web and mobile application development through internship and academic projects. I have built end-to-end solutions involving responsive user interfaces, back-end functionality, database design, and UI/UX prototyping to create practical, user-focused applications.",

    "I am seeking a full-time software development role where I can contribute to meaningful projects, continue expanding my technical expertise, and grow as a software developer.",
  ],

  image: aboutImg,
};

export const experience = {
  title: "My Professional Journey",

  subtitle:
    "Professional and training experience that built my practical skills.",

  items: [
    {
      role: "Front-End & UI/UX Intern",

      company: "Simplevia Technologies Inc.",

      duration: "Oct 2025 – Mar 2026",

      responsibilities: [
        "Developed responsive web pages and implemented front-end features for a web-based environmental compliance monitoring system, contributing to the delivery of assigned system modules.",

        "Designed prototypes for 18 system modules, improving usability, consistency, and alignment with business requirements.",

        "Collaborated with developers and stakeholders to transform design concepts into functional interfaces, supporting the end-to-end development process.",
      ],
    },
  ],
};

export const projects = {
  title: "Things I've Built",

  subtitle:
    "A collection of applications and solutions I've designed and developed.",

  labels: {
    features: "Key Features",
    techStack: "Tech Stack",
    overview: "Overview",
    challenge: "Challenge",
    solution: "Solution",
    impact: "Impact",
    technologies: "Technologies",
    frontend: "Frontend",
    backend: "Backend & Services",
    database: "Database",
    tools: "Development Tools",
    links: "Links",
    repository: "View Repository",
    demo: "Live Demo",
    viewDetails: "View Details",
    close: "Close",
    modalSuffix: "Details",
  },

  items: [
    {
      thumbnail: project1,

      title: "AI-assisted Flashcard & Quiz App",

      category: "Capstone Project • Full-stack Developer • Jan 2025 – Dec 2025",

      description:
        "An Android-based learning platform designed to improve digital studying through AI-assisted content creation, collaborative learning spaces, and intelligent study management. StudySync enables users to create, organize, and share learning materials while supporting flexible study methods for better knowledge retention and academic collaboration.",

      features: [
        "Generates study materials from uploaded text, PDFs, and images.",
        "Real-time chat rooms for collaborative resource sharing.",
        "Interactive live quizzes within group study sessions.",
        "Spaced repetition and reminders for effective studying.",
        "Offline access and PDF export for study sets.",
      ],

      stack: ["Android Studio", "Java", "Kotlin", "Firebase", "Gemini AI"],

      repository: "https://github.com/ShayneGulmayo/StudySync-Flashcard-and-Quiz.git",

      hasDemo: false,

      demo: "#",

      details: {
        overview:
          "Developed an Android learning application that leverages Gemini AI to instantly generate personalized flashcards and practice quizzes while enabling collaborative learning through real-time chat and cloud synchronization.",

        challenge:
          "Students often spend more time creating study materials than actually studying, while existing learning platforms rarely combine AI-powered content generation with real-time collaboration.",

        solution:
          "Engineered an AI-assisted mobile application that automates flashcard and quiz creation, synchronizes learning data through Firebase, and integrates collaborative chat rooms to streamline both independent and group study.",

        impact: [
          "Reduces the time required to prepare study materials.",
          "Encourages collaborative learning through integrated chat rooms.",
          "Improves study accessibility by centralizing learning tools into one application.",
          "Provides students with AI-assisted review materials for faster exam preparation.",
        ],

        tech: {
          frontend: ["Android Studio", "Java", "Kotlin"],

          backend: [
            "Firebase Authentication",
            "Firebase Realtime Database",
            "Gemini AI API",
          ],
        },

        links: {
          demo: "#",
          repository: "https://github.com/yourusername/project",
        },
      },
    },

    {
      thumbnail: project2,

      title: "InternTrack: Personal Internship Hours Tracker",

      category: "Personal Project • Full-stack Developer • Jul 2026",

      description:
        "A personal web application that helps interns manage their internship by tracking work hours, logging daily accomplishments, monitoring deadlines, forecasting their expected internship completion date, and visualizing progress through interactive dashboards and reports.",

      features: [
        "Manual and timer-based internship session tracking.",
        "Automatic expected internship completion date forecasting.",
        "Interactive dashboard with real-time progress analytics.",
        "Project management with work logs and productivity tracking.",
        "Weekly and monthly reports with charts and performance insights.",
      ],

      stack: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "MySQL",
        "XAMPP",
        "Visual Studio Code",
      ],

      repository: "https://github.com/aaronnedelacruz/interntrack.git",

      hasDemo: false,

      demo: "#",

      details: {
        overview:
          "Developed a personal web application that streamlines internship management by automating work hour tracking, organizing projects and accomplishments, forecasting expected completion dates, and visualizing progress through interactive analytics.",

        challenge:
          "Managing internship requirements through spreadsheets and manual logs makes it difficult to accurately track progress, organize daily work, and estimate internship completion.",

        solution:
          "Built a full-stack internship tracking system that centralizes work logs, automates progress calculations and completion forecasting, and delivers actionable insights through real-time dashboards, reports, and productivity analytics.",

        impact: [
          "Centralizes internship work logs, projects, and accomplishments in one platform.",
          "Eliminates manual calculations by automatically tracking completed and remaining hours.",
          "Provides accurate internship completion forecasts based on progress.",
          "Visualizes productivity through interactive dashboards, reports, and analytics.",
        ],

        tech: {
          frontend: ["HTML", "CSS", "JavaScript"],

          backend: ["PHP"],

          database: ["MySQL"],

          tools: ["Visual Studio Code", "XAMPP"],
        },

        links: {
          demo: "#",
          repository: "https://github.com/yourusername/interntrack",
        },
      },
    },
  ],
};

export const skills = {
  title: "Skills",

  subtitle:
    "Tools and technologies I've worked with across different projects.",

  categories: [
    {
      title: "Frontend",
      items: [
        "React.js",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },

    {
      title: "Backend",
      items: ["PHP", "Laravel", "Java", "Python", "Kotlin", "Bash Script"],
    },

    {
      title: "Database",
      items: ["MySQL", "SQL", "MongoDB", "Firebase Firestore", "IBM Db2 Cloud"],
    },

    {
      title: "Development Tools",
      items: [
        "Git",
        "GitHub",
        "Visual Studio Code",
        "XAMPP",
        "Vite",
        "GitHub Pages",
        "Android Studio",
        "IntelliJ IDEA",
        "Figma",
      ],
    },
  ],
};

export const education = {
  title: "Academic Background",
  subtitle: "My academic journey and achievements",

  degree: "Bachelor of Science in Information Technology",
  year: "2022 – 2026",

  university: "New Era University",

  address:
    "No. 9 Central Avenue, New Era, Quezon City, Metro Manila, Philippines",

  achievements: ["President's Lister", "GWA: 1.32"],
};

export const contact = {
  title: "Let's Work Together",

  description:
    "Looking for your next Full-Stack Developer? Let's connect to discuss career opportunities, innovative projects, or professional networking.",

  items: [
    {
      icon: "mail",
      label: "Email",
      value: "aaronnechristiandelacruz@gmail.com",
      href: "mailto:aaronnechristiandelacruz@gmail.com",
    },
    {
      icon: "map-pin",
      label: "Location",
      value: "Caloocan City, Metro Manila",
    },
    {
      icon: "github",
      label: "GitHub",
      value: "github.com/aaronnedelacruz",
      href: "https://github.com/aaronnedelacruz",
    },
    {
      icon: "linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/aaronne-christian-dela-cruz",
      href: "https://linkedin.com/in/aaronne-christian-dela-cruz/",
    },
  ],
};

export const footer = {
  copyright:
    "© 2026 Aaronne Christian E. Dela Cruz. Built with React, TypeScript & Tailwind CSS 4.",

  backToTop: {
    text: "Back to Top ↑",
    href: "#home",
  },
};
