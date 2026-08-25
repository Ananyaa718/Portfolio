export interface SkillCardData {
  number: string;
  title: string;
  badge: string;
  color: string;
  description?: string;
  skills: {
    name: string;
    description?: string;
  }[];
}

export interface ProjectData {
  id: string;
  number: string;
  title: string;
  categoryPill: string;
  pillColor: "teal" | "purple" | "crimson" | "gold" | "blue";
  year: string;
  description: string;
  techChips: string[];
  githubUrl: string;
  liveUrl?: string;
  isComingSoon?: boolean;
  imageAlt: string;
  highlights?: string[];
  stats?: { label: string; value: string }[];
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    studentTitle: string;
    subRoles: string[];
    location: string;
    email: string;
    githubUrl: string;
    linkedinUrl: string;
    availableForInternships: boolean;
    aboutHeadline: string;
    aboutBody: string;
    signature: string;
    footerTagline: string;
  };
  socials: {
    name: string;
    handle: string;
    url: string;
    icon: string;
  }[];
  skills: SkillCardData[];
  projects: ProjectData[];
  quickStats: {
    label: string;
    value: string;
    sublabel: string;
  }[];
}

export const PORTFOLIO_DATA: PortfolioData = {
  personal: {
    name: "Ananya Rastogi",
    role: "CS Student · Building in Software, Data & ML",
    studentTitle: "STUDENT PORTFOLIO",
    subRoles: [
      "SOFTWARE DEVELOPMENT",
      "DATA ANALYTICS",
      "MACHINE LEARNING"
    ],
    location: "Mathura / Moradabad, India",
    email: "ananyarastogi4547@gmail.com",
    githubUrl: "https://github.com/Ananyaa718",
    linkedinUrl: "https://www.linkedin.com/in/ananya-rastogi-1b4387366?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    availableForInternships: true,
    aboutHeadline: "nice to meet you!",
    aboutBody: "I'm Ananya, a Computer Science student who's genuinely curious about how software, data, and machine learning come together to solve real problems. I'm currently building my skills through coursework, coding practice, and hands-on projects — working with Java, Python, and SQL, exploring data analysis with Pandas and NumPy, and getting comfortable with web development using React, Git, and GitHub. I like learning by building rather than just reading about it, so this space is where I share what I'm working on as I grow. Still very much a work in progress — thanks for stopping by!",
    signature: "~ Ananya",
    footerTagline: "Computer Science student building software, data, and ML skills — one project at a time."
  },
  socials: [
    {
      name: "GitHub",
      handle: "Ananyaa718",
      url: "https://github.com/Ananyaa718",
      icon: "Github"
    },
    {
      name: "LinkedIn",
      handle: "ananya-rastogi",
      url: "https://www.linkedin.com/in/ananya-rastogi-1b4387366?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      icon: "Linkedin"
    },
    {
      name: "Email",
      handle: "ananyarastogi4547@gmail.com",
      url: "mailto:ananyarastogi4547@gmail.com",
      icon: "Mail"
    },
    {
      name: "LeetCode",
      handle: "ananya_cs",
      url: "https://leetcode.com",
      icon: "Code"
    }
  ],
  quickStats: [
    {
      label: "Focus Areas",
      value: "3",
      sublabel: "Software, Data & ML"
    },
    {
      label: "Core Languages",
      value: "4",
      sublabel: "Python, Java, C, SQL"
    },
    {
      label: "EDA Notebooks",
      value: "Hands-on",
      sublabel: "Pandas & Matplotlib"
    },
    {
      label: "Status",
      value: "Open",
      sublabel: "Internship Opportunities"
    }
  ],
  skills: [
    {
      number: "01",
      title: "PROGRAMMING",
      badge: "CORE FOUNDATIONS",
      color: "crimson",
      skills: [
        { name: "Java" },
        { name: "Python" },
        { name: "C" },
        { name: "SQL" },
        { name: "Problem-solving & DSA practice" }
      ]
    },
    {
      number: "02",
      title: "DATA & ANALYTICS",
      badge: "EXPLORATION & INSIGHTS",
      color: "teal",
      skills: [
        { name: "NumPy, Pandas, Matplotlib" },
        { name: "Data cleaning & preprocessing" },
        { name: "Exploratory Data Analysis (EDA)" },
        { name: "Correlation analysis & descriptive statistics" },
        { name: "Data visualization, box plots & outlier analysis" }
      ]
    },
    {
      number: "03",
      title: "MACHINE LEARNING (LEARNING)",
      badge: "CURRENTLY LEARNING",
      color: "gold",
      skills: [
        { name: "ML fundamentals & workflows" },
        { name: "Data preprocessing for ML" },
        { name: "Exploratory analysis before modeling" }
      ]
    },
    {
      number: "04",
      title: "WEB DEVELOPMENT",
      badge: "APPLICATIONS & BACKEND",
      color: "purple",
      skills: [
        { name: "HTML, CSS, JavaScript, React" },
        { name: "Git & GitHub" },
        { name: "Supabase & authentication/backend integration" }
      ]
    }
  ],
  projects: [
    {
      id: "life-expectancy-eda",
      number: "01",
      title: "Life Expectancy Data Analysis",
      categoryPill: "DATA ANALYSIS · EDA",
      pillColor: "teal",
      year: "2026",
      description: "An exploratory data analysis project on a life expectancy dataset — cleaning and preprocessing the data, computing descriptive statistics, analyzing correlations between numerical variables, and visualizing distributions with box plots to identify and interpret outliers.",
      techChips: ["Python", "Pandas", "NumPy", "Matplotlib"],
      githubUrl: "https://github.com/Ananyaa718",
      imageAlt: "Life Expectancy EDA Data Visualization & Jupyter Analysis",
      highlights: [
        "Data cleaning and preprocessing on life expectancy dataset",
        "Descriptive statistics and correlation matrix between numerical features",
        "Box plots and IQR calculations for outlier detection and visual distribution analysis"
      ]
    },
    {
      id: "supabase-github-auth",
      number: "02",
      title: "Supabase + GitHub Authentication",
      categoryPill: "WEB DEVELOPMENT · AUTH",
      pillColor: "purple",
      year: "2026",
      description: "Integrated Supabase with GitHub OAuth to add authentication to a web application — setting up the Supabase backend, configuring the GitHub authorization flow, connecting it to the frontend, and debugging setup/auth issues along the way.",
      techChips: ["React", "Supabase", "GitHub OAuth", "JavaScript"],
      githubUrl: "https://github.com/Ananyaa718",
      imageAlt: "Supabase and GitHub OAuth Authentication Web Application",
      highlights: [
        "Set up Supabase BaaS project and registered GitHub OAuth 2.0 application",
        "Configured authorization callback flow and secured authentication redirects",
        "Connected frontend React state with session management and user profile retrieval"
      ]
    },
    {
      id: "more-coming-soon",
      number: "03",
      title: "More Projects Coming Soon",
      categoryPill: "IN PROGRESS",
      pillColor: "crimson",
      year: "2026",
      description: "Currently building more projects as I continue learning — check back soon or visit my GitHub for the latest.",
      techChips: ["Python", "Machine Learning", "React", "SQL"],
      githubUrl: "https://github.com/Ananyaa718",
      isComingSoon: true,
      imageAlt: "Upcoming Student Projects in Machine Learning and Software Development"
    }
  ]
};
