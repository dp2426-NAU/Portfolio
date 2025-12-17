export const personalInfo = {
  name: "Divya Sri Pothuraju",
  title: "Software Development Engineer",
  subtitle: "Full-Stack Developer | Cloud & ML Specialist",
  email: "divyapothuraju512@gmail.com",
  phone: "+1 9286660766",
  linkedin: "https://www.linkedin.com/in/divya-sri-pothuraju-644163220/",
  github: "https://github.com/",
  location: "Flagstaff, AZ",
};

export const aboutContent = {
  summary: `Software Development Engineer with 3+ years of professional experience at Capgemini, specializing in Database Administration, Full-Stack Development, AWS Cloud, and Machine Learning applications. Strong background in SQL Server production environments, cloud-native deployments on AWS, and building scalable web applications using React, Node.js, and modern databases.`,
  highlights: [
    "3+ years at Capgemini serving Airbus Commercial",
    "AWS Certified Developer & Cloud Practitioner",
    "Expert in SQL Server DBA & Full-Stack Development",
    "Experienced in ML/NLP applications",
  ],
};

export const experiences = [
  {
    id: 1,
    title: "Senior Analyst Software Engineer",
    company: "Capgemini Services",
    location: "Bengaluru, India",
    client: "Airbus Commercial",
    role: "SQL Database Administrator",
    period: "Nov 2021 - Aug 2024",
    achievements: [
      "Managed large-scale MSSQL Server production environments across critical business applications",
      "Led database migrations from SQL Server 2012 to 2019, improving performance and security",
      "Configured and maintained Always-On Availability Groups on Linux OS for high availability",
      "Designed and monitored database maintenance plans, backups, and disaster recovery strategies",
      "Resolved critical disk space, blocking, and performance issues in high-transaction systems",
      "Implemented database security, access control, and compliance policies",
      "Optimized query performance and indexing strategies, significantly reducing execution time",
    ],
  },
  {
    id: 2,
    title: "Full-Stack Intern",
    company: "RK Infosystems",
    location: "Hyderabad, India",
    period: "Aug 2020 - May 2021",
    achievements: [
      "Contributed to both frontend and backend development of web applications",
      "Developed responsive user interfaces using HTML, CSS, JavaScript, and React",
      "Built backend services using Node.js and implemented RESTful APIs",
      "Designed and integrated CRUD operations and API endpoints",
      "Collaborated with senior developers to debug, test, and enhance application performance",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Burnout Risk Prediction",
    description: "End-to-end machine learning system to predict employee burnout risk using structured and unstructured datasets. Implemented ML models including Logistic Regression, Random Forest, BERT, and LSTM for sentiment analysis.",
    techStack: ["Python", "Scikit-learn", "TensorFlow", "BERT", "LSTM", "NLP", "React.js", "TypeScript", "Node.js", "MongoDB", "JWT", "Vercel"],
    liveUrl: "https://burnout-risk-prediction.vercel.app/",
    githubUrl: "https://github.com/",
    highlights: [
      "Applied NLP techniques to analyze feedback, email communication, and workload patterns",
      "Engineered features to assess workload balance and engagement trends",
      "Implemented JWT-based authentication and Redis caching for performance",
    ],
  },
  {
    id: 2,
    title: "SyncFlow - AI Collaboration Platform",
    description: "Production-ready full-stack collaboration platform for distributed software teams with AI-powered code reviews, Kanban task management, and Architecture Decision Records portal.",
    techStack: ["React 18", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "Drizzle ORM", "OpenAI API", "Render"],
    liveUrl: "https://syncflow-1.onrender.com/",
    githubUrl: "https://github.com/",
    highlights: [
      "Integrated AI-powered PR review assistant using OpenAI GPT-4o-mini",
      "Built Kanban-style task management with drag-and-drop workflows",
      "Applied modern UI/UX with glassmorphism and smooth animations",
    ],
  },
  {
    id: 3,
    title: "AWS Booking Platform",
    description: "Full-stack booking platform web application deployed on AWS with complete cloud architecture including EC2, DynamoDB, S3, and CI/CD pipelines.",
    techStack: ["React.js", "Node.js", "REST APIs", "AWS EC2", "DynamoDB", "S3", "AWS CI/CD", "Git"],
    highlights: [
      "Deployed application on AWS EC2 with public IP hosting",
      "Utilized DynamoDB for scalable NoSQL data storage",
      "Implemented AWS CI/CD pipelines for automated deployments",
    ],
  },
];

export const skills = {
  languages: ["Python", "JavaScript", "C++", "SQL", "TypeScript", "HTML", "CSS"],
  frontend: ["React.js", "Tailwind CSS", "Framer Motion", "shadcn/ui", "Radix UI"],
  backend: ["Node.js", "Express.js", "RESTful APIs", "Microservices"],
  databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQL Server", "DynamoDB"],
  cloud: ["AWS EC2", "AWS S3", "AWS RDS", "AWS Lambda", "CloudWatch", "Docker", "Jenkins", "CI/CD", "Git", "GitHub"],
  tools: ["Postman", "JIRA", "Drizzle ORM", "Zod"],
};

export const education = [
  {
    degree: "Master of Science in Information Technology",
    school: "Northern Arizona University",
    location: "Flagstaff, AZ",
    period: "Expected Dec 2025",
  },
  {
    degree: "Bachelor of Electronics & Communication Engineering",
    school: "Jawaharlal Institute of Technology",
    location: "Kakinada, India",
    period: "Jun 2021",
  },
];

export const certifications = [
  "AWS Cloud Practitioner",
  "AWS Certified Developer - Associate (DVA-C02)",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
