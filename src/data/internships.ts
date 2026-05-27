export interface Internship {
  id: number;
  title: string;
  category: string;
  duration: string;
  stipend: string;
  type: string; // Remote, On-site, Hybrid
  openings: number;
  image: string;
  gradient: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export const allInternships: Internship[] = [
  {
    id: 1,
    title: "Frontend Engineering Intern",
    category: "Web Development",
    duration: "6 Months",
    stipend: "₹15,000 / month",
    type: "Remote",
    openings: 5,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    gradient: "from-blue-500/20 to-cyan-500/20",
    description: "Join our frontend team to build scalable and highly interactive user interfaces using React, Next.js, and modern CSS frameworks. You will work on real-world projects and collaborate closely with our senior engineers.",
    responsibilities: [
      "Develop and maintain responsive web interfaces using React.js.",
      "Collaborate with the design team to implement UI/UX best practices.",
      "Write clean, maintainable, and well-documented code.",
      "Participate in code reviews and agile sprint planning."
    ],
    requirements: [
      "Strong proficiency in HTML, CSS, and JavaScript.",
      "Experience with React.js and state management tools.",
      "Familiarity with Git and version control.",
      "Strong problem-solving skills and a passion for learning."
    ]
  },
  {
    id: 2,
    title: "Backend Engineering Intern",
    category: "Software Development",
    duration: "6 Months",
    stipend: "₹18,000 / month",
    type: "Hybrid",
    openings: 3,
    image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=800&auto=format&fit=crop",
    gradient: "from-green-500/20 to-emerald-500/20",
    description: "Work on scalable backend architectures using Node.js, Express, and MongoDB. You will help build and maintain RESTful APIs that power our core platforms.",
    responsibilities: [
      "Design and implement RESTful APIs.",
      "Work on database schemas and optimize queries.",
      "Integrate third-party services and payment gateways.",
      "Troubleshoot, debug, and upgrade existing systems."
    ],
    requirements: [
      "Knowledge of Node.js and Express.js.",
      "Understanding of MongoDB or other NoSQL/SQL databases.",
      "Basic understanding of server-side logic and authentication.",
      "Familiarity with Postman or similar API testing tools."
    ]
  },
  {
    id: 3,
    title: "UI/UX Design Intern",
    category: "Design",
    duration: "3 Months",
    stipend: "₹10,000 / month",
    type: "Remote",
    openings: 2,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
    gradient: "from-purple-500/20 to-pink-500/20",
    description: "Help craft beautiful, intuitive, and user-centric interfaces. You will assist our lead designers in creating wireframes, prototypes, and high-fidelity mockups.",
    responsibilities: [
      "Create wireframes, user flows, and prototypes.",
      "Assist in user research and usability testing.",
      "Design UI components and maintain design systems.",
      "Collaborate with frontend developers for implementation."
    ],
    requirements: [
      "Proficiency in design tools like Figma or Adobe XD.",
      "A strong portfolio showcasing design projects.",
      "Understanding of basic UI/UX principles and typography.",
      "Excellent communication and collaboration skills."
    ]
  },
  {
    id: 4,
    title: "Data Science & AI Intern",
    category: "Data Science",
    duration: "6 Months",
    stipend: "₹20,000 / month",
    type: "On-site",
    openings: 4,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop",
    gradient: "from-orange-500/20 to-red-500/20",
    description: "Get hands-on experience in machine learning, data processing, and predictive analytics. You will work alongside our AI team to develop intelligent solutions.",
    responsibilities: [
      "Assist in cleaning, processing, and analyzing large datasets.",
      "Train and test machine learning models.",
      "Develop scripts for data scraping and automation.",
      "Create data visualizations to communicate findings."
    ],
    requirements: [
      "Strong understanding of Python and SQL.",
      "Familiarity with Pandas, NumPy, and Scikit-Learn.",
      "Basic knowledge of machine learning algorithms.",
      "Analytical mindset and attention to detail."
    ]
  }
];
