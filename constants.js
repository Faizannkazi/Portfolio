export const METADATA = {
  author: "Faizan Sadulla Kazi",
  title: "Portfolio | Faizan Sadulla Kazi",
  description:
    "IT undergraduate with hands-on experience in Python, data preprocessing, and machine learning model development. I build practical AI solutions and polished web experiences.",
  siteUrl: "https://github.com/Faizannkazi",
  twitterHandle: "",
  keywords: [
    "Faizan Sadulla Kazi",
    "IT undergraduate",
    "Machine Learning",
    "Python",
    "Data preprocessing",
    "Web development",
    "Resume evaluation",
  ].join(", "),
  image:
    "/social-preview.png",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "IT undergraduate building AI-powered products",
  "Experienced in Python, ML, and data preprocessing",
  "Eager to apply AI solutions to real-world business problems",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto:faizankazi486@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/faizannkazi",
  },
  {
    name: "github",
    url: "https://github.com/Faizannkazi",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "python",
    "typescript",
    "java",
    "cpp",
    "html",
    "css",
    "javascript",
  ],
  librariesAndFrameworks: [
    "pandas",
    "numpy",
    "scikit-learn",
    "flask",
    "django",
    "react",
    "nodejs",
    "tailwindcss",
  ],
  databases: ["mongodb", "mysql", "firebase", "sqlite"],
  other: ["git", "vscode"],
};

export const PROJECTS = [
  {
    name: "Resume Score & Job Recommendation",
    imageKey: "resume-score",
    description:
      "Built an ATS simulator that scores resumes and recommends jobs using AI-driven semantic analysis.",
    gradient: ["#FF9F43", "#FF6B6B"],
    url: "https://ats-resume-matching-system.streamlit.app/",
    tech: ["python", "pandas", "gemini","streamlit"
    ],
  },
  
   {
    name: "Student Feedback Analysis",
    imageKey: "student-feedback",
    description: "NLP-based student feedback analysis project (GitHub repo).",
    gradient: ["#9C27B0", "#7B1FA2"],
    url: "https://student-feedback-analysis-1.onrender.com",
    tech: ["python"],
  },
  {
    name: "GreenGuardAi",
    imageKey: "greenguard",
    description: "GreenGuardAi — environmental AI project (GitHub repo).",
    gradient: ["#43A047", "#2E7D32"],
    url: "https://github.com/Faizannkazi/GreenGuardAi",
    tech: ["python"],
  },

  {
    name: "House Price Prediction",
    imageKey: "house-price",
    description:
      "Developed a regression model for predicting house prices and deployed it through a Flask backend.",
    gradient: ["#4D96FF", "#1B262C"],
    url: "https://github.com/Faizannkazi/Pune_house_price_predictor",
    tech: ["python", "flask"],
  },

   {
    name: "Weatherly",
    imageKey: "weather-site",
    description:
      "Built a responsive web app using OpenWeatherMap API to display real-time weather conditions.",
    gradient: ["#22C55E", "#0F766E"],
    url: "https://github.com/Faizannkazi/Weather-website",
    tech: ["javascript", "html", "css"],
  }
];

export const WORK_CONTENTS = {
  PROJECTS: [
    {
      title: "Python Internship at Puneri Pattern",
      description:
        "Completed a Python internship at Puneri Pattern, where I developed AI-driven solutions for real-world business challenges, gaining hands-on experience in Python programming and machine learning concepts.",
      // content: (
      //   <div className="h-full w-full flex items-center justify-center text-white px-4">
      //     AI & Data Analysis Project
      //   </div>
      // ),
      content: (
  <img
    src="puneriPattern.jpeg"
    alt="Puneri Pattern Certificate"
    className="h-full w-full object-cover rounded-xl"
  />
),
    },
    {
      title: "Data Analysis internship at WeIntern",
      description:
        "Worked on data analysis projects during an internship at WeIntern, utilizing Python and data visualization techniques to extract insights and support decision-making processes.",
      // content: (
      //   <div className="h-full w-full flex items-center justify-center text-white px-4">
      //     Data Analysis Project
      //   </div>
      // ),
       content: (
  <img
    src="weintern.jpeg"
    alt="WeIntern Certificate"
    className="h-full w-full object-cover rounded-xl"
  />
),
    },
    {
      title: "Freelance Shopify web development",
      description:
        "Designed and developed custom Shopify themes and features for clients, enhancing their e-commerce presence with responsive and user-friendly web solutions.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Shopify Freelance Project
        </div>
      ),
    },
  ],
  ACHIEVEMENTS: [
    {
      title: "Indradhanu Finalist",
      description:
        "Shortlisted in the Top 30 teams out of 1000+ for AI for Climate Change by building illegal deforestation detection using satellite imagery.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Competition Achievement
        </div>
      ),
    },
    {
      title: "Top 10% MHT-CET",
      description:
        "Ranked in the top 10% in a competitive engineering entrance exam, securing admission with merit-based distinction.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Academic Achievement
        </div>
      ),
    },
    // {
    //   title: "Full Tuition Waiver",
    //   description:
    //     "Awarded a full tuition fee waiver at Savitribai Phule Pune University based on academic merit.",
    //   content: (
    //     <div className="h-full w-full flex items-center justify-center text-white px-4">
    //       Scholarship Achievement
    //     </div>
    //   ),
    // },
    {
      title: "IIT Bombay AI Workshop",
      description:
        "Completed an AI fundamentals workshop at IIT Bombay with hands-on practice in model development and AI concepts.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Certification
        </div>
      ),
    },
  ],
};

export const GTAG = "G-5HCTL2TJ5W";
