/* ==========================================================================
   data.js — ALL of your portfolio content lives in this one file.

   To update the site you only edit this file and drop images into /assets.
   See README.md for the step-by-step guide.

   Rules of thumb
   - Anything you leave empty ("" or []) is simply hidden on the site.
   - Image paths are relative to index.html, e.g. "assets/images/certificates/osh.jpg".
   - Keep the commas and quotes exactly as in the examples.
   ========================================================================== */

window.SITE = {

  /* ------------------------------------------------------------------ */
  /* Owner & contact                                                     */
  /* ------------------------------------------------------------------ */
  owner: {
    brand: "James Magpantay",
    fullName: "James Marion Magpantay",
    title: "IT Associate and Computer Engineer",
    intro:
      "I design, build and deploy the systems teams rely on every day, from an employee portal used across multiple departments to an AI fire detection prototype on a Raspberry Pi.",
    email: "magpantayjames2@gmail.com",
    github: "https://github.com/magpantayjames2-ux",
    linkedin: "https://www.linkedin.com/in/james-marion-magpantay-127573398/",
    contactCta: "Interested in collaborating, hiring, or discussing a project? Let's connect.",
    heroImage: "Graduation.jpg",
    heroAlt: "James Magpantay in his FAITH Colleges graduation toga with an orange hood and medal",
    heroCaptionTitle: "BS Computer Engineering",
    heroCaptionSub: "FAITH Colleges, May 11, 2026"
  },

  /* A short row of proof points under the hero. Edit freely. */
  highlights: [
    { value: "93%", label: "detection accuracy on my thesis system" },
    { value: "20+", label: "people using the SPLI Portal I built" },
    { value: "1st", label: "place as team leader, Engineering Camp 2025" },
    { value: "Top 5", label: "Innovative Student, FAITH Colleges 2026" }
  ],

  /* ------------------------------------------------------------------ */
  /* About me  (DRAFT — edit the wording until it sounds like you)       */
  /* ------------------------------------------------------------------ */
  about: {
    image: "Portrait.jpg",
    imageAlt: "James Magpantay in a light blue shirt and striped tie",
    paragraphs: [
      "I'm a Computer Engineering graduate from FAITH Colleges and an IT Associate at Susumi Philippine Logistics, Inc. I support day-to-day IT operations and build the internal systems that keep requests, approvals and records moving.",
      "My work sits between engineering and everyday operations. For my thesis I led a team of four to build an AI-based fire and smoke detection system with automatic suppression on a Raspberry Pi 5. It reached 93% detection accuracy and was successfully defended. During on-the-job training at JGC Technical Assistance Services Philippines, I built a Visitor Logs Management System that the company deployed and put to use. At SPLI, I designed, developed and continue to improve the SPLI Portal, which 20+ people use across multiple teams.",
      "I take on responsibility, learn what each tool needs to do, and ship systems people actually use. In 2025 I led my team to first place at Engineering Camp, and in 2026 the FAITH Colleges Computer Engineering Department named me a Top 5 Innovative Student."
    ],
    current: {
      role: "IT Associate",
      company: "Susumi Philippine Logistics, Inc. (SPLI)",
      detail: "IT Department, since July 2026"
    }
  },

  /* ------------------------------------------------------------------ */
  /* Education                                                           */
  /* ------------------------------------------------------------------ */
  education: {
    degree: {
      title: "Bachelor of Science in Computer Engineering",
      school: "FAITH Colleges",
      date: "Graduated May 11, 2026",
      note: "Top 5 Innovative Student (2026) and 2025 Engineering Camp Team Leader, 1st Place."
    },
    thesis: {
      title: "Automated Fire and Smoke Detection with Fire Suppression",
      summary:
        "An AI-based system that detects fire and smoke through computer vision on a Raspberry Pi 5 and triggers an automatic suppression response.",
      role: "Team leader, programmer, hardware developer and full-system developer",
      team: "Team of 4",
      adviser: "PECE Favis Balinado",
      results: [
        { value: "93%", label: "detection accuracy" },
        { value: "4.5 to 7 s", label: "response time" },
        { value: "Defended", label: "successfully presented to the panel" }
      ],
      tech: ["Raspberry Pi 5", "AI and computer vision", "Fire and smoke detection", "Sensors", "Automatic suppression"]
    },
    ojt: {
      title: "On-the-Job Training, IT Department",
      company: "JGC Technical Assistance Services Philippines, Inc.",
      date: "January to April 2026",
      responsibilities: [
        "IT support and troubleshooting",
        "Asset management",
        "Active Directory",
        "Microsoft 365 administration",
        "User support and system maintenance",
        "Technical documentation"
      ],
      tools: ["Windows Server", "Active Directory", "Microsoft 365", "Excel", "Network monitoring tools"],
      highlight: "Built and deployed the company's Visitor Logs Management System."
    },
    earlier: [
      { school: "Faith Fidelis Senior High School", years: "2020 to 2022" },
      { school: "Tanauan Institute", years: "2016 to 2020" },
      { school: "Trapiche Elementary School", years: "2009 to 2016" }
    ],
    /* Add graduation ceremony / thesis / OJT photos here when you have them.
       Example: { src: "assets/images/education/ceremony-1.jpg", caption: "Graduation ceremony" } */
    photos: []
  },

  /* ------------------------------------------------------------------ */
  /* Certifications                                                      */
  /* Add one object per certificate. Unlimited. Newest first looks best. */
  /* image / issuer / date can stay "" until you have them.              */
  /* ------------------------------------------------------------------ */
  certificates: [
    {
      title: "Occupational Safety and Health (OSH) Safety Officer II",
      issuer: "",
      date: "",
      image: "",
      description:
        "Training in occupational safety, hazard identification, risk assessment, workplace safety compliance, incident prevention and safety management. It strengthens my ability to support safe, compliant operations while bringing technology and process improvement to the workplace."
    }
    /* Copy this block, remove the comment marks, and fill it in for each new certificate:
    ,{
      title: "Certificate title",
      issuer: "Issuing organization",
      date: "Month Year",
      image: "assets/images/certificates/your-file.jpg",
      description: "One or two sentences about what it covers."
    }
    */
  ],

  /* Seminars, workshops, trainings and events.
     type is just a small label, e.g. "Seminar", "Workshop", "Training", "Event". */
  training: [
    /* Example:
    {
      title: "Seminar title",
      type: "Seminar",
      organizer: "Organizer",
      date: "Month Year",
      image: "assets/images/training/seminar-1.jpg",
      description: "What you learned or took part in."
    }
    */
  ],

  /* ------------------------------------------------------------------ */
  /* Achievements                                                        */
  /* image is optional; leave "" for a clean typographic card.           */
  /* ------------------------------------------------------------------ */
  achievements: [
    {
      year: "2026",
      title: "Top 5 Innovative Student",
      issuer: "FAITH Colleges, Computer Engineering Department",
      description:
        "Recognized for outstanding innovation, problem-solving, project development, leadership and contribution to engineering activities and projects.",
      image: ""
    },
    {
      year: "2025",
      title: "Engineering Camp, 1st Place",
      issuer: "Team Leader",
      description:
        "Led a team of engineering students through technical challenges, problem-solving activities and competitions to an overall first-place finish.",
      image: ""
    },
    {
      year: "2026",
      title: "Visitor Logs System deployed",
      issuer: "JGC Technical Assistance Services Philippines, Inc.",
      description:
        "Built during on-the-job training, then deployed and turned over to the company for actual use, reducing manual record keeping.",
      image: ""
    },
    {
      year: "2026",
      title: "Thesis successfully defended",
      issuer: "FAITH Colleges",
      description:
        "Automated Fire and Smoke Detection with Fire Suppression: 93% detection accuracy with a 4.5 to 7 second response time.",
      image: ""
    }
  ],

  /* ------------------------------------------------------------------ */
  /* Featured project: SPLI Portal (full case study)                     */
  /* ------------------------------------------------------------------ */
  featured: {
    name: "SPLI Portal",
    tagline: "A complete employee self-service and approvals portal that I designed, built, deployed and keep improving.",
    ownership:
      "Requirements, system design, UI/UX, database design, development, testing, deployment, maintenance and every feature enhancement since: one developer, end to end.",
    owned: [
      "Requirements gathering",
      "System design",
      "UI/UX design",
      "Database design",
      "Development",
      "Testing",
      "Deployment",
      "Maintenance",
      "Feature enhancements"
    ],
    stats: [
      { value: "20+", label: "active users" },
      { value: "Multiple", label: "departments served" },
      { value: "8", label: "development phases and counting" }
    ],
    background:
      "Before the portal, many processes ran through emails, paper forms, chat messages and separate systems. Employee services were scattered, and nobody had one place to see where a request stood.",
    problems: [
      "Manual leave request processing",
      "Repeated follow-ups to get approvals",
      "No centralized place for employee services",
      "Difficulty tracking requests and approvals",
      "Fragmented communication between employees and approvers"
    ],
    solution:
      "A single web portal where employees reach their services in one place and management handles approvals more efficiently, with every request visible from submission to decision. The goal was less repetitive manual work and better accessibility, visibility and efficiency.",
    features: [
      "Employee self-service",
      "Leave request management",
      "Approval workflows with status tracking",
      "Ticketing system",
      "User and role management",
      "Dashboard and reporting",
      "Online deployment",
      "Real-user testing and feedback"
    ],
    stack: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Bootstrap"],
    journey: [
      { title: "Concept and requirements", text: "Gathered requirements and defined what the portal had to solve." },
      { title: "Portal foundation", text: "Login system, user roles and dashboard." },
      { title: "Leave management", text: "Leave application, approval workflow and leave history." },
      { title: "Ticketing system", text: "Issue submission, tracking and resolution management." },
      { title: "Employee tools", text: "Added utilities employees use alongside requests and approvals." },
      { title: "UI/UX and responsiveness", text: "Reworked layouts to be simpler and mobile-friendly." },
      { title: "Deployment and testing", text: "Put the portal online and tested it with real users on different devices." },
      { title: "Continuous improvement", text: "Ongoing enhancements driven by user feedback." }
    ],
    challenges: [
      {
        title: "Role-based access control",
        problem: "Different users needed different permissions.",
        solution: "Built role-based account management with controlled access to specific modules and approvals."
      },
      {
        title: "Approval workflow",
        problem: "Requests had to pass through the right approvers.",
        solution: "Designed a structured workflow with status tracking and clear approval visibility."
      },
      {
        title: "User adoption",
        problem: "People are often reluctant to switch systems.",
        solution: "Kept it simple, mobile-friendly and close to the workflows people already knew."
      },
      {
        title: "Reliable deployment",
        problem: "The system had to be reachable online and stay dependable.",
        solution: "Deployed on hosting and tested across different devices and users before wider use."
      }
    ],
    impact: [
      "Faster request processing",
      "Centralized employee services",
      "Reduced paperwork",
      "Better visibility of request status",
      "Improved approval tracking",
      "More organized record keeping"
    ],
    roadmap: [
      "Mobile optimization",
      "Analytics and reporting",
      "More self-service modules",
      "Notification improvements",
      "Document management",
      "Workflow automation"
    ],
    /* Sanitized screenshots only: no names, IDs, emails, documents or real records.
       Add them like: { src: "assets/images/projects/spli-portal/dashboard.png", caption: "Dashboard", device: "desktop" }
       device can be "desktop" or "mobile". */
    screenshots: [],
    screenshotSlots: [
      "Dashboard",
      "Login",
      "Leave request form",
      "Leave approval",
      "Ticket submission",
      "Ticket monitoring",
      "Portal home",
      "Reports",
      "Mobile view"
    ],
    privacyNote: "Screenshots are sanitized. No employee names, IDs, emails, internal documents or company data are shown."
  },

  /* ------------------------------------------------------------------ */
  /* Other projects                                                      */
  /* ------------------------------------------------------------------ */
  projects: [
    {
      name: "Visitor Logs Management System",
      context: "Built during on-the-job training at JGC Technical Assistance Services Philippines, Inc.",
      summary:
        "A web system that digitizes visitor monitoring and record management. It was deployed and turned over to the company for actual use, improving monitoring efficiency and reducing manual record keeping.",
      features: [
        "Visitor registration",
        "Check-in and check-out monitoring",
        "Visitor history tracking",
        "Search and filtering",
        "Export reports",
        "Dashboard monitoring",
        "Digital record keeping"
      ],
      stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
      result: "Deployed and used in a real company environment.",
      /* Use screenshots from a copy with dummy data only. */
      screenshots: []
    },
    {
      name: "Automated Fire and Smoke Detection with Fire Suppression",
      context: "Computer Engineering thesis at FAITH Colleges. Team of 4, I led and built the system.",
      summary:
        "An AI-based safety system that spots fire and smoke through computer vision on a Raspberry Pi 5, then triggers automatic suppression. I handled system development, programming, hardware, testing and project coordination.",
      features: [
        "Fire detection",
        "Smoke detection",
        "Automatic suppression",
        "On-device AI on Raspberry Pi 5"
      ],
      stack: ["Raspberry Pi 5", "AI", "Computer vision", "Sensors"],
      result: "93% detection accuracy with a 4.5 to 7 second response time. Successfully defended.",
      screenshots: []
    }
  ],

  /* ------------------------------------------------------------------ */
  /* Skills                                                              */
  /* level: "Advanced" | "Intermediate" | "Learning" | "" (no label)     */
  /* ------------------------------------------------------------------ */
  skills: [
    {
      category: "Web Development",
      items: [
        { name: "PHP", level: "Intermediate" },
        { name: "MySQL", level: "Intermediate" },
        { name: "HTML", level: "Intermediate" },
        { name: "CSS", level: "Intermediate" },
        { name: "JavaScript", level: "Intermediate" },
        { name: "Bootstrap", level: "Intermediate" }
      ]
    },
    {
      category: "IT Infrastructure and Support",
      items: [
        { name: "IT Support", level: "Advanced" },
        { name: "Troubleshooting", level: "Advanced" },
        { name: "Microsoft 365", level: "Advanced" },
        { name: "User Support", level: "Advanced" },
        { name: "Networking", level: "Intermediate" }
      ]
    },
    {
      category: "Systems and Administration",
      items: [
        { name: "Documentation", level: "Advanced" },
        { name: "System Administration", level: "Intermediate" },
        { name: "Windows Administration", level: "Intermediate" },
        { name: "Active Directory", level: "Intermediate" },
        { name: "Database Management", level: "Intermediate" },
        { name: "Process Improvement", level: "Intermediate" }
      ]
    },
    {
      category: "Hardware and Embedded Systems",
      items: [
        { name: "Raspberry Pi", level: "Intermediate" },
        { name: "AI-Based Fire Detection", level: "Intermediate" },
        { name: "Sensors", level: "Intermediate" },
        { name: "Automation", level: "Intermediate" }
      ]
    },
    {
      category: "Professional Skills",
      items: [
        { name: "Leadership", level: "" },
        { name: "Problem Solving", level: "" },
        { name: "Adaptability", level: "" },
        { name: "Communication", level: "" },
        { name: "Teamwork", level: "" },
        { name: "Project Coordination", level: "" }
      ]
    },
    {
      category: "Learning and Exploring",
      items: [
        { name: "Python", level: "Learning" },
        { name: "Django", level: "Learning" },
        { name: "Flask", level: "Learning" },
        { name: "React", level: "Learning" },
        { name: "Docker", level: "Learning" },
        { name: "CI/CD", level: "Learning" },
        { name: "Automation Tools", level: "Learning" }
      ]
    }
  ],

  /* ------------------------------------------------------------------ */
  /* Services                                                            */
  /* ------------------------------------------------------------------ */
  services: [
    "Website development",
    "Business systems development",
    "IT support consulting",
    "Database development",
    "Process automation",
    "Custom PHP applications",
    "Internal portals",
    "Embedded and AI prototyping"
  ],

  /* ------------------------------------------------------------------ */
  /* Resume                                                              */
  /* 1) Put your PDF at assets/resume/James-Magpantay-Resume.pdf          */
  /* 2) Change enabled to true                                            */
  /* ------------------------------------------------------------------ */
  resume: {
    enabled: false,
    file: "assets/resume/James-Magpantay-Resume.pdf",
    summary: [
      "BS Computer Engineering, FAITH Colleges (2026)",
      "IT Associate, Susumi Philippine Logistics, Inc. (2026 to present)",
      "IT OJT, JGC Technical Assistance Services Philippines, Inc. (2026)",
      "OSH Safety Officer II",
      "Developer of the SPLI Portal and the Visitor Logs Management System"
    ]
  }
};
