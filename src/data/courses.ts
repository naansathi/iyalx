export interface Course {
  id: number;
  title: string;
  category: string;
  level: string;
  rating: number;
  reviews: number;
  duration: string;
  modules: number;
  price: string;
  image: string;
  gradient: string;
  description: string;
  curriculum: string[];
  skills: string[];
}

export const allCourses: Course[] = [
  {
    "id": 1,
    "title": "Full Stack Python Development",
    "category": "Software Development",
    "level": "Beginner to Intermediate",
    "rating": 4.7,
    "reviews": 1837,
    "duration": "4 Months",
    "modules": 14,
    "price": "₹37,000",
    "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
    "gradient": "from-orange-500/20 to-red-500/20",
    "description": "Comprehensive training program covering all aspects of Full Stack Python Development. Gain hands-on experience with real-world projects and industry-standard tools.",
    "curriculum": [
      "Introduction and Fundamentals",
      "Core Concepts and Architecture",
      "Hands-on Implementation",
      "Advanced Techniques",
      "Industry Best Practices",
      "Real-world Capstone Project"
    ],
    "skills": [
      "Industry Skills",
      "Problem Solving",
      "Project Development",
      "Best Practices"
    ]
  },
  {
    "id": 2,
    "title": "Full Stack PHP with Laravel",
    "category": "Software Development",
    "level": "Beginner to Intermediate",
    "rating": 4.9,
    "reviews": 1948,
    "duration": "4 Months",
    "modules": 13,
    "price": "₹38,000",
    "image": "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop",
    "gradient": "from-green-500/20 to-emerald-500/20",
    "description": "Comprehensive training program covering all aspects of Full Stack PHP with Laravel. Gain hands-on experience with real-world projects and industry-standard tools.",
    "curriculum": [
      "Introduction and Fundamentals",
      "Core Concepts and Architecture",
      "Hands-on Implementation",
      "Advanced Techniques",
      "Industry Best Practices",
      "Real-world Capstone Project"
    ],
    "skills": [
      "Industry Skills",
      "Problem Solving",
      "Project Development",
      "Best Practices"
    ]
  },
  {
    "id": 3,
    "title": "Frontend Engineering Masterclass",
    "category": "Software Development",
    "level": "Advanced",
    "rating": 4.8,
    "reviews": 2047,
    "duration": "5 Months",
    "modules": 15,
    "price": "₹28,000",
    "image": "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
    "gradient": "from-purple-500/20 to-pink-500/20",
    "description": "Comprehensive training program covering all aspects of Frontend Engineering Masterclass. Gain hands-on experience with real-world projects and industry-standard tools.",
    "curriculum": [
      "Introduction and Fundamentals",
      "Core Concepts and Architecture",
      "Hands-on Implementation",
      "Advanced Techniques",
      "Industry Best Practices",
      "Real-world Capstone Project"
    ],
    "skills": [
      "Industry Skills",
      "Problem Solving",
      "Project Development",
      "Best Practices"
    ]
  },
  {
    "id": 4,
    "title": "React.js Professional Program",
    "category": "Software Development",
    "level": "Advanced",
    "rating": 5,
    "reviews": 1856,
    "duration": "4 Months",
    "modules": 13,
    "price": "₹33,000",
    "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    "gradient": "from-yellow-500/20 to-orange-500/20",
    "description": "Comprehensive training program covering all aspects of React.js Professional Program. Gain hands-on experience with real-world projects and industry-standard tools.",
    "curriculum": [
      "Introduction and Fundamentals",
      "Core Concepts and Architecture",
      "Hands-on Implementation",
      "Advanced Techniques",
      "Industry Best Practices",
      "Real-world Capstone Project"
    ],
    "skills": [
      "Industry Skills",
      "Problem Solving",
      "Project Development",
      "Best Practices"
    ]
  },
  {
    "id": 5,
    "title": "ASP.NET Full Stack Development",
    "category": "Software Development",
    "level": "Beginner to Intermediate",
    "rating": 4.9,
    "reviews": 819,
    "duration": "3 Months",
    "modules": 8,
    "price": "₹36,000",
    "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    "gradient": "from-red-500/20 to-rose-500/20",
    "description": "Comprehensive training program covering all aspects of ASP.NET Full Stack Development. Gain hands-on experience with real-world projects and industry-standard tools.",
    "curriculum": [
      "Introduction and Fundamentals",
      "Core Concepts and Architecture",
      "Hands-on Implementation",
      "Advanced Techniques",
      "Industry Best Practices",
      "Real-world Capstone Project"
    ],
    "skills": [
      "Industry Skills",
      "Problem Solving",
      "Project Development",
      "Best Practices"
    ]
  },
  {
    "id": 6,
    "title": "Mobile App Development with Flutter",
    "category": "Software Development",
    "level": "Beginner to Intermediate",
    "rating": 4.6,
    "reviews": 1870,
    "duration": "6 Months",
    "modules": 11,
    "price": "₹40,000",
    "image": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    "gradient": "from-blue-500/20 to-cyan-500/20",
    "description": "Comprehensive training program covering all aspects of Mobile App Development with Flutter. Gain hands-on experience with real-world projects and industry-standard tools.",
    "curriculum": [
      "Introduction and Fundamentals",
      "Core Concepts and Architecture",
      "Hands-on Implementation",
      "Advanced Techniques",
      "Industry Best Practices",
      "Real-world Capstone Project"
    ],
    "skills": [
      "Industry Skills",
      "Problem Solving",
      "Project Development",
      "Best Practices"
    ]
  },
  {
    "id": 7,
    "title": "Android App Development Mastery",
    "category": "Software Development",
    "level": "Advanced",
    "rating": 4.8,
    "reviews": 1229,
    "duration": "5 Months",
    "modules": 13,
    "price": "₹20,000",
    "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
    "gradient": "from-orange-500/20 to-red-500/20",
    "description": "Comprehensive training program covering all aspects of Android App Development Mastery. Gain hands-on experience with real-world projects and industry-standard tools.",
    "curriculum": [
      "Introduction and Fundamentals",
      "Core Concepts and Architecture",
      "Hands-on Implementation",
      "Advanced Techniques",
      "Industry Best Practices",
      "Real-world Capstone Project"
    ],
    "skills": [
      "Industry Skills",
      "Problem Solving",
      "Project Development",
      "Best Practices"
    ]
  },
  {
    "id": 8,
    "title": "Generative AI Master Program",
    "category": "AI & Data",
    "level": "Advanced",
    "rating": 4.6,
    "reviews": 309,
    "duration": "6 Months",
    "modules": 13,
    "price": "₹33,000",
    "image": "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop",
    "gradient": "from-green-500/20 to-emerald-500/20",
    "description": "Comprehensive training program covering all aspects of Generative AI Master Program. Gain hands-on experience with real-world projects and industry-standard tools.",
    "curriculum": [
      "Introduction and Fundamentals",
      "Core Concepts and Architecture",
      "Hands-on Implementation",
      "Advanced Techniques",
      "Industry Best Practices",
      "Real-world Capstone Project"
    ],
    "skills": [
      "Industry Skills",
      "Problem Solving",
      "Project Development",
      "Best Practices"
    ]
  },
  {
    "id": 9,
    "title": "Business Analytics",
    "category": "AI & Data",
    "level": "Beginner to Intermediate",
    "rating": 4.6,
    "reviews": 632,
    "duration": "4 Months",
    "modules": 12,
    "price": "₹26,000",
    "image": "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
    "gradient": "from-purple-500/20 to-pink-500/20",
    "description": "Comprehensive training program covering all aspects of Business Analytics. Gain hands-on experience with real-world projects and industry-standard tools.",
    "curriculum": [
      "Introduction and Fundamentals",
      "Core Concepts and Architecture",
      "Hands-on Implementation",
      "Advanced Techniques",
      "Industry Best Practices",
      "Real-world Capstone Project"
    ],
    "skills": [
      "Industry Skills",
      "Problem Solving",
      "Project Development",
      "Best Practices"
    ]
  },
  {
    "id": 10,
    "title": "Data Analytics",
    "category": "AI & Data",
    "level": "Beginner to Intermediate",
    "rating": 4.9,
    "reviews": 905,
    "duration": "5 Months",
    "modules": 8,
    "price": "₹44,000",
    "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    "gradient": "from-yellow-500/20 to-orange-500/20",
    "description": "Comprehensive training program covering all aspects of Data Analytics. Gain hands-on experience with real-world projects and industry-standard tools.",
    "curriculum": [
      "Introduction and Fundamentals",
      "Core Concepts and Architecture",
      "Hands-on Implementation",
      "Advanced Techniques",
      "Industry Best Practices",
      "Real-world Capstone Project"
    ],
    "skills": [
      "Industry Skills",
      "Problem Solving",
      "Project Development",
      "Best Practices"
    ]
  },
  {
    "id": 11,
    "title": "Machine Learning Mastery",
    "category": "AI & Data",
    "level": "Advanced",
    "rating": 4.9,
    "reviews": 1262,
    "duration": "3 Months",
    "modules": 11,
    "price": "₹29,000",
    "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    "gradient": "from-red-500/20 to-rose-500/20",
    "description": "Comprehensive training program covering all aspects of Machine Learning Mastery. Gain hands-on experience with real-world projects and industry-standard tools.",
    "curriculum": [
      "Introduction and Fundamentals",
      "Core Concepts and Architecture",
      "Hands-on Implementation",
      "Advanced Techniques",
      "Industry Best Practices",
      "Real-world Capstone Project"
    ],
    "skills": [
      "Industry Skills",
      "Problem Solving",
      "Project Development",
      "Best Practices"
    ]
  },
  {
    "id": 12,
    "title": "Data Science Professional Program",
    "category": "AI & Data",
    "level": "Advanced",
    "rating": 4.6,
    "reviews": 942,
    "duration": "5 Months",
    "modules": 9,
    "price": "₹31,000",
    "image": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    "gradient": "from-blue-500/20 to-cyan-500/20",
    "description": "Comprehensive training program covering all aspects of Data Science Professional Program. Gain hands-on experience with real-world projects and industry-standard tools.",
    "curriculum": [
      "Introduction and Fundamentals",
      "Core Concepts and Architecture",
      "Hands-on Implementation",
      "Advanced Techniques",
      "Industry Best Practices",
      "Real-world Capstone Project"
    ],
    "skills": [
      "Industry Skills",
      "Problem Solving",
      "Project Development",
      "Best Practices"
    ]
  },
  {
    "id": 13,
    "title": "Artificial Intelligence with Python",
    "category": "AI & Data",
    "level": "Beginner to Intermediate",
    "rating": 4.7,
    "reviews": 396,
    "duration": "6 Months",
    "modules": 14,
    "price": "₹26,000",
    "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
    "gradient": "from-orange-500/20 to-red-500/20",
    "description": "Comprehensive training program covering all aspects of Artificial Intelligence with Python. Gain hands-on experience with real-world projects and industry-standard tools.",
    "curriculum": [
      "Introduction and Fundamentals",
      "Core Concepts and Architecture",
      "Hands-on Implementation",
      "Advanced Techniques",
      "Industry Best Practices",
      "Real-world Capstone Project"
    ],
    "skills": [
      "Industry Skills",
      "Problem Solving",
      "Project Development",
      "Best Practices"
    ]
  },
  {
    "id": 14,
    "title": "Ethical Hacking Professional",
    "category": "Cybersecurity",
    "level": "Advanced",
    "rating": 5,
    "reviews": 398,
    "duration": "4 Months",
    "modules": 8,
    "price": "₹38,000",
    "image": "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop",
    "gradient": "from-green-500/20 to-emerald-500/20",
    "description": "Comprehensive training program covering all aspects of Ethical Hacking Professional. Gain hands-on experience with real-world projects and industry-standard tools.",
    "curriculum": [
      "Introduction and Fundamentals",
      "Core Concepts and Architecture",
      "Hands-on Implementation",
      "Advanced Techniques",
      "Industry Best Practices",
      "Real-world Capstone Project"
    ],
    "skills": [
      "Industry Skills",
      "Problem Solving",
      "Project Development",
      "Best Practices"
    ]
  },
  {
    "id": 15,
    "title": "Network Security Specialist",
    "category": "Cybersecurity",
    "level": "Beginner to Intermediate",
    "rating": 4.9,
    "reviews": 2015,
    "duration": "5 Months",
    "modules": 11,
    "price": "₹20,000",
    "image": "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
    "gradient": "from-purple-500/20 to-pink-500/20",
    "description": "Comprehensive training program covering all aspects of Network Security Specialist. Gain hands-on experience with real-world projects and industry-standard tools.",
    "curriculum": [
      "Introduction and Fundamentals",
      "Core Concepts and Architecture",
      "Hands-on Implementation",
      "Advanced Techniques",
      "Industry Best Practices",
      "Real-world Capstone Project"
    ],
    "skills": [
      "Industry Skills",
      "Problem Solving",
      "Project Development",
      "Best Practices"
    ]
  },
  {
    "id": 16,
    "title": "SOC Analyst Training",
    "category": "Cybersecurity",
    "level": "Beginner to Intermediate",
    "rating": 4.5,
    "reviews": 1455,
    "duration": "4 Months",
    "modules": 13,
    "price": "₹24,000",
    "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    "gradient": "from-yellow-500/20 to-orange-500/20",
    "description": "Comprehensive training program covering all aspects of SOC Analyst Training. Gain hands-on experience with real-world projects and industry-standard tools.",
    "curriculum": [
      "Introduction and Fundamentals",
      "Core Concepts and Architecture",
      "Hands-on Implementation",
      "Advanced Techniques",
      "Industry Best Practices",
      "Real-world Capstone Project"
    ],
    "skills": [
      "Industry Skills",
      "Problem Solving",
      "Project Development",
      "Best Practices"
    ]
  },
  {
    "id": 17,
    "title": "Cloud Security Engineering",
    "category": "Cybersecurity",
    "level": "Beginner to Intermediate",
    "rating": 5,
    "reviews": 603,
    "duration": "4 Months",
    "modules": 11,
    "price": "₹32,000",
    "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    "gradient": "from-red-500/20 to-rose-500/20",
    "description": "Comprehensive training program covering all aspects of Cloud Security Engineering. Gain hands-on experience with real-world projects and industry-standard tools.",
    "curriculum": [
      "Introduction and Fundamentals",
      "Core Concepts and Architecture",
      "Hands-on Implementation",
      "Advanced Techniques",
      "Industry Best Practices",
      "Real-world Capstone Project"
    ],
    "skills": [
      "Industry Skills",
      "Problem Solving",
      "Project Development",
      "Best Practices"
    ]
  },
  {
    "id": 18,
    "title": "DevOps Engineering Mastery",
    "category": "Cloud & DevOps",
    "level": "Advanced",
    "rating": 4.9,
    "reviews": 259,
    "duration": "5 Months",
    "modules": 15,
    "price": "₹44,000",
    "image": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    "gradient": "from-blue-500/20 to-cyan-500/20",
    "description": "Comprehensive training program covering all aspects of DevOps Engineering Mastery. Gain hands-on experience with real-world projects and industry-standard tools.",
    "curriculum": [
      "Introduction and Fundamentals",
      "Core Concepts and Architecture",
      "Hands-on Implementation",
      "Advanced Techniques",
      "Industry Best Practices",
      "Real-world Capstone Project"
    ],
    "skills": [
      "Industry Skills",
      "Problem Solving",
      "Project Development",
      "Best Practices"
    ]
  },
  {
    "id": 19,
    "title": "Cloud Computing Professional",
    "category": "Cloud & DevOps",
    "level": "Advanced",
    "rating": 4.7,
    "reviews": 2026,
    "duration": "3 Months",
    "modules": 14,
    "price": "₹36,000",
    "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
    "gradient": "from-orange-500/20 to-red-500/20",
    "description": "Comprehensive training program covering all aspects of Cloud Computing Professional. Gain hands-on experience with real-world projects and industry-standard tools.",
    "curriculum": [
      "Introduction and Fundamentals",
      "Core Concepts and Architecture",
      "Hands-on Implementation",
      "Advanced Techniques",
      "Industry Best Practices",
      "Real-world Capstone Project"
    ],
    "skills": [
      "Industry Skills",
      "Problem Solving",
      "Project Development",
      "Best Practices"
    ]
  },
  {
    "id": 20,
    "title": "Azure Cloud Engineering",
    "category": "Cloud & DevOps",
    "level": "Beginner to Intermediate",
    "rating": 4.9,
    "reviews": 1541,
    "duration": "4 Months",
    "modules": 9,
    "price": "₹48,000",
    "image": "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop",
    "gradient": "from-green-500/20 to-emerald-500/20",
    "description": "Comprehensive training program covering all aspects of Azure Cloud Engineering. Gain hands-on experience with real-world projects and industry-standard tools.",
    "curriculum": [
      "Introduction and Fundamentals",
      "Core Concepts and Architecture",
      "Hands-on Implementation",
      "Advanced Techniques",
      "Industry Best Practices",
      "Real-world Capstone Project"
    ],
    "skills": [
      "Industry Skills",
      "Problem Solving",
      "Project Development",
      "Best Practices"
    ]
  },
  {
    "id": 21,
    "title": "Kubernetes & Docker Masterclass",
    "category": "Cloud & DevOps",
    "level": "Advanced",
    "rating": 4.7,
    "reviews": 246,
    "duration": "5 Months",
    "modules": 8,
    "price": "₹23,000",
    "image": "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
    "gradient": "from-purple-500/20 to-pink-500/20",
    "description": "Comprehensive training program covering all aspects of Kubernetes & Docker Masterclass. Gain hands-on experience with real-world projects and industry-standard tools.",
    "curriculum": [
      "Introduction and Fundamentals",
      "Core Concepts and Architecture",
      "Hands-on Implementation",
      "Advanced Techniques",
      "Industry Best Practices",
      "Real-world Capstone Project"
    ],
    "skills": [
      "Industry Skills",
      "Problem Solving",
      "Project Development",
      "Best Practices"
    ]
  },
  {
    "id": 22,
    "title": "Red Hat Linux",
    "category": "Cloud & DevOps",
    "level": "Beginner to Intermediate",
    "rating": 4.5,
    "reviews": 1108,
    "duration": "4 Months",
    "modules": 12,
    "price": "₹24,000",
    "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    "gradient": "from-yellow-500/20 to-orange-500/20",
    "description": "Comprehensive training program covering all aspects of Red Hat Linux. Gain hands-on experience with real-world projects and industry-standard tools.",
    "curriculum": [
      "Introduction and Fundamentals",
      "Core Concepts and Architecture",
      "Hands-on Implementation",
      "Advanced Techniques",
      "Industry Best Practices",
      "Real-world Capstone Project"
    ],
    "skills": [
      "Industry Skills",
      "Problem Solving",
      "Project Development",
      "Best Practices"
    ]
  },
  {
    "id": 23,
    "title": "Master in Digital Marketing",
    "category": "Digital Marketing",
    "level": "Advanced",
    "rating": 4.8,
    "reviews": 222,
    "duration": "4 Months",
    "modules": 13,
    "price": "₹21,000",
    "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    "gradient": "from-red-500/20 to-rose-500/20",
    "description": "Comprehensive training program covering all aspects of Master in Digital Marketing. Gain hands-on experience with real-world projects and industry-standard tools.",
    "curriculum": [
      "Introduction and Fundamentals",
      "Core Concepts and Architecture",
      "Hands-on Implementation",
      "Advanced Techniques",
      "Industry Best Practices",
      "Real-world Capstone Project"
    ],
    "skills": [
      "Industry Skills",
      "Problem Solving",
      "Project Development",
      "Best Practices"
    ]
  },
  {
    "id": 24,
    "title": "Social Media Marketing Professional",
    "category": "Digital Marketing",
    "level": "Advanced",
    "rating": 4.6,
    "reviews": 985,
    "duration": "5 Months",
    "modules": 8,
    "price": "₹30,000",
    "image": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    "gradient": "from-blue-500/20 to-cyan-500/20",
    "description": "Comprehensive training program covering all aspects of Social Media Marketing Professional. Gain hands-on experience with real-world projects and industry-standard tools.",
    "curriculum": [
      "Introduction and Fundamentals",
      "Core Concepts and Architecture",
      "Hands-on Implementation",
      "Advanced Techniques",
      "Industry Best Practices",
      "Real-world Capstone Project"
    ],
    "skills": [
      "Industry Skills",
      "Problem Solving",
      "Project Development",
      "Best Practices"
    ]
  },
  {
    "id": 25,
    "title": "Branding & Content Marketing",
    "category": "Digital Marketing",
    "level": "Beginner to Intermediate",
    "rating": 4.8,
    "reviews": 1050,
    "duration": "4 Months",
    "modules": 9,
    "price": "₹39,000",
    "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
    "gradient": "from-orange-500/20 to-red-500/20",
    "description": "Comprehensive training program covering all aspects of Branding & Content Marketing. Gain hands-on experience with real-world projects and industry-standard tools.",
    "curriculum": [
      "Introduction and Fundamentals",
      "Core Concepts and Architecture",
      "Hands-on Implementation",
      "Advanced Techniques",
      "Industry Best Practices",
      "Real-world Capstone Project"
    ],
    "skills": [
      "Industry Skills",
      "Problem Solving",
      "Project Development",
      "Best Practices"
    ]
  },
  {
    "id": 26,
    "title": "SEO Specialist Program",
    "category": "Digital Marketing",
    "level": "Beginner to Intermediate",
    "rating": 4.7,
    "reviews": 242,
    "duration": "3 Months",
    "modules": 12,
    "price": "₹28,000",
    "image": "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop",
    "gradient": "from-green-500/20 to-emerald-500/20",
    "description": "Comprehensive training program covering all aspects of SEO Specialist Program. Gain hands-on experience with real-world projects and industry-standard tools.",
    "curriculum": [
      "Introduction and Fundamentals",
      "Core Concepts and Architecture",
      "Hands-on Implementation",
      "Advanced Techniques",
      "Industry Best Practices",
      "Real-world Capstone Project"
    ],
    "skills": [
      "Industry Skills",
      "Problem Solving",
      "Project Development",
      "Best Practices"
    ]
  },
  {
    "id": 27,
    "title": "YouTube Creator Mastery",
    "category": "Digital Marketing",
    "level": "Advanced",
    "rating": 4.8,
    "reviews": 603,
    "duration": "3 Months",
    "modules": 10,
    "price": "₹45,000",
    "image": "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
    "gradient": "from-purple-500/20 to-pink-500/20",
    "description": "Comprehensive training program covering all aspects of YouTube Creator Mastery. Gain hands-on experience with real-world projects and industry-standard tools.",
    "curriculum": [
      "Introduction and Fundamentals",
      "Core Concepts and Architecture",
      "Hands-on Implementation",
      "Advanced Techniques",
      "Industry Best Practices",
      "Real-world Capstone Project"
    ],
    "skills": [
      "Industry Skills",
      "Problem Solving",
      "Project Development",
      "Best Practices"
    ]
  },
  {
    "id": 28,
    "title": "Graphic Design Professional",
    "category": "Digital Marketing",
    "level": "Advanced",
    "rating": 5,
    "reviews": 608,
    "duration": "6 Months",
    "modules": 12,
    "price": "₹42,000",
    "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    "gradient": "from-yellow-500/20 to-orange-500/20",
    "description": "Comprehensive training program covering all aspects of Graphic Design Professional. Gain hands-on experience with real-world projects and industry-standard tools.",
    "curriculum": [
      "Introduction and Fundamentals",
      "Core Concepts and Architecture",
      "Hands-on Implementation",
      "Advanced Techniques",
      "Industry Best Practices",
      "Real-world Capstone Project"
    ],
    "skills": [
      "Industry Skills",
      "Problem Solving",
      "Project Development",
      "Best Practices"
    ]
  },
  {
    "id": 29,
    "title": "Video Editing & Motion Graphics",
    "category": "Digital Marketing",
    "level": "Beginner to Intermediate",
    "rating": 4.7,
    "reviews": 848,
    "duration": "5 Months",
    "modules": 12,
    "price": "₹29,000",
    "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    "gradient": "from-red-500/20 to-rose-500/20",
    "description": "Comprehensive training program covering all aspects of Video Editing & Motion Graphics. Gain hands-on experience with real-world projects and industry-standard tools.",
    "curriculum": [
      "Introduction and Fundamentals",
      "Core Concepts and Architecture",
      "Hands-on Implementation",
      "Advanced Techniques",
      "Industry Best Practices",
      "Real-world Capstone Project"
    ],
    "skills": [
      "Industry Skills",
      "Problem Solving",
      "Project Development",
      "Best Practices"
    ]
  },
  {
    "id": 30,
    "title": "Software Testing & QA Automation",
    "category": "Testing",
    "level": "Beginner to Intermediate",
    "rating": 4.9,
    "reviews": 1385,
    "duration": "5 Months",
    "modules": 11,
    "price": "₹40,000",
    "image": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    "gradient": "from-blue-500/20 to-cyan-500/20",
    "description": "Comprehensive training program covering all aspects of Software Testing & QA Automation. Gain hands-on experience with real-world projects and industry-standard tools.",
    "curriculum": [
      "Introduction and Fundamentals",
      "Core Concepts and Architecture",
      "Hands-on Implementation",
      "Advanced Techniques",
      "Industry Best Practices",
      "Real-world Capstone Project"
    ],
    "skills": [
      "Industry Skills",
      "Problem Solving",
      "Project Development",
      "Best Practices"
    ]
  },
  {
    "id": 31,
    "title": "Automation Testing with Selenium",
    "category": "Testing",
    "level": "Beginner to Intermediate",
    "rating": 4.6,
    "reviews": 1042,
    "duration": "3 Months",
    "modules": 14,
    "price": "₹35,000",
    "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
    "gradient": "from-orange-500/20 to-red-500/20",
    "description": "Comprehensive training program covering all aspects of Automation Testing with Selenium. Gain hands-on experience with real-world projects and industry-standard tools.",
    "curriculum": [
      "Introduction and Fundamentals",
      "Core Concepts and Architecture",
      "Hands-on Implementation",
      "Advanced Techniques",
      "Industry Best Practices",
      "Real-world Capstone Project"
    ],
    "skills": [
      "Industry Skills",
      "Problem Solving",
      "Project Development",
      "Best Practices"
    ]
  }
];
